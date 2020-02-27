/**
 * Created by Ergardt.Vladimir on 23.01.2019.
 */

import { mapGetters, mapActions  } from 'vuex'
import { createMaterialParams } from '../../utils/utils.js'

export default {
  name: 'materialEdit',
  data() {
    return {
      MainForm:
      {
        materialsForm: {
          properties: [
            {
              key: 'name',
              value: '',
              label: 'Название'
            },
            {
              key: 'start_size_grain',
              value: '',
              label: 'Начальный средний размер зерна'
            },
            {
              key: 'layer_thickness',
              value: '',
              label: 'Толщина поверхностного слоя'
            },
            {
              key: 'start_porosity',
              value: '',
              label: 'Начальная пористость'
            },
            {
              key: 'surface_energy',
              value: '',
              label: 'Удельная поверхностная энергия'
            },
            {
              key: 'density',
              value: '',
              label: 'Плотность материала'
            },
            {
              key: 'viscosity',
              value: '',
              label: 'Вязкость материала'
            },
            {
              key: 'weight',
              value: '',
              label: 'Масса материала'
            },
            {
              key: 'pf_s_diff',
              value: '',
              label: 'Предэкспоненциальный множитель (поверхностная самодиффузия)'
            },
            {
              key: 'ea_s_diff',
              value: '',
              label: 'Энергия активации (поверхностная самодиффузия)'
            },
            {
              key: 'pf_c_diff',
              value: '',
              label: 'Предэкспоненциальный множитель (зернограничная самодиффузия)'
            },
            {
              key: 'ea_c_diff',
              value: '',
              label: 'Энергия активации (зернограничная самодиффузия)'
            }],
        },
      },

      rules: {
        value: [
          { required: true, message: ' '},
        ],
      }
    }
  },
  computed: {
    ...mapGetters([
      'getAuth',
      'currentMaterial',
    ]),
    checkAction() {
      const params = this.$router.history.current.params.id;
      return params === 'new'
        ? 'Добавление материала'
        : 'Редактирование материала';
    }
  },
  methods: {
    ...mapActions([
      'addMaterial',
      'getMaterial',
      'updateMaterial',
    ]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const amount = {
            form: this.MainForm.materialsForm.properties,
            id: this.$router.history.current.params.id,
          };

          this.checkAction === 'Добавление материала'
            ? this.addMaterial(this.MainForm.materialsForm.properties)
              .then(() => {
                this.$router.push({ name: 'materialsList' });
              })
            : this.updateMaterial(amount)
              .then(() => {
                this.$router.push({name: 'materialsList'});
              })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    getMaterialProperties() {
      const id = this.$router.history.current.params.id;
      id !== 'new'
        ? this.getMaterial(id)
          .then(() => {
            createMaterialParams(this.MainForm.materialsForm.properties, this.currentMaterial);
          })
        : false;
    }
  },
  mounted() {
    this.getMaterialProperties();
  },
}
