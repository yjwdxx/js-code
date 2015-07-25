/*
1）算法简介
二分插入（Binary-insert-sort)排序是一种在直接插入排序算法上进行小改动的排序算法。其与直接插入排序算法最大的区别在于查找插入位置时使用的是二分查找的方式，在速度上有一定提升。
2）算法描述和实现
一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：
1-从第一个元素开始，该元素可以认为已经被排序；
2-取出下一个元素，在已经排序的元素序列中二分查找到第一个比它大的数的位置；
3-将新元素插入到该位置后；
4-重复上述两步。
3）算法分析
最佳情况：T(n) = O(nlogn)
最差情况：T(n) = O(n2)
平均情况：T(n) = O(n2)

*/
function binaryInsertSort(array){
	if (Object.prototype.toString.call(array).slice(8,-1)==="Array") {
        for (var i = 1; i < array.length; i++) {
            var key=array[i],
                left=0,
                right=i-1;
             while(left<=right){
             	var middle=parseInt((left+right)/2);
             	if (key<array[middle]) {
                    right=middle-1;

             	}else{
             		left=middle+1;
             	}
             }
             for (var j = i-1; j>=left;j--) {
             	array[j+1]=array[j];
             }
             array[left]=key;
        }
        return array;

	}else{
		return "array is not a Array!";
	}
}