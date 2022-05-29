// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

function factorial(n){
    arr = []
    for(i=n; i>=1; i--){
        arr.push(i)
    }

    nfactorial = arr.reduce(
        (a, b) => a * b,
    )
    console.log(`${n}! is ${nfactorial}`)
}
factorial(5)
console.log('=====')
factorial(17)