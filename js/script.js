const getMultiOrSum = (a, b) => a % 2 === 0 ? a * b : a + b;

function getQuarterOfPointCoordinates(x, y){
    let result;

    if (x > 0 && y > 0) {
        result = "в 1 четверти";
    } else if (x < 0 && y > 0) {
        result = "во 2 четверти";
    } else if (x < 0 && y < 0) {
        result = "в 3 четверти";
    } else if (x > 0 && y < 0) {
        result = "в 4 четверти";
    } else if (x === 0 && y === 0) {
        result = "точка находится в начале координат";
    } else if (x === 0) {
        result = "точка находится на оси х";
    } else if (y === 0) {
        result = "точка находится на оси у";
    }

    return result;
}

function getSumOnlyPositive(a, b, c){
    let result = 0;

    if (a > 0){
        result += a;
    }

    if (b > 0){
        result += b;
    }

    if (c > 0){
        result += c;
    }

    return result; 
}

const getMaxMultiOrSumPlusThree = (a, b, c) => (a * b * c > a + b + c) ? (a * b * c) + 3 : (a + b + c) + 3;

function getMarkStudent(rating){
    let result;

    if (rating >= 0 && rating < 20) {
        result = 'F';
    } else if (rating >= 20 && rating < 40) {
        result = 'E';
    } else if (rating >= 40 && rating < 60) {
        result = 'D';
    } else if (rating >= 60 && rating < 75) {
        result = 'C';
    } else if (rating >= 75 && rating < 90) {
        result = 'B';
    } else if (rating >= 90 && rating <= 100) {
        result = 'A';
    } else {
        throw new Error('Invalid argument provided!');
    }

    return result;
}

function getSumEvenNumberOfOneToNinetyNine() {
    let sum = 0;

    for (let i = 0; i < 100; i += 2) {
         sum += i;
    }

    return sum;
}

function getCountEvenNumberOfOneToNinetyNine(){
    let count = 0;

    for (let i = 1; i < 100; i += 2) {
         count++;
    }

    return count;
}

function simpleNumber(n){
    let result = 0; //количество делителей

    if (n === 1){
        return "число 1 - не простое, не составное";
    } else if (n < 1) {
        return "данное число не является натуральным";
    } else {
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                result++;
            }
        }
    }

    return (result > 2) ? "веденное число не простое" :  "веденное число простое";
}

function getRootNaturalNumber(n){
    let result = 0;

    if (n < 0) {
        result = "число меньше 0";
    } else if (n === 0 || n === 1) {
        result = n;
    } else {
        let k = 1;

        while (n > 0) {
            n -= k;
            k += 2;

            if (n < 0) {
                result += 0;
            } else {
                result += 1;
            }
        }
    }

    return result;
}

function getRootNaturalNumberBinarySearch(n){
    if (n < 0) {
        return "число меньше 0";
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        const epsilon = 0.1; //погрешность
        let st = 0;
        let en = n;
        let result = parseInt((st + en) / 2);
        let squaResult = result * result;

        while (abs(squaResult - n) > epsilon) {
            if (squaResult > n) {
                en = result
            } else {
                st = result
            }
            result = (st + en) / 2;
            squaResult = result * result;
        }
        return ~~result;
    }

}

function abs(n) {
    return n < 0 ? n * -1 : n
}

function factorial(n) {
    if (n < 0) {
        return "число не натуральное";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

function getSumOfNumber(n){
    let p = n; //вспомогательная переменная
    let sum = 0;

    while (p != 0) {
        sum += p % 10;
        p = parseInt(p/10); 
    }

    return sum;
}

function getMirrorNumber(n){
    let result = "";

    if (n === 0) {
        return 0;
    } else {
        while (n !== 0) {
            let k = n % 10;
            result = result + k;
            n = parseInt(n / 10);
        }

        return parseInt(result);
    }
}

function getMinElementInArray(array) {
    if (!array.length) {
        return -1;
    }

    let min = array[0];

    for (let i = 0; i < array.length; i++) {
        if (min > array[i])  {
            min = array[i];          
        }
    }

    return min;
}

function getMaxElementInArray(array){
    if (!array.length) {
        return -1;
    }

    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];          
        }
    }

    return max;
}

