<template>
  <section id="posts" class="posts-wrapper">
    <pageTitle title="Posts" />
    <div class="posts">
      <p class="description">
        様々な媒体に投稿した記事を自動で集計し、動的に生成しています。
      </p>
      <div class="post-wrapper">
        <post v-for="post in posts" :key="post.id" :item="post" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import pageTitle from '@/components/pageTitle'
import Post from '@/components/post'

export default {
  name: 'Posts',
  components: {
    pageTitle,
    Post
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
        const res = await axios.get(process.env.apiEndpoint)

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
@import '@/assets/styles/_mixin.scss';

.posts-wrapper {
  @include section;
  justify-content: center;
}

.posts {
  margin: 0;
}

.description {
  color: $text-color;
  margin: 20px 0;
}

.post-wrapper {
  @include box-wrapper;
  width: 100%;
}
</style>
