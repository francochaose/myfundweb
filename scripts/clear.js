function clearall() {
    var testt = document.getElementsByTagName('main')[0];
    var first = testt.firstElementChild;
    while (first) {
        first.remove();
        first = testt.firstElementChild;
    }
}