let count=0;

let value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const classEle = e.currentTarget.classList;
        if(classEle.contains("decrease"))
            count--;
        else if(classEle.contains("reset"))
            count=0;
        else
            count++;
        
        if(count<0)
            value.style.color="red";
        else if(count==0)
            value.style.color="black";
        else
            value.style.color="green";

        value.textContent = count;
    })
})

/***** 
 * Previous Code
 * Kind of old school
 * explore
 * don't stick to simple Inaccurate method
decreaseBtn.addEventListener('click', ()=>{
    value.textContent = --count;
    if(count<0)
        value.style.color="red";
    else if(count==0)
        value.style.color="black";
    else
        value.style.color="green";
})
resetBtn.addEventListener('click', ()=>{
    count=0
    value.textContent=0;
    value.style.color="black"
})
increaseBtn.addEventListener('click', ()=>{
    value.textContent=++count;
    if(count>0)
        value.style.color="green";
    else if(count==0)
        value.style.color="black";
    else
        value.style.color="green";
})
*****/
