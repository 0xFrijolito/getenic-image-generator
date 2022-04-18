// GA's settings
window.populationSize = 50;
window.dnaSize = 50;
window.mutationRate = 0.6;

// Canvas settings
window.maxWidth = 400;
window.maxHeight = 500;

// All canvas
window.referenceCanvas = document.getElementById("reference-canvas");
window.artistCanvas = document.getElementById("generate-canvas");
window.testCanvas = document.getElementById("testing-canvas");

// All context
window.referenceContext = referenceCanvas.getContext("2d");
window.artistContext = artistCanvas.getContext("2d");
window.testContext = testCanvas.getContext("2d");
