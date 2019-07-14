const tokens = require('./tokens/python/tokens');
const tokens2 = require('./tokens/kotlin/tokens');
const lexr = require('lexr');
const tokenizer = new lexr.Tokenizer("");
const tokenizer2 = new lexr.Tokenizer("");
tokenizer.addTokenSet(tokens);
tokenizer2.addTokenSet(tokens2);
module.exports = function scanner(data) {
    return tokenizer.tokenize(data.toString())
};

module.exports = function scanner2(data) {
    return tokenizer2.tokenize(data.toString())
};

