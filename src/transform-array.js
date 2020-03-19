module.exports = function transform(arr) {
   
if (!Array.isArray(arr)){
     throw new Error();
} 

let res = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') { //--discard-next следующий исключает следующий элемент массива из преобразованного массива.
        i++;     
    } 
    else if (arr[i] == '--discard-prev') {// -- discard-prev исключает предыдущий элемент массива из преобразованного массива.
       res.pop();        
    }

    else if (arr[i] == '--double-next') {// -- double-next удваивает следующий элемент массива в преобразованном массиве.
        if (i+1 != arr.length) {
            res.push(arr[i + 1]);
        } 
    }

    else if (arr[i] == '--double-prev') {// -- double-prev удваивает предыдущий элемент массива в преобразованном массиве.
        if (i - 1 > 0) {
            res.push(arr[i-1]); 
        } 
    } 

    else  {
        res.push(arr[i]);
    }



    
    
}
return res;
};



// --discard-next excludes the next element of the array from the transformed array.
// --discard-prev excludes the previous element of the array from the transformed array.
// --double-next doubles the next element of the array in the transformed array.
// --double-prev doubles the previous element of the array in the transformed array.
// For example:

// 


