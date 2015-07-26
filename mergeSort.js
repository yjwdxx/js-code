/*
归并排序
1）算法简介
归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
归并排序是一种稳定的排序方法。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。
若将两个有序表合并成一个有序表，称为2-路归并。
2）算法描述和实现
具体算法描述如下：
1-把长度为n的输入序列分成两个长度为n/2的子序列；
2-对这两个子序列分别采用归并排序；
3-将两个排序好的子序列合并成一个最终的排序序列。
3）算法分析
最佳情况：T(n) = O(n)
最差情况：T(n) = O(nlogn)
平均情况：T(n) = O(nlogn)

*/
function mergeSort(array, p, r) {
    if (p < r) {
        var q = Math.floor((p + r) / 2);
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }
}

function merge(array, p, q, r) {
    var n1 = q - p + 1,
        n2 = r - q,
        left = [],
        right = [],
        m = n = 0;
    for (var i = 0; i < n1; i++) {
        left[i] = array[p + i];
    }
    for (var j = 0; j < n2; j++) {
        right[j] = array[q + 1 + j];
    }
    left[n1] = right[n2] = Number.MAX_VALUE;
    for (var k = p; k <= r; k++) {
        if (left[m] <= right[n]) {
            array[k] = left[m];
            m++;
        } else {
            array[k] = right[n];
            n++;
        }
    }
}
