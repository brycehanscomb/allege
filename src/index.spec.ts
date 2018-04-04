import { describe, it } from 'mocha';
import { expect } from 'chai';

import allege from './index';

describe('Allege', () => {

    describe('that (single value)', () => {

        it('should be available, as a function', () => {
            expect(
                allege.that
            ).is.a(
                'function'
            );
        });

        it('should throw when given more than one argument', () => {
            expect(
                () => allege.that.call(allege, 1,2,3)
            ).to.throw(
                ReferenceError
            );
        });

        it('should not throw when given only one argument', () => {
            expect(
                () => allege.that.call(allege,1)
            ).not.to.throw(
                ReferenceError
            );
        });

        describe('#isIn', () => {

            it('should return true when `value` is equal to one or more of the values in `possibilities`', () => {

                const val = Math.random();

                expect(
                    allege.that(val).isIn(val)
                ).to.be.
                    true;

                expect(
                    allege.that(val).isIn(3,2,val)
                ).to.be.
                    true;

                expect(
                    allege.that(val).isIn(val,val,val,val,val)
                ).to.be.
                    true;

                expect(
                    allege.that(val).isIn(null, undefined, val, 1234, 'hello')
                ).to.be.
                    true;
            });

            it('should return false when `value` is not equal to any of the values in `possibilities`', () => {

                const val = Math.random();

                expect(
                    allege.that(val).isIn(val * 2)
                ).to.be.
                    false;

                expect(
                    allege.that(val).isIn(3 * val, 2 * val, val * val)
                ).to.be.
                    false;

                expect(
                    allege.that(val * 2).isIn(val,val,val,val,val)
                ).to.be.
                    false;

                expect(
                    allege.that(val).isIn(null, undefined, val * 2, 1234, 'hello')
                ).to.be.
                    false;

            });

        });


        describe('#isNotIn', () => {

            it('should return false when `value` is equal to one or more of the values in `possibilities`', () => {

                const val = Math.random();

                expect(
                    allege.that(val).isNotIn(val)
                ).to.be.
                    false;

                expect(
                    allege.that(val).isNotIn(3,2,val)
                ).to.be.
                    false;

                expect(
                    allege.that(val).isNotIn(val,val,val,val,val)
                ).to.be.
                    false;

                expect(
                    allege.that(val).isNotIn(null, undefined, val, 1234, 'hello')
                ).to.be.
                    false;
            });

            it('should return true when `value` is not equal to any of the values in `possibilities`', () => {

                const val = Math.random();

                expect(
                    allege.that(val).isNotIn(val * 2)
                ).to.be.
                    true;

                expect(
                    allege.that(val).isNotIn(3 * val, 2 * val, val * val)
                ).to.be.
                    true;

                expect(
                    allege.that(val * 2).isNotIn(val,val,val,val,val)
                ).to.be.
                    true;

                expect(
                    allege.that(val).isNotIn(null, undefined, val * 2, 1234, 'hello')
                ).to.be.
                    true;

            });

        });
    });

    describe('these (multi value)', () => {

        it('should be available, as a function', () => {
            expect(
                allege.these
            ).is.a(
                'function'
            );
        });

        describe('#areAll', () => {

            it('should return true when `value` is equal to all the values in `possibilities`', () => {

                const val = Math.random();

                expect(
                    allege.these(val).areAll(val)
                ).to.be.
                    true;

                expect(
                    allege.these(val, val, val).areAll(val)
                ).to.be.
                    true;
            });

            it('should return false when `value` is not equal to one ore more of the values in `possibilities`', () => {

                const val = Math.random();

                expect(
                    allege.these(val * 2).areAll(val)
                ).to.be.
                    false;

                expect(
                    allege.these(val * 3, val * 2, val).areAll(val)
                ).to.be.
                    false;

            });

        });

        describe('#areAllNot', () => {

            it('should return true when `value` is equal to none of the values in `possibilities`', () => {

                const val = Math.random();

                expect(
                    allege.these(val).areAllNot(val * 2)
                ).to.be.
                    true;

                expect(
                    allege.these(val, val, val).areAllNot(val * 2)
                ).to.be.
                    true;
            });

            it('should return false when `value` is equal to one ore more of the values in `possibilities`', () => {

                const val = Math.random();

                expect(
                    allege.these(val, val * 2, val * 3).areAllNot(val)
                ).to.be.
                    false;
            });

        });

    });

});