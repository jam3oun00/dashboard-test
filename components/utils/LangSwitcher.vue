<template>
  <div>
    <v-menu offset-y dense max-width="200" transition="scroll-y-reverse-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon class="primary--text bg-[#F6F6F6]" rounded v-bind="attrs" v-on="on">
          <!-- {{ currentLang }} -->
          <!-- <v-icon size="20" class="ms-2">mdi-chevron-down</v-icon> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-language"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 5h7" />
            <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
            <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4" />
            <path d="M12 20l4 -9l4 9" />
            <path d="M19.1 18h-6.2" />
          </svg>
        </v-btn>
      </template>
      <v-list>
        <v-list-item-group v-model="model" color="primary" style="direction: ltr">
          <v-list-item v-for="(lang, i) in $i18n.locales" :key="i" @click="onChange(lang.code)">
            <v-list-item-title>{{ lang.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: this.$i18n.locales.map((lang, i) => (this.$i18n.locale === lang.code ? i : false)).filter(v => v !== false)[0]
    }
  },
  computed: {
    currentLang() {
      const lang = this.$i18n.locales.filter(v => v.code === this.$i18n.locale)[0].code
      switch (lang) {
        case 'en':
          return 'English'
        case 'ar':
          return 'العربية'
        case 'de':
          return 'Deutsch'
        case 'es':
          return 'Español'
        case 'fr':
          return 'Français'
        case 'it':
          return 'Italiano'
        case 'ja':
          return '日本語'
        case 'ko':
          return '한국어'
        case 'nl':
          return 'Nederlands'
        case 'pt':
          return 'Português'
        case 'ru':
          return 'Русский'
        case 'tr':
          return 'Türkçe'
        case 'zh':
          return '中文'
        case 'he':
          return 'עברית'
        default:
          return 'English'
      }
    }
  },
  methods: {
    onChange(locale) {
      if (locale) {
        const language = locale.toLocaleLowerCase()
        this.$i18n.setLocale(language).then(() => {
          this.$vuetify.lang.current = language
          this.$vuetify.rtl = language === 'ar'
          window.location.reload()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
