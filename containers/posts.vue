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
        const res = await axios.get('http://localhost:8080/json')

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
}
.description {
  color: $text-color;
  margin: 20px 0;
}

.post-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.posts {
  width: 650px;
  margin: 0;
}

@media (max-width: 1100px) {
  .posts {
    width: 100%;
    margin: 0;
  }
}
</style>
