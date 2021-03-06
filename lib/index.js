var util = require('util');
var fs = require('fs');
var multiline = require('multiline');
var Path = require('path');

var BASE_DIR = __dirname;
var CODE_FILE = Path.join(BASE_DIR, '..', 'dist', 'html_dnd.js');
var coreCode = fs.readFileSync(CODE_FILE);

exports.code = util.format(multiline(function() {/*
  (function(draggable, droppable) {
    %s;
    dnd.simulate(draggable, droppable);
  })(arguments[0], arguments[1]);
*/}), coreCode);

exports.codeForSelectors = util.format(multiline(function() {/*
  (function(selectorDraggable, selectorDroppable) {
    %s;
    var draggable = document.querySelector(selectorDraggable);
    var droppable = document.querySelector(selectorDroppable);
    dnd.simulate(draggable, droppable);
  })(arguments[0], arguments[1]);
*/}), coreCode);
