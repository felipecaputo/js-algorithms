const Graph = require('../').Graph;
const Vertex = require('../').Vertex;
const expect = require('chai').expect;

describe('Graph', () => {
    let graph = new Graph();;
    beforeEach(() => {
        graph = new Graph();
    })
    describe('Vertices', () => {
        describe('addVertex', () => {
            it('Should add vertices', () => {
                graph.addVertex('1');
                expect(graph.vertices.size).to.be.eql(1);
                graph.addVertex('2');
                expect(graph.vertices.size).to.be.eql(2);
            });

            it('should return the added vertex', () => {
                expect(graph.addVertex('1')).to.be.instanceOf(Vertex);
            });

            it('Should not add repeated vertices', () => {
                const vertex = graph.addVertex('1');
                expect(graph.vertices.size).to.be.eql(1);
                graph.addVertex('1');
                expect(graph.getVertex('1')).to.be.equal(vertex);
                expect(graph.vertices.size).to.be.eql(1);
                graph.addVertex(vertex);
                expect(graph.vertices.size).to.be.eql(1);
            });
        });

        describe('findVertex', () => {
            it('should return true if called with existing vertex', () => {
                graph.addVertex('1');
                expect(graph.findVertex('1')).to.be.true;
            });

            it('should return false if called with an unexistent vertex', () => {
                expect(graph.findVertex('1')).to.be.false;
                graph.addVertex('1');
                expect(graph.findVertex('2')).to.be.false;
            });
        });

        describe('removeVertex', () => {
            beforeEach(() => {
                graph.addVertex('1');
                graph.addVertex('2');
            });

            it('should remove a vertex', () => {
                expect(graph.vertices.size).to.be.equal(2);
                expect(graph.removeVertex('1')).to.be.true;
                expect(graph.vertices.size).to.be.equal(1);
            });

            it('should return false on a non existing vertex', () => {
                expect(graph.removeVertex('3')).to.be.false;
            });
        });

    })

    describe('Edges tests', () => {
        beforeEach(() => {
            graph.addVertex('1');
            graph.addVertex('2');
            graph.addVertex('3');
            graph.addVertex('4');
        })

        describe('addEdge', () => {
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
        });

        describe('findEdge', () => {
            beforeEach(() => {
                graph.addEdge('1', '2', 1);
                graph.addEdge('2', '3', 1);
            });

            it('should find existing edges', () => {
                expect(graph.findEdge('1', '2')).to.be.true;
            });

            it('should return false on non existing edge', () => {
                expect(graph.findEdge('1', '3')).to.be.false;
            })

            it('should find reverse edges too', () => {
                expect(graph.findEdge('2', '1')).to.be.true;
            })
        });

        describe('removeEdge', () => {
            beforeEach(() => {
                graph.addEdge('1', '2', 1);
                graph.addEdge('2', '3', 1);
            });

            it('should remove existing edges', () => {
                expect(graph.edges.size).to.be.equal(2);
                graph.removeEdge('1', '2');
                expect(graph.edges.size).to.be.equal(1);
                graph.removeEdge('2', '3');
                expect(graph.edges.size).to.be.equal(0);
            });

            it('should remove reverse edges too', () => {
                expect(graph.edges.size).to.be.equal(2);
                graph.removeEdge('2', '1');
                expect(graph.edges.size).to.be.equal(1);
                graph.removeEdge('3', '2');
                expect(graph.edges.size).to.be.equal(0);
            })

            it('should return false if no edge exists', () => {
                expect(graph.edges.size).to.be.equal(2);
                graph.removeEdge('1', '3');
                expect(graph.edges.size).to.be.equal(2);
            })
        });


    })

})