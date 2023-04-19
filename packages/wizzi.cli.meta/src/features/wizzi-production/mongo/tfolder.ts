/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi\src\features\wizzi-production\mongo\tfolder.ts.ittf
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {ITFolderModel} from "../types";

const TFolderSchema: Schema<ITFolderModel> = new Schema({
    owner: String, 
    name: String, 
    description: String, 
    packiFiles: String, 
    created_at: Date, 
    updated_at: Date
 });

TFolderSchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

export type TFolderModelType = Model<ITFolderModel>;
    // mongoose models creation is centralized
    // the mongodb service calls buildModel() when starting, after connection has been established
    // controllers call GetTFolderModel() when initialized, after buildModel() has benn called
    

let TFolderModel: TFolderModelType;

export function GetTFolderModel():  TFolderModelType {

    if (!TFolderModel) {
        TFolderModel = model<ITFolderModel>("TFolder")
        ;
    }
    return TFolderModel;
}

export const TFolderModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
    
        TFolderModel = model<ITFolderModel>("TFolder", TFolderSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    
    }
    
 };
