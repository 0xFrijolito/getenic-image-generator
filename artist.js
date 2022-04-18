function artistFactory (parent1=null, parent2=null) {
    let newArtist = new Artist();
    if (parent1 && parent2) {
        // Mix dna
        for (let i=0 ; i<dnaSize ; i++) {
            newArtist.dna.push(Math.random() >= 0.5 ? copyGen(parent1.dna[i]) : copyGen(parent2.dna[i]));
        }
    } else {
        // Random dna
        for (let i=0 ; i<dnaSize ; i++) {
            newArtist.dna.push(new Poligon());
        }
    }
    return newArtist;
}

class Artist {
    // create a blank artist
    constructor () {
        this.performance = 0;
        this.dna = [];
    }

    draw (ctx) {
        ctx.clearRect(0, 0, maxWidth, maxHeight);
        for (let i=0 ; i<this.dna.length ; i++) {
            this.dna[i].draw(ctx);
        }
    }

    evaluatePerformance () {
        // Get the reference canvas and all the context
        this.draw(testContext);
        this.performance = 0;

        const generatePixels = testContext.getImageData(0, 0, maxWidth, maxHeight);
        const referencePixels = referenceContext.getImageData(0, 0, maxWidth, maxHeight);

        for (let i=0 ; i<maxWidth*maxHeight; i++) {
            const delta = Math.abs(generatePixels.data[i] - referencePixels.data[i]);
            this.performance += delta;
        }
    }
}
