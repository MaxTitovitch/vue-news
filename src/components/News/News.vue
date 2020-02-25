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
          <router-link :to="'/one-news/' + oneNews.id">
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
  computed: {
    mainColor () {
      return this.$store.getters.mainColor
    },
    news () {
      return this.$store.getters.allNews
    }
  }
}
</script>

<style scoped>

</style>
