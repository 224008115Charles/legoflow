'use strict';

const path = require('path');
const updater = require('electron-cover-updater');

const { lab, root, version } = __config;

const isPOP = lab ? 'preview' : 'publish';

updater.config( {
    root,
    versionURL: 'https://lilijialiang.com/legoflow/2/version.json',
    versionField: isPOP,
    zipURL: `https://lilijialiang.com/legoflow/2/${ isPOP }`,
    isDiffSystem: false,
    packageJsonFile: path.resolve( root, './package.json' ),
    nowVersion: version,
} )

exports.check = ( ) => {
    return updater.check( );
};

exports.update = updater.update;
exports.updating = updater.updating;