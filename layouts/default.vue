<template>
  <base-layout>
    <v-navigation-drawer class="accentlight" floating v-model="drawer" fixed app :right="$vuetify.rtl">
      <div class="display-1 font-weight-bold accent--text text-center my-7">Lo<span class="primary--text">go</span></div>
      <v-list nav class="f-menu-list">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" nuxt exact>
          <v-list-item-action class="me-5 ms-3">
            <img class="h-7" :src="require(`@/assets/icons/${item.icon}.svg`)" />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text font-medium" v-text="$t(`navigation.${item.title}`)" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="white" flat :clipped-left="clipped" fixed app>
      <div class="w-full h-full d-flex align-center">
        <button>
          <img src="@/assets/icons/menu2.svg" class="h-4" @click.stop="drawer = !drawer" />
        </button>
        <v-spacer />
        <lang-switcher class="me-3" />
        <user-avatar-menu />
      </div>
    </v-app-bar>
    <v-main class="bg-[#f9f9f9] mt-8">
      <nuxt />
    </v-main>
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'dashboard',
          title: 'dashboard',
          to: '/'
        },
        {
          icon: 'dashboard',
          title: 'products',
          to: '/products'
        }
      ]
    }
  },
  created() {
    const s = () => (this.drawer = this.$vuetify.breakpoint.mdAndDown ? false : true)
    s()
    // window.addEventListener('resize', s)
  }
}
</script>
