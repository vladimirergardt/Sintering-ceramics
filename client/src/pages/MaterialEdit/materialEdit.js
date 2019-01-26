/**
 * Created by Ergardt.Vladimir on 23.01.2019.
 */

export default {
  name: 'materialEdit',
  data() {
    return {
      // materialForm: [
      //   { label: 'Название', propes: 'name', value: '123'  },
      //   { label: 'Начальный средний размер зерна', propes: 'start', value: '321' }
      // ],
      materialForm: { test: ''},
      //рендерить динамически
      errors: {
        name: [
          { required: true, trigger: 'blur' },
        ],
        start: [
          { required: true, trigger: 'blur' },
        ],
        test: [
          { required: true, message: 'Введите логин', trigger: 'blur' },
        ],
      }
    }
  },
  computed: {
    checkAction() {
      const params = this.$router.history.current.params.id;
      return params === 'new'
        ? 'Добавление материала'
        : 'Редактирование материала';
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('ok!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
  mounted() {

  },
}
