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

function callScanner() {
    var pycode = myPythonCode.getValue();
    console.log(pycode);
}


