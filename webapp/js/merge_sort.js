async function merge(ele, low, mid, high){
    let temp = new Array(high-low+1);
    let k=0;
    let i=low;
    let j=mid+1;
    for(let x=low;x<=mid;x++) {await waitforme(delay);ele[x].style.background='yellow';}
    for(let x=mid+1;x<=high;x++) {await waitforme(delay);ele[x].style.background='orange';}
    while(i<=mid && j<=high){
        let ele1=parseInt(ele[i].style.height);
        let ele2=parseInt(ele[j].style.height);1
        if(ele1<=ele2){
            temp[k]=ele1;i++;k++;
        }else{
            temp[k]=ele2;j++;k++;
        }
    }
    while(i<=mid){
        temp[k]=parseInt(ele[i].style.height);
        i++;
        k++;
    }
    while(j<=high){
        temp[k]=parseInt(ele[j].style.height);
        j++;
        k++;
    }
    k=0;
    for(let ii=low;ii<=high;ii++){
        ele[ii].style.height=String(temp[k])+'px';
        await waitforme(delay);
        await waitforme(delay);
        if(low==0 &&high==ele.length-1){
            ele[ii].style.background='green';
        }else{
            ele[ii].style.background='#80ff80';
        }
        k++;
    }   
}

async function mergeSort(ele, l, r){
    if(l >= r){
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
