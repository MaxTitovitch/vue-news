<template>
  <v-container grid-list-lg>
    <v-layout wrap justify-center align-center>
      <v-flex
        xs12
      >
        <v-card
          :key="oneNews.id"
          class="mb-3 mp-1"
          outlined
          style="border-width: 2px;"
        >
          <v-toolbar dark :color="mainColor">
            <v-toolbar-title>{{ oneNews.title }}</v-toolbar-title>
          </v-toolbar>
          <router-link :to="'/one-news/' + oneNews.id">
            <v-img :src="oneNews.imageUrl" height="500px"/>
          </router-link>
          <v-card-title primary-title class="pb-12">
            <div>{{oneNews.description}}</div>
          </v-card-title>
          <v-card-text>
            <div>{{oneNews.text}}</div>
          </v-card-text>
          <v-card-actions class="news-actions">
              <v-spacer/>
            <v-btn raised dark :color="mainColor">Отслеживать</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    oneNews () {
      return this.$store.getters.oneNews(this.id)
    },
    mainColor () {
      return this.$store.getters.mainColor
    }
  }
}
</script>

<style scoped>

</style>
