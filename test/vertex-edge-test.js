const VertexEdge = require('../src/vertex-edge');
const Vertex = require('../src/vertex');
const expect = require('chai').expect;


describe('VertexEdge', function () {
    
    let vertex1 = new Vertex('1');
    let vertex2 = new Vertex('2');
    let vertex3 = new Vertex('3');

    beforeEach(function () {
        vertex1 = new Vertex('1');
        vertex2 = new Vertex('2');
        vertex3 = new Vertex('3');
    });
    
    
    it('should set edges of vertices', function () {
        function checkRelation(aEdge, source, dest) {
            expect(source.edges.has(dest.name)).to.be.true;
            expect(dest.edges.has(source.name)).to.be.true;
        }
        
        let edge = new VertexEdge(vertex1, vertex2, 2);

        expect(vertex1.edges.size).to.be.equal(1);
        expect(vertex2.edges.size).to.be.equal(1);

        let secondEdge = new VertexEdge(vertex1, vertex3, 1);
        checkRelation(secondEdge, vertex1, vertex3);
        expect(vertex1.edges.size).to.be.equal(2);
        expect(vertex3.edges.size).to.be.equal(1);
    });

    it('should store data correctly', () => {
        let edge = new VertexEdge(vertex1, vertex2, 5);
        expect(edge.source).to.be.deep.equal(vertex1);
        expect(edge.dest).to.be.deep.equal(vertex2);
        expect(edge.distance).to.be.eql(5);
    })
    
});
