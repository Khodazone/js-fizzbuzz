
for(let i=1; i<=100; i++){
    // Check if the i is a multiple of both 3 and 5, then print FizzBuzz
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-fizz-buzz">
            <p>FizzBuzz</p>
        </div>
        `;
    } 
    // Check if the i is a multiple of 3, then print Fizz
    else if (i % 3 == 0){
        console.log("Fizz");
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-fizz">
            <p>Fizz</p>
        </div>
        `;
    } 
    // Check if the i is a multiple of 5, then print Buzz
    else if (i % 5 == 0){
        console.log("Buzz");
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-buzz">
            <p>Buzz</p>
        </div>
        `;
    } 
    // Check if the i doesn't have conditions, then print it
    else {
        console.log(i);
        document.getElementById("container-for-squares").innerHTML += `
        <div class="square-normal">
            <p>${i}</p>
        </div>
        `;
    }
}