/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi\src\features\wizzi-production\types.ts.ittf
*/

import {Document} from "mongoose";
import {packiTypes} from '../packi';

export type PackiProduction = 'artifact' | 'package' | 'meta' | 'plugin' | 'tfolder';

export type IArtifactProduction = { 
    owner: string;
    name: string;
    description: string;
    mainIttf: string;
    wizziSchema: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type IArtifactProduction_doc = { 
    _doc: IArtifactProduction;
};

export interface IArtifactProductionModel extends IArtifactProduction, IArtifactProduction_doc, Document {
}

export type IPackageProduction = { 
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type IPackageProduction_doc = { 
    _doc: IPackageProduction;
};

export interface IPackageProductionModel extends IPackageProduction, IPackageProduction_doc, Document {
}

export type IPluginProduction = { 
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type IPluginProduction_doc = { 
    _doc: IPluginProduction;
};

export interface IPluginProductionModel extends IPluginProduction, IPluginProduction_doc, Document {
}

export type IMetaProduction = { 
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type IMetaProduction_doc = { 
    _doc: IMetaProduction;
};

export interface IMetaProductionModel extends IMetaProduction, IMetaProduction_doc, Document {
}

export type ITFolder = { 
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type ITFolder_doc = { 
    _doc: ITFolder;
};

export interface ITFolderModel extends ITFolder, ITFolder_doc, Document {
}

export type PackiProductionObject = { 
    _id: string;
    owner: string;
    name: string;
    description: string;
    mainIttf?: string;
    wizziSchema?: string;
    packiFiles: packiTypes.PackiFiles;
    created_at: Date;
    updated_at: Date;
    packiProduction: string;
    packiConfig?: packiTypes.PackiFile;
    packiConfigObj?: any;
};
