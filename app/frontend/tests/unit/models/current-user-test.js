import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('current-user', 'CurrentUser', {
  // Specify the other units that are required for this test.
  needs: ['model:pro-membership-plan']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
