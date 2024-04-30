import { Meteor } from 'meteor/meteor'
import App from '../imports/app/App.svelte'
import './configs/index'

Meteor.startup(() => {
  AppUtil.app = new App({
    target: document.getElementById('app'),
  })
})
