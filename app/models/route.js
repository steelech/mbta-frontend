import DS from 'ember-data';

export default DS.Model.extend({
	route_id: DS.attr(),
	route_name: DS.attr(),
	trips: DS.hasMany('trip')
});
