function likeme(likeElement) {
    let likeCount = likeElement.children[0].innerHTML;
    let totalC = parseInt(likeCount);
    totalC++;
    likeElement.children[0].innerHTML = totalC;
}

function commentme(cmntElement) {
    let sample = cmntElement.parentElement.parentElement.parentElement.children[2];
    let newElement = sample.cloneNode(true);

    let readCmnt = cmntElement.parentElement.parentElement.children[1].children[0];

    newElement.children[0].innerHTML = readCmnt.value;
    readCmnt.value = "";

    sample.insertBefore(newElement, sample.firstChild);
}

function deleteCmnt(deleteElement) {
    deleteElement.parentElement.parentElement.remove();

}