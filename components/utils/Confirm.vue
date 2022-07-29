<template>
  <div>
    <v-dialog transition="scroll-y-transition" :max-width="width" v-model="dialog">
      <v-card>
        <div class="text-center pb-10 pt-7">
          <img class="mx-auto mb-2" src="@/assets/icons/modal-trash.svg" />
          <h1 class="font-semibold text-[28px]">{{ title || $t('data_table.delete_confirm') }}</h1>
          <p class="mt-2 text-[#808080]">{{ msg || $t('data_table.delete_confirm_sub') }}</p>
          <v-row class="action-row mt-2">
            <v-col cols="12" md="6">
              <v-btn block x-large @click="dialog = false">{{ $t('data_table.cancel') }}</v-btn>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn block x-large color="danger" dark @click="confirm">
                {{ ConfirmTxt || $t('data_table.yes_delete') }}
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String],
      default: 400
    },
    title: {
      type: [String]
    },
    msg: {
      type: [String]
    },
    ConfirmTxt: {
      type: [String]
    },
    loading: {
      type: [Boolean],
      default: false
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  watch: {
    dialog(v) {
      this.$emit('input', v)
    },
    value(v) {
      this.dialog = v
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm')
    },
    cancel() {
      this.dialog = false
      this.$emit('cancel')
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      this.dialog = this.value
    })
  }
}
</script>

<style lang="scss" scoped></style>
