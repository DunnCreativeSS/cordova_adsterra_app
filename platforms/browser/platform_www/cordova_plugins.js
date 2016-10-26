cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-localstorage-backup/www/LocalStorageBackup.js",
        "id": "cordova-plugin-localstorage-backup.LocalStorageBackup",
        "pluginId": "cordova-plugin-localstorage-backup",
        "clobbers": [
            "LocalStorageBackup"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1-dev",
    "cordova-plugin-localstorage-backup": "0.0.1"
}
// BOTTOM OF METADATA
});