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

        it('should return true when called with a single item that is different to input', function() {
            expect(
                calledWithString_isNoneOf('goodbye')
            ).to.be(true);
            expect(
                calledWithString_isNoneOf('yes')
            ).to.be(true);
            expect(
                calledWithString_isNoneOf('yep')
            ).to.be(true);
        });

        it('should return false when called with a single item the same as the input', function() {
            expect(
                calledWithString_isNoneOf('hello')
            ).to.be(false);
        });

        it('should return true when called with a list with no matching items', function() {
            expect(
                calledWithString_isNoneOf('goodbye', 'cruel', 'world')
            ).to.be(true);
            expect(
                calledWithString_isNoneOf('you', 'are', 'here')
            ).to.be(true);
            expect(
                calledWithString_isNoneOf('not', 'for', 'long')
            ).to.be(true);
        });

        it('should return false when called with a list with one matching item', function() {
            expect(
                calledWithString_isNoneOf('hello', 'cruel', 'world')
            ).to.be(false);
            expect(
                calledWithString_isNoneOf('you', 'are', 'hello')
            ).to.be(false);
            expect(
                calledWithString_isNoneOf('hello', 'for', 'long')
            ).to.be(false);
        });

        it('should return false if given a different primitive', function() {
            const a = {};
            const b = {};
            expect(allege(a).isNoneOf(a)).to.be(false);
            expect(allege(a).isNoneOf(b)).to.be(true);
            expect(allege(a).isNoneOf(b, a)).to.be(false);
        })

    });

    describe('isAllOf method', function() {

        const calledWithString = allege('hello');
        const calledWithString_isAllOf = calledWithString.isAllOf;

        it('should be available, as a function', function() {
            expect(calledWithString_isAllOf).to.not.be(undefined);
            expect(calledWithString_isAllOf).to.be.a('function');
        });

        it('should return true when given a single matching item', function() {
            expect(calledWithString_isAllOf('hello')).to.be(true);
        });

        it('should return false when given a single non-matching item', function() {
            expect(calledWithString_isAllOf('goodbye')).to.be(false);
        });

        it('should return true when given a list of matching items', function() {
            expect(calledWithString_isAllOf('hello', 'hello', 'hello')).to.be(true);
        });

        it('should return false when given a list of all non-matching items', function() {
            expect(calledWithString_isAllOf('goodbye', 'hip', 'hop', 'nod')).to.be(false);
            expect(calledWithString_isAllOf('fur', 'with', 'the', 'octopus')).to.be(false);
            expect(calledWithString_isAllOf('fine', 'and', 'dandy')).to.be(false);
        });

        it('should return false when given a list with only one matching item', function() {
            expect(calledWithString_isAllOf('hello', 'just', 'be', 'a', 'person')).to.be(false);
            expect(calledWithString_isAllOf('hello', 'I', 'can', 'be', 'a', 'person')).to.be(false);
        })
    });

});

