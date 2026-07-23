let mouseoverEx = document.querySelector('.example');
mouseoverEx.onmouseenter= function (event) {
    this.style.backgroundColor='red';
    this.style.transition='1s';
}

mouseoverEx.onmouseleave= function (event) {
   this.style.backgroundColor='green';
    this.style.transition='2s';


}
let currentElem = null;
table.onmouseover = function(event) {
    if (currentElem) return;
    let target = event.target.closest('td');
    if (!target) return;
    currentElem = target;
    target.style.background = 'pink';

};


table.onmouseout = function(event) {
    if (!currentElem) return;
    let relatedTarget = event.relatedTarget;
    while (relatedTarget) {
        if (relatedTarget == currentElem) return;
        relatedTarget = relatedTarget.parentNode;
        currentElem.style.background = '';
        currentElem = null;

    }}



let box = document.querySelector('.boxbox');
let big = document.querySelector('.outer');
let medium = document.querySelector('.middle');
let inner = document.querySelector('.inner');


box.onmouseover = function(event) {
    if (event.target == big){
        big.style.background = 'red';
        medium.style.background = 'white';
    }

    else if (event.target == medium && event.relatedTarget == big){
        big.style.background = 'yellow';
        medium.style.background = 'yellow';
        inner.style.background = 'white';
    }

    else if (event.target == inner && event.relatedTarget == medium){
        inner.style.background = 'green';
        big.style.background = 'green';
        medium.style.background = 'green';
    }

}

box.onmouseout = function(event) {
    if (event.target == inner && event.relatedTarget == medium){
        big.style.background = 'yellow';
        medium.style.background = 'yellow';
        inner.style.background = 'white';

    }

    else if (event.target == medium && event.relatedTarget == big){
        big.style.background = 'red';
        medium.style.background = 'white';

    }
    else if (event.target == big && event.relatedTarget == box){
        big.style.background = 'white';


    }
}