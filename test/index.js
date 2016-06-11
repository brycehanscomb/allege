const allege = require('../index');
const expect = require('expect.js');

describe('The basics', function() {

    it('should be available, as a function', function() {
        expect(allege).not.to.be(undefined);
        expect(allege).to.be.a('function');
    });

    it('should throw when called with no arguments', function() {
        expect(function() {
            allege();
        }).to.throwError(function(e) {
            expect(e).to.be.a(ReferenceError);
            expect(e.message).to.equal('allege must be called with at least one argument.');
        });
    });

});

describe('The single API', function() {

    it('should return the single API when called with one argument', function() {

        expect(allege('hello')).to.be.an(Object);

        expect(allege('hello')).to.have.keys(
            'isAnyOf',
            'isNoneOf',
            'isAllOf'
        );

    });

    describe('isAnyOf method', function() {

        const calledWithString = allege('hello');
        const calledWithString_isAnyOf = calledWithString.isAnyOf;

        it('should be available, as a function', function() {
            expect(calledWithString_isAnyOf).to.not.be(undefined);
            expect(calledWithString_isAnyOf).to.be.a('function');
        });

        it('should match when called with one matching item alone', function() {
            expect(
                calledWithString_isAnyOf('hello')
            ).to.be(true);
        });

        it('should not match when called with one non-matching item alone', function() {
            expect(
                calledWithString_isAnyOf('goodbye')
            ).to.be(false);
        });

        it('should match when called with one matching item in a list of non-matching items', function() {
            expect(
                calledWithString_isAnyOf('hello', 'world', 'goodbye')
            ).to.be(true);

            expect(
                calledWithString_isAnyOf('world', 'hello', 'goodbye')
            ).to.be(true);

            expect(
                calledWithString_isAnyOf('world', 'goodbye', 'hello')
            ).to.be(true);
        });

        it('should match when called with multiple matching item in a list items', function() {
            expect(
                calledWithString_isAnyOf('hello', 'hello', 'goodbye')
            ).to.be(true);

            expect(
                calledWithString_isAnyOf('world', 'hello', 'hello', 'goodbye')
            ).to.be(true);

            expect(
                calledWithString_isAnyOf('hello', 'world', 'goodbye', 'hello')
            ).to.be(true);
        });

        it('should not match when called with a list of non-matching items', function() {
            expect(
                calledWithString_isAnyOf('world', 'goodbye')
            ).to.be(false);
        });

        it('should referentially match non-primitives', function() {
            const a = {};
            const b = {};

            expect(allege(a).isAnyOf(a)).to.be(true);
            expect(allege(a).isAnyOf(b)).to.be(false);
        });

    });

    describe('isNoneOf method', function() {

        const calledWithString = allege('hello');
        const calledWithString_isNoneOf = calledWithString.isNoneOf;

        it('should be available, as a function', function() {
            expect(calledWithString_isNoneOf).to.not.be(undefined);
            expect(calledWithString_isNoneOf).to.be.a('function');
        });

    });

    describe('isAllOf method', function() {

        const calledWithString = allege('hello');
        const calledWithString_isNoneOf = calledWithString.isNoneOf;

        it('should be available, as a function', function() {
            expect(calledWithString_isNoneOf).to.not.be(undefined);
            expect(calledWithString_isNoneOf).to.be.a('function');
        });

    });

});

