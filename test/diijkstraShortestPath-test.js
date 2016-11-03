const Graph = require('../').Graph;
const diijskstra = require('../').diijkstraShortestPath;
const expect = require('chai').expect;

describe('Diijkstra Shortest Path', () => {
    let graph = new Graph();

    beforeEach(() => {
        graph = new Graph();
        graph.addVertex('1');
        graph.addVertex('2');
        graph.addVertex('3');
        graph.addVertex('4');
        graph.addVertex('5');

        graph.addEdge('1','2', 5);
        graph.addEdge('2','3', 5);
        graph.addEdge('1','4', 20);
        graph.addEdge('2','5', 10);

    });

    it('should return an object with distance and path info', () => {
        let result = diijskstra(graph, '1', '2');
        expect(result.distance).to.exist;
        expect(result.path).to.exist;

        expect(typeof result.distance).to.be.equal('number');
        expect(result.path).to.be.an.instanceOf(Array);        
    });

    it('should find shortest in simple Graph', () => {
        let result = diijskstra(graph, '1', '3');
        expect(result.distance).to.be.equals(10);
        expect(result.path).to.be.deep.equal(['1','2','3'])
    });

    it('should find shortest in little complex Graph', () => {
        graph.addVertex('6');
        graph.addEdge('3','6', 21);
        graph.addEdge('4','6', 2);

        let result = diijskstra(graph, '1', '6');
        expect(result.distance).to.be.equals(22);
        expect(result.path).to.be.deep.equal(['1','4', '6'])
    });    
});