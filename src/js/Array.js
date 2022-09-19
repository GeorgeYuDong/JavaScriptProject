x = new Array(3, 1, 4, 6)
document.write("数组x为：" + x + ", 长度为" + x.length)
document.write("<br/>")
for (const arrayKey in x) { // in ->下标，与Java不一样
    document.write(x[arrayKey])
    document.write("<br/>")
}
document.write("<br/>")
for (const arrayElement of x) { // of->元素, 与Java一样
    document.write(arrayElement)
    document.write("<br/>")
}