/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi\src\features\wizzi\maps.ts.ittf
*/
import path from 'path';
type parsedFilePath = { 
    seedname: string;
    schema: string;
    isIttfDocument: boolean;
};

export function parseFilePath(filePath: string):  parsedFilePath {

    const nameParts = path.basename(filePath).split('.');
    if (nameParts[nameParts.length - 1] === 'ittf') {
        return {
                isIttfDocument: true, 
                schema: nameParts[nameParts.length - 2], 
                seedname: nameParts.slice(0, -2).join('.')
             };
    }
    else {
        return {
                isIttfDocument: false, 
                schema: nameParts[nameParts.length - 1], 
                seedname: nameParts.slice(0, -1).join('.')
             };
    }
}
const schemaArtifactMap: { 
    [k: string]: string;
} = {
    css: 'css/document', 
    html: 'html/document', 
    ittf: 'ittf/tojson', 
    js: 'js/module', 
    json: 'json/document', 
    jsx: 'js/module', 
    md: 'md/document', 
    scss: 'scss/document', 
    svg: 'svg/document', 
    text: 'text/document', 
    ts: 'ts/module', 
    tsx: 'ts/module', 
    vtt: 'vtt/document', 
    xml: 'xml/document', 
    yaml: 'yaml/document', 
    yml: 'yaml/document'
 };
export function artifactNameFromFileSchema(schema: string):  string | undefined {

    return schemaArtifactMap[schema];
}

const schemaIttfRootMap: { 
    [k: string]: string;
} = {
    css: 'css', 
    html: 'html', 
    ittf: 'any', 
    js: 'module', 
    json: '{', 
    jsx: 'module', 
    md: 'md', 
    scss: 'scss', 
    svg: 'svg', 
    text: 'text', 
    ts: 'module', 
    tsx: 'module', 
    vtt: 'vtt', 
    xml: 'xml', 
    yaml: 'yaml'
 };
export function ittfRootFromSchema(schema: string):  string | undefined {

    return schemaIttfRootMap[schema];
}

const schemaPluginMap: { 
    [k: string]: string[];
} = {
    css: [
        'wizzi-web'
    ], 
    graphql: [
        'wizzi-web'
    ], 
    html: [
        'wizzi-web', 
        'wizzi-js', 
        'wizzi-core'
    ], 
    ittf: [
        'wizzi-core'
    ], 
    js: [
        'wizzi-js'
    ], 
    json: [
        'wizzi-core'
    ], 
    scss: [
        'wizzi-web'
    ], 
    text: [
        'wizzi-core'
    ], 
    ts: [
        'wizzi-js'
    ], 
    vtt: [
        'wizzi-web'
    ], 
    vue: [
        'wizzi-web'
    ], 
    wfjob: [
        'wizzi-core'
    ], 
    wfschema: [
        'wizzi-core'
    ], 
    xml: [
        'wizzi-core'
    ], 
    yaml: [
        'wizzi-core'
    ]
 };
export function pluginsFor(file: string):  string[] {

    const nameParts = path.basename(file).split('.');
    if (nameParts[nameParts.length - 1] === 'ittf') {
        return schemaPluginMap[nameParts[nameParts.length - 2]] || [];
    }
    return [];
}

export function generatorFor(filePath: string):  string | undefined {

    const pf = parseFilePath(filePath);
    if (pf.isIttfDocument) {
        return artifactNameFromFileSchema(pf.schema);
    }
    return undefined;
}

const extSchemaMap: { 
    [k: string]: string;
} = {
    '.css': 'css', 
    '.graphql': 'graphql', 
    '.html': 'html', 
    '.ittf': 'ittf', 
    '.js': 'js', 
    '.json': 'json', 
    '.jsx': 'js', 
    '.md': 'md', 
    '.svg': 'svg', 
    '.text': 'text', 
    '.ts': 'ts', 
    '.tsx': 'ts', 
    '.vtt': 'vtt', 
    '.xml': 'xml', 
    '.yaml': 'yaml', 
    '.yml': 'yaml'
 };

export function schemaFromExtension(extension: string):  string | undefined {

    return extSchemaMap[extension];
}

const schemaTransformerMap: { 
    [k: string]: string;
} = {
    meta: 'ittf/cheatsheet'
 };

export function transformerFor(filePath: string):  string | undefined {

    const pf = parseFilePath(filePath);
    if (pf.isIttfDocument) {
        return schemaTransformerMap[pf.schema];
    }
    return undefined;
}

export function schemaFromFilePath(filePath: string):  string | undefined {

    const pf = parseFilePath(filePath);
    if (pf.isIttfDocument) {
        return pf.schema;
    }
    return undefined;
}

export function wrapperForSchema(schema: string) {

    if (schema === 'js' || schema === 'jsx') {
        return {
                n: 'module', 
                children: [
                    {
                        n: 'kind', 
                        v: 'react', 
                        children: [
                            
                        ]
                     }
                ]
             };
    }
    else if (schema === 'ts') {
        return {
                n: 'module', 
                children: [
                    
                ]
             };
    }
    else {
        return {
                n: schema, 
                children: [
                    
                ]
             };
    }
}
const extContentTypeMap: { 
    [k: string]: string;
} = {
    '.css': 'text/css', 
    '.gif': 'image/gif', 
    '.html': 'text/html', 
    '.ittf': 'text/plain', 
    '.jpeg': 'image/jpeg', 
    '.jpg': 'image/jpg', 
    '.js': 'text/javascript', 
    '.jsx': 'text/javascript', 
    '.json': 'application/json', 
    '.png': 'image/png', 
    '.scss': 'text/scss', 
    '.svg': 'image/svg+xml', 
    '.ts': 'text/typescript', 
    '.tsx': 'text/typescript', 
    '.ttf': 'application/x-font-ttf', 
    '.txt': 'text/plain', 
    '.vtt': 'text/vtt', 
    '.woff': 'application/x-font-woff', 
    '.xml': 'text/xml', 
    '.yaml': 'text/yanl', 
    '.yml': 'text/yanl'
 };

export function contentTypeFor(filePath: string):  string | undefined {

    const ittfSchema = schemaFromFilePath(filePath);
    if (ittfSchema) {
        return extContentTypeMap['.' + ittfSchema];
    }
    return undefined;
}
