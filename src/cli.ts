#!/usr/bin/env node
import * as clipboardy from 'clipboardy';
import { convertTitle } from './core';

console.log('Reading from clipboard');
// let input = fs.readFileSync('/dev/stdin').toString();
const input = clipboardy.readSync().trim();
const output = convertTitle(input);

console.log('== Input ==');
console.log(input);
console.log('===========');
console.log('== Output ==');
console.log(output);
console.log('============');

clipboardy
  .write(output)
  .then(() => {
    console.log('Saved to clipboard');
    process.exit(0);
  })
  .catch(e => {
    console.error('Error:', e);
    process.exit(1);
  });
