//task1 --------------------------------------------
let user1 = {
  name: 'Masha',
  age: 23,
  location: {
      city: 'Minsk',
      country: 'Belarus'
  }
};

// Глубокое копирование объекта с использованием spread оператора и рекурсии
const deepCopy = (obj) => {
if (Array.isArray(obj)) {
  return obj.map(deepCopy);
} else if (obj && typeof obj === 'object') {
  const copiedObject = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedObject[key] = deepCopy(obj[key]);
    }
  }
  return copiedObject;
}
return obj;
};

const copiedUser = deepCopy(user1);

console.log('Task 1. Original object:', user1);
console.log('Deep copy of object:', copiedUser);

//task2 -------------------------------------------
let user5 = {
  name: 'Masha',
  age: 22,
  studies: {
      university: 'BSTU',
      speciality: 'designer',
      year: 2020,
      department: {
          faculty: 'FIT',
          group: 10,
      },
      exams: [
          { maths: true, mark: 8},
          { programming: true, mark: 4},
      ]
  }
};

// Глубокое копирование объекта с использованием spread оператора и рекурсии
const deepCopy1 = (obj) => {
if (Array.isArray(obj)) {
  return obj.map(deepCopy1);
} else if (obj && typeof obj === 'object') {
  const copiedObject = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedObject[key] = deepCopy1(obj[key]);
    }
  }
  return copiedObject;
}
return obj;
};

const copiedUser5 = deepCopy1(user5);

copiedUser5.studies.department.group = 12;
copiedUser5.studies.exams[1].mark = 10;

console.log('Task 2. Original object:', user5);
console.log('Modified copy of object:', copiedUser5);

//task3 -------------------------------------------
let user4 = {
  name: 'Masha',
  age: 19,
  studies: {
      university: 'BSTU',
      speciality: 'designer',
      year: 2020,
      exams: {
          maths: true,
          programming: false
      }
  }
};

const deepCopy2 = (obj) => {
if (Array.isArray(obj)) {
  return obj.map(deepCopy2);
} else if (obj && typeof obj === 'object') {
  const copiedObject = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedObject[key] = deepCopy2(obj[key]);
    }
  }
  return copiedObject;
}
return obj;
};

const copiedUser4 = deepCopy2(user4);

copiedUser4.name = 'Marina';

console.log('Task 3. Original object:', user4);
console.log('Modified copy of object:', copiedUser4);

//task4 -------------------------------------------
let user7 = {
  name: 'Masha',
  age: 20,
  studies: {
      university: 'BSTU',
      speciality: 'designer',
      year: 2020,
      department: {
          faculty: 'FIT',
          group: 10,
      },
      exams: [
          {
              maths: true,
              mark: 8,
              professor: {
                  name: 'Ivan Petrov',
                  degree: 'PhD',
                  articles: [
                      { title: "About HTML", pagesNumber: 3 },
                      { title: "About CSS", pagesNumber: 5 },
                      { title: "About JavaScript", pagesNumber: 1 },
                  ]
              }
          },
          {
              programming: true,
              mark: 10,
              professor: {
                  name: 'Petr Ivanov',
                  degree: 'PhD',
                  articles: [
                      { title: "About HTML", pagesNumber: 3 },
                      { title: "About CSS", pagesNumber: 5 },
                      { title: "About JavaScript", pagesNumber: 1 },
                  ]
              }
          },
      ]
  }
};

const deepCopy3 = (obj) => {
if (Array.isArray(obj)) {
  return obj.map(deepCopy3);
} else if (obj && typeof obj === 'object') {
  const copiedObject = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedObject[key] = deepCopy3(obj[key]);
    }
  }
  return copiedObject;
}
return obj;
};

const copiedUser7 = deepCopy(user7);

copiedUser7.studies.exams[0].professor.articles[2].pagesNumber = 10;

console.log('Task 4. Original object:', user7);
console.log('Modified copy of object:', copiedUser7);

//task5 -------------------------------------------
let store = {
  state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'By', likesCount: 1 },
      ],
      newPostText: 'About me',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Valera' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Viktor' },
      ],
      messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hi hi' },
        { id: 3, message: 'hi hi hi' },
      ],
    },
    sidebar: [],
  },
};

const replaceMessagesWithHello = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(replaceMessagesWithHello);
  } else if (obj && typeof obj === 'object') {
    const copiedObject = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copiedObject[key] = replaceMessagesWithHello(obj[key]);
      }
    }
    return copiedObject;
  } else if (obj && typeof obj === 'string' && key === 'message') {
    return 'Hello';
  }
  return obj;
};

const updatedStore = replaceMessagesWithHello(store);

console.log('Task 5. Original store object:', store);
console.log('Updated store object:', updatedStore);
