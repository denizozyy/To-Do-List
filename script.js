
let ekle = document.getElementById('ekle');
let giris = document.getElementById("giris");
let sil = document.getElementById("sil");
let toDoContainer = document.getElementById("toDoContainer");

ekle.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = giris.value;
    giris.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });

    sil.addEventListener('click', function(){
        paragraph.remove();
    })
})
