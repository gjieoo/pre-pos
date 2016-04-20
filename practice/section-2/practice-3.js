function count_same_elements(collection)
{
   var newArray=[{name:collection[0],summary:1}];
   var item = collection[0];

   for(var i=1;i<collection.length;i++) {
     if (collection[i].length != 1) {
       var newString = [];
       var count = 0;

       if (collection[i].indexOf("-") == 1) {
         newString = collection[i].split("-");
         count = Number(newString[1]);
         if (item === newString[0]) {
           newArray[newArray.length - 1].summary += count;
         }
         else {
           item = newString[0];
           newArray.push({name:item, summary: count});
         }
       }
       else if (collection[i].indexOf(":") == 1) {
         newString = collection[i].split(":");
         count = Number(newString[1]);
         if (item === newString[0]) {
           newArray[newArray.length - 1].summary += count;
         }
         else {
           item = newString[0];
           newArray.push({name:item, summary: count});
         }
       }
       else {
         newString = collection[i].split("[");
         var newCount = parseInt(newString[1]);
         if (item === newString[0]) {
           newArray[newArray.length - 1].summary += newCount;
         }
         else {
           item = newString[0];
           newArray.push({name: item, summary: newCount});
         }
       }
     }
      else {
       if (item === collection[i]) {
         newArray[newArray.length - 1].summary++;
       }
       else {
         item = collection[i];
         newArray.push({name: item, summary: 1});
       }
     }

   }
  return newArray;
}


