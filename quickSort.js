/*
快速排序
1）算法简介
快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
2）算法描述和实现
快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：
1-从数列中挑出一个元素，称为 "基准"（pivot）；
2-重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
3-递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
3）算法分析
最佳情况：T(n) = O(nlogn)
最差情况：T(n) = O(n2)
平均情况：T(n) = O(nlogn)
*/
function quickSort(array,left,right){
	if (Object.prototype.toString.call(array).slice(8,-1)==="Array" && typeof left==="number" && typeof
	right==="number" ) {
         if (left<right) {
         	var x=array[right],
         	    i=left-1,
         	    temp;
         	for (var j= left; j<=right; j++) {
               if (array[j]<=x) {
               	i++;
               	temp=array[i];
               	array[i]=array[j];
               	array[j]=temp;
               }
 
            }
            quickSort(array,left,i-1);
            quickSort(array,i+1,right);
         }
	}else{
		return "array is not a Array!";
	}
}
