let find = (arr, targetSum) => {  //make a function and set the parameters
    const resultarr = []; // an empty array for results
    const checked = new Set(); //save checked number when do an iteration

    for (const num of arr) {  //array iteration so the varivle num will be contain the elements of array
        const result = targetSum - num; //count result 
        if (checked.has(result)) { //check result exists in the 'set' 'checked'
            resultarr.push([result, num]); //add pairs to array
    }
    checked.add(num);
}

    return resultarr
}

const arr = [1, 2, 3, 4, 5, 6];
const targetSum = 6;
const result = find(arr, targetSum);
console.log(result);