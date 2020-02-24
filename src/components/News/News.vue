<template>
  <v-container grid-list-lg>
    <v-layout wrap justify-center align-center>
      <v-flex
          xs12 sm8 md6
      >
        <h1 class="text--primary">Новости</h1>
        <v-card
            v-for="oneNews in news"
            :key="oneNews.id"
            class="mb-3 mp-1"
            outlined
            style="border-width: 2px;"
        >
          <router-link :to="'/news-one/' + oneNews.id">
            <v-img :src="oneNews.imageUrl" height="200px"/>
          </router-link>
          <v-card-title primary-title class="pb-12">
            <div>
              <h3 class="headline mb-0">{{oneNews.title}}</h3>
              <div>{{oneNews.description}}</div>
            </div>
          </v-card-title>
          <v-card-actions class="news-actions">
            <v-spacer></v-spacer>
            <v-btn :to="'/one-news/' + oneNews.id">Посмотреть</v-btn>
            <v-btn raised dark :color="mainColor">Отслеживать</v-btn>
          </v-card-actions>
        </v-card>
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
          imageUrl: 'https://pbs.twimg.com/profile_banners/1407774588/1565327194/1500x500'
        },
        {
          id: 2,
          title: 'История',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, repudiandae.',
          imageUrl: 'https://pbs.twimg.com/profile_banners/702614673049460737/1459777068/1500x500'
        },
        {
          id: 3,
          title: 'Символика',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quasi.',
          imageUrl: 'https://pbs.twimg.com/profile_banners/88613966/1475134867/1500x500'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
