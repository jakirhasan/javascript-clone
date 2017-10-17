var headlinetitle = document.querySelector('#change-headline');
var itemcount = 1;
var clonebtn = document.getElementById('clone-btn');
var clonebtndelete = document.getElementById('clone-btn-delete');
var getitem = document.getElementById('listitem');
var getitems = document.getElementById('listitem').getElementsByTagName('li');
// for( i=0; i < getitems.length; i++ ) {
//     getitems[i].addEventListener('click', triggeritem);
// }
getitem.addEventListener('click',triggeritem);

// function triggeritem () {
//     headlinetitle.innerHTML = this.innerHTML;
//     for( i=0; i < getitems.length; i++ ) {
//         getitems[i].classList.remove('active');
//     }
//     this.classList.add('active');
// }

function triggeritem (e) {
    if(e.target.nodeName=='LI') {
        headlinetitle.innerHTML = e.target.innerHTML;
        for( i=0; i < e.target.parentNode.children.length; i++ ) {
            e.target.parentNode.children[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }

}


clonebtn.addEventListener('click',tiggerbutton);
function tiggerbutton() {
    getitem.innerHTML += '<li>add new item '+ itemcount +'</li>';
    itemcount++;
}
clonebtndelete.addEventListener('click',deletebutton);

function deletebutton(){
    alert(getitems);
  getitem.removeChild(getitem.childNodes[0]);
}

