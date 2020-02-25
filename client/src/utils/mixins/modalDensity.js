export default {
  methods: {
    getDensity() {
      const form = this.calculateForm;
      let T0 = form.T0 + 273.15;
      let Tk = form.Tk + 273.15;
      let L0 = form.L0 * 0.000001;
      let P0 = form.P0 / 100;
      let tau1 = form.tau1 * 60;
      let d = form.d * 0.000000001;
      let Db0 = form.Db0;
      let Ds0 = form.Ds0;
      let Eb = form.Eb * 1000;
      let Es = form.Es * 1000;
      let ro0 = form.ro0;
      let S = form.S;
      let tau2 = form.tau2 * 60;
      let eta0 = form.eta0 * 1000000;
      let Pg = form.Pg * 1000000;
      let m = form.m;

      let k = 1.38 * Math.pow(10, -23);
      let time = 0;
      let T = T0;
      let k0, k1, k2, k3;
      let L = L0;
      let P = P0;
      let roNach = ro0 * (1 - P);
      let ro = roNach;
      let U = m * ((1 / roNach) - (1 / ro));
      let P20;

      let R = 8.31;
      let Rp0 = 0.0000009; //начальный радиус поры при спекании под давлением

      const eta = (P) => {
        return eta0 * Math.pow(1 - P, (5 / 3));
      };

      const db = (T) => {
        return Db0 * Math.exp( -(Eb) / (R * T));
      };

      const ds = (T) => {
        return Ds0 * Math.exp(-(Es) / (R * T));
      };

      const currentTemperatue = (time) => {
        const wT = (Tk - T0) / tau1;
        return T0 + wT * time;
      };

      const dPdt = (t, L, P) => {
        const a = db(currentTemperatue(t)) * d * d * d * d * S * P;
        const b = L * L * L * L * k * currentTemperatue(t);
        return -a / b;
      };

      const rp = (p) => {
        const a = (1 - P20) * p;
        const b = P20 * (1 - p);
        return Rp0 * Math.pow(a / b, 1 / 3);
      };

      const pc = (P2) => {
        return 2 * P2 / rp(P2);
      };

      const hi = (p) => {
        return (400 * eta(p) * (1 - p)) / (3 * p);
      };

      const dP2dt = (t, P2) => {
        return -((pc(P2) + Pg) * (1 - P2)) / hi(P2);
      };

      const dLdt = (t, L) => {
        const a = 8 * R * ds(currentTemperatue(t)) * d * d * d * d * S;
        const b = L * L * L * k * Es;
        return (a / b) * (1 + ((Es) / (R * currentTemperatue(t))));
      };

      const dL2dt = (t, L) => {
        const a = 8 * ds(currentTemperatue(t)) * d * d * d * d * S;
        const b = L * L * L * k * currentTemperatue(t);
        return (a / b);
      };

      for (let y = 1200; y <= 1400; y = y + 50) {
        const Tk = y;

        for (let yy = 70; yy <= 90; yy = yy + 5) {
          const tau1 = yy;

          for (let yyy = 30; yyy <= 50; yyy = yyy + 5) {
            const tau2 = yyy;

            for (let yyyy = 5; yyyy <= 10; yyyy = yyyy + 1) {
              const Pg = yyyy;

              //Константы
              let time = 0;
              let h = (tau1 + tau2) / 1000;
              let T = T0;
              let k0, k1, k2, k3;
              let L = L0;
              let P = P0;
              let roNach = ro0 * (1 - P);
              let ro = roNach;
              let U = m * ((1 / roNach) - (1 / ro));
              let P20;

              let romax = 0, Tkmax = 0, maxPg = 0, maxtau1 = 0, maxtau2 = 0, Lmax = 10, Pmax = 25, Lmin = 0, Pmin = 0;

              for (time = 0; time < tau1; time = time + h) {
                time = +time.toFixed(3);
                T = currentTemperatue(time);

                k0 = h * dPdt(time, L, P);
                k1 = h * dPdt(time + (h / 2), L, P + (k0 / 2));
                k2 = h * dPdt(time + (h / 2), L, P + (k1 / 2));
                k3 = h * dPdt(time + h, L, P + k2);

                P = P + ((k0 + 2 * k1 + 2 * k2 + k3) / 6);

                k0 = h * dLdt(time, L);
                k1 = h * dLdt(time + (h / 2), L + (k0 / 2));
                k2 = h * dLdt(time + (h / 2), L + (k1 / 2));
                k3 = h * dLdt(time + h, L + k2);

                L = L + ((k0 + 2 * k1 + 2 * k2 + k3) / 6);

                ro = (1 - P) * ro0;

                U = m * ((1 / roNach) - (1 / ro));
              }

              P20 = P;

              if (!this.checkIzoterm) {

                for (; time < tau1 + tau2; time = time + h) {
                  time = +time.toFixed(3);
                  k0 = h * dP2dt(time, P);
                  k1 = h * dP2dt(time + (h / 2), P + (k0 / 2));
                  k2 = h * dP2dt(time + (h / 2), P + (k1 / 2));
                  k3 = h * dP2dt(time + h, P + k2);

                  P = P + ((k0 + 2 * k1 + 2 * k2 + k3) / 6);

                  k0 = h * dL2dt(time, L);
                  k1 = h * dL2dt(time + (h / 2), L + (k0 / 2));
                  k2 = h * dL2dt(time + (h / 2), L + (k1 / 2));
                  k3 = h * dL2dt(time + h, L + k2);

                  L = L + ((k0 + 2 * k1 + 2 * k2 + k3) / 6);

                  ro = (1 - P) * ro0;

                  U = m * ((1 / roNach) - (1 / ro));
                }
              }

              if (ro >= romax) {

                if ((L >= Lmin) && (L <= Lmax) && (P <= Pmax) && (P >= Pmin)) {
                  romax = ro;
                  Tkmax = Tk;
                  maxtau1 = tau1;
                  maxtau2 = tau2;
                  maxPg = Pg;
                }
              }
              if (this.modalDensity === '') this.modalDensity = romax.toFixed(0);
            }
          }
        }
      }
    }
  }
}
