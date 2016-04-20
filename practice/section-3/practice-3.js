function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var newArray=[{key:collection_a[0],count:1}];
  var item=collection_a[0];
  for(var i=1;i<collection_a.length;i++)
  {
    if(item===collection_a[i])
    {
        newArray[newArray.length-1].count++;
    }
    else
    {
      item=collection_a[i];
      newArray.push({key:collection_a[i],count:1});
    }
  }
  for(var j=0;j<newArray.length;j++)
  {
    if(isexit(newArray[j].key,object_b.value))
    {
      if(newArray[j].count / 3>0)
      {
        var num=Math.floor(newArray[j].count / 3);
        newArray[j].count=newArray[j].count -num;
      }
    }
  }
  return newArray;
}
function isexit(element,collection)
{
  for(var i=0;i<collection.length;i++)
  {
    if(element===collection[i])
    {
      return true;
    }
  }
  return false;
}

