const identifier = require("./identifierRegex.js");
const { fullStringLiteral,
        whiteSpace,
        comments,
        fullNumericLiteral,
        fullRegularExpressionLiteral,
        lineTerminatorSequence } = require("./extendedRegex");


const pytokens = {
//    Whitespaces, comments and new lines
    WHITESPACE: whiteSpace,
    COMMENT: comments,
    NEWLINE: lineTerminatorSequence,
    TAB : /  /,

//    Identifiers
    IDENTIFIER: identifier,
//    Keywords
    IMPORT: /import/,
    FROM: /from/,
    GLOBAL: /global/,
    NONLOCAL: /nonlocal/,

    WHILE: /while/,
    FOR: /for/,
    IF: /if/,
    ELSE: /else/,
    ELIF: /elif/,
    RANGE: /range/,

    BREAK: /break/,
    CONTINUE: /continue/,


    AND: /and/,
    OR: /or/,
    NOT: /not|!/,
    IS: /is/,
    IN:/in/,

    CLASS: /class/,
    DEF : /def/,
    LAMBDA: /lambda/,
    YIELD: /yield/,
    RETURN: /return/,
    DEL: /del/,
    WITH: /with/,


    TRY: /try/,
    EXCEPT: /except/,
    PASS: /pass/,
    RAISE: /raise/,
    FINALLY: /finally/,
    EXEC: /exec/,

    ASSERT: /assert/,
    AS: /as/,

    PRINT: /print/,
    SCAN:  /scan/,




    L_BRACE        : /{/,
    R_BRACE        : /}/,
    L_PAREN        : /\(/,
    R_PAREN        : /\)/,
    L_BRACKET      : /\[/,
    R_BRACKET      : /\]/,
    DOT            : /\./,
    SEMI_COLON     : /;/,
    COMMA          : /,/,
    L_THAN         : /</,
    G_THAN         : />/,
    L_THAN_EQ      : /<=/,
    G_THAN_EQ      : />=/,
    EQUAL          : /==/,
    NOT_EQ         : /!=|<>/,
    ADD            : /\+/,
    SUB_OR_NEG     : /-/,
    MUL            : /\*/,
    EXP            : /\*\*/,
    MOD            : /%/,
    DIV            : /\//,
    DIV_ENT      : /\/\//,
    INC            : /\+\+/,
    DECR           : /--/,
    BIT_AND        : /&/,
    BIT_OR         : /|/,
    XOR            : /^/,
    BIT_NOT        : /~/,

    START_BLOCK    : /:/,
    ASSIGN         : /=/,
    ADD_ASSIGN     : /\+=/,
    SUB_ASSIGN     : /-=/,
    EXP_ASSIGN     : /\*\*=/,
    DIVENT_ASSIGN  : /\/\/=/,
    MUL_ASSIGN     : /\*=/,
    MOD_ASSIGN     : /%=/,
    BSHIFTLEFT     : /<</,
    BSHIFTRIGHT    : />>/,
    BIT_AND_ASSIGN : /&=/,
    BIT_OR_ASSIGN  : /|=/,
    BIT_XOR_ASSIGN : /^=/,

    // Literals
    NONE: /none/,
    TRUE: /True/,
    FALSE: /False/,
    NUM_LIT   : fullNumericLiteral,
    STRING_LIT: fullStringLiteral,
    REGEXP_LIT: fullRegularExpressionLiteral,

};

module.exports = pytokens;

