import Ember from 'ember';

export default Ember.Component.extend({
	init() {
		this._super(...arguments);
		
	},
	actions: {
		openModalDialog() {
			this.sendAction("openModalDialog");
		}
	}
});
