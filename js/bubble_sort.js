async function bubble(){
    const ele=document.querySelectorAll(".bar");
    for(let i=0;i<ele.length;i++){
        for(let j=0;j<ele.length-i-1;j++){
            ele[j].style.background='#0033cc';
            ele[j+1].style.background='#0033cc';
            if(parseInt(ele[j].style.height)>parseInt(ele[j+1].style.height)){
                await waitforme(delay);
                swap(ele[j],ele[j+1]);
            }
            ele[j].style.background='#ffddcc';
            ele[j+1].style.background='#ffddcc';
        }
        ele[ele.length-i-1].style.background='green';
    }

}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
