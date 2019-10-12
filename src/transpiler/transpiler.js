/* Helper Functions */

// Count the total lines in the input code
function getTotalLines(tokens){
    let lines = 1;
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].value === '\n') lines++
    }
    return lines;
}

// Returns the lines of code in a two-dimensional array
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

// Returns an array to measure the level of indentation of each line
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

// Insert new block closure lines
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

// Adapt the specified loops to the new syntax
function updateLoopSyntax(lines) {
    let loops = ["if", "elif", "while"];
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            for (let k = 0; k < loops.length; k++) {
                if (lines[i][j] === loops[k]){
                    lines[i].splice(j+2 , 0, "(");
                    lines[i].splice(lines[i].length-2 , 0, ")");
                }
            }
        }
    }
    return lines;
}

// Makes literal substitutions in the incoming code
function literalChanges(lines) {
    for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
            // console.log(lines[i][j])
            if (lines[i][j] === "def") lines[i][j] = "function";
            if (lines[i][j] === "print") lines[i][j] = "console.log";
            if (lines[i][j] === "elif") lines[i][j] = "else if";
            if (lines[i][j] === ":") lines[i][j] = "{";
            if (lines[i][j] === "True") lines[i][j] = "true";
            if (lines[i][j] === "False") lines[i][j] = "false";
            if (lines[i][j].startsWith("#")){
                let comment = lines[i][j].split("#");
                lines[i][j] = "//" + comment[1]
            }
        }
    }
    return lines
}

// Convert a two-dimensional array into an ordered string
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
    let total_lines = getTotalLines(pyTokens);
    let lines = getLines(pyTokens, total_lines);
    let tabs = getTabs(lines);
    // Line analysis
    lines = insertNewLines(lines, tabs);
    lines = updateLoopSyntax(lines);
    // Literal substitution
    lines = literalChanges(lines);
    return arrToStr(lines)
};