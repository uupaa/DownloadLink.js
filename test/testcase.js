var ModuleTestDownloadLink = (function(global) {

var test = new Test(["DownloadLink"], { // Add the ModuleName to be tested here (if necessary).
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     false, // enable worker test.
        node:       false, // enable node test.
        nw:         true,  // enable nw.js test.
        el:         true,  // enable electron (render process) test.
        button:     true,  // show button.
        both:       false, // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
            console.error(error.message);
        }
    });

if (IN_BROWSER || IN_NW || IN_EL) {
    test.add([
        testDownloadLink_create,
    ]);
}

// --- test cases ------------------------------------------
function testDownloadLink_create(test, pass, miss) {

    if (DownloadLink.ready) {
        var link = new DownloadLink();
        link.create(new Uint8Array([1,2,3]), { fileName: "automatic.download" });

        test.done(pass());
    } else {
        test.done(miss());
    }
}

return test.run();

})(GLOBAL);

