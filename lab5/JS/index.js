function makeCounter()
{
    let currentCount = 1;

return function() { // (*)
    return currentCount++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); //1
alert( counter() ); //2
alert( counter() ); //3

alert(counter2());  //1
alert(counter2());  //2

//task2 --------------------------------------------
function curryVolume(length) {
    return function(width) {
      return function(height) {
        return length * width * height;
      };
    };
  }
  
const calculateVolume = curryVolume(2); // Задаем одно ребро (длину) как 2

const volume = calculateVolume(3)(4);
console.log(volume); //24

//task3 --------------------------------------------
function* moveObject() {
    let x = 0;
    let y = 0;
  
    while (true) {
      const direction = yield { x, y };
  
      switch (direction) {
        case 'left':
          x -= 10;
          break;
        case 'right':
          x += 10;
          break;
        case 'up':
          y += 10;
          break;
        case 'down':
          y -= 10;
          break;
        default:
          console.log('Неверная команда. Используйте left, right, up или down.');
      }
    }
  }
  const objectMovement = moveObject();
  
  for (let i = 0; i < 10; i++) {
    const coordinates = objectMovement.next('right').value;
    objectMovement.next('up').value;
    console.log(`Текущие координаты: x = ${coordinates.x}, y = ${coordinates.y}`);
  }

  const newCoordinates = objectMovement.next('up').value;
  console.log(`Новые координаты: x = ${newCoordinates.x}, y = ${newCoordinates.y}`);
  
//task4 --------------------------------------------
globalVar = "I'm a global variable";
function globalFunction() {
  console.log("I'm a global function");
}

// Получение значений переменных и функций из глобального объекта window
const allGlobals = Object.keys(window).map(key => {
    return { [key]: window[key] };
  });
console.log(allGlobals);

window.globalVar = "New value for the global variable";
window.globalFunction = function () {
  console.log("I'm the updated global function");
};

  