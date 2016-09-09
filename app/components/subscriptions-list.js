import Ember from 'ember';

export default Ember.Component.extend({
	init() {
		this._super(...arguments);
		
	},
	actions: {
		showViewDialog(trip_id, trip_name) {
			this.sendAction("showViewDialog", trip_id, trip_name);
		},
		showDeleteDialog(trip_id, trip_name, subscription_id) {
			this.sendAction("showDeleteDialog", trip_id, trip_name, subscription_id);
		}
	}
});
