describe('HomeWork tasks', () => {
    describe('getMultiOrSum', () => {
        //Given
        const testData = [
            {
                a: 2,
                b: 3,
                expected: 6,
            },
            {
                a: 1,
                b: 4,
                expected: 5,
            },
            {
                a: 0,
                b: 1,
                expected: 0,
            }
        ];

        testData.forEach(data => {
            const {a, b, expected} = data;

            //When
            const actual = getMultiOrSum(a, b);

            //Then
            it(`should return ${expected} when a = ${a} and b = ${b}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getQuarterOfPointCoordinates', () => {
       //Given
        const testData = [
            {
              x: 0,
              y: 0,
              expected: "точка находится в начале координат",
            },
            {
                x: 0,
                y: 1,
                expected: "точка находится на оси х",
            },
            {
                x: 1,
                y: 0,
                expected: "точка находится на оси у",
            },
            {
                x: 1,
                y: 5,
                expected: "в 1 четверти",
            },
            {
                x: -1,
                y: 5,
                expected: "во 2 четверти",
            },
            {
                x: -1,
                y: -2,
                expected: "в 3 четверти",
            },
            {
                x: 1,
                y: -1,
                expected: "в 4 четверти",
            },
        ];

        testData.forEach(data => {
            const {x, y, expected} = data;

            //When
            const actual = getQuarterOfPointCoordinates(x, y);

            //Then
            it(`should return ${expected} when x = ${x} and y = ${y}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getSumOnlyPositive', () => {
       //Given
       const testData = [
           {
             a: 0,
             b: 0,
             c: 0,
             expected: 0,
           },
           {
               a: 1,
               b: -1,
               c: -1,
               expected: 1,
           },
           {
               a: 1,
               b: 2,
               c: -1,
               expected: 3,
           },
           {
               a: 1,
               b: 2,
               c: 3,
               expected: 6,
           },
           {
               a: -1,
               b: -2,
               c: -1,
               expected: 0,
           },
           {
               a: -1,
               b: 2,
               c: -1,
               expected: 2,
           },
           {
               a: -1,
               b: -2,
               c: 1,
               expected: 1,
           }
       ];

       testData.forEach(data => {
           const {a, b, c, expected} = data;

           //When
           const actual = getSumOnlyPositive(a, b, c);

           //Then
           it(`should return ${expected} when a = ${a}, b = ${b}, c = ${c}`, () => {
               assert.strictEqual(actual, expected);
           });
       });
    });

    describe('getMaxMultiOrSumPlusThree', () => {
       //Given
       const testData = [
           {
               a: 0,
               b: 0,
               c: 0,
               expected: 3,
           },
           {
               a: 1,
               b: 1,
               c: 1,
               expected: 6,
           },
           {
               a: 0,
               b: 0,
               c: 1,
               expected: 4,
           },
           {
               a: -1,
               b: -1,
               c: -1,
               expected: 2,
           },
           {
               a: -1,
               b: 2,
               c: 3,
               expected: 7,
           },
           {
               a: 1,
               b: 2,
               c: 3,
               expected: 9,
           }
       ];

       testData.forEach(data => {
           const {a, b, c, expected} = data;

           //When
           const actual = getMaxMultiOrSumPlusThree(a, b, c);

           //Then
           it(`should return ${expected} when a = ${a}, b = ${b}, c= ${c}`, () => {
               assert.strictEqual(actual, expected);
           });
       });
    });

    describe('getMarkStudent', () => {
       //Given
       const testData = [
           {
               rating: 0,
               expected: 'F',
           },
           {
               rating: 1,
               expected: 'F',
           },
           {
               rating: 12,
               expected: 'F',
           },
           {
               rating: 19,
               expected: 'F',
           },
           {
               rating: 20,
               expected: 'E',
           },
           {
               rating: 21,
               expected: 'E',
           },
           {
               rating: 32,
               expected: 'E',
           },
           {
               rating: 39,
               expected: 'E',
           },
           {
               rating: 40,
               expected: 'D',
           },
           {
               rating: 41,
               expected: 'D',
           },
           {
               rating: 55,
               expected: 'D',
           },
           {
               rating: 59,
               expected: 'D',
           },
           {
               rating: 60,
               expected: 'C',
           },
           {
               rating: 61,
               expected: 'C',
           },
           {
               rating: 70,
               expected: 'C',
           },
           {
               rating: 74,
               expected: 'C',
           },
           {
               rating: 75,
               expected: 'B',
           },
           {
               rating: 76,
               expected: 'B',
           },
           {
               rating: 85,
               expected: 'B',
           },
           {
               rating: 89,
               expected: 'B',
           },
           {
               rating: 90,
               expected: 'A',
           },
           {
               rating: 91,
               expected: 'A',
           },
           {
               rating: 95,
               expected: 'A',
           },
           {
               rating: 100,
               expected: 'A',
           },
       ];

       testData.forEach(data => {
           const {rating, expected} = data;

           //When
           const actual = getMarkStudent(rating);

           //Then
           it(`should return ${expected} when rating = ${rating}`, () => {
               assert.strictEqual(actual, expected);
           });
       });
    });

    describe('getSumEvenNumberOfOneToNinetyNine', () =>{
       //Given
       const expected = 2450;

       //When
       const actual = getSumEvenNumberOfOneToNinetyNine();

       //Then
        it(`should return ${expected} when sum even number from 1 to 99`, () => {
            assert.strictEqual(actual, expected);
        });
    });

    describe('getCountEvenNumberOfOneToNinetyNine', () => {
        //Given
        const expected = 50;

        //When
        const actual = getCountEvenNumberOfOneToNinetyNine();

        //Then
        it(`should return ${expected} when count even number from 1 to 99`, () => {
           assert.strictEqual(actual, expected);
        });
    });

    describe('simpleNumber', () => {
       //Given
       const testData = [
           {
               n: 0,
               expected: "данное число не является натуральным",
           },
           {
               n: 1,
               expected: "число 1 - не простое, не составное",
           },
           {
               n: -1,
               expected: "данное число не является натуральным",
           },
           {
               n: 6,
               expected: "веденное число не простое",
           },
           {
               n: 17,
               expected: "веденное число простое",
           }
       ];

       testData.forEach(data => {
           const {n, expected} = data;

           //When
           const actual = simpleNumber(n);

           //Then
           it(`should return ${expected} when n = ${n}`, () => {
               assert.strictEqual(actual, expected);
           });
       });
    });

    describe('getRootNaturalNumber', () => {
       //Given
       const testData = [
           {
               n: 0,
               expected: 0,
           },
           {
               n: 1,
               expected: 1,
           },
           {
               n: -1,
               expected: "число меньше 0",
           },
           {
               n: 2,
               expected: 1,
           },
           {
               n: 4,
               expected: 2,
           },
           {
               n: 9,
               expected: 3,
           },
           {
               n: 10,
               expected: 3,
           }
       ];

       testData.forEach(data => {
          const {n, expected} = data;

          //When
           const actual = getRootNaturalNumber(n);

           //Then
           it(`should return ${expected} when n = ${n}`, () => {
              assert.strictEqual(actual, expected);
           });
       });
    });

    describe('getRootNaturalNumberBinarySearch', () => {
       //Given
       const testData = [
           {
               n: 0,
               expected: 0,
           },
           {
               n: 1,
               expected: 1,
           },
           {
               n: -1,
               expected: "число меньше 0",
           },
           {
               n: 2,
               expected: 1,
           },
           {
               n: 4,
               expected: 2,
           },
           {
               n: 9,
               expected: 3,
           },
           {
               n: 10,
               expected: 3,
           },
           {
               n: 64,
               expected: 8,
           },
           {
               n: 65,
               expected: 8,
           }
       ];

        testData.forEach(data => {
          const {n, expected} = data;

          //When
           const actual = getRootNaturalNumberBinarySearch(n);

          //Then
           it(`should return ${expected} when n = ${n}`, () => {
               assert.strictEqual(actual, expected);
           });
       });
    });

    describe('abs', () => {
        //Given
        const testData = [
            {
              n: -5,
              expected: 5,
            },
            {
                n: -1,
                expected: 1,
            },
            {
                n: 0,
                expected: 0,
            },
            {
                n: 1,
                expected: 1,
            },
            {
                n: 5,
                expected: 5,
            },
        ];

        testData.forEach(data => {
           const {n, expected} = data;

           //When
            const actual = abs(n);

            //Then
            it(`should return ${expected} when n = ${n}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('factorial', () => {
       //Given
       const testdata = [
           {
             n: -1,
             expected: "число не натуральное",
           },
           {
             n: 0,
             expected: 1,
           },
           {
               n: 1,
               expected: 1,
           },
           {
               n: 2,
               expected: 2,
           },
           {
               n: 5,
               expected: 120,
           },
       ];

       testdata.forEach(data => {
           const {n, expected} = data;

           //When
           const actual = factorial(n);

           //Then
           it(`should return ${expected} when n = ${n}`, () => {
               assert.strictEqual(actual, expected);
           });
       });
    });

    describe('getSumOfNumber', () => {
       //Given
       const testData = [
           {
             n: 0,
             expected: 0,
           },
           {
               n: 1,
               expected: 1,
           },
           {
               n: 12,
               expected: 3,
           },
           {
               n: 12345,
               expected: 15,
           }
       ];

       testData.forEach(data => {
           const {n, expected} = data;

           //When
           const actual = getSumOfNumber(n);

           //Then
           it(`should return ${expected} when n = ${n}`, () => {
               assert.strictEqual(actual, expected);
           });
       });
    });

    describe('getMirrorNumber', () => {
       //Given
       const testData = [
           {
               n: 0,
               expected: 0,
           },
           {
               n: 1,
               expected: 1,
           },
           {
               n: 12,
               expected: 21,
           },
           {
               n: 12345,
               expected: 54321,
           }
       ];

       testData.forEach(data => {
           const {n, expected} = data;

           //When
           const actual = getMirrorNumber(n);

           //Then
           it(`should return ${expected} when n = ${n}`, () => {
               assert.strictEqual(actual, expected);
           });
       });
    });

    describe('getMinElementInArray', () => {
        //Given
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [5],
                expected: 5,
            },
            {
                array: [3, 2],
                expected: 2,
            },
            {
                array: [2, 5, 6, 0, 7],
                expected: 0,
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            //When
            const actual = getMinElementInArray(array);

            //Then
            it(`should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getMaxElementInArray', () => {
        //Given
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [4],
                expected: 4,
            },
            {
                array: [3, 5],
                expected: 5,
            },
            {
                array: [2, 4, 6, 0, 8],
                expected: 8,
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            //When
            const actual = getMaxElementInArray(array);

            //Then
            it(`should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getIndexMinElementArray', () => {
        //Given
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [3],
                expected: 0,
            },
            {
                array: [3, 5],
                expected: 0,
            },
            {
                array: [2, 4, 6, 1, 8],
                expected: 3,
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            //When
            const actual = getIndexMinElementArray(array);

            //Then
            it(`should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getIndexMaxElementArray', () => {
        //Given
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [3],
                expected: 0,
            },
            {
                array: [3, 5],
                expected: 1,
            },
            {
                array: [2, 4, 6, 1, 8],
                expected: 4,
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            //When
            const actual = getIndexMaxElementArray(array);

            //Then
            it(`should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getSumElementInArrayOddIndex', () => {
        //Given
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [3],
                expected: 3,
            },
            {
                array: [3, 5],
                expected: 3,
            },
            {
                array: [2, 4, 6, 1, 8],
                expected: 16,
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            //When
            const actual = getSumElementInArrayOddIndex(array);

            //Then
            it(`should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getCountElementInArrayOdd', () => {
        //Given
        const testData = [
            {
                array: [],
                expected: -1,
            },
            {
                array: [3],
                expected: 0,
            },
            {
                array: [3, 5],
                expected: 1,
            },
            {
                array: [2, 4, 6, 1, 8],
                expected: 2,
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            //When
            const actual = getCountElementInArrayOdd(array);

            //Then
            it(`should return ${expected} when array = [${array}]`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getReversArray', () => {
        //Given
        const array = [];
        const expected = -1;

        //When
        const actual = getReversArray(array);

        //Then
        it(`should return [${expected}] when array = [${array}]`, () => {
            assert.strictEqual(actual, expected);
        });

        //Given
        const testData = [
            {
                array: [3],
                expected: [3],
            },
            {
                array: [3, 5],
                expected: [5, 3],
            },
            {
                array: [2, 4, 6, 1, 8],
                expected: [8, 1, 6, 4, 2],
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            //When
            const actual = getReversArray(array);

            //Then
            it(`should return [${expected}] when array = [${array}]`, () => {
                assert.sameOrderedMembers(actual, expected, `should return [${expected}] when array = [${array}]`);
            });
        });
    });

    describe('replacementFirstAndSecondHalfArray', () => {
        //Given
        const array = [];
        const expected = -1;

        //When
        const actual = replacementFirstAndSecondHalfArray(array);

        //Then
        it(`should return [${expected}] when array = [${array}]`, () => {
            assert.strictEqual(actual, expected);
        });

        //Given
        const testData = [
            {
                array: [3],
                expected: [3],
            },
            {
                array: [3, 5],
                expected: [5, 3],
            },
            {
                array: [2, 4, 6, 1, 8],
                expected: [1, 8, 6, 2, 4],
            },
            {
                array: [2, 4, 6, 1, 8, 3],
                expected: [1, 8, 3, 2, 4, 6],
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            //When
            const actual = replacementFirstAndSecondHalfArray(array);

            //Then
            it(`should return [${expected}] when array = [${array}]`, () => {
                assert.sameOrderedMembers(actual, expected, `should return [${expected}] when array = [${array}]`);
            });
        });
    });

    describe('bubbleSort', () => {
        //Given
        const array = [];
        const expected = -1;

        //When
        const actual = bubbleSort(array);

        //Then
        it(`should return [${expected}] when array = [${array}]`, () => {
            assert.strictEqual(actual, expected);
        });

        //Given
        const testData = [
            {
                array: [3],
                expected: [3],
            },
            {
                array: [5, 3],
                expected: [3, 5],
            },
            {
                array: [2, 4, 6, 1, 8],
                expected: [1, 2, 4, 6, 8],
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            //When
            const actual = bubbleSort(array);

            //Then
            it(`should return [${expected}] when array = [${array}]`, () => {
                assert.sameOrderedMembers(actual, expected, `should return [${expected}] when array = [${array}]`);
            });
        });
    });

    describe('selectSort', () => {
        //Given
        const array = [];
        const expected = -1;

        //When
        const actual = selectSort(array);

        //Then
        it(`should return [${expected}] when array = [${array}]`, () => {
            assert.strictEqual(actual, expected);
        });

        //Given
        const testData = [
            {
                array: [3],
                expected: [3],
            },
            {
                array: [5, 3],
                expected: [3, 5],
            },
            {
                array: [2, 4, 6, 1, 8],
                expected: [1, 2, 4, 6, 8],
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            //When
            const actual = selectSort(array);

            //Then
            it(`should return [${expected}] when array = [${array}]`, () => {
                assert.sameOrderedMembers(actual, expected, `should return [${expected}] when array = [${array}]`);
            });
        });
    });

    describe('insertSort', () => {
        //Given
        const array = [];
        const expected = -1;

        //When
        const actual = insertSort(array);

        //Then
        it(`should return [${expected}] when array = [${array}]`, () => {
            assert.strictEqual(actual, expected);
        });

        //Given
        const testData = [
            {
                array: [3],
                expected: [3],
            },
            {
                array: [5, 3],
                expected: [3, 5],
            },
            {
                array: [2, 4, 6, 1, 8],
                expected: [1, 2, 4, 6, 8],
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            //When
            const actual = insertSort(array);

            //Then
            it(`should return [${expected}] when array = [${array}]`, () => {
                assert.sameOrderedMembers(actual, expected, `should return [${expected}] when array = [${array}]`);
            });
        });
    });

    describe('quickSort', () => {
        //Given
        const  array = [], left = 0, right = 0, expected = -1;

        //When
        const actual = quickSort(array, left, right);

        //Then
        it(`should return [${expected}] when array = [${array}]`, () => {
            assert.strictEqual(actual, expected);
        });

        //Given
        const testData = [
            {
                array: [3],
                left: 0,
                right: 0,
                expected: [3],
            },
            {
                array: [5, 3],
                left: 0,
                right: 1,
                expected: [3, 5],
            },
            {
                array: [2, 4, 6, 1, 8],
                left: 0,
                right: 4,
                expected: [1, 2, 4, 6, 8],
            }
        ];

        testData.forEach(data => {
            const { array, left, right, expected } = data;

            //When
            const actual = quickSort(array, left, right);

            //Then
            it(`should return [${expected}] when array = [${array}]`, () => {
                assert.sameOrderedMembers(actual, expected, `should return [${expected}] when array = [${array}]`);
            });
        });
    });

    describe('shellSort', () => {
        //Given
        const array = [];
        const expected = -1;

        //When
        const actual = shellSort(array);

        //Then
        it(`should return [${expected}] when array = [${array}]`, () => {
            assert.strictEqual(actual, expected);
        });

        //Given
        const testData = [
            {
                array: [3],
                expected: [3],
            },
            {
                array: [5, 3],
                expected: [3, 5],
            },
            {
                array: [2, 4, 6, 1, 8],
                expected: [1, 2, 4, 6, 8],
            }
        ];

        testData.forEach(data => {
            const { array, expected } = data;

            //When
            const actual = shellSort(array);

            //Then
            it(`should return [${expected}] when array = [${array}]`, () => {
                assert.sameOrderedMembers(actual, expected, `should return [${expected}] when array = [${array}]`);
            });
        });
    });

    describe('heapSort', () => {
        //Given
        const array = [], n = 0;
        const expected = -1;

        //When
        const actual = heapSort(array, n);

        //Then
        it(`should return [${expected}] when array = [${array}]`, () => {
            assert.strictEqual(actual, expected);
        });

        //Given
        const testData = [
            {
                array: [3],
                n: 1,
                expected: [3],
            },
            {
                array: [5, 3],
                n: 2,
                expected: [3, 5],
            },
            {
                array: [2, 4, 6, 1, 8],
                n: 5,
                expected: [1, 2, 4, 6, 8],
            }
        ];

        testData.forEach(data => {
            const { array, n, expected } = data;

            //When
            const actual = heapSort(array, n);

            //Then
            it(`should return [${expected}] when array = [${array}]`, () => {
                assert.sameOrderedMembers(actual, expected, `should return [${expected}] when array = [${array}]`);
            });
        });
    });

    describe('mergeSort', () => {
        //Given
        const  array = [], left = 0, right = 0, expected = -1;

        //When
        const actual = mergeSort(array, left, right);

        //Then
        it(`should return [${expected}] when array = [${array}]`, () => {
            assert.strictEqual(actual, expected);
        });

        //Given
        const testData = [
            {
                array: [3],
                left: 0,
                right: 0,
                expected: [3],
            },
            {
                array: [5, 3],
                left: 0,
                right: 1,
                expected: [3, 5],
            },
            {
                array: [2, 4, 6, 1, 8],
                left: 0,
                right: 4,
                expected: [1, 2, 4, 6, 8],
            }
        ];

        testData.forEach(data => {
            const { array, left, right, expected } = data;

            //When
            const actual = mergeSort(array, left, right);

            //Then
            it(`should return [${expected}] when array = [${array}]`, () => {
                assert.sameOrderedMembers(actual, expected, `should return [${expected}] when array = [${array}]`);
            });
        });
    });

    describe('merge', () => {
        //Given
        const  array = [], left = 0, middle = 0, right = 0, expected = -1;

        //When
        const actual = merge(array, left, middle, right);

        //Then
        it(`should return [${expected}] when array = [${array}]`, () => {
            assert.strictEqual(actual, expected);
        });

        //Given
        const testData = [
            {
                array: [3],
                left: 0,
                middle: 0,
                right: 0,
                expected: [3],
            },
            {
                array: [5, 3],
                left: 0,
                middle: 0,
                right: 1,
                expected: [3, 5],
            },
            {
                array: [2, 4, 6, 1, 8],
                left: 0,
                middle: 2,
                right: 4,
                expected: [1, 2, 4, 6, 8],
            }
        ];

        testData.forEach(data => {
            const { array, left, middle, right, expected } = data;

            //When
            const actual = merge(array, left, middle, right);

            //Then
            it(`should return [${expected}] when array = [${array}]`, () => {
                assert.sameOrderedMembers(actual, expected, `should return [${expected}] when array = [${array}]`);
            });
        });
    });

    describe('dayOfWeek', () => {
       //Given
       const testData = [
           {
             day: -1,
             expected: "Введите правильно день недели!",
           },
           {
               day: 1,
               expected: "Понедельник",
           },
           {
               day: 4,
               expected: "Четверг",
           },
           {
               day: 7,
               expected: "Воскресенье",
           },
           {
               day: 8,
               expected: "Введите правильно день недели!",
           }
       ];

       testData.forEach(data => {
           const { day, expected } = data;

           //When
           const actual = dayOfWeek(day);

           //Then
           it(`should return ${expected} when day = ${day}`, () => {
                assert.strictEqual(actual, expected);
           });
       });
    });

    describe('getDistanceBetweenPoints', () => {
       //Given
       const testData = [
           {
               x1: 0,
               y1: 0,
               x2: 0,
               y2: 0,
               expected: 0,
           },
           {
               x1: 1,
               y1: 1,
               x2: 2,
               y2: 2,
               expected: 1.4140625,
           },
           {
               x1: 1,
               y1: 0,
               x2: 2,
               y2: 0,
               expected: 1,
           },
       ];

        testData.forEach(data => {
            const { x1, y1, x2, y2, expected } = data;

            //When
            const actual = getDistanceBetweenPoints(x1, y1, x2, y2);

            //Then
            it(`should return ${expected} when coordinates point1 (${x1};${y1}) and coordinates point2 (${x2};${y2})`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('sqrt', () => {
       //Given
       const testData = [
           {
               n: -1,
               expected: "число меньше 0",
           },
           {
               n: 0,
               expected: 0,
           },
           {
               n: 1,
               expected: 1,
           },
           {
               n: 4,
               expected: 2,
           },
           {
               n: 5,
               expected: 2.236328125,
           },
       ];

        testData.forEach(data => {
            const { n, expected } = data;

            //When
            const actual = sqrt(n);

            //Then
            it(`should return ${expected} when n = ${n}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
});