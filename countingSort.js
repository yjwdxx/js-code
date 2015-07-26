/*
计数排序
1）算法简介
计数排序(Counting sort)是一种稳定的排序算法。计数排序使用一个额外的数组C，
其中第i个元素是待排序数组A中值等于i的元素的个数。然后根据数组C来将A中的元素排到正确的位置。它只能对整数进行排序。
2）算法描述和实现
具体算法描述如下：
1-找出待排序的数组中最大和最小的元素；
2-统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
3-对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
4-反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。
3）算法分析
当输入的元素是n 个0到k之间的整数时，它的运行时间是 O(n + k).
计数排序不是比较排序，排序的速度快于任何比较排序算法。
由于用来计数的数组C的长度取决于待排序数组中数据的范围（等于待排序数组的最大值与最小值的差加上1），
这使得计数排序对于数据范围很大的数组，需要大量时间和内存。
*/
function countingSort(array) {
  var len = array.length, B = [], C = [], min = max = array[0];
  for (var i = 0; i < len; i++) {
      min = min <= array[i] ? min : array[i];
      max = max >= array[i] ? max : array[i];
      C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
  }
  for (var j = min; j < max; j++) {
      C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
  }
  for (var k = len - 1; k >=0; k--) {
      B[C[array[k]] - 1] = array[k];
      C[array[k]]--;
  }
  return B;
}
