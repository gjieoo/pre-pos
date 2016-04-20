function count_same_elements(collection)
{
  var newArray=[{key:collection[0],count:1}];
  var item=collection[0];
  var newarr=[];
  for(var i=1;i<collection.length;i++)
  {
    if(item===collection[i])
    {
      newArray[newArray.length-1].count++;
    }
    else
    {
      item=collection[i];
      newArray.push({key:collection[i],count:1});
    }
  }
  return newArray;
}
