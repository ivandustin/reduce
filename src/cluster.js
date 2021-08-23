const selectica = require('selectica')

function cluster(verses) {
    let elements = verses
    let clusters = []
    elements.forEach(function(element) {
        let filtered = filter(clusters, element)
        if (filtered.length > 0) {
            filtered.forEach(function(cluster) {
                cluster.push(element)
            })
        } else {
            clusters.push([element])
        }
    })
    return clusters
}

function filter(clusters, element) {
    return clusters.filter(function(cluster) {
        return cluster.find(x => is_same(x, element))
    })
}

function is_same(a, b) {
    return selectica.algorithm.same(a, b)
}

module.exports = cluster
