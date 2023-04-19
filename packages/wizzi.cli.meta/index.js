/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.cli.meta\.wizzi-override\root\index.js.ittf
*/
'use strict';
const minimist = require('minimist');
const createEx = require('./src/cmds/createEx');
const args = minimist(process.argv.slice(2));
let cmd = args._[0];
console.log('args', args, 'cmd', cmd);
if (false) {
}
else if (cmd == 'ts-node-demo-wizzi-v08') {
    createEx({
        metaGenerator: 'ts-node', 
        context: 'demo.wizzi.v08', 
        pkgName: 'demo.ts.node.wizzi.v08', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.demo/packages/demo.ts.node.wizzi.v08'
     })
}
else if (cmd == 'ts-node-wizzi-cli-hub') {
    createEx({
        metaGenerator: 'ts-node', 
        context: 'wizzi.cli.hub', 
        pkgName: 'wizzi.cli.hub', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.cli/packages/wizzi.cli.hub'
     })
}
else if (cmd == 'ts-node-wizzi-cli-meta') {
    createEx({
        metaGenerator: 'ts-node', 
        context: 'wizzi.cli.meta', 
        pkgName: 'wizzi.cli.meta', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.cli.meta'
     })
}
else if (cmd == 'ts-node-demo') {
    createEx({
        metaGenerator: 'ts-node', 
        context: 'demo', 
        pkgName: 'demo.ts.node', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.node'
     })
}
else if (cmd == 'ts-client-vite-react') {
    createEx({
        metaGenerator: 'ts-client', 
        context: 'vite-react', 
        pkgName: 'demo.ts.client.vite.react', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.client.vite.react'
     })
}
else if (cmd == 'ts-client-webpack-react') {
    createEx({
        metaGenerator: 'ts-client', 
        context: 'webpack-react', 
        pkgName: 'demo.ts.client.webpack.react', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.client.webpack.react'
     })
}
else if (cmd == 'ts-express-studio') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'wizzi.studio', 
        pkgName: 'wizzi.studio', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.apps/packages/wizzi.studio'
     })
}
else if (cmd == 'ts-express-demo-server') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'wizzi.demo.server', 
        pkgName: 'wizzi.demo.server', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.demo/packages/wizzi.demo.server'
     })
}
else if (cmd == 'ts-express-hello') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'hello', 
        pkgName: 'demo.ts.express.hello', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.express.hello'
     })
}
else if (cmd == 'ts-express-hello-rest') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'hello-rest', 
        pkgName: 'demo.ts.express.hello.rest', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.express.hello.rest'
     })
}
else if (cmd == 'ts-express-sequelize') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'demo-sequelize', 
        pkgName: 'demo.ts.express.sequelize', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.express.sequelize'
     })
}
else if (cmd == 'ts-express-wizzi-heroku') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'wizzi-heroku', 
        pkgName: 'wizzi-heroku', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.apps/packages/wizzi-heroku'
     })
}
else if (cmd == 'ts-express-wizzi') {
    createEx({
        metaGenerator: 'ts-express', 
        context: 'wizzi', 
        pkgName: 'demo.ts.express.wizzi', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/demo.ts.express.wizzi'
     })
}
else if (cmd == 'js-vanilla-data-entry') {
    createEx({
        metaGenerator: 'js-vanilla', 
        context: 'data-entry', 
        pkgName: 'js.vanilla.data-entry', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.labs/wizzi.meta.demos/packages/js.vanilla.data-entry'
     })
}
else if (cmd == 'wizzi-plugin-first') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.first', 
        pkgName: 'wizzi.plugin.first', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.first'
     })
}
else if (cmd == 'wizzi-plugin-yaml') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.yaml', 
        pkgName: 'wizzi.plugin.yaml', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.yaml'
     })
}
else if (cmd == 'wizzi-plugin-ittf') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.ittf', 
        pkgName: 'wizzi.plugin.ittf', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.ittf'
     })
}
else if (cmd == 'wizzi-plugin-json') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.json', 
        pkgName: 'wizzi.plugin.json', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.json'
     })
}
else if (cmd == 'wizzi-plugin-xml') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.xml', 
        pkgName: 'wizzi.plugin.xml', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.xml'
     })
}
else if (cmd == 'wizzi-plugin-text') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.text', 
        pkgName: 'wizzi.plugin.text', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.text'
     })
}
else if (cmd == 'wizzi-plugin-js') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.js', 
        pkgName: 'wizzi.plugin.js', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.js'
     })
}
else if (cmd == 'wizzi-plugin-ts') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.ts', 
        pkgName: 'wizzi.plugin.ts', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.ts'
     })
}
else if (cmd == 'wizzi-plugin-md') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.md', 
        pkgName: 'wizzi.plugin.md', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.md'
     })
}
else if (cmd == 'wizzi-plugin-css') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.css', 
        pkgName: 'wizzi.plugin.css', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.css'
     })
}
else if (cmd == 'wizzi-plugin-html') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.html', 
        pkgName: 'wizzi.plugin.html', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.html'
     })
}
else if (cmd == 'wizzi-plugin-vtt') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.vtt', 
        pkgName: 'wizzi.plugin.vtt', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.vtt'
     })
}
else if (cmd == 'wizzi-plugin-vue') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.vue', 
        pkgName: 'wizzi.plugin.vue', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.vue'
     })
}
else if (cmd == 'wizzi-plugin-wzjob') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.wzjob', 
        pkgName: 'wizzi.plugin.wzjob', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.wzjob'
     })
}
else if (cmd == 'wizzi-plugin-wzschema') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.wzschema', 
        pkgName: 'wizzi.plugin.wzschema', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.wzschema'
     })
}
else if (cmd == 'wizzi-plugin-svg') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.svg', 
        pkgName: 'wizzi.plugin.svg', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.svg'
     })
}
else if (cmd == 'wizzi-plugin-graphql') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.graphql', 
        pkgName: 'wizzi.plugin.graphql', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.graphql'
     })
}
else if (cmd == 'wizzi-plugin-org') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.org', 
        pkgName: 'wizzi.plugin.org', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.org'
     })
}
else if (cmd == 'wizzi-plugin-c') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.c', 
        pkgName: 'wizzi.plugin.c', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.c'
     })
}
else if (cmd == 'wizzi-plugin-py') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.py', 
        pkgName: 'wizzi.plugin.py', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.py'
     })
}
else if (cmd == 'wizzi-plugin-regexp') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.regexp', 
        pkgName: 'wizzi.plugin.regexp', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.regexp'
     })
}
else if (cmd == 'wizzi-plugin-go') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.go', 
        pkgName: 'wizzi.plugin.go', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.go'
     })
}
else if (cmd == 'wizzi-plugin-rdbms') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.rdbms', 
        pkgName: 'wizzi.plugin.rdbms', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.rdbms'
     })
}
else if (cmd == 'wizzi-plugin-raml') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.raml', 
        pkgName: 'wizzi.plugin.raml', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.raml'
     })
}
else if (cmd == 'wizzi-plugin-java') {
    createEx({
        metaGenerator: 'js-wizzi-plugin', 
        context: 'wizzi.plugin.java', 
        pkgName: 'wizzi.plugin.java', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.plugins/packages/wizzi.plugin.java'
     })
}
else if (cmd == 'wizzi-meta-js') {
    createEx({
        metaGenerator: 'js-wizzi-meta', 
        context: 'wizzi.meta.js', 
        pkgName: 'wizzi.meta.js', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta.js'
     })
}
else if (cmd == 'wizzi-meta-js-express') {
    createEx({
        metaGenerator: 'js-wizzi-meta', 
        context: 'wizzi.meta.js.express', 
        pkgName: 'wizzi.meta.js.express', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta.js.express'
     })
}
else if (cmd == 'wizzi-meta-ts') {
    createEx({
        metaGenerator: 'js-wizzi-meta', 
        context: 'wizzi.meta.ts', 
        pkgName: 'wizzi.meta.ts', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta.ts'
     })
}
else if (cmd == 'wizzi-meta-ts-express') {
    createEx({
        metaGenerator: 'js-wizzi-meta', 
        context: 'wizzi.meta.ts.express', 
        pkgName: 'wizzi.meta.ts.express', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta.ts.express'
     })
}
else if (cmd == 'wizzi-meta-ts-client') {
    createEx({
        metaGenerator: 'js-wizzi-meta', 
        context: 'wizzi.meta.ts.client', 
        pkgName: 'wizzi.meta.ts.client', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta.ts.client'
     })
}
else if (cmd == 'wizzi-meta-package') {
    createEx({
        metaGenerator: 'js-wizzi-meta', 
        context: 'wizzi.meta.package', 
        pkgName: 'wizzi.meta.package', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta.package'
     })
}
else if (cmd == 'wizzi-meta-wizzi') {
    createEx({
        metaGenerator: 'js-wizzi-meta', 
        context: 'wizzi.meta.wizzi', 
        pkgName: 'wizzi.meta.wizzi', 
        destPath: 'C:/My/wizzi/stfnbssl/wizzi.metas/packages/wizzi.meta.wizzi'
     })
}
else {
    throw new Error("Command unknown: " + cmd);
}
