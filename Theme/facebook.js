function likeMe(likeElement) {
    let like = likeElement.children[0].innerHTML;

    let likeC = parseInt(like);
    likeC++;
    likeElement.children[0].innerHTML = likeC;
}

function commentMe(cmntElement) {
    let cmntBox = cmntElement.parentElement.parentElement.parentElement.children[2];
    let finalCmntBox = cmntBox.children[0].cloneNode(true);

    //read comment
    const inputBox = cmntElement.parentElement.parentElement.children[1].children[0];

    finalCmntBox.children[0].innerHTML = inputBox.value;

    inputBox.value = "";
    cmntBox.insertBefore(finalCmntBox, cmntBox.firstChild);
}

function deleteMe(deleteElement) {
    deleteElement.parentElement.parentElement.remove();

}