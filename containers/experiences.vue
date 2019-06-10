<template>
  <section id="experiences" class="experiences-wrapper">
    <pageTitle title="Experiences" />
    <div class="box-wrapper">
      <table>
        <tbody>
          <tr v-for="(experience, index) in experiences" :key="index">
            <th>{{ experience.term }}</th>
            <td>{{ experience.key }}</td>
            <td class="last-td">
              {{ experience.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import pageTitle from '@/components/pageTitle'

export default {
  name: 'Experiences',
  components: {
    pageTitle
  },

  data() {
    return {
      experiences: [
        {
          key: 'CAMPHOR-',
          value: 'コアメンバー',
          term: '2019/01 ~ Present'
        },
        {
          key: 'LINE',
          value: '就業型インターン (サーバーサイド)',
          term: '2019/02 ~ 2019/03'
        },
        {
          key: 'Cyber Agent',
          value: 'Architecture Challenge 参加',
          term: '2019/02 ~ 2019/02'
        },
        {
          key: 'ピクシブ',
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

.experiences-wrapper {
  @include section;
  background-color: $background-color2;
  // flex-direction: row-reverse;
}

.box-wrapper {
  @include box-wrapper;
  color: $text-color;

  table {
    display: inline-block;
    text-align: left;
  }

  th {
    padding-right: 20px;
    font-weight: normal;
    color: $sub-text-color;
  }

  td {
    font-size: 20px;
    padding: 5px 8px 5px 0px;
  }
}

a {
  text-decoration: none;
}

/*スマートフォン*/
@media (max-width: 820px) {
  .box-wrapper {
    th {
      display: block;
      padding: 0px 16px;
    }

    td {
      display: block;
      font-size: 16px;
      padding: 5px 16px;
    }

    .last-td {
      border-bottom: 1px solid $border-color;
    }
  }
}
</style>
