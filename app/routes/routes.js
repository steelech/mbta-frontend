import Ember from 'ember';

export default Ember.Route.extend({
        direction: '',
	model() {
		return this.store.findAll('route');

	},
        actions: {
                displayRoute(route_name, id) {
                        var direction = 0;
                        if(this.get("direction") === "Outbound")
                        {
                                direction = 0;
                        }
                        else 
                        {
                                direction = 1;
                        }
                        this.controllerFor('routes').set('routeId', id);
                        this.transitionTo("routes.route.trips", id, {queryParams: { direction: direction }} );
                }, 
                setDirection(params) {
                        this.set("direction", params);
                }
        	
        }
});
