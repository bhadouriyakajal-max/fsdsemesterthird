function calculateArea(radius = 1) {
    return 3.14 * radius * radius;
}

function calculatePerimeter(radius = 1) {
    return 2 * 3.14 * radius;
}

module.exports = { calculateArea, calculatePerimeter };