function handleMouseOver() {
    let e1 = document.querySelector(".beauty")
    e1.style.background = "black";
    e1.innerHTML = "Good Night";
}

function handleMouseOut() {
    let e2 = document.querySelector(".beauty")
    e2.style.background = "pink";
    e2.innerHTML = "Good Afternoon";
    e2.style.color = "green";


}