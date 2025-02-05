const texts = [
    "Быстрый",
    "Качественный",
    "Недорогой"
];

let index = 0;

function changeText() {
    const textElement = document.getElementById('text');
    
    textElement.style.opacity = '0';
    
    setTimeout(() => {
        
        index = (index + 1) % texts.length;
        textElement.textContent = texts[index];

        textElement.style.opacity = '1';
    }, 1000); 
}

setInterval(changeText, 2500);

// -----------------------------price

let priceWin = document.getElementById('priceWin')

let priceButt0 = document.getElementById('priceButton0')
let priceButt1 = document.getElementById('priceButton1')



const buttons = [priceButt0,priceButt1]

buttons.forEach(button => {
    button.addEventListener('click', () => {
        priceWin.classList.toggle('showWin')
        buttons.forEach(btn => {
            btn.classList.toggle('rotater')
        });
    });
});
// ---------------------------------------2
let priceWin1 = document.getElementById('priceWin1')

let priceButt2 = document.getElementById('priceButton2')
let priceButt3 = document.getElementById('priceButton3')



const buttns = [priceButt2,priceButt3]

buttns.forEach(buttn => {
    buttn.addEventListener('click', () => {
        priceWin1.classList.toggle('showWin')
        buttns.forEach(btn => {
            btn.classList.toggle('rotater')
        });
    });
});

// --------------------Форма для телефона


function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#tel1");//#id инпута
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
  })

//   FAQ
document.querySelectorAll('.mainFaq').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const p = item.querySelector('p');
        p.style.display = 'block'; 
        setTimeout(() => {
            p.style.opacity = 1; 
        }, 10); 
    });

    item.addEventListener('mouseleave', () => {
        const p = item.querySelector('p');
        p.style.opacity = 0; 
        setTimeout(() => {
            p.style.display = 'none'; 
        }, 500); 
    });
});

// MINI ИСТОРИИ
const buttonss = document.querySelectorAll(".storyButtons button");
const stories = document.querySelectorAll(".storyText");

buttonss.forEach((button, index) => {
    button.addEventListener("click", () => {

        buttonss.forEach(btn => btn.classList.remove("active"));
        stories.forEach(story => story.classList.remove("active"));


        button.classList.add("active");
        document.getElementById(`storyWin${index}`).classList.add("active");
    });
});


// -------------------scroll


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// ------------ popup
function showPopup(text) {
    document.getElementById("popup-text").innerText = text;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
// ПОЛИТИКА
let politicBtn = document.getElementById('politicPopup')

let closePolitic = document.getElementById('closePolitic')

let politicWin = document.getElementById('politicWin')

politicBtn.addEventListener('click', function(){
    politicWin.classList.add('showP')
});
closePolitic.addEventListener('click', function(){
    politicWin.classList.remove('showP')
});
// 
function scrollToTop() {
    window.scrollTo(0, 0);
}

window.onload = function() {
    scrollToTop();
};
