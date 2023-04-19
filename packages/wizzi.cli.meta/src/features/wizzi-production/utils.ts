/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi\src\features\wizzi-production\utils.ts.ittf
*/
import {packiTypes} from '../packi';
export function createInitialPackiFiles(contexts: string, tfolders: string, wizziSchema: string, mainIttf: string) {

    const packiFiles: packiTypes.PackiFiles = {};
    if (wizziSchema && mainIttf) {
        packiFiles[mainIttf] = {
            type: 'CODE', 
            contents: wizziSchema
         };
    }
    packiFiles['.packi/config.json.ittf'] = {
        type: 'CODE', 
        contents: createPackiConfigContents(contexts, tfolders)
     };
    return packiFiles;
}
export function createPackiConfigContents(contexts: string, tfolders: string) {

    const tfoldersObj = JSON.parse(tfolders || '[]');
    const contextsObj = JSON.parse(contexts || '[]');
    const sb = [];
    sb.push('{');
    sb.push('\t[ tfolders');
    var i, i_items=tfoldersObj, i_len=tfoldersObj.length, tf;
    for (i=0; i<i_len; i++) {
        tf = tfoldersObj[i];
        sb.push('\t\t{');
        sb.push('\t\t\tname "' + tf.name + '"');
    }
    sb.push('\t[ contexts');
    var i, i_items=contextsObj, i_len=contextsObj.length, ctx;
    for (i=0; i<i_len; i++) {
        ctx = contextsObj[i];
        sb.push('\t\t{');
        sb.push('\t\t\tpropertyName "' + ctx.propertyName + '"');
        sb.push('\t\t\tartifactName "' + ctx.artifactName + '"');
    }
    return sb.join('\n');
}
export function mergePackiFiles(current: packiTypes.PackiFiles, toadd: packiTypes.PackiFiles, options?: any) {

    options = options || {};
    var ret: packiTypes.PackiFiles = {};
    for (var k in current) {
        ret[k] = current[k];
    }
    for (var k in toadd) {
        const filePath = options.mergeToFolder ? stripStartSlash(stripEndSlash(options.mergeToFolder)) + '/' + stripStartSlash(k) : k;
        ret[filePath] = toadd[k];
    }
    return ret;
}
function stripEndSlash(path) {

    return path.endsWith('/') ? path.substring(0, path.length - 1) : path;
}
function stripStartSlash(path) {

    return path.startsWith('/') ? path.substring(1) : path;
}
