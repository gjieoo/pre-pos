function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var newArray=[];
  for(var i=0;i<collection_a.length;i++)
  {
    var item=collection_a[i];
    if((isexit(item,object_b.value)))
    {
      newArray.push(item);
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
