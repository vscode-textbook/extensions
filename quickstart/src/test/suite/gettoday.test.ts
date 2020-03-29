import * as assert from 'assert';
import { dateFormat } from '../../dateformat';

suite('GetToday Test Suite', () => {
  test('Dateformat test', () => {
    let testdate: Date = new Date("2020-1-1");
    assert.equal('2020-1-1', dateFormat(testdate));
  });
})
