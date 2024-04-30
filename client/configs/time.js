
Meteor.startup(function () {
  Meteor.call('app.general.time', {}, function (error, result) {
    if (error) {
      // error-handler
      return
    }

    console.log(result)
  })
})
