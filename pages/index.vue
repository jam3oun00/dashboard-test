<template>
  <div>
    <v-container>
      <v-row class="mb-9">
        <v-col cols="6" md="3">
          <div
            class="bg-[#eefffe] rounded-[12px] min-h-[157px] d-flex flex-column gap-1 text-center justify-center primary--text"
          >
            <h1 class="text-[40px] font-semibold">162.9k</h1>
            <span class="text-[13px] font-semibold primary--text">{{ $t('dashboard.number_of_leads') }}</span>
            <span class="text-sm text-[#9D9FB1]">{{ $t('dashboard.increase_from_last_week', { perc: '10%' }) }}</span>
          </div>
        </v-col>
        <v-col cols="6" md="3">
          <div
            class="bg-[#ffefef] rounded-[12px] min-h-[157px] d-flex flex-column gap-1 text-center justify-center primary--text"
          >
            <h1 class="text-[40px] font-semibold">4.3k</h1>
            <span class="text-[13px] font-semibold primary--text">{{ $t('dashboard.product_and_service') }}</span>
            <span class="text-sm text-[#9D9FB1]">{{ $t('dashboard.increase_from_last_week', { perc: '12%' }) }}</span>
          </div>
        </v-col>
        <v-col cols="6" md="3">
          <div
            class="bg-[#f3e9ff] rounded-[12px] min-h-[157px] d-flex flex-column gap-1 text-center justify-center primary--text"
          >
            <h1 class="text-[40px] font-semibold">2.1k</h1>
            <span class="text-[13px] font-semibold primary--text">{{ $t('dashboard.public_form') }}</span>
            <span class="text-sm text-[#9D9FB1]">{{ $t('dashboard.increase_from_last_week', { perc: '3%' }) }}</span>
          </div>
        </v-col>
        <v-col cols="6" md="3">
          <div
            class="bg-[#fdf1ef] rounded-[12px] min-h-[157px] d-flex flex-column gap-1 text-center justify-center primary--text"
          >
            <h1 class="text-[40px] font-semibold">541</h1>
            <span class="text-[13px] font-semibold primary--text">{{ $t('dashboard.number_of_employes') }}</span>
            <span class="text-sm text-[#9D9FB1]">{{ $t('dashboard.increase_from_last_week', { perc: '16%' }) }}</span>
          </div>
        </v-col>
      </v-row>
      <dashboard-chart-one />
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
