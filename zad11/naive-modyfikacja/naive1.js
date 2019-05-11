module.exports = {

    compareStrings: function (pattern, subString) {
        let acc = 0;
        for (let i = 0; i < subString.length; i++) {
            if (pattern[0] === subString[0]) {
                acc++;
            } else {
                return [false, 1];
            }
        }
        return [pattern.length === acc, acc];
    },

    naive: function (text, pattern) {
        console.log('Tekst: ', text);
        console.log('Wzorzec: ', pattern);

        const textLength = text.length;
        const patternLength = pattern.length;

        let s = 0;
        while (s <= (textLength - patternLength)) {

            let response = this.compareStrings(pattern, text.substring(s, s + patternLength));
            if (response[0]) {
                console.log('Wzorzec występuje z przesunięciem =', s);
            }
            s = s + response[1];
        }
    }
};