function dist(input) {
    sqrt = Math.sqrt(input)
    ceil = Math.ceil(sqrt)%2?Math.ceil(sqrt):Math.ceil(sqrt+1)
    floor = Math.floor(sqrt)
    along = (input - (ceil-2)*(ceil-2))
    oneAxis = (ceil-1)/2
    otherAxis = Math.round(Math.abs(2*(along/(2*oneAxis)%1-0.5))*oneAxis)
    console.log("Distance: " + (oneAxis + otherAxis))
}

// dist(14)
// dist(20)
// dist(27)
// dist(368078)

console.log(getFibN(10))