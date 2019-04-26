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

    sieve1: function (combinations, number) {
        const comb = combinations.filter((item) => {
            return item[0] + item[1] === number;
        });
        return !!comb.length;
    },

    sieve2: function (combinations, number) {
        return (combinations.filter((item) => {
            return item[0] + item[1] === number;
        }).length === 1);
    },

    sieve: function (arrayLastValue) {
        const array = [1, 2];
        let number = 3;
        while (number <= arrayLastValue) {
            let combinations = this.combineWithoutRepetitions(array, 2);
            const isOk = this.sieve1(combinations, number) && this.sieve2(combinations, number);
            if (isOk) {
                array.push(number);
            }
            number++;
        }
        return array;
    }
};