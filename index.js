#!/usr/bin/env node

const dirTree = require('directory-tree');
const path = require('path');
const fs = require('fs');

const DocumentationGenerator = require("./DocumentationGenerator.js");
const Reader = require("./Reader.js");
const PathFilter = require("./PathFilter.js");

const __path = path.resolve();
const __config = require(__path + '/docjs.json');

const pathFilter = new PathFilter();
const paths = pathFilter.getPaths();

const documentationGenerator = new DocumentationGenerator(paths);
documentationGenerator.getJSON();

let reader = new Reader();
reader.readJS();
