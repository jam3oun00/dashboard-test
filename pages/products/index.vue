<template>
  <v-container>
    <!-- confirmation modal -->
    <confirm width="590" v-model="dialogs.remove" @confirm="remove" />
    <!-- top header above table -->
    <div class="d-flex flex-column flex-md-row gap-3 mb-4 mb-md-0">
      <div class="gnrl-title">
        <h1>{{ $t('general.products.title') }}</h1>
        <p>{{ $t('general.products.subtitle') }}</p>
      </div>
      <v-spacer />
      <v-text-field hide-details :label="$t('data_table.search')" v-model="search" class="gnrl-search" flat solo rounded>
        <template v-slot:prepend-inner>
          <img src="@/assets/icons/search.svg" />
        </template>
      </v-text-field>
      <div class="gnrl-actions gap-3">
        <v-btn x-large color="accentlight" rounded @click="exportData">
          <img src="@/assets/icons/export.svg" />
          {{ $t('data_table.export') }}
        </v-btn>
      </div>
    </div>
    <!-- data table -->
    <v-data-table
      class="f"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      :search="search"
      :headers="headers"
      :items="products"
    >
      <template v-slot:item.image="{ item }">
        <img :src="item.image" class="h-12 w-12 object-cover my-3 rounded-[12px]" />
      </template>
      <template v-slot:item.action="{ item }">
        <v-menu offset-y transition="scroll-y-reverse-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click.stop="openDeleteModal(item)">
              <v-list-item-action class="me-5 ms-3">
                <img src="@/assets/icons/trash.svg" />
              </v-list-item-action>
              <v-list-item-title class="danger--text"> {{ $t('data_table.delete') }} </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
    <t-footer :data="products" v-model="page" :per-page="itemsPerPage" />
  </v-container>
</template>

<script>
import { json2excel } from 'js2excel'
import products from '@/data/products.json'
export default {
  data() {
    return {
      itemsPerPage: 15,
      page: 1,
      search: '',
      dialogs: {
        add: false,
        remove: false
      },
      products,
      headers: [
        { text: this.$t('data_table.photo'), value: 'image', width: 100, align: 'start', sortable: false },
        { text: this.$t('general.products.product'), value: 'name', sortable: true },
        { text: this.$t('general.products.branch'), value: 'branch.name', sortable: true },
        { text: '', value: 'action', width: 77, align: 'end', sortable: false }
      ]
    }
  },
  methods: {
    exportData() {
      try {
        json2excel({
          data: this.products,
          name: `products_${new Date().getTime()}`
        })
        this.$notify({ type: 'success', text: this.$t('utils.export_success') })
      } catch (e) {
        this.$notify({ type: 'success', text: this.$t('utils.export_error') })
      }
    },
    openDeleteModal(item) {
      this.id = item.id
      this.dialogs.remove = true
    },
    remove() {
      this.load(true)
      setTimeout(() => {
        this.dialogs.remove = false
        this.load(false)
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped></style>
