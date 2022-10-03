function getNumberOfWords(sentence){
    const cleanSentence = sentence.trim();
     let wordCounter = 0;
    if(cleanSentence.length > 0 && cleanSentence[cleanSentence.length -1] === '.'){
      for (var i = 0; i < cleanSentence.length -1; i++){  
      if(cleanSentence[i] === ' ') wordCounter ++;
    }
      return wordCounter +1;
    }else{
      return "sentence invalid"
    }
    
  }
  const  sentence = "hassen."
  console.log(getNumberOfWords(sentence));


  const distinctSum = arr => {
    let res = 0;
    for(let i = 0; i < arr.length; i++){
       if(i === arr.lastIndexOf(arr[i])){
          res += arr[i];
       };
       continue;
    };
    return res;
 };
 
 function getDistinctnumbers(set1 , set2){
  let  setAll = [];
   
   for (var i = 0; i < set1.length -1; i++){
     let found =false;
     if(set2.find(element => element === set1[i])){
       found =true;
     } 
    if(!found) setAll.push(set1[i]) ;
   }
    for (var i = 0; i < set2.length -1; i++){
     let found =false;
     if(set1.find(element => element === set2[i])){
       found =true;
     } 
    if(!found) setAll.push(set2[i]) ;
   }
   const sum = distinctSum(setAll);
   
   return sum + " distinct elements " +setAll;
 }
 console.log(getDistinctnumbers([3, 1, 7, 9] ,[2, 4, 1, 9, 3]))

  