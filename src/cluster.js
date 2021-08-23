const selectica = require('selectica')
const min       = require('./min')

function cluster(verses) {
    let elements = verses
    let clusters = []
    elements.forEach(function(element) {
        let filtered = filter(clusters, element)
        let scores   = score(filtered, element)
        filtered     = min(filtered, scores)
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
        return cluster.find(x => selectica.algorithm.same(x, element))
    })
}

function score(clusters, element) {
    return clusters.map(function(cluster) {
        let scores = cluster.map(x => selectica.algorithm.deviation(x, element))
        return Math.min(...scores)
    })
}

module.exports = cluster
