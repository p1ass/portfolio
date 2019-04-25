<template>
  <article class="about-wrapper">
    <pageTitle title="About" />
    <div class="box-wrapper">
      <table>
        <tbody>
          <tr v-for="(contact, index) in contacts" :key="index">
            <th>{{ contact.key }}</th>
            <td v-if="contact.url">
              <a :href="contact.url" target="_blank" rel="noopener noreferrer">
                {{ contact.value }}
              </a>
            </td>
            <td v-else>
              {{ contact.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <pageTitle title="Experiences" />
    <div class="box-wrapper">
      <table>
        <tbody>
          <tr v-for="(experience, index) in experiences" :key="index">
            <th>{{ experience.term }}</th>
            <td>{{ experience.key }}</td>
            <td>{{ experience.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'About',
  head() {
    return {
      title: 'About'
    }
  },
  components: {
    pageTitle
  },

  data() {
    return {
      contacts: [
        { key: 'Name', value: '岸 直輝 (Naoki Kishi)', url: '' },
        { key: 'University', value: '京都大学 工学部 電気電子工学科', url: '' },
        { key: 'Birthday', value: '1998/11/24', url: '' },
        {
          key: 'GitHub',
          value: 'naoki-kishi',
          url: 'https://github.com/naoki-kishi'
        },
        {
          key: 'Qiita',
          value: 'plus_kyoto',
          url: 'https://qiita.com/plus_kyoto'
        },
        {
          key: 'Facebook',
          value: '岸 直輝',
          url: 'https://www.facebook.com/naokikishi.kyoto'
        },
        {
          key: 'Twitter',
          value: '@plus_kyoto',
          url: 'https://twitter.com/plus_kyoto'
        },
        {
          key: 'Blog',
          value: '一人前のエンジニアを目指して',
          url: 'https://plus-blog.hatenablog.com'
        },
        { key: 'Mail', value: 'naokikishi.kyoto[at]gmail.com', url: '' }
      ],

      experiences: [
        {
          key: 'CAMPHOR-',
          value: 'コアメンバー',
          term: '2019/1 ~ Present'
        },
        {
          key: 'LINE',
          value: '就業型インターン (サーバーサイド)',
          term: '2019/2 ~ 2019/3'
        },
        {
          key: 'Cyber Agent',
          value: 'Architecture Challenge 参加',
          term: '2019/2 ~ 2019/2'
        },
        {
          key: 'pixiv',
          value: '君だけのpixivを開発れ！ 優勝',
          term: '2018/12 ~ 2018/12'
        },
        {
          key: 'mixi',
          value: 'git challenge #10 参加',
          term: '2018/12 ~ 2018/12'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.about-wrapper {
  text-align: center;
}

.box-wrapper {
  @include box-shadow;
  width: 800px;
  border-radius: 50px;
  margin: 20px auto;
  color: $text-color;
}

table {
  padding: 50px 0;
  display: inline-block;
  text-align: left;
}

th {
  padding-right: 20px;
  font-weight: normal;
}

td {
  font-size: 20px;
  padding: 5px 8px 5px 0px;
}

a {
  text-decoration: none;
}

/*タブレット*/
@media (max-width: 1000px) {
  .box-wrapper {
    width: 600px;
    border-radius: 50px;
  }
}

/*スマートフォン*/
@media (max-width: 670px) {
  .box-wrapper {
    width: 80%;
    border-radius: 50px;
  }

  th {
    display: block;
  }

  td {
    display: block;
    font-size: 16px;
    width: 100%;
  }
}
</style>
