//Find out 10,001th prime number

let primeCandidate = 3;
let counter = 1;
let isPrime = true;
let requiredPrimeNum = process.argv[2];

if(requiredPrimeNum == 1) {
  console.log(requiredPrimeNum+"th Prime number is",primeCandidate-1);
} else if(requiredPrimeNum > 0) {
    primeCandidate = result(requiredPrimeNum);
    console.log(requiredPrimeNum+"th Prime number is",primeCandidate);
} else {
  console.log("Invalid Input");
}

function result(requiredPrimeNum) {
  while(counter != requiredPrimeNum) {
    let limit = Math.sqrt(primeCandidate);
    for(let index = 3; index <= limit; index += 2) {
      if((primeCandidate % index) == 0 ) {
        isPrime = false;
        index = primeCandidate;
      }
    }
    if(isPrime) {
      counter++; 
    } 
    isPrime = true;
    primeCandidate += 2;
  }
  return primeCandidate-2;
}


