export default {
  state: {
    news: [
      {
        id: 1,
        title: 'Личности',
        description: 'At dicta facere numquam qui rem, voluptatibus.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta facere numquam ' +
          'qui rem, voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta ' +
          'facere numquam qui rem, voluptatibus.',
        imageUrl: 'https://pbs.twimg.com/profile_banners/1407774588/1565327194/1500x500',
        isToMain: true
      },
      {
        id: 2,
        title: 'История',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, repudiandae.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, repudiandae.',
        imageUrl: 'https://pbs.twimg.com/profile_banners/702614673049460737/1459777068/1500x500',
        isToMainisToMain: true
      },
      {
        id: 3,
        title: 'Символика',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quasi.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,' +
          ' repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, repudiandae.',
        imageUrl: 'https://pbs.twimg.com/profile_banners/88613966/1475134867/1500x500',
        isToMain: false
      }
    ]
  },
  mutations: {
    createOneNews (state, payload) {
      state.news.push(payload)
    }
  },
  actions: {
    createOneNews ({commit}, payload) {
      payload.id = Math.floor(Math.random() % 1000)
      commit('createOneNews', payload)
    }
  },
  getters: {
    allNews (state) {
      return state.news
    },
    promoNews (state) {
      return state.news.filter(e => e.isToMain)
    },
    userNews (state) {
      return state.news
    },
    oneNews (state) {
      return id => {
        return state.news.find(e => String(e.id) === id)
      }
    }
  }
}
