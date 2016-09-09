import Ember from 'ember';

export default Ember.Controller.extend({
		routeId: null,
	actions: {
		filterByRoute(param) {
			if(param !== '') {
				return this.get('store').query('route', { route_name: param });
			} else {
				return this.get('store').findAll('route');
			}
		},
	} 
});
