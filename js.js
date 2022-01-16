function minArray(arr) {
    if (arr.length==0){
       return  alert ("mảng rỗng");
    }
    let index = 0;
    let min = arr[0];
    for (let i = 1; i <arr.length ; i++) {
        if(arr[i]<min){
            min = arr[i];
            index=i;
        }
    }
    return  alert("mảng có giá trị nhỏ nhất bằng "+min+" tại vị trí "+index);
}
let arr1 = [1,2,8,9,4,6];
let arr2 = [];
let arr3 = [-1,2,8,6]
minArray(arr1);
minArray(arr2);
minArray(arr3);
