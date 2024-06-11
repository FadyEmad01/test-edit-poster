let navWarb = document.getElementsByClassName("headerNav");
let svgAnimate = document.getElementsByClassName("svgAnimate");

let closeBtn = document.querySelector(".closeBtn");
let equalBtnIcon = closeBtn.querySelector(".fa-equals");
let closeBtnIcon = closeBtn.querySelector(".fa-xmark");

closeBtn.addEventListener("click", toggleIcons);

function toggleIcons() {
  equalBtnIcon.classList.toggle("d-none");
  closeBtnIcon.classList.toggle("d-none");
}

let prevScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY;
  if (currentScrollY > 300) {
    if (currentScrollY > prevScrollY) {
      navWarb[0].classList.add("animate-up");
      navWarb[0].classList.remove("animate-down");
      svgAnimate[0].classList.remove("animate-svg");
    } else {
      navWarb[0].classList.remove("animate-up");
      navWarb[0].classList.add("animate-down");
      svgAnimate[0].classList.add("animate-svg");
    }
  } else if (currentScrollY < 300) {
    navWarb[0].classList.remove("animate-up");
    navWarb[0].classList.add("animate-down");
    svgAnimate[0].classList.add("animate-svg");
  }

  prevScrollY = currentScrollY;
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".bento-card");

  cards.forEach((card) => {
    card.addEventListener("mousedown", () => {
      card.classList.add("grabbing");
    });

    card.addEventListener("mouseup", () => {
      card.classList.remove("grabbing");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("grabbing");
    });
  });
});

//////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("animateText");
  const textContent = textElement.textContent;

  // Find the index of the letter 'i' in the text content
  const iIndex = textContent.indexOf("i");

  // Create a timeline for the animation
  const tl = gsap.timeline();

  // Split the text content into individual characters (spans)
  const chars = textContent.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    return span;
  });

  // Clear the original text content
  textElement.textContent = "";

  // Rebuild the text content with spans
  chars.forEach((char, index) => {
    // Append each character to the text element
    textElement.appendChild(char);

    // Check if the character is 'i' and animate accordingly
    if (index === iIndex && char.textContent === "i") {
      // Animate the 'i' character with GSAP
      tl.from(char, { duration: 0.5, autoAlpha: 0, y: -20, delay: 0.5 }); // Fade in 'i' with a slight upward motion

      // Delay before replacing 'i' with lightning icon
      tl.to(
        {},
        {
          duration: 0.5,
          onComplete: () => {
            // Hide the original 'i' and create/show the lightning icon
            char.style.display = "none"; // Hide the original 'i'

            const lightningIcon = document.createElement("i");
            lightningIcon.classList.add(
              "fa-solid",
              "fa-bolt-lightning",
              "lighting"
            );
            lightningIcon.style.visibility = "hidden"; // Initially hide the lightning icon
            textElement.insertBefore(
              lightningIcon,
              textElement.children[index]
            ); // Insert lightning icon at 'i' position

            // Animate the lightning icon with GSAP
            tl.to(lightningIcon, { duration: 0, visibility: "visible" }); // Show lightning icon
            tl.from(lightningIcon, { duration: 0.5, autoAlpha: 0 }); // Fade in lightning icon
          },
        },
        "-=0.5"
      ); // Wait 0.5 seconds before executing onComplete
    } else {
      // Animate other characters (not 'i') with GSAP
      tl.from(char, { duration: 0.5, autoAlpha: 0, y: -20 }, "-=0.4"); // Fade in each character with a stagger
    }
  });

  // Play the timeline animation
  tl.pause();
  setTimeout(() => {
    tl.play();
  }, 500);
});

const container = document.querySelector(".container2");
const wrapper = document.querySelector(".wrapper");
const sections = gsap.utils.toArray(".container2 section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container2",
    pin: true,
    scrub: 1,
    start: "top top",
    end: "+=3000",
    snap: 1 / (sections.length - 1),
    // markers: true,
  },
});

//Progress bar animation

gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1,
  },
});

// whizz around the sections
sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim");

  // bump out if there's no items to animate
  if (text.length === 0) return;

  // do a little stagger
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      //markers: true
    },
  });
});

// document.addEventListener("DOMContentLoaded", function() {
//   const colorElement = document.getElementById('color');

//   function updateWidthAttribute() {
//     const width = colorElement.offsetWidth;
//     if (width >= 1100) {
//       colorElement.setAttribute('data-width', 'large');
//     } else if (width >= 990) {
//       colorElement.setAttribute('data-width', 'medium');
//     } else if (width >= 832) {
//       colorElement.setAttribute('data-width', 'small');
//     } else {
//       colorElement.setAttribute('data-width', 'extra-small');
//     }
//   }

//   updateWidthAttribute();
//   window.addEventListener('resize', updateWidthAttribute);
// });

let posterNavTitle = document.getElementById("posterNavTitle");
let posterNavTitleInput = document.getElementById("exampleInputEmail1");

let posterBtn = document.querySelectorAll(".posterBtnJs");
let posterBtnInput = document.getElementById("exampleInputPassword1");

let posterh1 = document.querySelectorAll(".textH1Change");
let posterH1Input = document.getElementById("exampleH1");

let borderCode = document.querySelectorAll(".borderCode")

posterNavTitleInput.addEventListener("keyup", replaceposterNavTitle);

function replaceposterNavTitle() {
  if (posterNavTitleInput.value != "") {
    posterNavTitle.innerText = posterNavTitleInput.value;
  } else {
    posterNavTitle.innerText = "Poster Magazine";
  }
}

