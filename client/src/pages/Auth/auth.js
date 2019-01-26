// import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'auth',
  data() {
    return {
      authForm: {
        login: '',
        password: '',
      },
      errors: {
        login: [
          { required: true, message: 'Введите логин', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Введите пароль', trigger: 'change' }
        ],
      }
    }
  },
  computed: {
    ...mapGetters([
      'getAuth',
    ]),
  },
  methods: {
    ...mapActions([
      'setAuth',
    ]),
    auth() {
      const body = {
        login: this.authForm.login,
        password: this.authForm.password,
      };

      this.setAuth(body)
        .then(() => {
          this.getAuth.status
            ? this.$router.push({ path: '/' })
            : this.$message.error('Неверный логин или пароль')
          && this.resetForm('authForm');
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.auth();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    back() {
      this.status = '';
      this.login = '';
      this.password = '';
    }
  },
  mounted () {

  }
}