function getIndexMinElementArray(array){
    if (!array.length) {
        return -1;
    }

    let minIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[minIndex] > array[i]) {
            minIndex = i;
        }
    }

    return minIndex;
}

function getIndexMaxElementArray(array){
    if (!array.length) {
        return -1;
    }

    let maxIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[maxIndex] < array[i]) {
            maxIndex = i;
        }
    }

    return maxIndex;
}

function getSumElementInArrayOddIndex(array){
    if (!array.length) {
        return -1;
    }

    let sum = 0;

    for (let i = 0; i < array.length; i += 2) {
            sum += array[i];
    }

    return sum;
}

function getCountElementInArrayOdd(array){
    if (!array.length) {
        return -1;
    }

    let count = 0;

    for (let i = 1; i < array.length; i += 2) {
        count++;
    }

    return count;
}

function getReversArray(array){
    if (!array.length) {
        return -1;
    }

    let reversArray = array;

    for (let i = 0, j = reversArray.length-1; i < j; i++, j--) {
            let temp = reversArray[j];
            reversArray[j] = reversArray[i];
            reversArray[i] = temp;
    }

    return reversArray;
}    
    
function replacementFirstAndSecondHalfArray(array){
    if (!array.length) {
        return -1;
    }

    let replacementArray = array;

    if (replacementArray.length % 2 === 0) {
        for (let i = 0, j = replacementArray.length/2; i < replacementArray.length/2; i++, j++) {
            let flag = replacementArray[i];
            replacementArray[i] = replacementArray[j];
            replacementArray[j] = flag;
        }

        return replacementArray;
    } else {
        for (let i = 0, j = (replacementArray.length/2).toFixed(); i < (replacementArray.length/2) - 1; i++, j++) {
            let flag = replacementArray[i];
            replacementArray[i] = replacementArray[j];
            replacementArray[j] = flag;
        }

        return replacementArray;
    }
}

function bubbleSort(array) {
    if (!array.length) {
        return -1;
    }

    let sortArray = array;

    for (let i = 0; i < sortArray.length - 1; i++) {
        for (let j = i + 1; j < sortArray.length; j++) {
            if (sortArray[i] > sortArray[j]) {
                let temp = sortArray[i];
                sortArray[i] = sortArray[j];
                sortArray[j] = temp;
            }
        }
    }

    return sortArray;
}

function selectSort(array) {
    if (!array.length) {
        return -1;
    }

    let sortArray = array;

    for (let i = 0; i < sortArray.length; i++) {
        let k = i;
        let x = sortArray[i];

        for (let j = i + 1; j < sortArray.length; j++) {
            if (sortArray[j] < x) {
                k = j;
                x = sortArray[j];
            }
        }

        sortArray[k] = sortArray[i];
        sortArray[i] = x;
    }

    return sortArray;
}

function insertSort(array){
    if (!array.length) {
        return -1;
    }

    let sortArray = array;

    for (let i = 0; i < sortArray.length; i++) {
        let y = sortArray[i], j = i - 1;

        while (j >= 0 && sortArray[j] > y) {
            sortArray[j+1] = sortArray[j];
            j--;
        }

        sortArray[j+1] = y;
    }

    return sortArray;
}

function quickSort(array, left, right){
    if (!array.length) {
        return -1;
    }

    let sortArray = array;
    let i = left, j = right;
    let temp;
    let middle = (left+right)/2;
    let y = sortArray[middle.toFixed()];
    while(i<=j){
        while(sortArray[i] < y)
            i++;
        while(sortArray[j] > y)
            j--;
        if(i<=j){
            temp = sortArray[i];
            sortArray[i]=sortArray[j];
            sortArray[j]=temp;
            i++;
            j--;
        }
    }
    if(left<j)
        quickSort(sortArray, left, j);
    if(i<right)
        quickSort(sortArray,i,right);
    return sortArray;
}

