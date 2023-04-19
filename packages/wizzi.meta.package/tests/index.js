const { createFactoryMeta } = require('../index');

createFactoryMeta({}, {}, function(err, meta) {
    if (err) 
    { 
        console.log(err); return; 
    }
    const folderTemplates = {};
    const ittfDocumentTemplates = {};
    meta.getMetaProductions(folderTemplates, ittfDocumentTemplates, function(err, result) {
        if (err) 
        { 
            console.log(err); return; 
        }
        console.log(result);
    })
})