import excluded_routes from '../excluded-routes'
export default function (context) {
  const domain = localStorage.getItem('domain')
  if (context.route.fullPath.includes('crm-software')) {
    return false
  } else if (!domain && !excluded_routes.includes(context.route.name)) {
    return context.redirect('/auth/company-code')
  }
}
