var headlinetitle = document.querySelector('#change-headline');
var clonebtn = document.getElementById('clone-btn');
var clonebtn2 = document.getElementById('clone-btn2');
var getitem = document.getElementById('listitem');

getitem.addEventListener('click',triggeritem);
function triggeritem (e) {
    if(e.target.nodeName=='LI') {
        headlinetitle.innerHTML = e.target.innerHTML;
        console.log(e.target.parentNode);
        for( i=0; i < e.target.parentNode.children.length; i++ ) {
            e.target.parentNode.children[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }
}

clonebtn.addEventListener('click',triggeritem2);
function triggeritem2(){
    var candidate = document.getElementById("candidate");
    var getitems = document.createElement("li");
    getitems.appendChild(document.createTextNode(candidate.value));
    getitem.appendChild(getitems);
}

clonebtn2.addEventListener('click',removeItem);
function removeItem(e){
    var final = getitem.lastChild;
    getitem.removeChild(final);   
}


