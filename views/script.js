const kk= document.getElementsByClassName("row");
kk.forEach(element => {
    element.addEventListener('click',(e)=>{
        e.target.style.textDecoration.toggle('line-through');
    })
});