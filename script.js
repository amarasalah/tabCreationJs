const tabsEl = document.querySelectorAll(".tabs li");
let  tabsArray = Array.from(tabsEl);
const divsEl = document.querySelectorAll(".content div");
let divsArray = Array.from(divsEl);


// console.log(tabsArray);
tabsArray.forEach((ele) => {
ele.addEventListener("click", function(e){
    // console.log(ele);
    tabsArray.forEach((ele) => { 
        ele.classList.remove("active");  
    });
    e.currentTarget.classList.add("active");
        divsArray.forEach((div)=> { 
        div.style.display = "none";
    });
      document.querySelector(e.currentTarget.dataset.dev).style.display = "block";
});   
});