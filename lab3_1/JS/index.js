//task_1 -------------------------------------------------------
const array1 = [1, [2, [3, 4]], 5];
const array2 = [6, 7, 8, [9, 10]];

const mergeArrays = (arr1, arr2) => {
  const deepMerge = (a, b) => {
    return Array.isArray(a) && Array.isArray(b) ?
      a.concat(b.reduce(deepMerge, [])) :
      b;
  };
  return arr1.concat(arr2.reduce(deepMerge, []));
};
//task_2 -------------------------------------------------------
function sumArray(arr) {
    let total = 0;
  
    function recursiveSum(subArr) {
      for (let i = 0; i < subArr.length; i++) {
        if (Array.isArray(subArr[i])) {
          // Если элемент массив, вызываем функцию для вложенного массива
          recursiveSum(subArr[i]);
        } else {
          // Если элемент не массив, добавляем его к общей сумме
          total += subArr[i];
        }
      }
    }
    recursiveSum(arr);
    return total;
  }

//task_3 -------------------------------------------------------
function groupStudentsByAge(students) {
    // Инициализируем объект для хранения результатов
    const groupedStudents = {};
  
    // Проходим по каждому студенту
    students.forEach(student => {
      const { name, age, groupId } = student;
  
      // Проверяем, старше ли студент 17 лет
      if (age > 17) {
        // Если группы еще нет в результирующем объекте, создаем ее
        if (!groupedStudents[groupId]) {
          groupedStudents[groupId] = [];
        }
  
        // Добавляем студента в соответствующую группу
        groupedStudents[groupId].push({ name, age, groupId });
      }
    });
  
    return groupedStudents;
  }
//task_4 -------------------------------------------------------
function processString(inputString) {
    const total1 = inputString.split('').map(char => char.charCodeAt(0)).join('');
    const total2 = parseInt(total1.replace(/7/g, '1'));
    const result = total1 - total2;
  
    return result;
  }

  
//task_5 -------------------------------------------------------
function extend(...objects) {
    // Используем метод Object.assign для создания нового объекта
    const result = Object.assign({}, ...objects.reverse());
  
    return result;
  }
//task_6 -------------------------------------------------------
  function createTower(levels) {
    const tower = [];
  
    for (let i = 0; i < levels; i++) {
      const spaces = ' '.repeat(levels - i - 1);
      const stars = '*'.repeat(2 * i + 1);
      const level = spaces + stars + spaces;
      tower.push(level);
    }
  
    return tower;
  }

  
  

console.log('Task_1: ');
const result = mergeArrays(array1, array2);
console.log(result);

console.log('Task_2: ');
const nestedArray = [1, [2, [3, 4]], 5, [6, [7, 8]]];
const result2 = sumArray(nestedArray);
console.log(result2); // Выведет: 36

console.log('Task_3: ');
const students = [
    { name: 'John', age: 15, groupId: 1 },
    { name: 'Alice', age: 17, groupId: 2 },
    { name: 'Bob', age: 16, groupId: 1 },
    { name: 'Charlie', age: 23, groupId: 2 },
    { name: 'Eve', age: 16, groupId: 1 },
];
  
const result_3 = groupStudentsByAge(students);
console.log(result_3);
  
console.log('Task_4: ');
const inputString = 'ABC';
const output = processString(inputString);
console.log(output);
  
console.log('Task_5: ');
  const result1 = extend({a: 1, b: 2}, {c: 3});
  console.log(result1); // {a: 1, b: 2, c: 3}
  
  const result4 = extend({a: 1, b: 2}, {c: 3}, {d: 4});
  console.log(result4); // {a: 1, b: 2, c: 3, d: 4}
  
  const result3 = extend({a: 1, b: 2}, {a: 3, c: 3});
  console.log(result3); // {a: 1, b: 2, c: 3}

console.log('Task_6: ');
  const tower3 = createTower(4);
  console.log(tower3);