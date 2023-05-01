async function insertion(){
    const ele=document.querySelectorAll(".bar");
    ele[0].style.background='#ffaa00';
    for(let i=1;i<ele.length;i++){
        let key=ele[i].style.height;
        ele[i].style.background='blue';
        let j=i-1;
        console.log(i);
        await waitforme(delay);
        while(j>=0 && (parseInt(ele[j].style.height)>parseInt(key))){
            console.log(j);
            ele[j].style.background='red';
            ele[j+1].style.height=ele[j].style.height;
            await waitforme(delay);
            ele[j].style.background='#ffddcc';
            for(let k=j;k>=0;k--){
                ele[k].style.background='green';
            }
            j--;
        }
        ele[j+1].style.height=key;
        ele[i].style.background='green';
        
    }
    console.log(ele);
}
const insertionSortbtn = document.querySelector(".insertionSort");
insertionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});