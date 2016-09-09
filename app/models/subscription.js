import DS from 'ember-data';

export default DS.Model.extend({
	created_at: DS.attr(),
	updated_at: DS.attr(),
	direction_id: DS.attr(),
	phone_number: DS.attr(),
	trip_name: DS.attr(),
	trip_id: DS.attr()
});
