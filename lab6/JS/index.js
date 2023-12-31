//task1 --------------------------------------------
const numbers = [1, 2, 3, 4, 5];

const [y, y1] = numbers;
console.log(y); // Выведет 1
console.log(y1); // Выведет 1

//task2 --------------------------------------------
const user = {
  name: "John",
  age: 30
};

const admin = {
  admin: true,
  ...user
};
console.log(admin);

//task3 --------------------------------------------
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

const {
  state: {
    profilePage: { posts },
    dialogsPage: { dialogs, messages },
  },
} = store;

posts.forEach(post => {
  console.log(`Likes count for post with id ${post.id}: ${post.likesCount}`);
});

const filteredDialogs = dialogs.filter(dialog => dialog.id % 2 === 0);
console.log('Filtered dialogs:', filteredDialogs);

const updatedMessages = messages.map(message => ({ id: message.id, message: 'Hello user' }));
console.log('Updated messages:', updatedMessages);

//task4 --------------------------------------------
let tasks = [
  { id: 1, title: "HTML&CSS", isDone: true },
  { id: 2, title: "JS", isDone: true },
  { id: 3, title: "ReactJS", isDone: false },
  { id: 4, title: "Rest API", isDone: false },
  { id: 5, title: "Graphol", isDone: false },
];

const newTask = { id: 6, title: "New Task", isDone: false };
const updatedTasks = [tasks, newTask];

console.log(updatedTasks);

//task5 -------------------------------------------
function sumValues(a, b, c) {
  return a + b + c;
}
const arrayToSum = [1, 2, 3];
const result = sumValues(...arrayToSum);
console.log(result); // Выведет 6
