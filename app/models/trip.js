import DS from 'ember-data';

export default DS.Model.extend({
	trip_id: DS.attr(),
	trip_name: DS.attr(),
        direction_id: DS.attr(),
        stops: DS.hasMany('stop'),
        route_id: DS.belongsTo('route')
});