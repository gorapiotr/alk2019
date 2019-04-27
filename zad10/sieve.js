module.exports = {

    combineWithoutRepetitions: function (comboOptions, comboLength) {
        if (comboLength === 1) {
            return comboOptions.map(comboOption => [comboOption]);
        }
        const combos = [];
        comboOptions.forEach((currentOption, optionIndex) => {
            const smallerCombos = this.combineWithoutRepetitions(
                comboOptions.slice(optionIndex + 1),
                comboLength - 1,
            );
            smallerCombos.forEach((smallerCombo) => {
                combos.push([currentOption].concat(smallerCombo));
            });
        });
        return combos;
    },

    sieve1: function (array, number) {
        const comb = this.combineWithoutRepetitions(array.filter((item, index) => {
            return index < array.indexOf(number);
        }), 2).filter((item) => {
            return item[0] + item[1] === number;
        });

        const response = !comb.length;
        if (response) {
            console.log('Sito 1 odrzuca: ', number);
        }

        return !comb.length;
    },

    sieve2: function (array, number) {
        const comb = this.combineWithoutRepetitions(array.filter((item, index) => {
            return index < array.indexOf(number);
        }), 2).filter((item) => {
            return item[0] + item[1] === number;
        });
        const response = comb.length > 1;
        if (response) {
            console.log('Sito 2 odrzuca: ', number);
        }

        return response;
    },

    sieve: function (arrayLength) {
        let array = Array.from({length: arrayLength}, (v, k) => k + 1);
        let number = 3;
        while (number < arrayLength) {
            if (this.sieve1(array, number) || this.sieve2(array, number)) {
                array.splice(array.indexOf(number), 1);
                console.log('Aktualny stan:', array);
            }
            number++;
        }
        return array;
    }
};