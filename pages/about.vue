<template>
  <article class="about-wrapper">
    <pageTitle title="About" />
    <div class="self-introduction">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>岸 直輝 (Naoki Kishi)</td>
          </tr>
          <tr>
            <th>University</th>
            <td>京都大学 工学部 電気電子工学科</td>
          </tr>
          <tr>
            <th>Birthday</th>
            <td>1998/11/24</td>
          </tr>
          <tr>
            <th>GitHub</th>
            <td>
              <a href="https://github.com/naoki-kishi" target="_blank">
                naoki-kishi
              </a>
            </td>
          </tr>
          <tr>
            <th>Qiita</th>
            <td>
              <a href="https://qiita.com/plus_kyoto" target="_blank">
                plus_kyoto
              </a>
            </td>
          </tr>
          <tr>
            <th>Facebook</th>
            <td>
              <a href="https://www.facebook.com/naokikishi.kyoto" target="_blank">
                岸 直輝
              </a>
            </td>
          </tr>
          <tr /></tr><tr>
            <th>Twitter</th>
            <td>
              <a href="https://twitter.com/plus_kyoto" target="_blank">
                @plus_kyoto
              </a>
            </td>
          </tr>
          <tr>
            <th>Blog</th>
            <td>
              <a href="https://plus-blog.hatenablog.com" target="_blank">
                一人前のエンジニアになれますか？
              </a>
            </td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>naokikishi.kyoto[at]gmail.com</td>
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
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_color.scss';
@import '@/assets/styles/_mixin.scss';

.about-wrapper {
  text-align: center;
}

.self-introduction {
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
  padding: 5px 0px;
}

a {
  text-decoration: none;
}

/*タブレット*/
@media (max-width: 1000px) {
  .self-introduction {
    width: 600px;
    border-radius: 50px;
  }
}

/*スマートフォン*/
@media (max-width: 670px) {
  .self-introduction {
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