posterBtnInput.addEventListener("keyup", replaceposterBtn);
function replaceposterBtn() {
  for (let i = 0; i < posterBtn.length; i++) {
    if (posterBtnInput.value != "") {
      posterBtn[i].innerText = posterBtnInput.value;
    } else {
      posterBtn[i].innerText = "Poster";
    }
  }
}

posterBtnInput.addEventListener("focusin", addBorder2);
posterBtnInput.addEventListener("mouseover", addBorder2);
posterBtnInput.addEventListener("focusout", removeBorder2);
posterBtnInput.addEventListener("mouseleave", removeBorder2);
posterBtnInput.addEventListener("keydown", addBorder2);
// posterBtnInput.addEventListener("keyup", removeBorder2);
function addBorder2() {
  borderCode[1].classList.add("border")
}
function removeBorder2() {
  borderCode[1].classList.remove("border")
}

posterH1Input.addEventListener("focusin", addBorder);
posterH1Input.addEventListener("mouseover", addBorder);
posterH1Input.addEventListener("focusout", removeBorder);
posterH1Input.addEventListener("mouseleave", removeBorder);
posterH1Input.addEventListener("keydown", addBorder);
// posterH1Input.addEventListener("keyup", removeBorder);
function addBorder() {
  borderCode[0].classList.add("border")
}
function removeBorder() {
  borderCode[0].classList.remove("border")
}
posterH1Input.addEventListener("keyup", replaceposterH1);
function replaceposterH1() {
  for (let i = 0; i < posterBtn.length; i++) {
    if (posterH1Input.value != "") {
      posterh1[i].innerText = posterH1Input.value;
    } else {
      posterh1[i].innerText = "OFTEN IMITATED NEVER DUPLICATED";
    }
  }
}

let disktop = document.getElementById("disktop");
let mobile = document.getElementById("mobile");
let code = document.getElementById("code");
let color = document.getElementById("color");
let divImage = document.querySelectorAll(".sec1Img");
let divText = document.querySelectorAll(".sec1Text");
let navPoster = document.getElementById("navPoster");
let codeDiv = document.getElementById("codeDiv")

disktop.addEventListener("click", changeToDisktop);

function changeToDisktop() {
  codeDiv.classList.add("d-none");
  if (color.classList.contains("d-none")) {
    color.classList.remove("d-none");
  }
  navPoster.classList.add("navbar-expand-sm");
  if (navPoster.classList.contains("navbar-expand-xxl")) {
    navPoster.classList.remove("navbar-expand-xxl");
  }
  disktop.classList.add("activeScreen");
  if (disktop.classList.contains("unActiveScreen")) {
    disktop.classList.remove("unActiveScreen");
  }
  if (divImage[0].classList.contains("col-12")) {
    divImage[0].classList.remove("col-12");
  }
  divImage[0].classList.add("col-6");
  if (divText[0].classList.contains("col-12")) {
    divText[0].classList.remove("col-12");
  }
  if (divImage[0].classList.contains("pe-0")) {
    divImage[0].classList.remove("pe-0");
  }
  divText[0].classList.add("col-6");
  if (mobile.classList.contains("activeScreen")) {
    mobile.classList.remove("activeScreen");
  }
  mobile.classList.add("unActiveScreen");
  if (code.classList.contains("activeScreen")) {
    code.classList.remove("activeScreen");
  }
  code.classList.add("unActiveScreen");
  color.classList.add("color-disktop");
  if (color.classList.contains("color-mobile")) {
    color.classList.remove("color-mobile");
  }
}

mobile.addEventListener("click", changeToMobile);
function changeToMobile() {
  codeDiv.classList.add("d-none");
  if (color.classList.contains("d-none")) {
    color.classList.remove("d-none");
  }
  disktop.classList.add("navbar-expand-xxl");
  if (navPoster.classList.contains("navbar-expand-sm")) {
    navPoster.classList.remove("navbar-expand-sm");
  }
  disktop.classList.add("unActiveScreen");
  if (disktop.classList.contains("activeScreen")) {
    disktop.classList.remove("activeScreen");
  }
  if (mobile.classList.contains("unActiveScreen")) {
    mobile.classList.remove("unActiveScreen");
  }
  mobile.classList.add("activeScreen");
  if (code.classList.contains("activeScreen")) {
    code.classList.remove("activeScreen");
  }
  code.classList.add("unActiveScreen");
  color.classList.add("color-mobile");
  if (color.classList.contains("color-disktop")) {
    color.classList.remove("color-disktop");
  }
  if (divImage[0].classList.contains("col-6")) {
    divImage[0].classList.remove("col-6");
  }
  if (divText[0].classList.contains("col-6")) {
    divText[0].classList.remove("col-6");
  }
  divImage[0].classList.add("col-12");
  divImage[0].classList.add("pe-0");
  divText[0].classList.add("col-12");
}

code.addEventListener("click", changeToCode);
function changeToCode() {
  if (codeDiv.classList.contains("d-none")) {
    codeDiv.classList.remove("d-none");
  }
  color.classList.add("d-none");
  disktop.classList.add("unActiveScreen");
  if (disktop.classList.contains("activeScreen")) {
    disktop.classList.remove("activeScreen");
  }
  if (mobile.classList.contains("activeScreen")) {
    mobile.classList.remove("activeScreen");
  }
  mobile.classList.add("unActiveScreen");
  if (code.classList.contains("unActiveScreen")) {
    code.classList.remove("unActiveScreen");
  }
  code.classList.add("activeScreen");
  color.classList.add("color-mobile");
}
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
