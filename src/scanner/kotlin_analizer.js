const ktokens = require('./tokens/kotlin/tokens');
const lexr = require('lexr');

const tokenizer = new lexr.Tokenizer("");


tokenizer.addTokenSet(ktokens);

module.exports = function scanner(data) {
    return tokenizer.tokenize(data.toString())
};