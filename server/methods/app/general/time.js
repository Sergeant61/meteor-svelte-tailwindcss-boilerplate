import SimpleSchema from 'simpl-schema'

new ValidatedMethod({
  name: 'app.general.time',
  validate: new SimpleSchema({}).validator(),
  run: function (data) {
    this.unblock()

    return new Date()
  },
})
