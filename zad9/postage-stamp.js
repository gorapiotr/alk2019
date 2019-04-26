module.exports = {

    combineWithRepetitions: function (comboOptions, comboLength) {

        if (comboLength === 1) {
            return comboOptions.map(comboOption => [comboOption]);
        }
        const combos = [];

        comboOptions.forEach((currentOption, optionIndex) => {
            // Generate combinations of smaller size.
            const smallerCombos = this.combineWithRepetitions(
                comboOptions.slice(optionIndex),
                comboLength - 1,
            );

            smallerCombos.forEach((smallerCombo) => {
                combos.push([currentOption].concat(smallerCombo));
            });
        });

        return combos;
    },

    postageStampsProblem: function (postageStamps, spots) {
        const postageStampsArray = Array.from({length: postageStamps}, (v, k) => k + 1);
        let combinations = this.combineWithRepetitions(postageStampsArray, spots);
        return combinations.map((item) => {
            return {
                array: item,
                sum: item.reduce(function (a, b) {
                    return a + b;
                }, 0)
            };
        });
    }
};