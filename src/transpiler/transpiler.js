module.exports = function toJavascript(pyTokens) {
    let js_code = "";
    for (let i = 0; i < pyTokens.length ; i++) {
        if (pyTokens[i].value === 'def'){
            js_code += 'function'
        } else if (pyTokens[i].value === 'print'){
            js_code += 'console.log'
        } else if (pyTokens[i].value === 'elif') {
            js_code += 'else if'
        } else if (pyTokens[i].value === ':') {
            js_code += '{'
        } else {
            js_code += pyTokens[i].value
        }
    }
    return js_code
};