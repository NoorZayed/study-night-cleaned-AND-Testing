import { strict as assert } from 'assert';
import { shuffle } from '../starter/src/shuffle.js';

describe('shuffle', function () {
  it('should rearrange the indexes of an array', function () {
    const arr = [1, 2, 3, 4, 5];
    const shuffled = shuffle(arr);
    // The shuffled array should have the same elements
    assert.deepEqual([...arr].sort(), [...shuffled].sort());
    // The shuffled array should not be in the same order (most of the time)
    // This test may rarely fail if shuffle returns the same order by chance
    assert.notDeepEqual(arr, shuffled);
  });
});
