
export function dataTimeSort(data) {
    var len = data.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; i < len - 1 - i; i++) {
            if (data[j].time > data[j + 1].time) {//相邻元素两两对比
                console.log(data);
                var temp = data[j + 1];//元素交换
                data[j + 1] = data[j];
                data[j] = temp;
            }
        }
    }
    return data;
}