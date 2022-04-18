function randomInteger (min, max) {
    return Math.floor(Math.random() * (1+max - min) + min);
}

function dictToRGBA(color) {
    return "rgba(" + color.R + "," + color.G + "," + color.B +  "," + color.A + ")"
}

function copyGen (gen) {
    return Object.assign(Object.create(Object.getPrototypeOf(gen)), gen);
}

class Poligon {
    constructor () {
        const colorValue = randomInteger(0, 255);
        this.vertex = []
        this.color = {
            R: colorValue,
            G: colorValue,
            B: colorValue,
            A: Math.random()
        };

        for (let i=0 ; i<randomInteger(3, 5) ; i++) {
            const x = randomInteger(0, maxWidth);
            const y = randomInteger(0, maxHeight);
            this.vertex.push([x,y]);
        }
    }

    draw (ctx) {
        ctx.fillStyle = dictToRGBA(this.color);
        ctx.beginPath();
        ctx.moveTo(this.vertex[0][0], this.vertex[0][1])
        for (let i=1 ; i<this.vertex.length ;i++) {
            ctx.lineTo(this.vertex[i][0], this.vertex[i][1]);
        }
        ctx.closePath();
        ctx.fill();
    }
};
