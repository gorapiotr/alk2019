module.exports = {

    combinationSumRecursive: function (
        candidates,
        remainingSum,
        spots,
        finalCombinations = [],
        currentCombination = [],
        startFrom = 0,
    ) {
        if (remainingSum < 0) {
            // By adding another candidate we've gone below zero.
            // This would mean that the last candidate was not acceptable.
            return finalCombinations;
        }

        if (remainingSum === 0) {
            // If after adding the previous candidate our remaining sum
            // became zero - we need to save the current combination since it is one
            // of the answers we're looking for.
            finalCombinations.push(currentCombination.slice());

            return finalCombinations;
        }

        // If we haven't reached zero yet let's continue to add all
        // possible candidates that are left.
        for (let candidateIndex = startFrom; candidateIndex < candidates.length; candidateIndex += 1) {
            const currentCandidate = candidates[candidateIndex];

            // Let's try to add another candidate.
            currentCombination.push(currentCandidate);

            // Explore further option with current candidate being added.
            this.combinationSumRecursive(
                candidates,
                remainingSum - currentCandidate,
                spots,
                finalCombinations,
                currentCombination,
                candidateIndex,
            );

            // BACKTRACKING.
            // Let's get back, exclude current candidate and try another ones later.
            currentCombination.pop();
        }
        return finalCombinations.filter((item) => {
            return item.length <= spots;
        });
    }
};