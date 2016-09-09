import Ember from 'ember';

export default Ember.Component.extend({
	viewButtonClasses: 'subscription-view-button',
	viewButtonClass: 'hidden',
	deleteButtonClasses: 'subscription-delete-button',
	deleteButtonClass: 'hidden',
	overListElement: false,
	showViewDialog: false,
	showDeleteDialog: false,
	actions: {
		over: function() {

			this.set("viewButtonClass", this.get("viewButtonClasses"));
			this.set("deleteButtonClass", this.get("deleteButtonClasses"));

		},
		off: function() {
			this.set("viewButtonClass", "hidden");
			this.set("deleteButtonClass", "hidden");
		},
		filterSubscriptions() {

		},
		showViewDialog(trip_id, trip_name) {
			this.sendAction("showViewDialog", trip_id, trip_name);
		},
		showDeleteDialog(trip_id, trip_name, subscripttion_id) {
			this.sendAction("showDeleteDialog", trip_id, trip_name, subscripttion_id);
		}
	}
});
