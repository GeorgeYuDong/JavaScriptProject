function f1(j) {
    document.write('参数的作用域在函数以内，值为: ' + j)
}

function f2() {
    // 不在参数j的作用范围，无法打印
    document.write("在函数里不能访问其他函数的参数: " + j)
}

f1(5)
document.write("<br/>")
f2()
document.write("<br/>")
// 不在参数j的作用范围，无法打印
document.write("在函数外也不能访问: " + j)