function mergeSort(array, start, end){
    if (!array.length) {
        return -1;
    }

    let sortArray = array;

    if (start < end) {
        let middle = parseInt((start + end) / 2);
        mergeSort(sortArray, start, middle);
        mergeSort(sortArray, middle + 1, end);
        merge(sortArray, start, middle, end);
    }

    return sortArray;
}

function merge(array, start, middle, end){
    if (!array.length) {
        return -1;
    }

    let sortArray = array;
    let arr = new Array (end + 1 - start);
    let j = middle + 1, h = start, i=0;

    while (h <= middle && j <= end) {

        if (sortArray[h] <= sortArray[j]) {
            arr[i] = sortArray[h];
            h++;
        } else {
            arr[i] = sortArray[j];
            j++;
        }
        i++;
    }

    if (h > middle) {

        for (let k = j; k <= end; k++) {
            arr[i] = sortArray[k];
            i++;
        }
    } else {
        for (let k = h; k <= middle; k++) {
            arr[i] = sortArray[k];
            i++;
        }
    }

    for (let k = 0; k <= end-start; k++) {
        sortArray[k + start] = arr[k];
    }

    return sortArray;
}

function shellSort(array){
    if (!array.length) {
        return -1;
    }

    let sortArray = array;

    let i = (sortArray.length / 2).toFixed(); // toFixed округление

    while (i > 0) {
        for (let j = 0; j < sortArray.length; j++) {
            let k = j, t = sortArray[j];

            while (k >= i && sortArray[k-i] > t) {
                sortArray[k] = sortArray[k-i];
                k -= i;
            }
            sortArray[k] = t;
        }

         i = (i === 2) ? 1 : ~~(i * 5 / 11);
    }

    return sortArray;
}

function heapSort(array, n) {
    if (!array.length) {
        return -1;
    }

    let sortArray = array;
    let i= ~~(n / 2), t = 0;

    while (true) {
        if (i > 0) {
            t = sortArray[--i];
        } else {
            n--;
            if (n === 0) {
                return sortArray;
            }
            t = sortArray[n];
            sortArray[n] = sortArray[0];
        }

        let j = i, k = j * 2 + 1;

        while (k < n) {
            if (k + 1 < n && sortArray[k+1] > sortArray[k]) {
                k++;
            }

            if (sortArray[k] > t) {
                sortArray[j] = sortArray[k];
                j = k;
                k = j * 2 + 1;
            } else {
                break;
            }
        }

        sortArray[j] = t;
    }

    return sortArray;
}

function dayOfWeek(day) {
    let result;

    switch (day) {
        case 1: {
            result = "Понедельник";
            break;
        }
        case 2: {
            result = "Вторник";
            break;
        }
        case 3: {
            result = "Среда";
            break;
        }
        case 4: {
            result = "Четверг";
            break;
        }
        case 5: {
            result = "Пятница";
            break;
        }
        case 6: {
            result = "Суббота";
            break;
        }
        case 7: {
            result = "Воскресенье";
            break;
        }
        default: {
            result = "Введите правильно день недели!";
        }
    }

    return result;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
    let distance = sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

    return distance;
}

function sqrt(n){
    if (n < 0) {
        return "число меньше 0";
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        const epsilon = 0.01; //погрешность
        let low = 0;
        let high = n;
        let result = (low + high) / 2;
        let squaResult = result * result;

        while (abs(squaResult - n) >= epsilon) {

            if (squaResult > n) {
                high = result;
            } else {
                low = result;
            }

            result = (low + high) / 2;
            squaResult = result * result;
        }

        return result;
    }
}