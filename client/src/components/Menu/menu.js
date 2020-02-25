/**
 * Created by Ergardt.Vladimir on 23.01.2019.
 */

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'top-menu',
  data() {
    return {
      menuItems: [
        {
          name: 'Рассчет',
          pathName: 'calculation',
          path: '',
        },
        {
          name: 'Материалы',
          pathName: 'materialsList',
          path: 'materials-list'
        },
      ],
      statusMenu: '',
    }
  },
  computed: {
    ...mapGetters([
      'getAuth',
    ]),
    checkStatusMenu() {
      this.statusMenu = window.location.hash.slice(2);
      return window.location.hash.slice(2);
    },
    checkUser() {
      return this.getAuth.access === 'stud'
        ? 'студент'
        : 'администратор';
    },
  },
  methods: {
    ...mapActions([
      'clearAuth',
    ]),
    selectItem(value) {
      this.statusMenu = value.path;
      this.$router.push({ name: value.pathName });
    },
    logout() {
      this.clearAuth();
      !this.getAuth.status
        ? this.$router.push({ name: 'auth'})
        : false;
  }
  },
  mounted() {

  }
}
