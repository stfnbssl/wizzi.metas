/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi\src\features\wizzi\api\context.ts.ittf
*/
import path from 'path';
import {file} from 'wizzi';
import {config} from '../../config';
import * as wizziProds from '../productions';
import {ArtifactRequest, MetaContext} from '../types';
const myname = 'features.wizzi.api.context';
export async function resolveContexts(contextItems: MetaContext[]) {

    const promises: Promise<any>[] = [];
    contextItems.map(contextItem => 
    
        promises.push(new Promise((resolve, reject) => 
        
            resolveContext(contextItem).then((context: any) => 
            
                resolve({
                    name: contextItem.name, 
                    value: context
                 })
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.wizzi.api.context.resolveContexts.resolveContext.error', err);
                return reject(err);
            }
            )
        
        ))
    )
    return new Promise((resolve, reject) => 
        
            Promise.all(promises).then((items) => {
            
                var context: any = {};
                items.map((value: any) => {
                
                    if (value.name && value.name.length > 0) {
                        context[value.name] = value.value;
                    }
                    else {
                        context = Object.assign({}, context, value.value)
                        ;
                    }
                }
                )
                resolve(context)
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", 'features.wizzi.api.context.resolveContexts.Promise.all.error', err);
                return reject(err);
            }
            )
        
        );
}
function resolveContext(contextItem: MetaContext) {

    if (contextItem.source == 'json-fsIttf') {
        return new Promise(
            // TODO check contextItem.path.endsWith('.json.ittf')
            (resolve, reject) => 
            
                wizziProds.generateArtifactFs(path.join(config.ittfPath, contextItem.path as string)).then((value: any) => 
                
                    resolve(value)
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.wizzi.api.context.resolveContext.wizziProds.generateArtifactFs.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    else if (contextItem.source == 'json-dbIttf') {
        throw new Error('ContextItem source not yet implemented: ' + contextItem.source);
    }
    else if (contextItem.source == 'json-fsFile') {
        return new Promise((resolve, reject) => {
            
                const json = file.readJSON(contextItem.path as string);
                resolve(json);
            }
            );
    }
    else if (contextItem.source == 'json-value') {
        return new Promise(resolve => 
            
                resolve(contextItem.value)
            );
    }
    else if (contextItem.source == 'model-fsIttf') {
        return new Promise((resolve, reject) => 
            
                wizziProds.loadModelFs(path.join(config.ittfPath, contextItem.path as string), {}).then((value: any) => 
                
                    resolve(value)
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", 'features.wizzi.api.context.resolveContext.wizziProds.loadModelFs.error', err);
                    return reject(err);
                }
                )
            
            );
    }
    else if (contextItem.source == 'model-dbIttf') {
        throw new Error('ContextItem source not yet implemented: ' + contextItem.source);
    }
    else {
        throw new Error('Invalid contextItem source: ' + contextItem.source);
    }
}
