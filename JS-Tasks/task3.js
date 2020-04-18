const animeCheck = num => {
    let output = [];
    let word;

    for(x = 1; x<= num; x++ ){
        if(x % 2 !== 0 && x % 3 !== 0 && x % 5 !== 0){
            word = x;
        }
        else if((x % 2 === 0) && (x % 3 === 0) && (x % 5 === 0)){
            word = "yu-gi-oh"
        }
        else if ((x % 2 === 0) && (x % 5 === 0)){
            word = "yu-oh"
        }
        else if ((x % 2 === 0) && (x % 3 === 0)){
            word = "yu-gi"
        }
        else if ((x % 3 === 0) && (x % 5 === 0)){
            word = "gi-oh"
        }
        else if(x % 2 === 0 ){
            word = "yu";
        }
      
        else if (x % 3 === 0){
            word = "gi"
        }
       
        else {
            word = "oh"
        }
        output.push(word);
    }
    return(output);
}
console.log(10);
console.log(animeCheck(100));