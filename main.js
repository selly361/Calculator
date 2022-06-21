let body = document.body;
let input = document.querySelector("input");
let num1 = document.querySelector(".num1");
let num0 = document.querySelector(".num0");
let container = document.querySelector(".calc-container");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear")

container.addEventListener("click", (e) => {
if(+e.target.innerText || e.target.innerText == '0'){
    let data = e.target.innerText;
    input.value.length == 0 ? input.value = data : input.value += data
    
}


let operation = e.target.innerText
if(operation == "+" || operation == "/" || operation == "-" || operation == "x"){
    input.value += " " + operation + " "
}})

clear.addEventListener("click", (e) => {
    input.value = ""
})

equal.addEventListener("click", (e) => {
let array = input.value.split(" ");
let bool = true;

// Division Multipication Subtraction Addition

do {

    // Division operator first
    if(array.includes("/")){
        let index = array.indexOf("/");
        let answer = +array[index - 1] / +array[index + 1];
        array.splice(index - 1, index + 2, `${answer}`)

        if(array.length == 1){
            input.value = array[0]
            bool = false;
        }


    }
    //Multipication operator

    else if(array.includes("x")){
        let index = array.indexOf("x");
        let answer = +array[index - 1] * +array[index + 1];
        array.splice(index - 1, index + 2, `${answer}`)

        if(array.length == 1){
            input.value = array[0]
            bool = false;
        }       
    }

    else if(array.includes("-")){
        let index = array.indexOf("-");
        let answer = +array[index - 1] - +array[index + 1];
        array.splice(index - 1, index + 2, `${answer}`)

        if(array.length == 1){
            input.value = array[0]
            bool = false;
        }               

    }


    else if(array.includes("+")){
        let index = array.indexOf("+");
        let answer = +array[index - 1] + +array[index + 1];
        array.splice(index - 1, index + 2, `${answer}`)

        if(array.length == 1){
            input.value = array[0]
            bool = false;
        }               

    }
}

while(bool)



}
)
