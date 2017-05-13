#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const DocumentationGenerator = require("./src/DocumentationGenerator.js");
const PathFilter = require("./src/PathFilter.js");

const __path = path.resolve();
const __config = require(__path + '/docjs.json');

const pathFilter = new PathFilter(__path, __config.src, __config.extension, __config.ignore);
const paths = pathFilter.getArray();

const documentationGenerator = new DocumentationGenerator(paths);
documentationGenerator.getJSON();
