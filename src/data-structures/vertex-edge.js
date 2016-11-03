const Vertex = require('./vertex');

class VertexEdge{
    /**
     * Creates an instance of VertexEdge.
     * 
     * @param {Vertex} src
     * @param {Vertex} dest
     * @param {Number} distance
     * 
     * @memberOf VertexEdge
     */
    constructor(src, dest, distance) {
        this.source = src;
        this.dest = dest;
        this.distance = distance;
        this.source.edges.set(dest.name, this);
        this.dest.edges.set(src.name, this);
    }
}

module.exports = VertexEdge;

