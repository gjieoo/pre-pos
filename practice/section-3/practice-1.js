function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for(var i=0;i<collection_a.length;i++)
  {
    if(isexit(collection_a[i].key,object_b.value))
    {
      collection_a[i].count--;
    }
  }
  return collection_a;

}
function isexit(element,collect)
{
  for(var i=0;i<collect.length;i++)
  {
    if(element===collect[i])
     return true;
  }
  return false;
}
