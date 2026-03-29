let display = document.getElementById("display");

/* Basic */
function append(val){
    display.value += val;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* Scientific */
function func(type){
    let val = parseFloat(display.value);
    if(isNaN(val)) return;

    if(type==="sin") display.value = Math.sin(val);
    if(type==="cos") display.value = Math.cos(val);
    if(type==="tan") display.value = Math.tan(val);
    if(type==="log") display.value = Math.log10(val);
}

function square(){
    display.value = Math.pow(display.value,2);
}

function sqrt(){
    display.value = Math.sqrt(display.value);
}

function factorial(){
    let n = parseInt(display.value);
    if(n<0) return display.value="Error";
    let f=1;
    for(let i=1;i<=n;i++) f*=i;
    display.value=f;
}

/* 🎙 Voice Output */
function speakResult(){
    let msg = new SpeechSynthesisUtterance(display.value);
    speechSynthesis.speak(msg);
}

/* 🌙 Dark Mode */
function toggleDark(){
    document.body.classList.toggle("dark");
}

/* 🤖 Smart AI feel (auto suggestion) */
display.addEventListener("input", () => {
    if(display.value.includes("++") || display.value.includes("--")){
        display.value = "Fix your expression";
    }
});