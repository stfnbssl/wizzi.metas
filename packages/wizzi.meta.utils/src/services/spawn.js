/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.metas\packages\wizzi.meta.utils\.wizzi\src\services\spawn.js.ittf
    utc time: Tue, 06 Feb 2024 04:37:06 GMT
*/
'use strict';
const spawn = require("child_process").spawn;
const EventEmitter = require("events").EventEmitter;
const verify = require("@wizzi/utils").verify;

const md = module.exports = {};

md.isWin = () => {

    // TODO if you ever want make this multiplatform
    return true;
}
;
/**
    
     Creates the child process.
    
     params
     string command   The command you want to run.
     [ args           The command arguments.
     { options        The options to pass to the `spawn`
     boolean output      If truly, the output will be piped in the process stdout/stderr streams.
     ??? `data` (String|Boolean): If `false`, the `stdin` stream will not be ended. By default this is an empty string.
     https://nodejs.org/api/child_process.html#child_processexecfilefile-args-options-callback
     function cb       The callback function.
     returns
     function cb   The process object {Process}.
    
*/
md.spawn = (command, args, options, cb) => {

    if (typeof args === "function") {
        cb = args;
        args = [];
        options = {};
    }
    if (typeof options === "function") {
        cb = options;
        if (!Array.isArray(args)) {
            options = args;
            args = [];
        }
        else {
            options = {};
        }
    }
    options = options || {};
    console.log('spawn.cb', cb, __filename);
    if (options.input !== false) {
        options.input = options.input || "";
    }
    let showOutput = options.output,
        inputData = options.input;
    delete options.output
    delete options.input
    console.log('md.spawn.command', command, __filename);
    console.log('md.spawn.args', args, __filename);
    console.log('md.spawn.options', options, __filename);
    let proc = spawn(command, args, options);
    if (showOutput) {
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
    }
    if (inputData !== false) {
        proc.stdin && proc.stdin.end(inputData)}
    if (cb) {
        md.procOutput(proc, cb);
    }
    return proc;
}
;
/**
    
     The promise interface of md.spawno.
    
     resolve
     {
     string code
     string stdout
     string stderr
    
*/
md.spawnPromise = (command, args, options) => {

    return new Promise((resolve, reject) => 
        
            md.spawn(command, args, options, (err, stdout, stderr, code) => {
            
                if (err) {
                    return reject(err);
                }
                resolve({
                    code, 
                    stdout, 
                    stderr
                 })
            }
            )
        );
}
;
/**
     taken+modifyed from https://github.com/IonicaBizau/proc-output/blob/master/lib/index.js
     params
     { proc        The process object (Process).
     function cb   The callback function.
     returns
     function cb   The process object {Process}.
*/
md.procOutput = (proc, options, cb) => {

    if (typeof options === "function") {
        cb = options;
        options = {};
    }
    let stdout = "",
        stderr = "";
    proc.on("error", err => 
    
        cb(err)
    )
    proc.stdout.on("data", (chunk) => {
    
        if (options.res) {
        }
        else {
            stdout += chunk;
        }
    }
    )
    proc.stderr.on("data", chunk => 
    
        stderr += chunk
    )
    proc.on("close", code => 
    
        cb(null, stdout, stderr, code)
    )
    return proc;
}
;
/**
     PowerShell ouput
     params
     { proc        The process object (Process).
     function cb   The callback function.
     returns
     function cb   The process object {Process}.
*/
md.psOutput = (proc, options, cb) => {

    if (typeof options === "function") {
        cb = options;
        options = {};
    }
    let stdout = "",
        stderr = "";
    proc.on("error", err => 
    
        cb(err)
    )
    proc.on("output", (chunk) => {
    
        if (options.res) {
        }
        else {
            stdout += chunk;
        }
    }
    )
    proc.on("error-output", chunk => 
    
        stderr += chunk
    )
    proc.on("end", code => 
    
        cb(null, stdout, stderr, code)
    )
    return proc;
}
;
/**
    
     PowerShell
    
     params
     string input     The command or PowerShell script ro execute.
     { opt            An object containing the following fields:
     boolean debug        Turn on/off the debug messages (default: `false`).
     boolean noprofile    Turn on/off noprofile parameter (default: `true`).
     enum executionpolicy Run powershell with specified executionpolicy (default: System default).
     `Restricted`, `AllSigned`, `RemoteSigned`, `Unrestricted`, `Bypass`, `Undefined`.
     boolean PSCore       Turn on/off 'pwsh' the executable for PowerShell Core as opposed to Windowes PowerShell (default: 'false').
     function cb            The callback function (optional).
    
*/
md.PowerShell = class PowerShell extends EventEmitter {
    constructor(input, opt, cb) {
        super();
        console.log('PowerShell.opt', opt, __filename);
        console.log('PowerShell.cb', cb, __filename);
        opt = opt || {};
        const opt_debug = verify.isUndefined(opt.debug) ? false : opt.debug;
        const opt_noprofile = verify.isUndefined(opt.noprofile) ? true : opt.noprofile;
        const opt_PSCore = verify.isUndefined(opt.PSCore) ? false : opt.PSCore;
        const opt_executionpolicy = opt.executionpolicy;
        delete opt.debug
        delete opt.noprofile
        delete opt.noprofile
        delete opt.PSCore
        const EXE_NAME = (opt_PSCore ? 'pwsh' : 'powershell') + (md.isWin() ? ".exe" : "");
        let args = [];
        if (opt_noprofile) {
            args.push("-NoProfile");
        }
        if (!verify.isUndefined(opt_executionpolicy)) {
            args.push("-ExecutionPolicy", opt_executionpolicy);
        }
        args.push("-Command", "& {" + input + "}");
        opt.stdio = [
            "ignore", 
            "pipe", 
            "pipe"
        ];
        let _proc = this.proc = md.spawn(EXE_NAME, args, opt, cb)
        ;
        _proc.stdout.setEncoding("utf8");
        _proc.stderr.setEncoding("utf8");
        _proc.on("error", err => 
        
            this.emit("error", err)
        )
        if (opt_debug) {
            console.log(`<${EXE_NAME}> Starting ${_proc.pid} on ${process.platform}`)
        }
        let chunks = [];
        _proc.stdout.on("data", (chunk) => {
        
            if (typeof chunk === "string") {
                chunks.push(chunk);
            }
            else {
                chunks.push.apply(chunks, chunk);
            }
        }
        )
        _proc.stderr.on("data", err => 
        
            this.emit("error-output", err)
        )
        _proc.on("close", (code) => {
        
            if (opt_debug) {
                console.log(`<${EXE_NAME}> Process ${_proc.pid} exited with code ${code}`)
            }
            this.emit("output", chunks.join(""));
            this.emit("end", code);
        }
        )
    }
}
;
