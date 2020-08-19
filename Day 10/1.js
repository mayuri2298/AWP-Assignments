function clickMe(btnElement) {
    let countLike = btnElement.children[0].innerHTML;
    let likeC = parseInt(countLike);
    likeC++;
    btnElement.children[0].innerHTML = likeC;
}

function commentHere(cmntBox) {
    let cmntRow = cmntBox.parentElement.parentElement.parentElement.children[2];
    console.log(cmntRow);

    let newElement = cmntRow.children[0].cloneNode(true);

    //read input value
    let inputValue = cmntBox.parentElement.parentElement.children[1].children[0];
    newElement.children[0].innerHTML = inputValue.value;

    inputValue.value = "";
    cmntRow.insertBefore(newElement, cmntRow.firstChild);
}

function deleteHere(dltElement) {
    dltElement.parentElement.parentElement.remove();
}