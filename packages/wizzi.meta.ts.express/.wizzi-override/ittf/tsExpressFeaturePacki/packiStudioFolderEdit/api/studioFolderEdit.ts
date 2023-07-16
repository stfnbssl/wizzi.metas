/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.studio\.wizzi\src\features\packiStudioFolderEdit\api\studioFolderEdit.ts.ittf
    utc time: Sun, 07 May 2023 13:32:25 GMT
*/
import path from 'path';
import {wizziProds} from '../../wizzi';

async function getPackiFromLocalFolder(folderPath: string, rootFolder: string) {

    return new Promise((resolve, reject) => 
        
            wizziProds.scanIttfFolder(folderPath, rootFolder).then((result: any) => {
            
                if (result.fsitems) {
                }
                wizziProds.folderBrowseToPackiFiles(result).then((resultPacki: any) => {
                
                    return resolve(resultPacki);
                }
                ).catch((err: any) => {
                
                    if (typeof err === 'object' && err !== null) {
                    }
                    console.log("[31m%s[0m", '.error', err);
                    return reject(err);
                }
                )
            }
            ).catch((err: any) => {
            
                if (typeof err === 'object' && err !== null) {
                }
                console.log("[31m%s[0m", '.error', err);
                return reject(err);
            }
            )
        
        );
}

export {getPackiFromLocalFolder};
