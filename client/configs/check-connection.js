import AppUtil from '../../lib/utils/app-util/client/app-util'

window.addEventListener('offline', () => {
  console.log('offline')
  AppUtil.connection.set(false)
})

window.addEventListener('online', () => {
  console.log('online')
  AppUtil.connection.set(true)
})
