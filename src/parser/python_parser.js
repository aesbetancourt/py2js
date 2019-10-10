const filbert = require('filbert');
const {PythonShell} = require('python-shell');

module.exports = async function parser(tokens, ranges, locations) {
    let parseFn = filbert.parse;
    let code = "";
    for (let i = 0; i < tokens.length; i++) {
        code += tokens[i].value
    }
    return await PythonShell.checkSyntax(code).then(() => {
        let ast = parseFn(code, {locations: locations, ranges: ranges});
        return [false, JSON.stringify(ast, null, 2)];
    }).catch((err)=>{
        return [true, err]
    })
};