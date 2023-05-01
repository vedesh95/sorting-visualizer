async function partition(ele, l, r){
    for(let i=l;i<=r;i++){
        //part of element currently in focus
        ele[i].style.background='yellow';
    } 
    let pivot=r;
    let i=l;
    ele[r].style.background='red';
    for(let j=l;j<=r-1;j++){
        if(parseInt(ele[j].style.height)<=parseInt(ele[pivot].style.height)){
            await waitforme(delay);
            swap(ele[i],ele[j]);
            // element which is swapped and now at the ith position
            ele[i].style.background='orange';
            i++;
        }
    }
    swap(ele[i],ele[pivot]);
    // element which is swapped and now at the ith position
    ele[pivot].style.background='orange';
    return i;
}

async function quickSort(ele, l, r){
    if(l<r){
        let q=await partition(ele,l,r);
        await quickSort(ele,l,q-1);
        await quickSort(ele,q+1,r);
        for(let i=l;i<=r;i++){
            await waitforme(delay);
            //sorting done for this part of array therefore marking it green
            ele[i].style.background='green';
        } 
    }
}

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});