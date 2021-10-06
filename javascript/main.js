
// Global var.
let par1 = document.getElementById('p1');
let par2 = document.getElementById('p2');
let par3 = document.getElementById('p3');
let par4 = document.getElementById('p4');
let par5 = document.getElementById('p5');

//Active paragraph in page load
par2.style.fontWeight = "bold";
par2.querySelector('.arrow').style.cssText =
    "animation-name: arrowUp; animation-duration: 1.5s; animation-fill-mode: forwards;";
document.getElementById(`${par2.id}Answer`).style.display = "block";

// Showe answers function.
function answers(pars) {
    // Change paragraph color on click.
    const fontWeight = window.getComputedStyle(pars).getPropertyValue("font-weight");
    // Get answer id & display it.
    const answer = document.getElementById(`${pars.id}Answer`);
    //Back all P & Answers style to orignal at style.css
    document.querySelectorAll(".answers").forEach(ele => ele.style.display = "none");
    document.querySelectorAll("h4").forEach(ele1 => ele1.style.fontWeight = "unset");
    document.querySelectorAll('.arrow').forEach(arrows => {
        if (arrows.style.animationName == 'arrowUp' || arrows.style.transform == "rotate(180deg)") {
            arrows.style.cssText = "animation-name: arrowDown; animation-duration: 1s; animation-fill-mode: forwards;"
        }
    });

    // If condition to display answer or none.
    if (fontWeight === "400") {
        pars.style.fontWeight = "bold";
        pars.querySelector('.arrow').style.cssText =
            "animation-name: arrowUp; animation-duration: 1s; animation-fill-mode: forwards;";
        answer.style.display = "block";
    }
    else {
        pars.style.fontWeight = "unset";
        pars.querySelector('.arrow').style.cssText =
            "animation-name: arrowDown; animation-duration: 1s; animation-fill-mode: forwards;";
        answer.style.display = "none";
    }
}

// OnClick function to Call answers function.
par1.addEventListener('click', function () { answers(par1); });
par2.addEventListener('click', function () { answers(par2); });
par3.addEventListener('click', function () { answers(par3); });
par4.addEventListener('click', function () { answers(par4); });
par5.addEventListener('click', function () { answers(par5); });

//Test for me Change element style after paragraph (ps eudo elements(::after)).
/*const afterStyle = document.createElement("style");
afterStyle.innerHTML = `p#${pars.id}::after { transform: rotate(180deg);}`;
Finally add element style after paragraph (pseudo elements)
document.head.appendChild(afterStyle);*/