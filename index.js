#!/usr/bin/env node

const dirTree = require('directory-tree');
const path = require('path');
const fs = require('fs');

const __path = path.resolve();
const __config = require(__path + '/docjs.json');
