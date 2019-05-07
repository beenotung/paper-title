import * as test from 'tape';
import { convertTitle } from '../src/core';

test('convert case', t => {
  t.equal(
    convertTitle(
      'S TRONGER C ONSISTENCY AND S EMANTICS FOR\nL OW -L ATENCY G EO -R EPLICATED S TORAGE',
    ),
    'Stronger Consistency and Semantics for Low-Latency Geo-Replicated Storage',
  );
  t.equal(
    convertTitle('CAN NEURAL NETWORKS UNDERSTAND LOGICAL ENTAILMENT ?'),
    'Can Neural Networks Understand Logical Entailment?',
  );
  /* check if the first word is article, still display in upper case */
  t.equal(
    convertTitle('The Promise, and Limitations, of Gossip Protocols'),
    'The Promise, and Limitations, of Gossip Protocols',
  );
  t.end();
});
