<template>
  <div>
    <v-container>
      <v-carousel
          delimiter-icon="☭"
          height="500px"
          width="100%"
          show-arrows-on-hover
          cicle
      >
        <v-carousel-item
            v-for="oneNews in news"
            :key="oneNews.id"
            :src="oneNews.imageUrl"
            height="650px"
            :to="'/one-news/' + oneNews.id"
            justify-center
        >
          <div class="news-link">
            <v-card class="news-link-opacity">
              <v-card-title>
                <div class="news-link-description">
                  <h3 class="headline mb-0">{{oneNews.title}}</h3>
                  <div class="news-link-description">{{oneNews.description}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :color="mainColor" :to="'/one-news/' + oneNews.id">Подробнее</v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
            xs12
            sm6
            md4
            v-for="oneNews in news"
            :key="oneNews.id"
            style="flex-wrap: wrap"
        >
          <v-card height="100%">
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
              <v-btn flat :to="'/one-news/' + oneNews.id">Посмотреть</v-btn>
              <v-btn raised dark :color="mainColor">Отслеживать</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
  .news-link {
    position: absolute;
    bottom: 50px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    border-bottom: 0 solid black;
    height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .news-link > * {
    width: 300px;
  }

  .news-link-opacity {
    background: rgba(0, 0, 0, 0.3);
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .news-link-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .news-actions {
    right: 0;
    position: absolute;
    bottom: 0;
  }

  @media screen and (max-width: 650px) {
    .news-link > * {
      width: 100%;
    }
  }
</style>
