// Wypisz wszystkie liczby od 1 do 100, jednak jeżeli liczba jest podzielna przez:

// trzy – wypisz „Fizz”,
// pięć – wypisz „Buzz”,
// trzy i pięć wypisz „FizzBuzz”.

function fizzBuzz(){
    for (n = 1; n <= 100; n++){
        if (n % 15 == 0) {
            console.log("fizz buzz");
        }
        else if (n % 3 == 0) {
            console.log("fizz");
        }
        else if (n % 5 == 0) {
            console.log ("buzz")
        }
        else{
            console.log(n)
        }
    }
}