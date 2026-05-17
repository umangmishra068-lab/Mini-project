

var tl = gsap.timeline()
tl.from(".line h1",{
    y: 150,
    stagger:0.25,
    opacity:0,
    duration:0.6,
    delay:0.5, 
    
})
tl.from(".line1-part1 , .line h2",{
    opacity:0,
    onStart:function(){
        

var h5timer = document.querySelector(".line1-part1 h5")
var grow = 0
setInterval(function(){
    if(grow<100){
        grow++
        h5timer.innerHTML =  grow++
    }
    else{
        h5timer.innerHTML =  grow
    }
},40)
    }
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4,
})

tl.from("#page1",{
    y:1600,
    delay:0.2,
    opacity:0,
    ease:Power4,
})
tl.to("#loader",{
    dispay:"none"
})

tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
    y: 150,
    stagger:0.25,
})
tl.from("#nav",{
    opacity:0,
})

var cursor = document.querySelector(".crsr")
document.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
        x:dets.clientX,
        y:dets.clientY,
        stagger:0.25,
    }) 
})

Shery.makeMagnet("#nav-part2 h4" , {

  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

