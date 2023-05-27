# paper-title

Format academic paper title in clipboard

Useful when you copy the title from PDF.

[![npm Package Version](https://img.shields.io/npm/v/paper-title.svg)](https://www.npmjs.com/package/paper-title)

## Installation

```bash
npm i -g paper-title
```

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
Saved to clipboard.
```

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
