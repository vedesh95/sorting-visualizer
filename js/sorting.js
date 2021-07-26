// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

// Disables sorting buttons during sorting to restrict use of another sorting algorithm in between
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider during sorting
function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider
function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}

// Disables newArray buttons during sorting
function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}

// Enables newArray button
function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}

// Helper Function used in async functions for sorting animations
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

/*********Slider Speed Handling Functions Start**********/
// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});
/*********Slider Speed Handling Functions End**********/

/*********Slider Handling Functions Start**********/
// creating array for default case
let array=[]
createNewArray();

// Selecting Size Slider from DOM
let arraySize = document.querySelector('#arr_sz');

// Adding event listener to Size Slider
arraySize.addEventListener('input',function(){
    createNewArray(parseInt(arraySize.value));
})

// Function to create new bars
function createNewArray(noofBars=60){
    deleteChild();
    array = []
    for(let i=0;i<noofBars;i++){
        array.push(Math.floor(Math.random()*500+1));
    }
    const bars = document.querySelector("#bars");
    for(let i=0;i<noofBars;i++){
        const bar=document.createElement("div");
        bar.style.height = String(array[i]) + 'px';
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add('barNo'+String(i));
        bars.appendChild(bar);
    }
}
// Function to delete all of the current bars
function deleteChild(){
    const bar=document.querySelector("#bars");
    bar.innerHTML='';
}

// add eventlistener for newArray button
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    createNewArray(arraySize.value);
});