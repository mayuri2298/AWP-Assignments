function clickme() {
    let comment = document.querySelector("#text1").value;

    const divv = document.createElement("div")
    divv.textContent = comment;

    const cmntbox = document.querySelector("#cmnt")
    cmntbox.appendChild(divv);

    document.querySelector("#text1").value = "";

}