/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi\src\App.ts.ittf
*/
import {ConfigType, config} from './features/config/index';
import {ModelBuilderType} from './features/app';
import {mongodbStart, close as mongodbClose} from './services/mongodb';
import {productionModelBuilders} from './features/wizzi-production/index';

async function startServices(config: ConfigType) {

    let modelBuilders: ModelBuilderType[] = [
        ...productionModelBuilders
    ];
    await mongodbStart(config, modelBuilders);
    return {
            mongodbClose
         };
}

async function start() {

    const services = await startServices(config);
    return {
            services
         };
}

export default {
        start
     }
