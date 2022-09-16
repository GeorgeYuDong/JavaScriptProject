function f1() {}
f1()
try{
    document.write("调用不存在的f3()<br/>")
    f3()
}catch (err) {
    document.write("捕捉到错误<br/>")
    document.write(err.message)
}
document.write("<br/>错误被捕捉了，后续代码可继续执行")