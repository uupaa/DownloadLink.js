(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("DownloadLink", function moduleClosure(global, WebModule, VERIFY /*, VERBOSE */) {
"use strict";

// --- technical terms / data structure --------------------
// --- dependency modules ----------------------------------
var UserAgent = WebModule["UserAgent"];
// --- import / local extract functions --------------------
// --- define / local variables ----------------------------
var ua = new UserAgent();
// --- class / interfaces ----------------------------------
function DownloadLink() {
}

DownloadLink["ready"] = _ready();
DownloadLink["repository"] = "https://github.com/uupaa/DownloadLink.js";
DownloadLink["prototype"] = Object.create(DownloadLink, {
    "constructor": { "value": DownloadLink }, // new DownloadLink(...):DownloadLink
    "create": { "value": DownloadLink_create }, // #create(buffer:TypedArray|ArrayBuffer|Array|String, options:Object = null):Boolean
});

// --- implements ------------------------------------------
function DownloadLink_create(buffer,    // @arg TypedArray|ArrayBuffer|Array|String
                             options) { // @arg Object - { fileName, mimeType, linkText, linkStyle, parentNode }
                                        // @options.fileName String = "default.bin"
                                        // @options.mimeType String = "application/octet-stream"
                                        // @options.linkText String = "download"
                                        // @options.linkStyle String = "DownloadLink" - CSS className
                                        // @options.parentNode Node = document.body
//{@dev
    if (VERIFY) {
        $valid($type(buffer,  "TypedArray|ArrayBuffer|Array|String"), DownloadLink_create, "buffer");
        $valid($type(options, "Object|omit"), DownloadLink_create, "options");
        if (options) {
            $valid($type(fileName, "String|omit"), DownloadLink_create, "options.fileName");
            $valid($type(mimeType, "String|omit"), DownloadLink_create, "options.mimeType");
            $valid($type(linkText, "String|omit"), DownloadLink_create, "options.linkText");
            $valid($type(linkStyle, "String|omit"), DownloadLink_create, "options.linkStyle");
            $valid($type(parentNode, "Node|omit"), DownloadLink_create, "options.parentNode");
        }
    }
//}@dev

    options = options || {};

    var fileName   = options["fileName"]   || "default.bin";
    var mimeType   = options["mimeType"]   || "application/octet-stream";
    var linkText   = options["linkText"]   || "download";
    var linkStyle  = options["linkStyle"]  || "DownloadLink";

    var parentNode = options["parentNode"] || document.body;
    var blob       = new Blob([buffer], { "type": mimeType });
    var a          = document.createElement("a");

    a["download"] = fileName;
    a.target      = "_blank";
    a.className   = linkStyle;

    if (navigator["msSaveBlob"]) {
        navigator["msSaveBlob"](blob, fileName);
    } else if (ua["Firefox"]) {
        a.href = URL["createObjectURL"](blob);
        parentNode.appendChild(a);
        a.click();
        parentNode.removeChild(a);
    } else if (ua["Chromium"] || ua["Edge"]) {
        a.href = URL["createObjectURL"](blob);
        a.click();
    } else if (ua["WebKit"] && _isWebKitSupportDownloadAttribute()) {
        a.href = URL["createObjectURL"](blob);
        parentNode.appendChild(a);
        a.textContent = linkText;
        a.onclick = function() { parentNode.removeChild(a); };
    }
}

function _ready() { // @ret Boolean
    if (navigator["msSaveBlob"]) { // IE, Edge
        return true;
    }
    if (ua["Firefox"]) { // Firefox
        return true;
    }
    if (ua["Chromium"] || ua["Edge"]) {
        return true;
    }
    if (ua["WebKit"] && _isWebKitSupportDownloadAttribute()) { // Safari 10.3+, Safari 10.1+
        return true;
    }
    return false;
}

function _isWebKitSupportDownloadAttribute() {
    if (ua["MOBILE"]) {
        if (parseFloat(ua["OS_VERSION"]) >= 10.3) { // Mobile Safari 10.3+
            return true;
        }
    } else {
        if (parseFloat(ua["BROWSER_VERSION"]) >= 10.1) { // Safari 10.1+
            return true;
        }
    }
    return false;
}

return DownloadLink; // return entity

});

