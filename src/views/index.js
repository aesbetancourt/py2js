const Swal = require('sweetalert2');
const pyScan = require("../scanner/python_analyzer");
const pyParser = require("../parser/python_parser");
// const ktscan = require("../scanner/kotlin_analizer");
const pythonShell = require('../shell/python');
const transpile = require('../transpiler/transpiler');

/* CodeMirror Window */
// Python
const myPythonCode = CodeMirror(document.getElementById("python-code"), {
    mode:  "python",
    lineNumbers: true,
    theme: "nord"
});
// Javascript
const myJsCode = CodeMirror(document.getElementById("kotlin-code"), {
    mode:  "javascript",
    lineNumbers: true,
    theme: "nord"
});


/*   Lexical/Syntax Analysis   */
async function callTranspiler() {
    let py_code = myPythonCode.getValue();
    // Lexical
    let tokens = pyScan(py_code);
    // console.log(tokens);
    // Syntactic
    let ast = await pyParser(tokens, false, false);
    let syntax_errors = ast[0];
    if (!syntax_errors){
        let outCode = transpile(tokens);
        setJsValue(outCode);
        // console.log(ast[1]);
    } else {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: ast[1]
        })
    }
}



// function callKtScanner() {
//     let ktcode = myJsCode.getValue();
//     let tokens2 = ktscan(ktcode);
//     console.log(tokens2);
// }

/* Shells execution */
async function runPython() {
    let code = myPythonCode.getValue();
    pythonShell(code);
}
/* Set editor text */
function setJsValue(text){
    myJsCode.setValue(text);
}

 function setpyvalue(text){
     myPythonCode.setValue(text);
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
        callTranspiler();
    }else{
        //console.log('kt scanner')
        // callKtScanner();
    }
}
function runCode(){
    if(band===1){
        runPython()
    }else{
        // runKotlin()
    }
}

/* Import py or kt files */
function importpy(){
    var file=document.getElementById('imp_py').files[0];
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
         setJsValue(content);
     }
 }
