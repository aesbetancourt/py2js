const pyscan = require("../scanner/python_analyzer");
const pyparser = require("../parser/python_parser");
const ktscan = require("../scanner/kotlin_analizer");
const pythonShell = require('../shell/python');

/* CodeMirror Window */
// Python
const myPythonCode = CodeMirror(document.getElementById("python-code"), {
    mode:  "python",
    lineNumbers: true,
    theme: "nord"
});
// Javascript
const myKotlinCode = CodeMirror(document.getElementById("kotlin-code"), {
    mode:  "clike",
    lineNumbers: true,
    theme: "nord"
});


/* Lexical/Syntax Analysis */
async function callPyScanner() {
    let pycode = myPythonCode.getValue();
    // Lexical
    let tokens = pyscan(pycode);
    // Syntactic
    let ast = await pyparser(tokens, false, false);
    // console.log(ast);
}



function callKtScanner() {
    let ktcode = myKotlinCode.getValue();
    let tokens2 = ktscan(ktcode);
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



/* Select Language Arrow */
var band=0;
function arrow(){
    if(band===0){
        document.getElementById('icon').style.transform = 'rotateZ(-180deg)';
        band=1;
    }else{
        document.getElementById('icon').style.transform = 'rotateZ(0deg)';
        band=0;
    }
}

function select_scanner(){
    // Change 1 to 0 when everything is ready
    if(band===1){
        callPyScanner();
    }else{
        //console.log('kt scanner')
        callKtScanner();
    }
}
function runCode(){
    if(band===1){
        runPython()
    }else{
        runKotlin()
    }
}

/* Import py or kt files */

function importpy(){
    var file=document.getElementById('imp_py').files[0];;
    document.getElementById('imp_py').value="";
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');
    reader.onload = readerEvent => {
        var content = readerEvent.target.result;
        setpyvalue(content);
    }
}
function importkt(){
    var file=document.getElementById('imp_kt').files[0];
    document.getElementById('imp_kt').value="";
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');
    reader.onload = readerEvent => {
        var content = readerEvent.target.result;
        setktvalue(content);
    }
}
