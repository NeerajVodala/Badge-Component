const toggleBtn = document.querySelector(".toggle");
const icon = document.querySelector(".badge-btn-icon--toggle")
let flag = 1;

toggleBtn.addEventListener("click", ()=>{
    if(flag){
        icon.style.display = "none";
        flag = 0;
    } else{
        icon.style.display = "flex";
        flag = 1;
    } 
})