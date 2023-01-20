// *************************page three slider*************************************************************************

let thumbnail = document.querySelectorAll(".bottom figure");
let slider = document.querySelector(".slider");
let _right = document.getElementById("right");
let _left = document.getElementById("left");
let turn = 0;

document.querySelector(".bottom>figure:nth-of-type(1)").style.background =
  "red";

function _read() {
  _src = document
    .querySelector(".bottom>figure:nth-of-type(" + (turn + 1) + ")>img")
    .getAttribute("src");
  document.querySelector(
    ".top>figure"
  ).innerHTML = `<img class="tran" src="${_src}" alt="">`;
  for (i = 0; i < thumbnail.length; i++) {
    thumbnail[i].style.background = "transparent";
  }
  document.querySelector(
    ".bottom>figure:nth-of-type(" + (turn + 1) + ")"
  ).style.background = "red";
}

thumbnail.forEach((self, index) => {
  self.addEventListener("click", () => {
    turn = index;
    _read();
  });
});

_right.addEventListener("click", right);
_left.addEventListener("click", left);

function right() {
  if (turn < thumbnail.length - 1) {
    turn++;
  } else {
    turn = 0;
  }
  _read();
}

function left() {
  if (turn == 0) {
    turn = thumbnail.length - 1;
  } else {
    turn--;
  }
  _read();
}
let autoPlay = setInterval(right, 5000);

slider.addEventListener("mouseenter", () => {
  clearInterval(autoPlay);
});
slider.addEventListener("mouseleave", () => {
  autoPlay = setInterval(right, 5000);
});

// *********************************page-five-slider*****************************************************************************

let thumbnailOne = document.querySelectorAll(".bottom-one figure");
let sliderOne = document.querySelector(".slider-one");
let _rightOne = document.getElementById("right-one");
let _leftOne = document.getElementById("left-one");
let textContainerOne = document.querySelectorAll(".bottom-one p");
let turnOne = 0;

document.querySelector(".bottom-one>figure:nth-of-type(1)").style.background =
  "red";
document.querySelector(".text-block").innerHTML = ` <p class="tran text-end"> ${
  document.querySelector(".bottom-one p:nth-of-type(" + (turnOne + 1) + ")")
    .innerText
} </p> `;

function _readOne() {
  _src = document
    .querySelector(".bottom-one>figure:nth-of-type(" + (turnOne + 1) + ")>img")
    .getAttribute("src");
  document.querySelector(
    ".top-one>figure"
  ).innerHTML = `<img class="tran" src="${_src}" alt="">`;
  for (i = 0; i < thumbnailOne.length; i++) {
    thumbnailOne[i].style.background = "transparent";
  }
  document.querySelector(
    ".bottom-one>figure:nth-of-type(" + (turnOne + 1) + ")"
  ).style.background = "red";
  for (i = 0; i < textContainerOne.length; i++) {
    document.querySelector(
      ".text-block"
    ).innerHTML = ` <p class="tran text-end"> ${
      document.querySelector(".bottom-one p:nth-of-type(" + (turnOne + 1) + ")")
        .innerText
    } </p> `;
  }
}

thumbnailOne.forEach((self, index) => {
  self.addEventListener("click", () => {
    turnOne = index;
    _readOne();
  });
});

_rightOne.addEventListener("click", rightOne);
_leftOne.addEventListener("click", leftOne);

function rightOne() {
  if (turnOne < thumbnailOne.length - 1) {
    turnOne++;
  } else {
    turnOne = 0;
  }
  _readOne();
}

function leftOne() {
  if (turnOne == 0) {
    turnOne = thumbnailOne.length - 1;
  } else {
    turnOne--;
  }
  _readOne();
}

let autoPlayOne = setInterval(rightOne, 5000);

sliderOne.addEventListener("mouseenter", () => {
  clearInterval(autoPlayOne);
});
sliderOne.addEventListener("mouseleave", () => {
  autoPlayOne = setInterval(rightOne, 5000);
});
// *********************************page eight slider************************************************************

let thumbnailTwo = document.querySelectorAll(".bottom-two figure");
let sliderTwo = document.querySelector(".slider-two");
let _rightTwo = document.getElementById("right-two");
let _leftTwo = document.getElementById("left-two");
let textContainerTwo = document.querySelectorAll(".bottom-two p");
let turnTwo = 0;

document.querySelector(".bottom-two>figure:nth-of-type(1)").style.background =
  "red";
document.querySelector(
  ".text-block-two"
).innerHTML = ` <p class="tran text-end"> ${
  document.querySelector(".bottom-two p:nth-of-type(" + (turnTwo + 1) + ")")
    .innerText
} </p> `;

function _readTwo() {
  _src = document
    .querySelector(".bottom-two>figure:nth-of-type(" + (turnTwo + 1) + ")>img")
    .getAttribute("src");
  document.querySelector(
    ".top-two>figure"
  ).innerHTML = `<img class="tran" src="${_src}" alt="">`;
  for (i = 0; i < thumbnailTwo.length; i++) {
    thumbnailTwo[i].style.background = "transparent";
  }
  document.querySelector(
    ".bottom-two>figure:nth-of-type(" + (turnTwo + 1) + ")"
  ).style.background = "red";
  for (i = 0; i < textContainerTwo.length; i++) {
    document.querySelector(
      ".text-block-two"
    ).innerHTML = ` <p class="tran text-end"> ${
      document.querySelector(".bottom-two p:nth-of-type(" + (turnTwo + 1) + ")")
        .innerText
    } </p> `;
  }
}

thumbnailTwo.forEach((self, index) => {
  self.addEventListener("click", () => {
    turnTwo = index;
    _readTwo();
  });
});

_rightTwo.addEventListener("click", rightTwo);
_leftTwo.addEventListener("click", leftTwo);

function rightTwo() {
  if (turnTwo < thumbnailTwo.length - 1) {
    turnTwo++;
  } else {
    turnTwo = 0;
  }
  _readTwo();
}

function leftTwo() {
  if (turnTwo == 0) {
    turnTwo = thumbnailTwo.length - 1;
  } else {
    turnTwo--;
  }
  _readTwo();
}

let autoPlayTwo = setInterval(rightTwo, 5000);

sliderTwo.addEventListener("mouseenter", () => {
  clearInterval(autoPlayTwo);
});
sliderTwo.addEventListener("mouseleave", () => {
  autoPlayTwo = setInterval(rightTwo, 5000);
});
