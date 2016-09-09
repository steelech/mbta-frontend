import Ember from 'ember';

export default Ember.Component.extend({
	value1: '',
        value2: '',
        id: '',
	overListElement: false,
	buttonClasses: "get-route-button",
	buttonClass: "hidden",
	iconClasses: '',
	iconClass: "hidden",
	disabled: false,
	direction: '',
	route_name: '',
	actions: {
		over: function() {
			this.set("iconClass", this.get("iconClasses"));
		},
		off: function() {
			this.set("iconClass", "hidden");
		},
		selectRoute() {
			this.sendAction("selectRoute", this.get("route_name"), this.get("id"));

		},
	}
});
