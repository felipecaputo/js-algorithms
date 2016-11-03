let Graph = require('../data-structures/graph');

function shortestPath (graph, from, to) {
    let aGraph = new Graph();
    aGraph = graph;

    let verticesList = new Map();
    aGraph.vertices.forEach( (value, key) => {
        vertices.set(key, {
            "name": key.name,
            "prev": null,
            "distance": Number.POSITIVE_INFINITY
        })
    })



}