import api from '@/services/api'

// todo: Перенести в Vuex

export default {
  fetchPosts () {
    return api().get('posts')
  }
}
