import axios from 'axios';

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
  methods: {
    auth() {
      const body = {
        login: this.authForm.login,
        password: this.authForm.password,
      };

      return axios.post('/auth', body)
          .then((response) => {
            if (response.data.status) {
              localStorage.authAccess = 'access true';
              localStorage.authStatus = 'true';
              // todo: Записать в стор кто в сери
              this.$router.push({ path: '/' });
            } else {
              this.$message.error('Неверный логин или пароль');
              this.resetForm('authForm');
            }

          })
          .catch((error) => {
            console.log(error)
          })
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
