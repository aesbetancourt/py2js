// Count the total lines in the input code
function getTotalLines(tokens){
    let lines = 1;
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].value === '\n') lines++
    }
    return lines;
}

function getLines(tokens, total_lines){
    let lines = [];
    let list = [];
    let index = 0;
    for (let j = 0; j < total_lines; j++) {
        for (index; index < tokens.length; index++) {
            list.push(tokens[index].value);
            if (tokens[index].value === '\n'){
                index++;
                break
            }
        }
        lines.push(list);
        list = []
    }
    return lines
}

function getTabs(lines){
    let tabs = [];
    let aux = 0;
    for (let i = 0; i < lines.length; i++) {
        aux = 0;
        for (let j = 0; j < lines[i].length; j++) {
            if (lines[i][j] === "  ") {
                aux++
            }
        }
        tabs.push(aux);
        aux = 0
    }

    return tabs
}

function insertNewLines(lines, tabs){
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i] > tabs[i+1]){
            let lvl = Math.abs(tabs[i+1] - tabs[i]);
            for (let j = 0; j < lvl; j++) {
                lines.splice(i+1 , 0, "  ".repeat(j) + "}\n")
            }
        }
    }
    return lines
}

function arrToStr(lines){
    let out = '';
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            out += lines[i][j]
        }
    }
    return out
}

module.exports = function toJavascript(pyTokens) {
    let js_code;
    // let js_test = "";
    let total_lines = getTotalLines(pyTokens);
    let lines = getLines(pyTokens, total_lines);
    let tabs = getTabs(lines);
    lines = insertNewLines(lines, tabs);
    js_code = arrToStr(lines);
    // console.log(js_test);




    // for (let i = 0; i < pyTokens.length ; i++) {
    //     // Literals
    //     if (pyTokens[i].value === 'def'){
    //         js_code += 'function'
    //     } else if (pyTokens[i].value === 'print'){
    //         js_code += 'console.log'
    //     } else if (pyTokens[i].value === 'elif') {
    //         js_code += 'else if'
    //     } else if (pyTokens[i].value === ':') {
    //         js_code += '{'
    //     } else {
    //         js_code += pyTokens[i].value
    //     }
    // }

    return js_code
};