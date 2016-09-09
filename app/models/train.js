import DS from 'ember-data';

export default DS.Model.extend({
	line: DS.attr('string'),
	departs: DS.attr(),
	arrives: DS.attr()
});