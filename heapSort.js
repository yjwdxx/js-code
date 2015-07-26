/*
算法简介
堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。
堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。
2）算法描述和实现
具体算法描述如下：
1-将初始待排序关键字序列(R1,R2....Rn)构建成大顶堆，此堆为初始的无序区；
2-将堆顶元素R[1]与最后一个元素R[n]交换，
此时得到新的无序区(R1,R2,......Rn-1)和新的有序区(Rn),且满足R[1,2...n-1]<=R[n]；
3-由于交换后新的堆顶R[1]可能违反堆的性质，
因此需要对当前无序区(R1,R2,......Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，
得到新的无序区(R1,R2....Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。
3）算法分析
最佳情况：T(n) = O(nlogn)
最差情况：T(n) = O(nlogn)
平均情况：T(n) = O(nlogn)
*/
//堆排序不是很会
function heapSort(array) {
  if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
     
//建堆
      var heapSize = array.length, temp;
      for (var i = Math.floor(heapSize / 2); i >= 0; i--) {
          heapify(array, i, heapSize);
      }

     
//堆排序
      for (var j = heapSize - 1; j >= 1; j--) {
          temp = array[0];
          array[0] = array[j];
          array[j] = temp;
          heapify(array, 0, --heapSize);
      }
  } else {
      return 'array is not an Array!';
  }
}
/*方法说明：维护堆的性质
@param  arr 数组
@param  x   数组下标
@param  len 堆大小*/
function heapify(arr, x, len) {
  if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
      var l = 2 * x, r = 2 * x + 1, largest = x, temp;
      if (l < len && arr[l] > arr[largest]) {
          largest = l;
      }
      if (r < len && arr[r] > arr[largest]) {
          largest = r;
      }
      if (largest != x) {
          temp = arr[x];
          arr[x] = arr[largest];
          arr[largest] = temp;
          heapify(arr, largest, len);
      }
  } else {
      return 'arr is not an Array or x is not a number!';
  }
}