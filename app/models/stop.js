import DS from 'ember-data';

export default DS.Model.extend({
	stop_id: DS.attr(),
	stop_name: DS.attr(),
    stop_sequence: DS.attr(),
    stop_time: DS.attr()
});
