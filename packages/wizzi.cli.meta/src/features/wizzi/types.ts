/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi\src\features\wizzi\types.ts.ittf
*/
import * as wizzi from 'wizzi';
import {JsonFs} from 'wizzi-repo';
import {packiTypes} from '../packi';

export type FilesystemWizziFactory = { 
    wf: wizzi.WizziFactory;
};
export type JsonWizziFactory = { 
    wf: wizzi.WizziFactory;
    jsonFs: JsonFs;
};
export type GeneratedArtifact = { 
    artifactContent: string;
    sourcePath: string;
    artifactGenerator: string;
};
export type TransformedModel = { 
    transformResult: any;
    sourcePath: string;
    modelTransformer: string;
};

export type IttfDocumentSource = 'fs' | 'packi' | 'db' | 'text';

export type ContextSource = 'json-fsIttf' | 'json-packiIttf' | 'json-dbIttf' | 'json-fsFile' | 'json-value' | 'model-fsIttf' | 'model-packiIttf' | 'model-dbIttf';

export type MetaIttfDocument = { 
    source: IttfDocumentSource;
    path?: string;
    mainIttf?: string;
    rootFolder?: string;
    packiFiles?: packiTypes.PackiFiles;
    wizziSchema?: string;
    text?: string;
};

export type MetaContext = { 
    name?: string;
    source: ContextSource;
    path?: string;
    mainIttf?: string;
    packiFiles?: packiTypes.PackiFiles;
    value?: object;
};

export type ArtifactRequest = { 
    ittfDocument: MetaIttfDocument;
    contextItems: MetaContext[];
};
