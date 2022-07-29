export default {
  data() {
    return {
      r: [v => !!v || this.$t('utils.required')],
      rl: [v => !!v.length || this.$t('utils.required')]
    }
  },
  computed: {
    global_user: {
      get() {
        try {
          const user = JSON.parse(localStorage.getItem('auth.user'))
          return user ? user : null
        } catch (error) {
          return null
        }
      },
      set(user) {
        this.$auth.$storage.setLocalStorage('auth.user', user)
      }
    },
    sm() {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  methods: {
    load(payload) {
      this.$store.commit('utils/load', payload || false)
    }
  }
}
