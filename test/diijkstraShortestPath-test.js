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

        result = diijskstra(graph, '4', '3');
        expect(result.distance).to.be.equals(30);
        expect(result.path).to.be.deep.equal(['4', '1','2','3'])        
    });

    it('should return inifite on unreacheable route', () => {
        graph.addVertex('6');

        let result = diijskstra(graph, '4', '6');
        expect(result.distance).to.be.equals(Number.POSITIVE_INFINITY);
        expect(result.path).to.be.deep.equal([])
    });    

    it('should find shortest in little complex Graph', () => {
        graph.addVertex('6');
        graph.addEdge('3','6', 21);
        graph.addEdge('4','6', 2);

        let result = diijskstra(graph, '1', '6');
        expect(result.distance).to.be.equals(22);
        expect(result.path).to.be.deep.equal(['1','4', '6'])
    });

    it('should find shortest in a more complex Graph', () => {
        graph.addVertex('6');
        graph.addVertex('7');
        graph.addVertex('8');
        graph.addVertex('9');
        graph.addVertex('10');
        graph.addVertex('11');

        graph.addEdge('3','6', 2);
        graph.addEdge('4','6', 2);
        graph.addEdge('4','8', 2);
        graph.addEdge('6','9', 2);
        graph.addEdge('6','7', 2);
        graph.addEdge('8','9', 2);
        graph.addEdge('9','11', 2);
        graph.addEdge('5','7', 2);
        graph.addEdge('7','10', 2);
        graph.addEdge('10','11', 2);

        let result = diijskstra(graph, '1', '11');
        expect(result.distance).to.be.equals(16);
        expect(result.path).to.be.deep.equal(['1','2','3','6','9','11']);
    });        
});