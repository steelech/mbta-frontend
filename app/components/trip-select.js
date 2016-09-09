import Ember from 'ember';

export default Ember.Component.extend({
	direction: '',
	trip_name: '',
	id: '',
	iconClasses: "",
	iconClass: "hidden",
	overListElement: false,
	disabled: false,
	actions: {
		over: function() {
			this.set("iconClass", this.get("iconClasses"));
		},
		off: function() {
			this.set("iconClass", "hidden");
		},
		setTrip: function() {
			this.sendAction("setTrip", this.get('trip_name'), this.get('id'));
		}
	}
});
