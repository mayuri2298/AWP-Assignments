var a = 1

function likeme() {
    let like = document.querySelector("#btnid");
    like.innerHTML = "Like " + a;
    a++;
}

function cmnthere() {
    let cmnt = document.querySelector("#id1").value;

    const div1 = document.querySelector("#cmntID").cloneNode(true);
    div1.removeAttribute("id");
    div1.style.visibility = "visible";

    const cmntbox = document.querySelector("#cmntID");
    cmntbox.appendChild(div1);

    document.querySelector("#id1").value = "";
}

function deleteme(like) {
    like.parentElement.remove();
}