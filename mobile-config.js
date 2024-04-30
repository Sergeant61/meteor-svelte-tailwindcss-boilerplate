App.accessRule('*', { type: 'navigation' })
App.accessRule('*')

App.info({
  id: '<appId>',
  name: '<appName>',
  description: '',
  author: '',
  email: '',
  website: '',
  version: '1.0.0',
})

// App.setPreference('Orientation', 'portrait')
// App.setPreference('StatusBarBackgroundColor', '#7C3AED')
// App.setPreference('StatusBarOverlaysWebView', 'true')
// App.setPreference('target-device', 'handset')
// App.setPreference('deployment-target', '13.0')
// App.setPreference('android-targetSdkVersion', '33')

App.icons({
  //   app_store: 'public/mobile/ios/icon/business/1024.png', //(1024x1024) // Apple App Store
  //   iphone_2x: 'public/mobile/ios/icon/business/120.png', //(120x120) // iPhone 5, SE, 6, 6s, 7, 8
  //   iphone_3x: 'public/mobile/ios/icon/business/180.png', //(180x180) // iPhone 6 Plus, 6s Plus, 7 Plus, 8 Plus, X
  //   ipad_2x: 'public/mobile/ios/icon/business/152.png', //(152x152) // iPad, iPad mini
  //   ipad_pro: 'public/mobile/ios/icon/business/167.png', //(167x167) // iPad Pro
  //   ios_settings_2x: 'public/mobile/ios/icon/business/58.png', //(58x58) // iPhone 5, SE, 6, 6s, 7, 8, iPad, mini, Pro
  //   ios_settings_3x: 'public/mobile/ios/icon/business/87.png', //(87x87) // iPhone 6 Plus, 6s Plus, 7 Plus, 8 Plus, X
  //   ios_spotlight_2x: 'public/mobile/ios/icon/business/80.png', //(80x80) // iPhone 5, SE, 6, 6s, 7, 8, iPad, mini, Pro
  //   ios_spotlight_3x: 'public/mobile/ios/icon/business/120.png', //(120x120) // iPhone 6 Plus, 6s Plus, 7 Plus, 8 Plus, X
  //   ios_notification_2x: 'public/mobile/ios/icon/business/40.png', //(40x40) // iPhone 5, SE, 6, 6s, 7, 8, iPad, mini, Pro
  //   ios_notification_3x: 'public/mobile/ios/icon/business/60.png', //(60x60 // iPhone 6 Plus, 6s Plus, 7 Plus, 8 Plus, X
  //   ipad: 'public/mobile/ios/icon/business/76.png', //(76x76) // Legacy
  //   ios_settings: 'public/mobile/ios/icon/business/29.png', //(29x29) // Legacy
  //   ios_spotlight: 'public/mobile/ios/icon/business/40.png', //(40x40) // Legacy
  //   ios_notification: 'public/mobile/ios/icon/business/20.png', //(20x20) // Legacy
  //   iphone_legacy: 'public/mobile/ios/icon/business/57.png', //(57x57) // Legacy
  //   iphone_legacy_2x: 'public/mobile/ios/icon/business/114.png', //(114x114) // Legacy
  //   ipad_spotlight_legacy: 'public/mobile/ios/icon/business/50.png', //(50x50) // Legacy
  //   ipad_spotlight_legacy_2x: 'public/mobile/ios/icon/business/100.png', //(100x100) // Legacy
  //   ipad_app_legacy: 'public/mobile/ios/icon/business/72.png', //(72x72) // Legacy
  //   ipad_app_legacy_2x: 'public/mobile/ios/icon/business/144.png', //(144x144) // Legacy
  //   android_mdpi: 'public/assets/android/res/mipmap-mdpi/ic_launcher.png', //(48x48)
  //   android_hdpi: 'public/assets/android/res/mipmap-hdpi/ic_launcher.png', //(72x72)
  //   android_xhdpi: 'public/assets/android/res/mipmap-xhdpi/ic_launcher.png', //(96x96)
  //   android_xxhdpi: 'public/assets/android/res/mipmap-xxhdpi/ic_launcher.png', //(144x144)
  //   android_xxxhdpi: 'public/assets/android/res/mipmap-xxxhdpi/ic_launcher.png', //(192x192)
})

