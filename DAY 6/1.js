var count = 1;

function likehere() {
    let like1 = document.querySelector("#btnid");
    like1.innerHTML = "Like " + count;
    count++;

}

function cmnthere() {
    let userCmnt = document.querySelector("#id1").value;

    let createElement = document.createElement("div")
    createElement.textContent = userCmnt;

    const cmntbox = document.querySelector("#cmntID")
        //cmntbox.appendChild(createElement);
    cmntbox.insertBefore(createElement, cmntbox.firstChild);
}