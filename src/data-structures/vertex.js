/**
 * This class represents a Graph with vertices and edges connecting them
 *
 * @typedef {Object} Vertex
 *  
 * @class Vertex
 */
class Vertex {
    /**
     * Creates an instance of Vertex.
     * 
     * @param {String} name The name identifier of the Vertex
     */
    constructor(name){
        this.name = name;
        this.edges = new Map();
    }
}

module.exports = Vertex;