// ***********wow.js*****************************
            new WOW().init();
// ******************************************
let menuBtn = document.querySelector(".menu-button");
let menuMobileOpen = document.querySelector(".menu-mobile-open");
let videoWrapper = document.querySelector(".video-wrapper");
let picOneWrapper = document.querySelector(".pic-one-wrapper");
let pageTwo = document.querySelector(".page-two");
let pageTwoPicLeft = document.querySelector(".page-two-pic-left");
let pageTwoPicRight = document.querySelector(".page-two-pic-right");
let pageFourPicLeft = document.querySelector(".page-four-pic-left");
let pageFourPicRight = document.querySelector(".page-four-pic-right");
let pageThree = document.querySelector(".page-three");
let pageFour = document.querySelector(".page-four");
let pageFive = document.querySelector(".page-five")
let textBlock = document.querySelector(".text-block")
let pageSix = document.querySelector(".page-six")
let pageSixLeftPic = document.querySelector(".page-six-left-pic")


menuBtn.addEventListener("click" , (e)=>{
    menuMobileOpen.classList.toggle("open")
    e.stopImmediatePropagation()
})

window.addEventListener("click" , ()=>{
    if(menuMobileOpen.classList.contains("open")){
        menuMobileOpen.classList.remove("open")
    }
})
// ********************************************************************************************************************



window.addEventListener("scroll" , ()=>{
    currentScroll = document.documentElement.scrollTop
    // console.log(videoWrapper);
    let mq = window.matchMedia("(min-width:1200px)")
    if(mq.matches){
        videoWrapper.style.top = 10+ (currentScroll * .2) + "%"
        picOneWrapper.style.top = 10+ (currentScroll * .2) + "%"
    }
    // ***************************************
    // (currentScroll <= (pageTwo.offsetTop + pageTwo.clientHeight))
    if((currentScroll + window.innerHeight + 300) >= (pageTwo.offsetTop)  && ( currentScroll <= (Number(pageTwo.offsetTop) + Number(pageTwo.clientHeight)))){
        pageTwoPicLeft.style.left = (-400) + (currentScroll * .08) + "px"
        pageTwoPicRight.style.transform = ` perspective(900px) rotateX(42deg) scale(1.6) rotate(${(currentScroll * .02)}deg) `
    }
    if((currentScroll + window.innerHeight + 300) >= (pageThree.offsetTop)  && ( currentScroll <= (Number(pageThree.offsetTop) + Number(pageThree.clientHeight)))){
       
        document.querySelector(".page-three .top>figure").style.transform = ` scale(${(currentScroll * 0.00025 + 1)}) `           
    }
    if((currentScroll + window.innerHeight + 300) >= (pageFour.offsetTop)  && ( currentScroll <= (Number(pageFour.offsetTop) + Number(pageFour.clientHeight)))){
       
        pageFourPicLeft.style.left = (-500) + (currentScroll * .08) + "px"
        pageFourPicRight.style.transform = ` perspective(900px) rotateX(42deg) scale(1.6) rotate(${(currentScroll * .02)}deg) `         
    }
    if((currentScroll + window.innerHeight + 300) >= (pageFive.offsetTop)  && ( currentScroll <= (Number(pageFive.offsetTop) + Number(pageFive.clientHeight)))){
        pg = pageFive.getBoundingClientRect().top
        document.querySelector(".page-five .top-one>figure").style.transform = ` scale(${(currentScroll * 0.00025 + 1)}) `
        textBlock.style.transform = ` perspective(900px) translateY(-50%) rotate3d(1,1,1,${((pg * 0.07))}deg) `
        if((pg - 300) <= 0){
            textBlock.style.transform = ` perspective(900px) translateY(-50%) rotate3d(1,1,1,0deg) `
        }
    }
    if((currentScroll + window.innerHeight + 300) >= (pageSix.offsetTop)  && ( currentScroll <= (Number(pageSix.offsetTop) + Number(pageSix.clientHeight)))){
       
        pageSixLeftPic.style.transform = ` scale(${(currentScroll * 0.00025 + 1)}) `           
    }
})