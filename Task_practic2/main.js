let Isprime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let num_check = (array) => {
    let result = [];
    for (let num of array) {
        if (Isprime(num)) {
            result.push(num)
        }
    }
    console.log(result)

}

let nums = [2, 3, 5, 6, 7, 9, 10, 12, 14, 15, 17, 18, 19];

num_check(nums)