import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var routes = this.modelFor('routes');
		this.controllerFor('routes').set('routeId', params.route_id);
		return routes.findBy("id", params.route_id);
	}
});
