#!/usr/bin/env node
import * as fs from 'fs';
import { convertTitle } from './core';

let data = fs.readFileSync('/dev/stdin').toString();
console.log(convertTitle(data));
