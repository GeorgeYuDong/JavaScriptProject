var a = "hello javascript"
document.write("变量a的类型是：" + (typeof a))
document.write("<br/>")
document.write("变量a的长度是：" + a.length)

document.write("<br/>")
a = 10
document.write("数字 "+a+" 转换为字符串"+a.toString())
document.write("<br/>")

b = true
document.write("布尔 "+b+" 转换为字符串"+b.toString())
document.write("<br/>")

c = "hello javascript"
document.write("字符串 "+c+" 转换为字符串"+c.toString())
document.write("<br/>")
document.write("<br/>")

document.write("进制互转:")
document.write("<br/>")
document.write("默认模式下，数字10转换为10进制的: "+a.toString())
document.write("<br/>")
document.write("基模式下，数字10转换为2进制的: "+a.toString(2))
document.write("<br/>")
document.write("基模式下，数字10转换为8进制的: "+a.toString(8))
document.write("<br/>")
document.write("基模式下，数字10转换为16进制的: "+a.toString(16))
document.write("<br/>")
document.write("<br/>")

document.write("字符串转数字:")
document.write("<br/>")

document.write("字符串的\"10\"转换为数字的:"+parseInt("10"))
document.write("<br/>")
document.write("字符串的\"3.14\"转换为数字的:"+parseFloat("3.14"))
document.write("<br/>")
document.write("字符串的\"20abc\"转换为数字的:"+parseInt("20abc"))
document.write("<br/>")
document.write("字符串的\"hello,abc\"转换为数字的:"+parseInt("hello,abc"))
document.write("<br/>")

document.write("<br/>")
document.write("转换为布尔值:")
document.write("<br/>")
document.write("空字符串''转换为布尔值:"+Boolean(""))
document.write("<br/>")
document.write("非空字符串'hello'转换为布尔值:"+Boolean("hello"))
document.write("<br/>")
document.write("数字0转换为布尔值:"+Boolean(0))
document.write("<br/>")
document.write("数字3.14转换为布尔值:"+Boolean(3.14))
document.write("<br/>")
document.write("空对象null转换为布尔值:"+Boolean(null))
document.write("<br/>")
document.write("非空对象new Object()转换为布尔值:"+Boolean(new Object()))
document.write("<br/>")

