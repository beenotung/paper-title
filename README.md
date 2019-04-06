# paper-title
Format academic paper title in clipboard

[![npm Package Version](https://img.shields.io/npm/v/paper-title.svg?maxAge=2592000)](https://www.npmjs.com/package/paper-title)

## Installation
```bash
npm i -g paper-title
````

## Example
```bash
$ echo 'S TRONGER C ONSISTENCY AND S EMANTICS FOR\nL OW -L ATENCY G EO -R EPLICATED S TORAGE' | xclip -sel clipboard
$ paper-title
Reading from clipboard
== Input ==
S TRONGER C ONSISTENCY AND S EMANTICS FOR
L OW -L ATENCY G EO -R EPLICATED S TORAGE

===========
== Output ==
Stronger Consistency and Semantics for Low-Latency Geo-Replicated Storage
============
Saved to clipboard
```
