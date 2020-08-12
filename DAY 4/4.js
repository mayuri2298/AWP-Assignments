let a = 1;

function increment() {

    let counter = document.querySelector("#btn1");
    a = a + 1;
    counter.innerHTML = a;


}

function decrement() {

    let counter = document.querySelector("#btn1");
    a = a - 1;
    counter.innerHTML = a;
}