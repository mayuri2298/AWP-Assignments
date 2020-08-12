var clk_cntr = 1
var cmnt_cntr = 1;

function click() {
    let clk = document.querySelector("#button");
    clk.innerHTML = "Like" + clk_cntr;
    clk_cntr++;
}


function comment() {
    const new1 = document.createElement("div")
    new1.textContent = "user comment" + cmnt_cntr;

    const cmnt = document.querySelector("#commentbox")
    cmnt.appendChild(new1);
    cmnt_cntr++;
}