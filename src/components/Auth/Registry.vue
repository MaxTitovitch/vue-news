<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark :color="mainColor">
            <v-toolbar-title>Регистрация</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field
                  prepend-icon="mdi-account"
                  name="email"
                  label="E-mail"
                  type="email"
                  :color="mainColor"
                  v-model="email"
                  aria-required="true"
                  :rules="emailRules"
              />
              <v-text-field
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Пароль"
                  type="password"
                  :color="mainColor"
                  v-model="password"
                  counter=">6"
                  aria-required="true"
                  :rules="passwordRules"
              />
              <v-text-field
                  prepend-icon="mdi-lock"
                  name="confirm-password"
                  label="Подтвердите пароль"
                  type="password"
                  :color="mainColor"
                  v-model="confirmPassword"
                  aria-required="true"
                  :rules="confirmPasswordRules"

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
            >Регистрация
            </v-btn>
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
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'Заполните E-mail!',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail должен быть валиден'
      ],
      passwordRules: [
        v => !!v || 'Заполните пароль!',
        v => (v && v.length >= 6) || 'Пароль должен быть длинной более 6-ти символов'
      ],
      confirmPasswordRules: [
        v => !!v || 'Подтвердите пароль!',
        v => (v && v === this.password) || 'Пароли должены совпадать'
      ]
    }
  },
  methods: {
    onSubmit () {
      console.log('Success!')
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
