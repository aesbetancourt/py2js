const tokens = require('./tokens/python/tokens');
const lexr = require('lexr');

const tokenizer = new lexr.Tokenizer("");


tokenizer.addTokenSet(tokens);

module.exports = function scanner(data) {
    return tokenizer.tokenize(data.toString())
};



