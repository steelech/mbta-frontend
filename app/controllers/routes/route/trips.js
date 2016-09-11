import Ember from 'ember';
import ENV from 'mbtanotifications-app/config/environment';

export default Ember.Controller.extend({
        queryParams: ['direction'],
        trip_id: '',
        trip_name: '',
        showModalDialog: false,
        route: '',
        results: [],
        direction: '',
        showSchedule: false,
        stops: [],
        phoneNumber: '',
        ajax: Ember.inject.service(),
        actions: {
                filterByTrip(input) {

                    if(input === "")
                    {
                        return this.get('store').query("trip", { direction: this.get('direction'), route: this.get('route')});
                    }
                    else
                    {
                        return this.get('store').query("trip", { direction: this.get('direction'), route: this.get('route'), trip_name: input });
                    }
                },
                pickTrip(trip_name, trip_id) {
                    this.set('trip_id', trip_id);
                    this.set('trip_name', trip_name);
                    this.set('showSchedule', true);
                    this.set('stops', this.get('store').query('stop', { trip_id: trip_id }));
                },    
                closeModalDialog() {
                    this.set("showModalDialog", false);
                },
                openModalDialog() {
                    this.set("showModalDialog", true);
                },
                subscribe() {
                    this.get('ajax').request(ENV.APP.host + '/subscriptions', {
                        method: 'POST',
                        data: {
                            direction: this.get('direction'),
                            trip_id: this.get('trip_id'),
                            route: this.get('route'),
                            phone_number: this.get('phoneNumber'),
                            trip_name: this.get('trip_name')
                        },
                    });
                    this.set("showModalDialog", false);
                },
                setPhoneNumber(value) {
                    console.log("setting phone number", value);
                    this.set('phoneNumber', value);

                },
        }
});
