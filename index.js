const months = ['Jan', 'February', 'March', 'April', 'May', 'June'];

const replaceWithYerr = (arr, start, end) => {
    let newArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        newArr.push(arr[i]);
      if (start === undefined && end === undefined) {
            newArr.fill('yerr');
        } else if (end === undefined) {
            newArr.fill('yerr', start, arr.length);
        } else {
            newArr.fill('yerr', start, end + 1);
        }
    } 
    
    return newArr;
};

console.log(replaceWithYerr(months, 1, 3)); //['Jan', 'yerr', 'yerr, 'yerr', 'May', 'June']
console.log(replaceWithYerr(months, 1)); //['Jan', 'yerr', 'yerr, 'yerr', 'yerr', 'yerr']
console.log(replaceWithYerr(months)); //['yerr', 'yerr', 'yerr, 'yerr', 'yerr', 'yerr']