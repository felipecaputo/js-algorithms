var Vertex = require('./vertex');
var VertexEdge = require('./vertex-edge');

/**
 * @desc Represents a Graph data stucture with vertices and edges
 * 
 * @typedef {Object} Graph
 * @class Graph
 */
class Graph {
    constructor() {
        this.vertices = new Map();
        this.edges = new Map();
    }

    /**
     * Add a new vertex to the graph if it not exists
     * 
     * @param {Object|string} vertex A Vertex instance or the name of a new vertex instance
     * 
     * @return {Object} if the vertex alredy exists returns the already inserted Vertex object, 
     * else it returns the new Vertex instance
     */
    addVertex(vertex) {        
        let aVertex = typeof vertex == 'string' ? new Vertex(vertex) : vertex;
        if(this.findVertex(aVertex.name))
            return this.vertices.get(aVertex.name); //Returns the already inserted instance of the vertex

        this.vertices.set(aVertex.name, aVertex);
        return aVertex;
    }
    /**
     * Check vertex existence in the Graph
     * 
     * @param {string} vertexName
     * @returns {Boolean} Returns true if the vertex already exists in the graph or false otherwise
     */
    findVertex(vertexName) {
        return this.vertices.has(vertexName);
    }
    /**
     * Returns an existing Vertex instance or undefined
     * 
     * @param {string} vertexName The name of the vertex to retrieve
     * @return {Object|undefined}
     */
    getVertex(vertexName){
        return this.vertices.get(vertexName);
    }

    /**
     * Add a new edge
     * 
     * @param {string} source
     * @param {string} dest
     * @param {number} distance
     * 
     * @memberOf Graph
     */
    addEdge(source, dest, distance) {
        if(this.findEdge(source, dest))  return;

        const srcVertex = this.getVertex(source);
        const destVertex = this.getVertex(dest);
        if(typeof srcVertex == 'undefined' || typeof destVertex == 'undefined')
            throw `${source||dest} is not part of this graph`;
        this.edges.set(`${source}-${dest}`, new VertexEdge(srcVertex, destVertex, distance));
    }

    findEdge(source, dest) {
        return this.edges.has(`${source}-${dest}`)
            || this.edges.has(`${dest}-${source}`)
    }
}

module.exports = Graph