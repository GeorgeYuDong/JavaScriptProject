x = new Array(3, 1, 4, 6)
document.write("数组x为：" + x + ", 长度为" + x.length)
document.write("<br/>")
document.write("(arrayKey in x) x[arrayKey] 方式：")
document.write("<br/>")
for (const arrayKey in x) { // in ->下标，与Java不一样
    document.write(x[arrayKey])
    document.write("<br/>")
}
document.write("<br/>")
document.write("(arrayElement of x) arrayElement 方式：")
document.write("<br/>")
for (const arrayElement of x) { // of->元素, 与Java一样
    document.write(arrayElement)
    document.write("<br/>")
}
document.write("<br/>")
y = new Array(123,456)
document.write("数组y为：" + y)
document.write("<br/>")
document.write("连接数组x和y：" + x.concat(y))


document.write("<br/>")
document.write("<br/>")
document.write("方法join（）通过指定分隔符，返回数组字符串表达：")
document.write("<br/>")
z = x.join("@")
document.write("方法join（'@'）通过指定分隔符@，返回数组字符串表达：" + z + ", 类型为：" + typeof z)

document.write("<br/>")
document.write("<br/>")
y.push(5)
document.write("向y中push 5, y为：" + y)
document.write("<br/>")
e = y.pop()
document.write("向y中执行pop(), pop的值为：" + e)
document.write("<br/>")
document.write("向y中执行pop()后, y为：" + y)
document.write("<br/>")
document.write("<br/>")

y.unshift(22)
document.write("向y中unshift(y头部添加) 22后, y为：" + y)
document.write("<br/>")
e = y.shift()
document.write("向y中执行shift(头部获取并删除), shift的值为：" + e)
document.write("<br/>")
document.write("向y中执行shift()后, y为：" + y)
document.write("<br/>")
document.write("<br/>")

document.write("x is:" + x)
x.sort()
document.write("<br/>")
document.write("x sort后，x is: " + x + "..... x type is：" + typeof x)

function comparator(v1, v2) {
    return v2 - v1
}

document.write("<br/>")
x.sort(comparator)
document.write("使用自定义comparator，x sort后，x is: " + x )

document.write("<br/>")
document.write("<br/>")
document.write("翻转，x reverse后，x is：" + x.reverse() )

document.write("<br/>")
document.write("<br/>")
document.write("子数组，x.slice(1,3)左闭右开 ，x is：" + x.slice(1, 3) )
document.write("<br/>")
document.write("子数组，x.slice(1)左闭右开 ，x is：" + x.slice(1))

document.write("<br/>")
document.write("<br/>")
document.write("x is:" + x)
document.write("<br/>")
x.splice(2, 2, 39, 18)
document.write("x.splice(2, 2, 39, 18)")
document.write("<br/>")
document.write("删除和插入元素，x数组下标2（数字4）开始删除2个元素，同时插入2个元素（39，18)")
document.write("<br/>")
document.write("x is:" + x)





