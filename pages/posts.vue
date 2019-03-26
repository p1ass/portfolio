<template>
  <article class="posts-wrapper">
    <pageTitle title="Posts" />
    <div class="posts">
      <post v-for="post in posts" :key="post.id" :item="post" />
    </div>
  </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import Post from '@/components/post'
import axios from 'axios'

export default {
  name: 'Posts',
  components: {
    pageTitle,
    Post
  },

  head() {
    return {
      title: 'Posts'
    }
  },

  data() {
    return {
      posts: []
    }
  },

  created() {
    this.fetchPosts()
  },

  methods: {
    async fetchPosts() {
      try {
        const res = await axios.get('https://blog-api.naoki.dev/json')

        this.posts.push(...res.data.items)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.posts-wrapper {
  text-align: center;
}

.posts {
  max-width: 1000px;
  margin: 0;
  display: inline-block;
}
</style>
