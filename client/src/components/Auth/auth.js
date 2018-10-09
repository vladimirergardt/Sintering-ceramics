import PostsService from '@/services/PostsService'
// import axios from 'axios';

export default {
  name: 'auth',
  data() {
    return {
      msg: 'Auth',
      posts: [],
    }
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts()
      this.posts = response.data;
    },

    // getPosts() {
    //   return axios.get('http://localhost:8081/posts')
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    // }
  },
  mounted() {
    this.getPosts();
  },
}
