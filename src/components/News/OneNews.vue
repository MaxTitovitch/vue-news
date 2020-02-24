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
          <router-link :to="'/news-one/' + oneNews.id">
            <v-img :src="oneNews.imageUrl" height="500px"/>
          </router-link>
          <v-card-title primary-title class="pb-12">
              <div>{{oneNews.description}}</div>
          </v-card-title>
          <v-card-text>
            <div>{{oneNews.text}}</div>
          </v-card-text>
          <v-card-actions class="news-actions">
            <v-spacer></v-spacer>
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
      oneNews:
          {
            id: 1,
            title: 'Личности',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam qui rem, voluptatibus.',
            imageUrl: 'https://pbs.twimg.com/profile_banners/1407774588/1565327194/1500x500'
          }
    }
  }
}
</script>

<style scoped>

</style>
