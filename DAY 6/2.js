var a = 1;

function likeme() {
    let like = document.querySelector("#btnid");
    like.innerHTML = "Like " + a;
    a++;
}

function cmnthere() {
    let cmnt = document.querySelector("#id1").value;

    const newE = document.createElement("div")
    newE.style.display = "flex";
    newE.style.justifyContent = "space-between";
    newE.style.padding = "5px";

    const createElement = document.createElement("div");
    createElement.textContent = cmnt;

    const createBtn = document.createElement("button");
    createBtn.textContent = "Delete";

    newE.appendChild(createElement);
    newE.appendChild(createBtn);

    const cmntbox = document.querySelector("#cmntid");
    cmntbox.appendChild(newE);

    document.querySelector("#id1").value = "";
}