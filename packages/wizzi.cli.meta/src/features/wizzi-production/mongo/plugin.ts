/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi\src\features\wizzi-production\mongo\plugin.ts.ittf
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IPluginProductionModel} from "../types";

const PluginProductionSchema: Schema<IPluginProductionModel> = new Schema({
    owner: String, 
    name: String, 
    description: String, 
    packiFiles: String, 
    created_at: Date, 
    updated_at: Date
 });

PluginProductionSchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

export type PluginProductionModelType = Model<IPluginProductionModel>;
    // mongoose models creation is centralized
    // the mongodb service calls buildModel() when starting, after connection has been established
    // controllers call GetPluginProductionModel() when initialized, after buildModel() has benn called
    

let PluginProductionModel: PluginProductionModelType;

export function GetPluginProductionModel():  PluginProductionModelType {

    if (!PluginProductionModel) {
        PluginProductionModel = model<IPluginProductionModel>("PluginProduction")
        ;
    }
    return PluginProductionModel;
}

export const PluginProductionModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
    
        PluginProductionModel = model<IPluginProductionModel>("PluginProduction", PluginProductionSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    
    }
    
 };
