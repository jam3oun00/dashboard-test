<template>
  <v-app>
    <loader />
    <client-only>
      <notifications :position="`top ${$vuetify.rtl ? 'left' : 'right'}`" class="ma-5" />
    </client-only>
    <slot />
  </v-app>
</template>

<script>
export default {
  created() {
    // rtl for arabic
    if (this.$i18n.locale === 'ar') {
      this.$vuetify.rtl = true
    } else {
      this.$vuetify.rtl = false
    }
    this.$vuetify.lang.current = this.$i18n.locale
  }
}
</script>

<style lang="scss" scoped></style>
