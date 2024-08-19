let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");


btn.addEventListener('click',function(){
    let item = document.createElement("li");
    item.innerText=input.value;
    input.value= "";
    ul.appendChild(item)

    let delbtn = document.createElement("button");
    delbtn.innerText="DELETE";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
});

ul.addEventListener('click', function(e) {
    if (e.target.classList.contains("delete")) {
        let par = e.target.parentElement;
        par.remove();
    }
});

// let deletebtn = document.querySelectorAll(".delete");
// for(d of deletebtn){
//     d.addEventListener("click",function(){
//         let par = deletebtn.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }


