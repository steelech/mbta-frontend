import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['trips-filter'],
	value: '',
        direction: '',
	init() {
		this._super(...arguments);
		this.get('filter')('', this.get('direction')).then((results) => this.set('results', results));
	},
	 actions: {
	 	handleFilterEntry() {
	 		let filterInputValue = this.get('value');
	 		let filterAction = this.get('filter');
            let filterDirection = this.get('direction');
	 		filterAction(filterInputValue, filterDirection).then((filterResults) => this.set('results', filterResults));
	 	}
	 }
});
