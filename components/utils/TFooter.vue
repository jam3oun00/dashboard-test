<template>
  <div class="f-footer d-flex flex-column flex-md-row gap-2 align-center mt-3 mt-md-0">
    <span class="font-semibold primary--text">
      {{ $t('data_table.showing_number', { start: page, total: pageCount }) }}
    </span>
    <v-spacer />
    <div class="max-w-[350px]">
      <v-pagination :total-visible="totalVisible" color="accent" v-model="page" :length="pageCount" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    value: [Number, String],
    perPage: {
      type: [Number, String],
      default: 15
    },
    totalVisible: {
      type: [Number, String],
      default: 5
    }
  },
  computed: {
    page: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    total() {
      try {
        return this.data.length
      } catch (error) {
        return 0
      }
    },
    pageCount() {
      return Math.ceil(this.total / this.perPage)
    }
  }
}
</script>

<style lang="scss">
.f-footer {
  padding: 16px;
}
</style>
