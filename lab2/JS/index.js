function basicOperation(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 !== 0) {
                return operand1 / operand2;
            } else {
                return "Ошибка: деление на ноль";
            }
        default:
            return "Ошибка: недопустимый оператор";
    }
}
//task_2 -------------------------------------------------------
function sumOfCubes(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += Math.pow(i, 3); // Используем Math.pow для возведения в куб
    }

    return sum;
}
//task_3 -------------------------------------------------------
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0; // Возвращаем 0 для пустого массива, чтобы избежать деления на ноль
    }
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
//task_4 -------------------------------------------------------
function reverseAndFilterAlphabet(str) {
    let reversedArray = str.split('').reverse();
    let filteredArray = reversedArray.filter(char => /[a-zA-Z]/.test(char));
    let result = filteredArray.join('');

    return result;
}
//task_5 -------------------------------------------------------
function repeatString(n, s) {
    if (n < 0) {
        return "Ошибка: число n должно быть неотрицательным.";
    }

    return s.repeat(n);
}
//task_6 -------------------------------------------------------
function filterStrings(arr1, arr2) {
    // Используем метод filter для отбора строк, которые не входят в arr2
    let arr3 = arr1.filter(item => !arr2.includes(item));

    return arr3;
}

let result = basicOperation('+', 5, 3);
console.log(result); 

result = basicOperation('-', 7, 2);
console.log(result);

result = basicOperation('*', 4, 6);
console.log(result);

result = basicOperation('/', 8, 4);
console.log(result);

result = basicOperation('/', 8, 0);
console.log(result);

console.log('Task_2: ');
result = sumOfCubes(5);
console.log(result);  // Выведет 36

console.log('Task_3: ');
let array = [2, 4, 6, 8, 10];
let average = calculateAverage(array);
console.log(average);  // Выведет 6

console.log('Task_4: ');
let example1 = "JavaScript";
console.log(reverseAndFilterAlphabet(example1));  // Выведет "tpircSavaJ"

let example2 = "JavaScr53эмодво? ipt";
console.log(reverseAndFilterAlphabet(example2));  // Выведет " tpircSavaJ "

console.log('Task_5: ');
result = repeatString(3, "Hello ");
console.log(result);

result = repeatString(5, "JavaScript");
console.log(result);

result = repeatString(-2, "Error");
console.log(result);

console.log('Task_6: ');
let arr1 = ["apple", "banana", "orange", "kiwi", "kts2"];
let arr2 = ["banana", "kiwi", "grape", "apple", "kts1"];
result = filterStrings(arr1, arr2);
console.log(result);  // Выведет ["apple", "orange"]


