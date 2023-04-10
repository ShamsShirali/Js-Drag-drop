"use strict";

// let inp=document.querySelector('input');
// let img=document.querySelector('.text');

// inp.addEventListener('change',(e)=>{
//     let readf=new FileReader();

//     readf.readAsDataURL(e.target.files[0]);

//     readf.addEventListener('load',()=>{
//         let image=document.createElement('img');
//         image.scr=readf.result;
//         img.append(image);
//     });
// });

// img.addEventListener('click', (e)=>{
//     console.log(e.target);
// });

////////////////////////////////////////////////

let frame=document.querySelector('.frame');
let photo=document.querySelector('.nature');

photo.addEventListener('dragstart',()=>{
    photo.classList.add('active');
});

photo.addEventListener('dragend',()=>{
    photo.classList.remove('active');
});

frame.addEventListener('dragover',()=>{
    let select=document.querySelector('.active');
    frame.appendChild(select);
    document.querySelector('p').style.display='none';
});

