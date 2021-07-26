async function selection(){
    const ele=document.querySelectorAll(".bar");
    for(let i=0;i<ele.length;i++){
        let min_index=i;
        // Setting color of first position of unsorted array to blue
        ele[i].style.background='#0033cc';
        for(let j=i+1;j<ele.length;j++){
            // Changing color of current element to red
            ele[j].style.background='red';
            await waitforme(delay);
            if(parseInt(ele[j].style.height)<parseInt(ele[min_index].style.height)){
                // If the previous smaller element is not the starting element then we should change its color from red to default
                if(min_index!=i){
                    ele[min_index].style.background='#ffddcc';
                }
                // Setting color of smallest element to red
                ele[j].style.background='red';
                min_index=j;
            }else{
                // Setting to default as current_element >= min_element so far 
                ele[j].style.background='#ffddcc';
            }

        }
        await waitforme(delay);
        swap(ele[i],ele[min_index]);
        ele[min_index].style.background='#ffddcc';
        ele[i].style.background='green';
    }
}
const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});