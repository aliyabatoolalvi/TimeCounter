// let count = 0;

// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//     // console.log(btn);
//     btns.addEventListener("click",function (e){
//         console.log(e.currentTarget);
//     })
// });


let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(btns);
btns.forEach(function (btn) {
    console.log(btn);
    btn.addEventListener("click", function (e) {
       const style = e.currentTarget.classList;
       if(style.contains('decrease')){
        count--;
       }
       else if(style.contains('increase')){
        count++;
       }
       else if(style.contains('reset')){
        count= 0;
       }
       value.textContent = count;
    });
});
