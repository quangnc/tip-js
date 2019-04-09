// 1. Cách Nhanh Để Lọc Ra Những Item Trùng Lặp Trong Array Javascript
function getUniqueSet(array) {
	return new Set(array)
}

const getUnique = getUniqueSet(['cat', 'dog', 'cat'])


//3. compare two array 
// away one
function compare(arr1,arr2){
  
   if(!arr1  || !arr2) return
  
    let result;
  
  arr1.forEach((e1,i)=>arr2.forEach(e2=>{
    
         if(e1.length > 1 && e2.length){
            result = compare(e1,e2);
         }else if(e1 !== e2 ){
            result = false
         }else{
            result = true
         }
    })
  )
  
  return result
  
}

compare([1,2,3],[1,2,3])
// true
compare([1,2],[1,2,3])
//false

// away two
JSON.stringify(arr1) !== JSON.stringify(arr2)
