import { module, test } from 'qunit';

import { setupTest } from 'movie-ember/tests/helpers';

module('Unit | Adapter | movie', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:movie');
    assert.ok(adapter);
  });
});
