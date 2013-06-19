"use strict";

var markdown = require("markdown").markdown,
    path = require("path"),
    fs = require("fs");
	
var wikiRoot = path.join(__dirname, "test.markdown");

var content = fs.readFileSync(wikiRoot, "utf8");
var html = markdown.renderJsonML(markdown.toHTML(content) );
fs.writeFileSync("test.html", html, "utf8");