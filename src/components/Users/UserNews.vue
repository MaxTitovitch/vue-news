<template>
  <v-container grid-list-lg>
    <v-layout wrap justify-center align-center>
      <v-flex
        xs12 sm10 md8
      >
        <h1 class="text--primary">Отслеживаемые новости</h1>
        <v-list>
          <v-list-item-group
            v-for="oneNews in userNews"
            :key="oneNews.id"
            active-class=""
          >
            <div class="content-center-list">
              <v-list-item @click="changeCheckBox(oneNews)"
                           class="news-link-description">
                <v-list-item-action>
                  <v-checkbox
                    v-model="oneNews.isToMain"
                    :color="mainColor"
                    @change="removeReview(oneNews)"
                  />
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ oneNews.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ oneNews.description }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item-action>
                <v-btn dark :color="mainColor" :to="'/one-news/' + oneNews.id">
                  Посмотреть
                </v-btn>
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
  methods: {
    removeReview (oneNews) {
      oneNews.isToMain = !oneNews.isToMain
      console.log(oneNews)
    },
    changeCheckBox (oneNews) {
      this.removeReview(oneNews)
    }
  },
  computed: {
    mainColor () {
      return this.$store.getters.mainColor
    },
    userNews () {
      return this.$store.getters.userNews
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
