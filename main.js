// Generate a new population with random DNA
function generateFirtsPopulation (populationSize) {
    const population = []
    for (let i=0 ; i<populationSize ; i++) {
        newArtist = artistFactory();
        population.push(newArtist);
    }
    Promise.resolve(population)
    return population;
}

// Execute evaluatePerformance method of every artist in the population
function evaluatePopulationPerformance (population) {
    let bestPerformance = 0;
    let bestPerformanceIndex = 0;
    for (let i=0 ; i<50 ; i++) {
        population[i].evaluatePerformance(artistContext);
        if (population[i].performance <= bestPerformance || i == 0) {
            bestPerformance = population[i].performance;
            bestPerformanceIndex = i;
        }
    }

    Promise.resolve(population)
    console.log(population[bestPerformanceIndex]);
    return population[bestPerformanceIndex];
}

function runGeneration (population) {
    const bestPerformanceArtist = evaluatePopulationPerformance(population);
    bestPerformanceArtist.draw(artistContext);

    const newPopulation = [];
    for (let i=0 ; i<dnaSize ; i++) {
        newPopulation.push(artistFactory(bestPerformanceArtist, population[i]));
    }

    Promise.resolve(newPopulation)
    return newPopulation
}

window.onload = function () {
    const img = document.getElementById("reference-img");
    referenceContext.filter = "grayscale()";
    referenceContext.drawImage(img, 0, 0, maxWidth, maxHeight);

    let population = generateFirtsPopulation(50);
    let i = 100;
    while (i>0) {
        const bestPerformanceArtist = evaluatePopulationPerformance(population);
        bestPerformanceArtist.draw(artistContext);

        const newPopulation = [];
        for (let i=0 ; i<populationSize ; i++) {
            newPopulation.push(artistFactory(bestPerformanceArtist, population[i]));
        }
        population = newPopulation;
        i--;
    }
}

