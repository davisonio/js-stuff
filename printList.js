// Print a list recursively
function printList(list, i = 0) {
    if (i < list.length) {
        console.log(list[i]);
        printList(list, i + 1)
    }
}
printList(['Dog', 'Cat', 'Frog', 'Mouse']);