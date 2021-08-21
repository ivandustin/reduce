function max(array, scores) {
    let max = Math.max(...scores)
    return array.filter((value, index)=> scores[index] == max)
}

module.exports = max
