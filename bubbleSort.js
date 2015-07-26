/*
冒泡排序（属于交换排序）
1）算法简介
冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。
2）算法描述和实现
具体算法描述如下：
1-比较相邻的元素。如果第一个比第二个大，就交换它们两个；
2-对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
3-针对所有的元素重复以上的步骤，除了最后一个；
4-重复步骤1~3，直到排序完成。
3）算法分析
最佳情况：T(n) = O(n)
最差情况：T(n) = O(n2)
平均情况：T(n) = O(n2)
*/
function bubbleSort (array) {
	if (Object.prototype.toString.call(array).slice(8,-1)==="Array") {
       var len=array.length,
           temp;
       for (var i = 0; i < len-1; i++) {
           for (var j = len-1; j>=0 ;j--) {
               if (array[j]<array[j-1]) {
               	  temp=array[j];
               	  array[j]=array[j-1];
               	  array[j-1]=temp;
               }	
              }   
            }
       return array;

	}else{
		return "array is not a Array!";
	}
}

/*
冒泡排序的改进版
对冒泡排序常见的改进方法是加入一标志性变量exchange，
用于标志某一趟排序过程中是否有数据交换，如果进行某一趟排序时并没有进行数据交换，
则说明数据已经按要求排列好，可立即结束排序，避免不必要的比较过程。*/
/*1.设置一标志性变量pos,用于记录每趟排序中最后一次进行交换的位置。
由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。*/
function bubbleSort (array) {
	if (Object.prototype.toString.call(array).slice(8,-1)==="Array") {
       var len=array.length-1,
           temp;
      while(len>0)
      {
      	var pos=0;//每趟开始，无记录交换
      	for (var i = 0; i <len; i++) {
           if (array[i]>array[i+1]) {
           	pos=i;//记录交换的位置
           	temp=array[i];
           	array[i]=array[i+1];
           	array[i+1]=temp;
           }
      	}
      	len=pos;//为下一趟排序做准备
      }
      return array;
	}else{
		return "array is not a Array!";
	}
}

/*
2.传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值,
我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值(最大者和最小者) , 
从而使排序趟数几乎减少了一半。
*/
//算法有问题，无法实现
function bubbleSort(array) {
	if (Object.prototype.toString.call(array).slice(8,-1)==="Array") {
        var low=0,
            high=array.length-1,
            temp;
      while(low<high){
      	for (var i = 0;i<high;++i) {//正向冒泡
           if (array[i]>array[i+1]) {
           	temp=array[i];
           	array[i]=array[i+1];
           	array[i+1]=temp;
           }
           --high;//修改high值，向前移动
      } 
      for (var j =high;j>low ;--j){//反向冒泡
           if (array[j]<array[j-1]) {
           	temp=array[j];
           	array[j]=array[j-1];
           	array[j-1]=temp;
           }
           ++low;
  } 
     
}
       return array;
	}else{
		return "array is not a Array!";
	}
}