cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-localstorage-backup.LocalStorageBackup",
        "file": "plugins/cordova-plugin-localstorage-backup/www/LocalStorageBackup.js",
        "pluginId": "cordova-plugin-localstorage-backup",
        "clobbers": [
            "LocalStorageBackup"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-localstorage-backup": "0.0.1",
    "cordova-plugin-whitelist": "1.3.1-dev",
    "cordova-plugin-inappbrowser": "1.5.0"
};
// BOTTOM OF METADATA
});