import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trip-schedule', 'Integration | Component | trip schedule', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{trip-schedule}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#trip-schedule}}
      template block text
    {{/trip-schedule}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
