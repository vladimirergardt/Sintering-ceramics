import PostsService from '@/services/PostsService'
import axios from 'axios';

export default {
  name: 'auth',
  data() {
    return {
      msg: 'Auth!',
      posts: [],
      login: '',
      password: '',
      status: '',
    }
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data

      await console.log(this.posts);
    },
    checkAuth() {
      const body = {
        login: this.login,
        password: this.password,
      };

      return axios.post('/auth', body)
          .then((response) => {
            this.status = response.data.status ? 'Auth complete' : 'Auth error';
          })
          .catch((error) => {
            console.log(error)
          })
    },
    back() {
      this.status = '';
      this.login = '';
      this.password = '';
    }

    // getPosts() {
    //   return axios.get('http://localhost:8081/posts')
    //     .then((response) => {
    //       console.log(response)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // }
  },
  mounted () {
    // this.getPosts()
  }
}
