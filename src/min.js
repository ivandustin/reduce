function min(array, scores) {
    let min = Math.min(...scores)
    return array.filter((value, index)=> scores[index] == min)
}

module.exports = min
