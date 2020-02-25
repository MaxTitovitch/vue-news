<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark :color="mainColor">
            <v-toolbar-title>Создание новости</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field
                  name="title"
                  label="Заголовок"
                  type="text"
                  :color="mainColor"
                  v-model="title"
                  aria-required="true"
                  :rules="titleRules"
                  counter=">6"
              />
              <v-textarea
                  name="description"
                  label="Краткое описание"
                  type="text"
                  :color="mainColor"
                  v-model="description"
                  aria-required="true"
                  :rules="descriptionRules"
                  auto-grow
                  counter=">30"
              />
              <v-textarea
                  name="text"
                  label="Текст"
                  type="text"
                  :color="mainColor"
                  v-model="text"
                  aria-required="true"
                  :rules="textRules"
                  auto-grow
                  counter=">100"
              />
              <v-file-input
                  label="Картинка"
                  :color="mainColor"
                  aria-required="true"
                  :rules="fileRules"
                  accept="image/*"
              />
              <v-switch
                  v-model="isAppendToMain"
                  :color="mainColor"
                  label="Добавить на главную?"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn
                :color="mainColor"
                :disabled="!valid"
                v-bind:dark="valid"
                large
                @click="onSubmit"
            >Войти</v-btn>
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
      title: '',
      description: '',
      text: '',
      isAppendToMain: false,
      valid: false,
      message: '',
      titleRules: [
        v => !!v || 'Заполните заголовок!',
        v => (v && v.length >= 6) || 'Заголовок должен быть длинной более 6 символов'
      ],
      descriptionRules: [
        v => !!v || 'Заполните описание!',
        v => (v && v.length >= 30) || 'Описание должно быть длинной более 30 символов'
      ],
      textRules: [
        v => !!v || 'Заполните текст!',
        v => (v && v.length >= 100) || 'Текст должен быть длинной более 100 символов'
      ],
      fileRules: [
        v => !!v || 'Выберите файл!'
      ]
    }
  },
  methods: {
    onSubmit () {
      // if (this.$refs.form.valid) {
      this.$store.dispatch('createOneNews', {
        title: this.title,
        description: this.description,
        text: this.text,
        imageUrl: 'https://materialdesignicons.com/favicon.png',
        isToMain: this.isAppendToMain
      })
      // }
    }
  },
  computed: {
    mainColor () {
      return this.$store.getters.mainColor
    }
  }
}
</script>

<style scoped>

</style>
