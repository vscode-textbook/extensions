import * as assert from 'assert';
import { dateFormat } from '../dateformat';

suite('GetToday Test Suite', () => {
  test('Dateformat test', () => {
    let testdate: Date = new Date("2024-1-1");
    assert.strictEqual('2024-1-1', dateFormat(testdate));
  });
});
