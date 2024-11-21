//alert("Hello World");

var hello="Hello World!";
console.log("This is good for debugging " + hello); 

function print3ways(){
    alert("hello World!");
    console.log("printing to the console");
    document.write("this will rewrite the HTML page");
}

function funWithArrays(){
    document.write(" The sum is " +getSum());
    document.write("<br> The minimum is " +findMin());
    document.write("<br> The maximum is " +findMax());
    document.write("<br> The average is " +average());
}

function firstFunction(callback){
    console.log("about to execute the callback function");
    callback();
}

function myCallbackFunction(){
    console.log("this is the callback function that does something special");
}

function soManyFunctions(){
    console.log("In soManyFuncitions. Begin function calls.");
    firstFunction(myCallbackFunction);
    console.log("returning to soManyFunctions");
}

const arr=[1,2,3,4,5];

function getSum(){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

function findMin(){
    let min=arr[0];
    for(let i=0; i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

function findMax(){
    let max=arr[0];
    for(let i=0; i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

function average(){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

