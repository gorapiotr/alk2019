module.exports = {

    compareStrings: function (pattern, subString) {
        let acc = 0;
        for (let i = 0; i < subString.length; i++) {
            if (pattern[0] === subString[0]) {
                acc++;
            }
        }
        return pattern.length === acc;
    },

    naive: function (text, pattern) {
        console.log('Tekst: ', text);
        console.log('Wzorzec: ', pattern);

        const textLength = text.length;
        const patternLength = pattern.length;

        for (let s = 0; s <= (textLength - patternLength); s++) {
            if ( this.compareStrings(pattern, text.substring(s, s + patternLength)) ) {
                console.log('Wzorzec występuje z przesunięciem =', s);
            }
        }
    }
};