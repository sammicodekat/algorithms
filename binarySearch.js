function indexEqualsValueSearch(arr){
   begin = 0
   end = arr.length - 1
   while (begin <= end){
      i = round((begin+end)/2)
      if (arr[i] < i){
         begin = i+1
      }
      else if (arr[i] == i ){
         return i
      }
      else{
          end = i-1
      }
   }
return -1
}
