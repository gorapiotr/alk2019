var combinationSum = require('./combination-sum.js');

module.exports = {

    compare: function (a, b) {
        if (a.sum < b.sum) {
            return -1;
        }
        if (a.sum > b.sum) {
            return 1;
        }
        return 0;
    },

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

    postageStampsProblem: function (postageStamps, spots) {
        const postTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const postTypesCombinations = this.combineWithoutRepetitions(postTypes, spots);
        let maxSum = 1;
        let maxComb = [];
        postTypesCombinations.map((item) => {
            let combinations = this.combineWithRepetitions(item, spots);
            combinations.map((i) => {
                let stock = 0;
                do {
                    //console.log(combinationSum.combinationSumRecursive(i, stock, spots));
                    stock++;
                } while (combinationSum.combinationSumRecursive(i, stock, spots).length);
                if (stock > maxSum) {
                    console.log('new record');
                    maxSum = stock;
                    console.log(i);
                    maxComb = i;
                }
            });
        });
        console.log(maxComb);
        console.log(maxSum);
    }
};