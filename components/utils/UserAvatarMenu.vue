<template>
  <div>
    <v-menu
      content-class="mt-3"
      transition="scroll-y-transition"
      v-model="menu"
      max-width="300"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
      offset-y
    >
      <template #activator="{ on, attrs }">
        <div v-ripple class="d-flex align-center rounded-pill" v-bind="attrs" v-on="on">
          <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
            <v-avatar size="47">
              <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" class="avatar" />
            </v-avatar>
          </v-badge>
          <div class="me-0 ms-3">
            <div class="font-semibold text-sm primary--text">Mr Darwish</div>
            <div class="text-[13px] primary--text d-flex">
              Admin <v-spacer />
              <!-- <v-icon size="20" color="primary">mdi-chevron-down</v-icon> -->
            </div>
          </div>
        </div>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-avatar size="60">
            <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" class="avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <div class="text-xl primary--text">user 54</div>
            <v-list-item-subtitle>
              <small class="text--disabled text-capitalize primary--text"> admin </small>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list nav>
        <v-list-item @click.stop="logout" class="bg-[#f6f6f6]">
          <v-list-item-action class="ms-2 me-4 primary--text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-logout"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
            </svg>
          </v-list-item-action>
          <v-list-item-title class="primary--text"> {{ $t('utils.logout') }} </v-list-item-title>
          <!-- <v-list-item-action>
            <v-btn icon class="red text-xs" x-small dark> 6 </v-btn>
          </v-list-item-action> -->
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import get from 'lodash.get'
export default {
  data() {
    return {
      get,
      menu: false
    }
  },
  methods: {
    logout() {
      try {
        this.$auth.logout().then(() => {
          this.$router.push('/auth/company-code')
        })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
