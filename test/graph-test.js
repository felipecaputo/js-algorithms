const Graph = require('../src/graph');
const expect = require('chai').expect;

describe('Graph', () => {
    let graph = new Graph();;
    beforeEach( () => {
        graph = new Graph();
    })
    describe('Vertices', () => {
        it('Should add vertices', () => {
            graph.addVertex('1');
            expect(graph.vertices.size).to.be.eql(1);
            graph.addVertex('2');
            expect(graph.vertices.size).to.be.eql(2);
        });

        it('Should not add repeated vertices', () => {
            const vertex = graph.addVertex('1');
            expect(graph.vertices.size).to.be.eql(1);
            graph.addVertex('1');
            expect(graph.vertices.size).to.be.eql(1);
            graph.addVertex(vertex);
            expect(graph.vertices.size).to.be.eql(1);
        });

        it('Should return true if called findVertex with existing vertex', () => {
            graph.addVertex('1');
            expect(graph.findVertex('1')).to.be.true;
        });

        it('Should return false if findVertex is called with an unexistent vertex', () => {
            expect(graph.findVertex('1')).to.be.false;
            graph.addVertex('1');
            expect(graph.findVertex('2')).to.be.false;
        });
    })

    describe('Edges tests', () => {
        beforeEach( () => {
            graph.addVertex('1');
            graph.addVertex('2');
            graph.addVertex('3');
            graph.addVertex('4');
        })
        it('should add edges', () => {
            graph.addEdge('1', '2', 1);
            expect(graph.edges.size).to.be.eql(1);
            graph.addEdge('2', '3', 2);
            expect(graph.edges.size).to.be.eql(2);
        });

        it('should not add repeated edges', () => {
            graph.addEdge('1', '2', 1);
            expect(graph.edges.size).to.be.eql(1);
            graph.addEdge('1', '2', 1);
            expect(graph.edges.size).to.be.eql(1);
            graph.addEdge('2', '1', 1);
            expect(graph.edges.size).to.be.eql(1);
        });
    })

})