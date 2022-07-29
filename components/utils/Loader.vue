<template>
  <v-dialog v-model="loader" persistent width="300" transition="scroll-y-transition">
    <div class="white">
      <v-card-text>
        <div class="primary--text text-center">{{ $t('utils.loading_title') }}</div>
        <v-progress-linear indeterminate color="primary" class="mb-1 mt-3" />
      </v-card-text>
    </div>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    loader: {
      get: function () {
        return this.$store.state.utils.loader
      },
      set: function (v) {
        this.$store.commit('utils/load', v)
      }
    }
  }
}
</script>

<style lang="scss">
.opOpen {
  .v-card,
  .carousel-wrapper * {
    position: static !important;
    z-index: 0;
  }
}
.mp-loader {
  // backdrop-filter: saturate(180%) blur(10px);
  background-color: rgba(black, 0.8) !important;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2147483647;
}
</style>
