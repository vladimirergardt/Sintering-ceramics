/**
 * Created by Ergardt.Vladimir on 23.01.2019.
 */

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
    checkStatusMenu() {
      this.statusMenu = window.location.hash.slice(2);
      return window.location.hash.slice(2);
    }
  },
  methods: {
    selectItem(value) {
      this.statusMenu = value.path;
      this.$router.push({ name: value.pathName });
    },
    logout() {
      localStorage.authStatus = false;
      localStorage.authAccess = 'access denied';
      this.$router.push({ name: 'auth'});
  }
  },
  mounted() {
    console.log(this.$store.state);
  }
}
