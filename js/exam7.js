document.addEventListener("DOMContentLoaded",function(e){
    let namereturn = document.querySelector("#namereturn");
    let newname = document.querySelector("#newname");
    let namedisplay = document.querySelector("#namedisplay");
    let select = document.querySelector("#select");
    let name = document.querySelector("#name");

    namereturn.addEventListener("click",function(e){
        namedisplay.style.display="block";
        namereturn.style.display="none";
    })

    select.addEventListener("click",function(e){
       name.textContent=newname.value;
       namedisplay.style.display="none";
       namereturn.style.display="inline";
    })
})