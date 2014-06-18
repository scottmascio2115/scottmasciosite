App = Ember.Application.create();

App.Router.map(function() {
  this.resource('resume', { path: '/' });
  this.resource('spot2fish');
  this.resource('apprentice');
  this.resource('referencesection');
  this.resource('personal');
  this.resource('resume');
  this.resource('info');
});
