<template>
  <v-container grid-list-lg>
    <v-layout wrap justify-center align-center>
      <v-flex
          xs12 sm10 md8
      >
        <h1 class="text--primary">Отслеживаемые новости</h1>
        <v-list>
          <v-list-item-group
              v-for="oneNews in news"
              :key="oneNews.id"
              active-class=""
          >
            <div class="content-center-list">
                  <v-list-item @click="changeCheckBox(oneNews)"  class="news-link-description">
                    <v-list-item-action>
                      <v-checkbox
                          v-model="oneNews.isReview"
                          :color="mainColor"
                          @change="removeReview(oneNews)"
                      />
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ oneNews.title }}</v-list-item-title>
                      <v-list-item-subtitle >{{ oneNews.description }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item-action>
                    <v-btn dark :color="mainColor" :to="'/one-news/' + oneNews.id">Посмотреть</v-btn>
                  </v-list-item-action>
            </div>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      mainColor: 'red darken-4',
      news: [
        {
          id: 1,
          title: 'Личности',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.',
          imageUrl: 'https://pbs.twimg.com/profile_banners/1407774588/1565327194/1500x500',
          isReview: true
        },
        {
          id: 2,
          title: 'История',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, repudiandae.',
          imageUrl: 'https://pbs.twimg.com/profile_banners/702614673049460737/1459777068/1500x500',
          isReview: true
        },
        {
          id: 3,
          title: 'Символика',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quasi.',
          imageUrl: 'https://pbs.twimg.com/profile_banners/88613966/1475134867/1500x500',
          isReview: true
        }
      ]
    }
  },
  methods: {
    removeReview (oneNews) {
      console.log(oneNews)
    },
    changeCheckBox (oneNews) {
      oneNews.isReview = !oneNews.isReview
      this.removeReview(oneNews)
    }
  }
}
</script>

<style scoped>
  .news-link-description {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media screen and (min-width: 650px) {
    .content-center-list {
      display: flex;
      justify-content: center;
    }
  }
</style>
