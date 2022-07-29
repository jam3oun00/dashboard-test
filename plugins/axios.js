import Vue from 'vue'
import excluded_routes from '../excluded-routes'
export default function ({ $axios, i18n, redirect, route }) {
  // i18n.locale to access the current language
  $axios.onRequest(config => {
    // do something white the request config
    config.headers.common['lang'] = i18n.locale
    console.log($axios)
    const domain = localStorage.getItem('domain')
    if (domain || route.fullPath.includes('crm-software')) {
      config.baseURL = domain
    } else if (!excluded_routes.includes(route.name)) {
      redirect('/auth/company-code')
    }
  })
  $axios.onResponse(response => {
    // store.commit('layout/loading/set', false)
    // store.commit('utils/updateLoader', false)
  })

  $axios.onError(error => {
    console.log('error axios', error.response)
    if (error.response.status === 401) {
      Vue.notify({
        title: i18n.t('warning'),
        text: 'your session has been expired, please login again'
      })
      redirect('/auth/company-code')
    } else {
      try {
        if (error.response.data.message) {
          Vue.notify({
            title: i18n.t('warning'),
            text: error.response.data.message
          })
        }
      } catch (error) {
        Vue.notify({ title: i18n.t('warning'), text: 'error' })
      }
    }
  })
}
