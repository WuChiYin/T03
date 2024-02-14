function numberOnClick() {
    console.log(this);
}

document.addEventListener('DOMContentLoaded', function()    {
    let digitBtns = document.getElementsByClassName('number');

    for( let i=0; i<digitBtns.length; i++) {
        digitBtns[i].addEventListener('click', digitBtns);
    }

})