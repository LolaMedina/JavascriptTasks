const AnimeCheck = num => {
    //check if number is an integer
   if (!Number.isInteger(num)) {
       throw new Error('Number should be an integer');
   }
   //sets array to 0 
   const output  = [];
   output.length = 0;
   
   for(let i = 1; i <=num; i++){
       
       let word = {};

       if(i % 2 === 0) {
           word.two = "yu";
       }
       if(i % 3 === 0) {
           word.three = "gi";
       }
       if(i % 5 === 0){
           word.five = "oh";
       }
      const a = Object.values(word);
      if(a.length === 0){
          output.push(i)
      } else{
          output.push(a.join("-"))
      }
   }
   return(output);
  
};
console.log(AnimeCheck(100));
console.log(AnimeCheck(50));
