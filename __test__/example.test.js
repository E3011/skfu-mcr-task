import { test } from 'node:test';
import assert from 'node:assert';
import { insertionSort } from '../tasks/example.js';

test('example insertionSort', () => {
    assert.deepStrictEqual(insertionSort([]), []);
    assert.deepStrictEqual(insertionSort([1]), [1]);
    assert.deepStrictEqual(insertionSort([5, 2, 4, 6, 1, 3]), [1, 2, 3, 4, 5, 6]);
    assert.deepStrictEqual(insertionSort([3, 3, 1, 2, 1]), [1, 1, 2, 3, 3]);
    assert.deepStrictEqual(insertionSort([-1, -5, 0, 3]), [-5, -1, 0, 3]);
});

test('example insertionSort does not mutate the source array', () => {
    const source = [5, 2, 4, 6, 1, 3];
    const copy = [...source];

    insertionSort(source);

    assert.deepStrictEqual(source, copy);
});
