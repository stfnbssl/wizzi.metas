/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi\src\features\wizzi-production\index.ts.ittf
*/
import {ModelBuilderType} from '../app/types';
import * as productionTypes from './types';
import {ArtifactProductionModelBuilder, GetArtifactProductionModel} from './mongo/artifact';
import {PackageProductionModelBuilder, GetPackageProductionModel} from './mongo/package';
import {PluginProductionModelBuilder, GetPluginProductionModel} from './mongo/plugin';
import {MetaProductionModelBuilder, GetMetaProductionModel} from './mongo/meta';
import {TFolderModelBuilder, GetTFolderModel} from './mongo/tfolder';
import * as artifactApi from './api/artifact';
import * as packageApi from './api/package';
import * as pluginApi from './api/plugin';
import * as metaApi from './api/meta';
import * as tFolderApi from './api/tfolder';
import * as productionApi from './api/production';

const productionModelGetters = {
    GetArtifactProductionModel, 
    GetPackageProductionModel, 
    GetPluginProductionModel, 
    GetMetaProductionModel, 
    GetTFolderModel
 };

const productionModelBuilders: ModelBuilderType[] = [
    ArtifactProductionModelBuilder, 
    PackageProductionModelBuilder, 
    PluginProductionModelBuilder, 
    MetaProductionModelBuilder, 
    TFolderModelBuilder
];


export {productionTypes, productionModelGetters, productionModelBuilders, artifactApi, packageApi, pluginApi, metaApi, tFolderApi, productionApi};
