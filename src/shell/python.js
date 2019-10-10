const {PythonShell} = require('python-shell');

function showOutput(output) {
    document.getElementById("shell-area").value = output;
}

module.exports = function run(code) {
     PythonShell.runString(code, null, function (err, results) {
        if (err) throw err;
        showOutput(results)
    });
};
