

let btn = document.getElementById('btn');
let list = document.querySelector('.list')
let ul = document.createElement('ul');
let input = document.querySelector('#yourText');
list.appendChild(ul);

btn.addEventListener("click", addListItem);

function addListItem () {
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";

    let subBtn = document.createElement('button');
    let textBtn = document.createTextNode('X');
    subBtn.className = "sub-button";
    subBtn.appendChild(textBtn); 
    li.appendChild(subBtn);

    subBtn.addEventListener('click', function() {
        li.remove();
    });
}

let btnSecond = document.getElementById('btn-2');

btnSecond.addEventListener('click', removeListItem)

function removeListItem() {
    ul.remove();
}


