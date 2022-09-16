g = 12

function g1() {
    document.write("通过函数g1设置全局变量g的值为55")
    g = 55
}

function g2() {
    document.write("通过函数g2访问并打印全局变量g的值: " + g)
}

g1()
document.write("<br/>")
g2()