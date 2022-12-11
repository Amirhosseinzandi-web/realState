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
let pageFive = document.querySelector(".page-five");
let pageFiveTextBlock = document.querySelector(".text-block");
let pageSix = document.querySelector(".page-six");
let pageSixLeftPicOne = document.querySelector(".page-six-left>figure");
let pageSixLeftPicTwo = document.querySelector(".page-six-left-pic");
let pageSixTextBlock = document.querySelector(".page-six-right ~ .page-six-right> .text-block-one");
let pageSeven = document.querySelector(".page-seven");
let pageSevenPicLeft = document.querySelector(".page-seven-pic-left");
let pageSevenPicRight = document.querySelector(".page-seven-pic-right");
let pageEight = document.querySelector(".page-eight");
let pageEightTextBlock = document.querySelector(".text-block-two");
let pageNine = document.querySelector(".page-nine");
let pageNineTextBlock = document.querySelector(".text-block-three")
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
       
        document.querySelector(".page-three .top>figure").style.transform = ` scale(${(currentScroll * 0.00015 + 1)}) `           
    }
    if((currentScroll + window.innerHeight + 300) >= (pageFour.offsetTop)  && ( currentScroll <= (Number(pageFour.offsetTop) + Number(pageFour.clientHeight)))){
       
        pageFourPicLeft.style.left = (-500) + (currentScroll * .08) + "px"
        pageFourPicRight.style.transform = ` perspective(900px) rotateX(42deg) scale(1.6) rotate(${(currentScroll * .02)}deg) `         
    }
    if((currentScroll + window.innerHeight + 300) >= (pageFive.offsetTop)  && ( currentScroll <= (Number(pageFive.offsetTop) + Number(pageFive.clientHeight)))){
        pg = pageFive.getBoundingClientRect().top
        document.querySelector(".page-five .top-one>figure").style.transform = ` scale(${(currentScroll * 0.00015 + 1)}) `
        pageFiveTextBlock.style.transform = `  translateX(-50%) rotate3d(1,1,1,${((pg * 0.07))}deg) `
        if((pg - (pageFive.clientHeight -300)) <= 0){
            pageFiveTextBlock.style.transform = `  translateX(-50%) rotate3d(1,1,1,0deg) `
        }
    }
    if((currentScroll + window.innerHeight + 300) >= (pageSix.offsetTop)  && ( currentScroll <= (Number(pageSix.offsetTop) + Number(pageSix.clientHeight)))){
        pg = pageSix.getBoundingClientRect().top
        pageSixLeftPicOne.style.transform = ` scale(${(currentScroll * 0.00015 + 1)}) `
        pageSixLeftPicTwo.style.transform = ` scale(${(currentScroll * 0.00015 + 1)}) `       
       pageSixTextBlock.style.transform = `  translateX(-50%) translateY(-50%) rotate3d(1,1,1,${((pg * 0.07))}deg) `
        if((pg - (pageSix.clientHeight -300)) <= 0){
            pageSixTextBlock.style.transform = `  translateX(-50%) translateY(-50%) rotate3d(1,1,1,0deg) `
        }
        
    }
    if((currentScroll + window.innerHeight + 300) >= (pageSeven.offsetTop)  && ( currentScroll <= (Number(pageSeven.offsetTop) + Number(pageSeven.clientHeight)))){
       
        pageSevenPicLeft.style.right = (-650) + (currentScroll * .08) + "px"
        pageSevenPicRight.style.transform = ` perspective(900px) rotateX(42deg) scale(1.6) rotate(${(currentScroll * .02)}deg) `         
    }
    if((currentScroll + window.innerHeight + 300) >= (pageEight.offsetTop)  && ( currentScroll <= (Number(pageEight.offsetTop) + Number(pageEight.clientHeight)))){
        pg = pageEight.getBoundingClientRect().top
        document.querySelector(".page-eight .top-two>figure").style.transform = ` scale(${(currentScroll * 0.00015 + 1)}) `
        pageEightTextBlock.style.transform = `  translateX(-50%) rotate3d(1,1,1,${((pg * 0.07))}deg) `
        if((pg - (pageEight.clientHeight -300)) <= 0){
            pageEightTextBlock.style.transform = `  translateX(-50%) rotate3d(1,1,1,0deg) `
        }
    }
    if((currentScroll + window.innerHeight + 300) >= (pageNine.offsetTop)  && ( currentScroll <= (Number(pageNine.offsetTop) + Number(pageNine.clientHeight)))){
        pg = pageNine.getBoundingClientRect().top
        pageNineTextBlock.style.transform = `  translate(-50% , -50%) rotate3d(1,1,1,${((pg * 0.07))}deg) `
        if((pg - (pageNine.clientHeight -300)) <= 0){
            pageNineTextBlock.style.transform = `  translate(-50% , -50%) rotate3d(1,1,1,0deg) `
        }
    }
})