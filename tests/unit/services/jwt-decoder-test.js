import { module, test } from 'qunit';
import { setupTest } from 'movie-ember/tests/helpers';

module('Unit | Service | jwt-decoder', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:jwt-decoder');
    assert.ok(service);
  });
});
