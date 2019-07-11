const scanner = require("../scanner/lexical_analyzer");
const pythonShell = require('../shell/python');


/* CodeMirror windows */

const myPythonCode = CodeMirror(document.getElementById("python-code"), {
    mode:  "python",
    lineNumbers: true,
    theme: "nord"
});
const myKotlinCode = CodeMirror(document.getElementById("kotlin-code"), {
    mode:  "clike",
    lineNumbers: true,
    theme: "nord"
});


/* Lexical Analyzer */

function callScanner() {
    let pycode = myPythonCode.getValue();
    let tokens = scanner(pycode);
    console.log(tokens);
}


/* Shells execution */

async function runPython() {
    let code = myPythonCode.getValue();
    pythonShell(code);
}



