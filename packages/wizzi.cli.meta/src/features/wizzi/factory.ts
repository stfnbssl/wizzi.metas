/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi\src\features\wizzi\factory.ts.ittf
*/
import path from 'path';
import wizzi from 'wizzi';
import {fSystem} from 'wizzi-utils';
import {JsonComponents, JsonDocumentDto, JsonFs} from 'wizzi-repo';
import {packiFilePrefix} from '../config/env';
import {packiTypes} from '../packi';
import {config as appConfig} from '../config';
import * as wizziMaps from './maps';
import {JsonWizziFactory, FilesystemWizziFactory} from './types';

const myname = 'features/wizzi/factory';

export function packiFilesToJsonDocuments(files: packiTypes.PackiFiles):  JsonDocumentDto[] {

    const jsonDocuments: JsonDocumentDto[] = [];
    Object.keys(files).map((value) => {
    
        if (files[value].type === 'CODE') {
            const filePath = ensurePackiFilePrefix(value);
            jsonDocuments.push({
                path: filePath, 
                content: files[value].contents
             })
        }
    }
    )
    return jsonDocuments;
}

export async function createFilesystemFactory(globalContext?: { 
    [k: string]: any;
}):  Promise<wizzi.WizziFactory> {

    const gc: { 
        [k: string]: any;
    } = {};
    if (appConfig.isWizziDev) {
        gc['isWizziStudio'] = true;
    }
    return new Promise((resolve, reject) => 
        
            wizzi.fsFactory({
                repo: {
                    storeKind: "filesystem"
                 }, 
                plugins: {
                    items: [
                        './wizzi-core/index.js', 
                        './wizzi-js/index.js', 
                        './wizzi-web/index.js', 
                        './wizzi-meta/index.js'
                    ], 
                    pluginsBaseFolder: 'C:/My/wizzi/stfnbssl/wizzi/packages'
                 }, 
                globalContext: Object.assign({}, gc, globalContext || {})
             }, function(err: any, wf: wizzi.WizziFactory) {
            
                if (err) {
                    return reject(err);
                }
                resolve(wf);
            })
        );
}

export async function createJsonFsAndFactory(files: packiTypes.PackiFiles):  Promise<JsonWizziFactory> {

    const plugins: string[] = [];
    const jsonDocuments: JsonDocumentDto[] = [];
    Object.keys(files).map((value) => {
    
        if (files[value].type === 'CODE' && files[value].contents && files[value].contents.length > 0) {
            const filePath = ensurePackiFilePrefix(value);
            jsonDocuments.push({
                path: filePath, 
                content: files[value].contents
             })
            const pluginList = wizziMaps.pluginsFor(filePath);
            pluginList.forEach((item) => {
            
                if (plugins.indexOf(item) < 0) {
                    plugins.push(item);
                }
            }
            )
        }
    }
    )
    return new Promise((resolve, reject) => 
        
            JsonComponents.createJsonFs(jsonDocuments, (err, jsonFs) => {
            
                if (err) {
                    return reject(err);
                }
                wizzi.jsonFactory({
                    jsonFs, 
                    plugins: {
                        items: [
                            './wizzi-core/index.js', 
                            './wizzi-js/index.js', 
                            './wizzi-web/index.js', 
                            './wizzi-meta/index.js'
                        ], 
                        pluginsBaseFolder: 'C:/My/wizzi/stfnbssl/wizzi/packages'
                     }
                 }, function(err: any, wf: wizzi.WizziFactory) {
                
                    if (err) {
                        return reject(err);
                    }
                    resolve({
                        wf, 
                        jsonFs
                     })
                })
            }
            )
        );
}

export async function createJsonFs(files: packiTypes.PackiFiles):  Promise<JsonFs> {

    const jsonDocuments: JsonDocumentDto[] = [];
    Object.keys(files).map((value) => {
    
        if (files[value].type === 'CODE') {
            const filePath = ensurePackiFilePrefix(value);
            jsonDocuments.push({
                path: filePath, 
                content: files[value].contents
             })
        }
    }
    )
    return new Promise((resolve, reject) => 
        
            JsonComponents.createJsonFs(jsonDocuments, (err: any, result: JsonFs) => {
            
                if (err) {
                    return reject(err);
                }
                resolve(result);
            }
            )
        );
}

export async function extractGeneratedFiles(jsonFs: JsonFs):  Promise<packiTypes.PackiFiles> {

    const files: packiTypes.PackiFiles = {};
    return new Promise((resolve, reject) => 
        
            jsonFs.toFiles({
                removeRoot: packiFilePrefix
             }, (err: any, result: fSystem.FileDef[]) => {
            
                if (err) {
                    reject(err);
                }
                result.forEach((value) => {
                
                    if (value.relPath.endsWith('.ittf') == false) {
                        files[value.relPath] = {
                            type: 'CODE', 
                            contents: value.content as string, 
                            generated: true
                         };
                    }
                }
                )
                resolve(files);
            }
            )
        );
}

export function ensurePackiFilePrefix(filePath: string) {

    var newFilePath = normalizePath(filePath);
    return newFilePath.startsWith(packiFilePrefix) ? newFilePath : packiFilePrefix + newFilePath;
}
function normalizePath(path) {

    return path.replace(/\\/g, '/');
}
