// var arr = [6,8,10,9,7]

// var max = ''
// var min = ''
// max.push(arr[0])
// for (i=0; i <arr.length-1; i++)
// {
//     for (j=i;j<arr.length;j++)
//     {
//         if(max-arr[j]<0)
//         {

//         }
//     }

// }

var array= [[4,7,6,5],[1,5,3,2],[9,1,10,2],[7,2,5,8]] 
var tampung=[]
for(i=0;i<array.length;i++)
{
    var max=array[i][0]
    for(j=0;j<array.length;j++)
    if(max<array[i][j])
    {
        max=array[i][j]
    }
    tampung.push(max)
}
console.log(tampung)
console.log(Math.max(...array[2]))

var array= [[4,7,6,5],[1,5,3,2],[9,1,10,2],[7,2,5,8]] 
var tampung=[]
for(i=0;i<array.length;i++)
{
    tampung.push(Math.max(...array[i]))
}
console.log(tampung)
console.log(Math.max(...array[2]))
