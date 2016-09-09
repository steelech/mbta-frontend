import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['routes-filter'],
	value: '',
	flashMessages: Ember.inject.service(),

	init() {
		this._super(...arguments);
		this.get('filter')('').then((results) => this.set('results', results));
	},

	actions: {
		handleFilterEntry() {
			let filterInputValue = this.get('value');
			let filterAction = this.get('filter');
			filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
		},
		setDirection(params) {
			this.sendAction("setDirection", params);
		}
	}
});
