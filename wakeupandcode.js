// Zadania z bloga wakeupandcode z artykułu JAVASCRIPT: SPRAWDŹ SIĘ!
// https://www.wakeupandcode.pl/sprawdz-sie-kilka-prostych-zadan-z-javascriptu/

// Zadanie 1
// Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1]. Napisz funkcję, która wypisze w konsoli nową tablicę zawierającą tylko parzyste liczby z tablicy numbers.

// Zadanie 2
// Napisz funkcję sayHello przyjmującą jeden argument, który jest obiektem zawierającym dane osoby. Jeśli przekazany obiekt ma własność name, Twoja funkcja powinna wypisać w konsoli “Hello, name!”. Jeśli nie, funkcja ma wypisać tylko “Hello!”. Przykładowy obiekt do wywołania funkcji to const person = { name: "Jill", age: 25, hobby: "sports" }.

// Zadanie 3
// Napisz prostą maszynę losującą, czyli funkcję, która przyjmuje jako argument tablicę zawierającą listę osób. Twoja funkcja powinna zwracać losową osobę z tej tablicy. Przykładowa tablica do wywołania funkcji: const students = ["John", "Bill", "Emma", "Stella", "Rob"].

// Ad 1
const numbers = [2, 5, 7, 10, 34, 16, 879, 1];

function evenNum(arr){
    for (let n = 0; n <= arr.length; n++){
        if (arr[n] % 2 == 0){
            console.log(arr[n])
        } 
    }
};

evenNum(numbers);

// Ad2
const person = { name: "Jill", age: 25, hobby: "sports" }

const sayHello = person => person.name ? console.log("Hello " + person.name) : console.log("Hello ");

sayHello(person);


// Ad3

const students = ["John", "Bill", "Emma", "Stella", "Rob"];

const chooseRandomly = arr => console.log(arr[Math.floor(Math.random() * arr.length)]);

chooseRandomly(students);