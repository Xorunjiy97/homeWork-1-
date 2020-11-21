const { assert } = require('chai');
const arrays = require('../arrays.js');// импортирует

describe('arrays methods',() => {
    describe('showMin',() => {
        it('should return showMin(num)',()=> {
            const arr = [1,6,5];
            const expected = 1 ;

            const actual = arrays.showMin(arr);

            assert.deepEqual(actual,expected);
        });

        it('should return showMin(num) Array is Array',()=> {
            const arr = "";
            const expected = "type array" ;

            const actual = arrays.showMaxIndex(arr);

            assert.deepEqual(actual,expected);
    });

        it('should return showMin(num)',()=> {
            const arr = [1];
            const expected = 1 ;

            const actual = arrays.showMin(arr);

            assert.deepEqual(actual,expected);
    });
        it('should return showMin(num)',()=> {
            const arr = [];
            const expected = undefined ;

            const actual = arrays.showMin(arr);

            assert.deepEqual(actual,expected);
        });
  });
   describe('showMax',() => {

        it('should return showMax(num)',()=> {
          const arr = [1,6,5];
          const expected = 6 ;

          const actual = arrays.showMax(arr);

          assert.deepEqual(actual,expected);
      });

        it('should return showMax',()=> {
          const arr = "";
          const expected = "type array" ;

          const actual = arrays.showMax(arr);

          assert.deepEqual(actual,expected);
        });

        it('should return showMax(num)',()=> {
          const arr = [1];
          const expected = 1 ;

          const actual = arrays.showMax(arr);

          assert.deepEqual(actual,expected);
        });
        it('should return showMax(num)',()=> {
              const arr = [];
              const expected = undefined ;

              const actual = arrays.showMax(arr);

              assert.deepEqual(actual,expected);
         });
   });
    describe('showMaxIndex',() => {

      it('should return showMaxIndex(num)',()=> {
          const arr = [1,6,5];
          const expected = 2 ;

          const actual = arrays.showMaxIndex(arr);

          assert.deepEqual(actual,expected);
      });

      it('should return showMaxIndex(num)',()=> {
          const arr = "";
          const expected = "type array" ;

          const actual = arrays.showMaxIndex(arr);

          assert.deepEqual(actual,expected);
      });

      it('should return showMaxIndex(num)',()=> {
          const arr = [1];
          const expected = 0 ;

          const actual = arrays.showMaxIndex(arr);

          assert.deepEqual(actual,expected);
      });

      it('should return showMaxIndex(num)',()=> {
              const arr = [];
              const expected = 0 ;

              const actual = arrays.showMaxIndex(arr);

              assert.deepEqual(actual,expected);
      });
    });

    describe('sumElementsOddIndex',() => {

        it('should return sumElementsOddIndex(num)',()=> {

              const arr = [1,6,5];
              const expected = 1 ;

              const actual = arrays.sumElementsOddIndex(arr);

              assert.deepEqual(actual,expected);
        });

        it('should return sumElementsOddIndex(num)',()=> {

              const arr = "";
              const expected = "Please type an array" ;

              const actual = arrays.sumElementsOddIndex(arr);

              assert.deepEqual(actual,expected);
        });

        it('should return sumElementsOddIndex(num)',()=> {

              const arr = [1];
              const expected = 0 ;

              const actual = arrays.sumElementsOddIndex(arr);

              assert.deepEqual(actual,expected);
        });

        it('should return showMaxIndex(num)',()=> {

                  const arr = [];
                  const expected = 0 ;

                  const actual = arrays.sumElementsOddIndex(arr);

                  assert.deepEqual(actual,expected);
        });
    });
    describe("getSum", () => {

        it("should return getSum", () => {

              const array = [3, 1, 4, 6];
              const expected = 2;

              const actual = arrays.getSum(array);

              assert.deepEqual(expected, actual);
        });

        it("should return getSum", () => {

              const array = [];
              const expected = 0;

              const actual = arrays.getSum(array);

              assert.deepEqual(expected, actual);
        });

        it("should return getSum", () => {

              const array = [1];
              const expected = 1;

              const actual = arrays.getSum(array);

              assert.deepEqual(expected, actual);
        });

        it("should return getSum", () => {

              const array = "";
              const expected = "type array";

              const actual = arrays.getSum(array);

              assert.deepEqual(expected, actual);
        });
    });
    describe("reversArr", () => {
        it("should return reversArr", () => {
               const array = [3, 1, 4, 6];
               const expected = [6, 4, 1, 3];

               const actual = arrays.reversArr(array);

               assert.deepEqual(expected, actual);
        });

        it("should return reversArr", () => {

               const array = [1, 2];
               const expected = [2, 1];

               const actual = arrays.reversArr(array);

               assert.deepEqual(expected, actual);
        });

        it("should return reversArr", () => {

               const array = [6, 5, 3];
               const expected = [3, 5, 6];

               const actual = arrays.reversArr(array);

               assert.deepEqual(expected, actual);
        });

        it("should return reversArr", () => {

               const array = "";
               const expected = "type array";

               const actual = arrays.reversArr(array);

               assert.deepEqual(expected, actual);
            });
        });

    describe("showMinIndex", () => {
        it("should return showMinIndex", () => {

               const array = [3, 1, 4, 6];
               const expected = 1;

               const actual = arrays.showMinIndex(array);

               assert.deepEqual(expected, actual);
        });

        it("should return showMinIndex", () => {

               const array = [];
               const expected = 0;

               const actual = arrays.showMinIndex(array);

               assert.deepEqual(expected, actual);
        });

        it("should return showMinIndex", () => {

               const array = [1];
               const expected = 0;

               const actual = arrays.showMinIndex(array);

               assert.deepEqual(expected, actual);
        });

        it("should return showMinIndex", () => {

               const array = "";
               const expected = "type array";

               const actual = arrays.showMinIndex(array);

               assert.deepEqual(expected, actual);
            });
        });
        describe("arrReverse", () => {
                it("should return arrReverse", () => {

                       const array = [3, 1, 4, 6];
                       const expected = [4, 6, 3, 1];

                       const actual = arrays.arrReverse(array);

                       assert.deepEqual(expected, actual);
                });

                it("should return arrReverse", () => {

                       const array = [];
                       const expected = [];

                       const actual = arrays.arrReverse(array);

                       assert.deepEqual(expected, actual);
                });

                it("should return arrReverse", () => {

                       const array = [1,2];
                       const expected = [2,1];

                       const actual = arrays.arrReverse(array);

                       assert.deepEqual(expected, actual);
                });

                it("should return arrReverse", () => {

                       const array = "";
                       const expected = "type array";

                       const actual = arrays.arrReverse(array);

                       assert.deepEqual(expected, actual);
                    });
                });
                describe("bubbleSort", () => {
                                it("should return bubbleSort", () => {

                                       const array = [3, 1, 4, 6];
                                       const expected = [ 1, 3, 4, 6];

                                       const actual = arrays.bubbleSort(array);

                                       assert.deepEqual(expected, actual);
                                });

                                it("should return bubbleSort", () => {

                                       const array = [];
                                       const expected = [];

                                       const actual = arrays.bubbleSort(array);

                                       assert.deepEqual(expected, actual);
                                });

                                it("should return arrReverse", () => {

                                       const array = [1, 2, 8, 9, 70, 8, 6];
                                       const expected = [ 1, 2, 6, 8, 8, 9, 70];

                                       const actual = arrays.bubbleSort(array);

                                       assert.deepEqual(expected, actual);
                                });

                                it("should return bubbleSort", () => {

                                       const array = "";
                                       const expected = "type array";

                                       const actual = arrays.bubbleSort(array);

                                       assert.deepEqual(expected, actual);
                                    });
                                });


    });




