<template>
  <article class="posts-wrapper">
    <pageTitle title="Posts" />
    <p>様々な媒体に投稿した記事を自動で集計し、動的に生成しています。</p>
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
@import '@/assets/styles/_color.scss';

p {
  color: $text-color;
}
.posts-wrapper {
  text-align: center;
}

.posts {
  max-width: 1000px;
  margin: 0;
  padding: 16px;
  display: inline-block;
}
</style>
