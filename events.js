console.log('hello world');
/**

✏️ Output target is the output-target element.
5. When any section is clicked the output target text should be "You clicked on the {text of the section} section"

**/


let out = document.getElementById('output-target'); //where text will be placed

/*
let addlisteners = document.getElementById("within");
addlisteners.addEventListener("click", onclick);
*/
let addlistener = document.getElementsByTagName('*');
for (let i = 0; i < addlistener.length; i++) {
  addlistener[i].addEventListener("click", onclick);
}

function onclick(MouseEvent){
    let textOfSection = MouseEvent.target.innerHTML;
    out.innerHTML = "You clicked on the " + textOfSection + " section.";
}




let hone = document.getElementById('page-header');
hone.addEventListener('mouseover', H1MouseOver);
hone.addEventListener('mouseout', H1MouseOut);

function H1MouseOver(event){
    out.innerHTML = "You moved your mouse over the header!";
}

function H1MouseOut(event){
    out.innerHTML = "You left me!";
}


let IB = document.getElementById('keypress-input'); //IB = Input Box

IB.addEventListener("keyup", function(event){
    out.innerHTML = event.target.value;
});


let butns = document.getElementById('guinea-pig');

document.getElementById("add-color").addEventListener("click", function(){
    butns.classList.toggle("colorcng");
});

document.getElementById("make-large").addEventListener('click', function(){
    butns.classList.toggle('resize');
});

document.getElementById("add-border").addEventListener('click', function(){
    butns.classList.toggle('givborder');
});

document.getElementById("add-rounding").addEventListener('click', function(){
    butns.classList.toggle('round');
});
























