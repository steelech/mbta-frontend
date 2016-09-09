import Ember from 'ember';

export default Ember.Component.extend({
	contents: ["Inbound", "Outbound"],
	actions: {
		setDirection(params) {
			this.sendAction("setDirection", params);
		}
	}
});
