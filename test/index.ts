import * as test from 'tape';
import { convertTitle } from '../src/core';

test('convert case', t => {
  let s = 'S TRONGER C ONSISTENCY AND S EMANTICS FOR\n' +
    'L OW -L ATENCY G EO -R EPLICATED S TORAGE';
  t.equal(convertTitle(s), 'Stronger Consistency and Semantics for Low-Latency Geo-Replicated Storage');
  t.end();
});
