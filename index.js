#!/usr/bin/env node
const program = require('commander');
const path = require('path');
const fs = require('fs');
const __path = path.resolve();
const config = require(__path + '/docjs.json');

console.log(config)
