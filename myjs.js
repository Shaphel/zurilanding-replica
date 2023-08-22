const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active")

}))

function getElementsById(ids){
    var idList= ids.split(" ");
    var results= [], item;
    for(var i= 0; i < idList.length; i++){
        item= document.getElementById(idList[i]);
        if(item){
            results.push(item);
        }
    }
    return(results);
}


document.addEventListener("DOMContentLoaded", () =>{
    function counter(id, start, end, duration){
        
        let obj= document.getElementById(id),
        current= start,
        range= end-start,
        increment= end > start ? 1 : -1,
        step= Math.abs(Math.floor(duration/ range)),
        timer= setInterval(() =>{
            current += increment;
            obj.textContent = current;
            if (current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 12, 1000);
    counter("count2", 0, 45, 3000);
    counter("count3", 0, 115, 4200);
})

const appearOptions= {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const faders= document.querySelectorAll('.fade-in');
const sliders= document.querySelectorAll('.slide-right,.slide-left,.slide-up');
const appearOnScroll= new IntersectionObserver(function(
    entries, appearOnScroll){
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    appearOptions);

    faders.forEach(fader =>{
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider =>{
        appearOnScroll.observe(slider);
    });
