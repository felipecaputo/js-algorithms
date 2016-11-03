let Graph = require('../data-structures/graph');

/**
 * Calculate the shortest path from start to end in the given graph
 * 
 * @param {Object} graph an instance of Graph containing vertex
 * @param {string} start the vertex name where the path start 
 * @param {string} end the vertex name where the path ends
 * 
 * @return {{distance: Number, path: string[]}} description
 */
function shortestPath (graph, start, end) {

    let dist = new Map();
    let prev = new Map();
    let remaining = new Array();

    function sortRemaining(){
        remaining = remaining.sort( (a, b) => dist.get(a.name) - dist.get(b.name) )
    }

    function buildPath() {
        let result = new Array();
        if(dist.get(end) === Number.POSITIVE_INFINITY) return result;

        result.push(end);
        let cur = prev.get(end);

        while(cur) {
            result.push(cur);
            cur = prev.get(cur);
        }
        return result.reverse();
    }

    graph.vertices.forEach( (value, key) => {
        dist.set(key, Number.POSITIVE_INFINITY);
        prev.set(key, undefined);
        remaining.push(value);
    })
    dist.set(start, 0);

    while(remaining.length) {
        sortRemaining();        
        let cur = remaining.shift();
        let curDist = dist.get(cur.name);

        if(cur.name == end) break;

        cur.edges.forEach( (value, key) => {
            let val = curDist + cur.edges.get(key).distance;
            if(val < dist.get(key)) {
                dist.set(key, val);
                prev.set(key, cur.name);
            }
        })
    }

    return Object.assign({}, {
        distance: dist.get(end),
        path: buildPath()
    });
}

module.exports = shortestPath;