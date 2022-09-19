x = "5"
y = new String(x)
document.write("value of x is: " + x)
document.write("<br>")
document.write("type of x is: " + typeof x)
document.write("<br>")
document.write("value of y is: " + y)
document.write("<br>")
document.write("type of y is: " + typeof y)

document.write("<br>")
y = new String("Hello js")
document.write("字符串Hello js的长度(length属性)为: " + y.length)
document.write("<br>")
document.write("<br>")
document.write("通过charAt(0)获取位置0的字符串：" + y.charAt(0))
document.write("<br>")
temp = y.charAt(0)
document.write("通过charAt(0)获取位置0的字符类型为：" + typeof temp)
document.write("<br>")
document.write("通过charCodeAt(0)获取位置0的字符的Unicode码：" + y.charCodeAt(0))

document.write("<br>")
document.write("<br>")
x = new String("Hello ")
y = new String("Javascript")
document.write("字符串x的值：" + x)
document.write("<br>")
document.write("字符串y的值：" + y)
document.write("<br>")
z = x.concat(y)
document.write("通过concat()把x和y连接起来,新字符串z为：" + z)
document.write("<br>")
document.write("z的类型为：" + typeof z)


document.write("<br>")
document.write("<br>")

// 建构系统更重要
// 前端架构：CSS（样式，呈现方式）,HTML（内容）,JS(前后端交互)
// Http中间件
// JSP,后端SPRINGBOOT,数据库,缓存，分库分表
document.write("通过indexOf('a')获取字符'a'第一次出现的位置：" + z.indexOf('a'))
document.write("<br>")
temp = z.indexOf('a')
document.write("通过z.indexOf('a')返回的类型为：" + typeof temp)
document.write("<br>")
document.write("通过indexOf('a')获取字符'a'最后一次出现的位置：" + z.lastIndexOf('a'))
document.write("<br>")
document.write("<br>")

document.write("通过z.substring(0, 3)获取字符串Hello Javascript位0到3(不包括3)的字符串： " + z.substring(0, 3))
document.write("<br>")
temp = z.substring(0, 3)
document.write("通过z.substring(0, 3)获取字符串Hello Javascript子串类型为： " + typeof temp)

document.write("<br>")
document.write("<br>")

document.write("原字符串z是Hello Javascript")
document.write("<br>")
temp = z.replace("a", "o")
document.write("通过z.replace('a', 'o')替换z字符串第一个'a'出现的位置, 替换后的字符串为 ：" + temp)
document.write("<br>")
document.write("<br>")
regS = new RegExp("a", "g")
temp = z.replace(regS, "o")
document.write("通过new RegExp('a', 'g')产生正则表达式对象,该对象匹配字符串内的所有字符a")
document.write("<br>")
document.write("通过z.replace(regS, 'o')替换z字符串所有'a'出现的位置, 替换后的字符串为 ：" + temp)
document.write("<br>")
document.write("<br>")

x = new String("Hello This is Javascript")
document.write("字符串的值：" + x)
document.write("<br>")

y = x.split(" ")
document.write( "通过空格分隔split(' '), 得到数组: " + y) //Hello,This,is,Javascript
document.write("<br>")

z = x.split(" ", 2)
document.write( "通过空格分隔split(' '), 得到数组，并且只保留前两个: " + z) //Hello,This


document.write("<br>")
document.write("<br>")
x = new String("hello")
y = new String("hello")
z = new String("aloha")
document.write("localeCompare比较 0-相等 1:字母顺序靠后 -1:字母顺序靠前")
document.write("<br>")
document.write("通过localeCompare()判断x(hello)和y(hello)是否相等：" + x.localeCompare(y))
document.write("<br>")
document.write("通过localeCompare()判断x(hello)和z(aloha)是否相等：" + x.localeCompare(z))
document.write("<br>")

// 知识可以变现，在于信息差，在于技能







