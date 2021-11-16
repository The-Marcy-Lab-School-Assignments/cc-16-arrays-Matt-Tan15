const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];

const replaceWithYerr = (arr, start = 0, end = arr.length) => {
    let newArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
      if (i >= start && i < start + end) {
            newArr.push('yerr');
        } else {
            newArr.push(arr[i]);
        }
    } 
    
    return newArr;
};

console.log(replaceWithYerr(months, 1, 3)); //['Jan', 'yerr', 'yerr, 'yerr', 'May', 'June']
console.log(replaceWithYerr(months, 1)); //['Jan', 'yerr', 'yerr, 'yerr', 'yerr', 'yerr']
console.log(replaceWithYerr(months)); //['yerr', 'yerr', 'yerr, 'yerr', 'yerr', 'yerr']