App.launchScreens({
  // android_mdpi_portrait: 'public/mobile/android/splash/business/android_mdpi_portrait.png', // (320x480)
  // android_hdpi_portrait: 'public/mobile/android/splash/business/android_hdpi_portrait.png', // (480x800)
  // android_xhdpi_portrait: 'public/mobile/android/splash/business/android_xhdpi_portrait.png', // (720x1280)
  // android_xxhdpi_portrait: 'public/mobile/android/splash/business/android_xxhdpi_portrait.png', // (960x1600)
  // android_xxxhdpi_portrait: 'public/mobile/android/splash/business/android_xxxhdpi_portrait.png', // (1289x1920)
  // android_universal: 'public/mobile/android/splash/business/288x288.png', // (288x288 dp)
  //   ios_universal: 'public/mobile/ios/splash/business/2732x2732.png', // (Default@2xuniversalanyany.png - 2732x2732 px) - All @2x devices, if device/mode specific is not declared
  //   ios_universal_3x: 'public/mobile/ios/splash/business/2208x2208.png', // (Default@3xuniversalanyany.png - 2208x2208 px) - All @3x devices, if device/mode specific is not declared
  //   'Default@2x~universal~comany': 'public/mobile/ios/splash/business/1278x2732.png', // (1278x2732 px) - All @2x devices in portrait mode
  //   'Default@2x~universal~comcom': 'public/mobile/ios/splash/business/1334x750.png', // (1334x750 px) - All @2x devices in landscape (narrow) mode
  //   'Default@3x~universal~anycom': 'public/mobile/ios/splash/business/2208x1242.png', // (2208x1242 px) - All @3x devices in landscape (wide) mode
  //   'Default@3x~universal~comany': 'public/mobile/ios/splash/business/1242x2208.png', // (1242x2208 px) - All @3x devices in portrait mode
  //   'Default@2x~iphone~anyany': 'public/mobile/ios/splash/business/1334x1334.png', // (1334x1334 px) - iPhone SE/6s/7/8/XR
  //   'Default@2x~iphone~comany': 'public/mobile/ios/splash/business/750x1334.png', // (750x1334 px) - iPhone SE/6s/7/8/XR - portrait mode
  //   'Default@2x~iphone~comcom': 'public/mobile/ios/splash/business/1334x750.png', // (1334x750 px) - iPhone SE/6s/7/8/XR - landscape (narrow) mode
  //   'Default@3x~iphone~anyany': 'public/mobile/ios/splash/business/2208x2208.png', // (2208x2208 px) - iPhone 6s Plus/7 Plus/8 Plus/X/XS/XS Max
  //   'Default@3x~iphone~anycom': 'public/mobile/ios/splash/business/2208x1242.png', // (2208x1242 px) - iPhone 6s Plus/7 Plus/8 Plus/X/XS/XS Max - landscape (wide) mode
  //   'Default@3x~iphone~comany': 'public/mobile/ios/splash/business/1242x2208.png', // (1242x2208 px) - iPhone 6s Plus/7 Plus/8 Plus/X/XS/XS Max - portrait mode
  //   'Default@2x~ipad~anyany': 'public/mobile/ios/splash/business/2732x2732.png', // (2732x2732 px) - iPad Pro 12.9"/11"/10.5"/9.7"/7.9"
  //   'Default@2x~ipad~comany': 'public/mobile/ios/splash/business/1278x2732.png', // (1278x2732 px) - iPad Pro 12.9"/11"/10.5"/9.7"/7.9" - portrait mode
})

// App.appendToConfig(`
//   <platform name="ios">
//     <edit-config target="NSLocationWhenInUseUsageDescription" file="*-Info.plist" mode="merge">
//       <string>We use your location information to make it easier for you to select your service area.</string>
//     </edit-config>

//     <edit-config target="NSPhotoLibraryAddUsageDescription" file="*-Info.plist" mode="merge">
//       <string>We use it to save the files you download from the application.</string>
//     </edit-config>

//     <edit-config target="NSCameraUsageDescription" file="*-Info.plist" mode="merge">
//       <string>We use your camera during image and video sending.</string>
//     </edit-config>

//     <edit-config target="NSMicrophoneUsageDescription" file="*-Info.plist" mode="merge">
//       <string>We use your microphone to send voice recordings.</string>
//     </edit-config>
//   </platform>

//   <platform name="android">
//     <preference name="AndroidPersistentFileLocation" value="Compatibility" />
//   </platform>
// `)
