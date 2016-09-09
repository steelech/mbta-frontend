import DS from 'ember-data';

export default DS.Model.extend({
	Id: DS.attr(),
	Name: DS.attr(),
	trips: DS.hasMany("trip")
});