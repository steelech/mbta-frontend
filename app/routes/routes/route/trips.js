import Ember from 'ember';

export default Ember.Route.extend({
		route: '',
		direction: '',
	renderTemplate: function() {
		this.render('routes.route.trips', {into: 'application'});
	},
	model(params) {
                this.set('direction', params.direction);
                var route = this.modelFor('routes.route');
                this.controllerFor('routes.route.trips').set('route', this.controllerFor('routes').get('routeId'));
                this.controllerFor('routes.route.trips').set('showSchedule', false);

                return route;
	},
	actions: {
	}

});
