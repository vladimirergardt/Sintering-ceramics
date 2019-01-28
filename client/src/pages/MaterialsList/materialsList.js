/**
 * Created by Ergardt.Vladimir on 23.01.2019.
 */

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'materialsList',
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'materialsList',
      'getAuth',
    ]),
  },
  methods: {
    ...mapActions([
      'getMaterialsList',
      'deleteMaterial',
    ]),
    deleteItem(material) {
      this.deleteMaterial(material._id)
        .then(() => {
          this.getMaterialsList();
        })
    },
    addItem() {
      this.$router.push({ name: 'materialEdit', params: { id: 'new' } })
    },
    editItem(material) {
      this.$router.push({ name: 'materialEdit', params: { id: material._id } })
    }
  },
  mounted() {
    this.getMaterialsList();
  },
}
