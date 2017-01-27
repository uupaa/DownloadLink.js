# DownloadLink.js [![Build Status](https://travis-ci.org/uupaa/DownloadLink.js.svg)](https://travis-ci.org/uupaa/DownloadLink.js)

[![npm](https://nodei.co/npm/uupaa.downloadlink.js.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.downloadlink.js/)

Add a download link.

This module made of [WebModule](https://github.com/uupaa/WebModule).

## Support Browsers

|                     | Automatic download | Need user gesture |
|---------------------|--------------------|-------------------|
| IE 10+              | :o:                | NO                |
| Edge                | :o:                | NO                |
| Firefox             | :o:                | NO                |
| PC Chrome           | :o:                | NO                |
| Chrome for Android  | :o:                | NO                |
| Mac Safari 10.1+    | :o:                | YES               |
| Mobile Safari 10.3+ | :o:                | YES               |

## Documentation
- [Overview](https://github.com/uupaa/DownloadLink.js/wiki/)
- [API Spec](https://github.com/uupaa/DownloadLink.js/wiki/DownloadLink)

## Browser, NW.js and Electron

```js
<script src="<module-dir>/lib/WebModule.js"></script>
<script src="<module-dir>/lib/DownloadLink.js"></script>
<script>

if (DownloadLink.ready) {
    var data = new Uint8Array([ 1, 2, 3 ]);
    var blob = new Blob([ data ], { type: "application/octet-stream" });
    var link = new DownloadLink();

    link.create(blob, { fileName: "automatic.download" });
}
</script>
```

