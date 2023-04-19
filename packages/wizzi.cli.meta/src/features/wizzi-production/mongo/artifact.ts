/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.cli\packages\wizzi.cli.meta\.wizzi\src\features\wizzi-production\mongo\artifact.ts.ittf
*/
import {Schema, Model, model} from "mongoose";
import {ModelBuilderType} from "../../app/types";
import {IArtifactProductionModel} from "../types";

const ArtifactProductionSchema: Schema<IArtifactProductionModel> = new Schema({
    owner: String, 
    name: String, 
    description: String, 
    wizziSchema: String, 
    mainIttf: String, 
    packiFiles: String, 
    created_at: Date, 
    updated_at: Date
 });

ArtifactProductionSchema.index({
    owner: 1, 
    name: 1
 }, {
    unique: true
 })

export type ArtifactProductionModelType = Model<IArtifactProductionModel>;
    // mongoose models creation is centralized
    // the mongodb service calls buildModel() when starting, after connection has been established
    // controllers call GetArtifactProductionModel() when initialized, after buildModel() has benn called
    

let ArtifactProductionModel: ArtifactProductionModelType;

export function GetArtifactProductionModel():  ArtifactProductionModelType {

    if (!ArtifactProductionModel) {
        ArtifactProductionModel = model<IArtifactProductionModel>("ArtifactProduction")
        ;
    }
    return ArtifactProductionModel;
}

export const ArtifactProductionModelBuilder: ModelBuilderType = {
    buildModel: (options?: any) => 
    
        ArtifactProductionModel = model<IArtifactProductionModel>("ArtifactProduction", ArtifactProductionSchema)
    
    , 
    applyExtraSetup: (options?: any) => {
    
    }
    
 };
