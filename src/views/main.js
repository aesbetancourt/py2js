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
function callScanner2() {
    let ktcode = myKotlinCode.getValue();
    let tokens2 = scanner(ktcode);
    console.log(tokens2);
}

/* Shells execution */

async function runPython() {
    let code = myPythonCode.getValue();
    pythonShell(code);
}
/* Set editor text */
function setpyvalue(text){
    var pycode = myPythonCode.setValue(text);
}
function setktvalue(text){
    var ktcode = myKotlinCode.setValue(text);
}


