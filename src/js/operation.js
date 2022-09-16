function arithmetic(s) {
    document.write(s)
    document.write("<br/>")
}

arithmetic("5+2 = " + (5 + 2))
arithmetic("5-2 = " + (5 - 2))
arithmetic("5*2 = " + (5 * 2))
arithmetic("5/2 = " + (5 / 2))
arithmetic("5%2 = " + (5 % 2))

document.write("<br/>")
a = 5
document.write("a == b 等于5 ")
document.write("<br/>")
document.write("a++ 先取值，再运算，打印出来是: " + a++)
document.write("<br/>")
b = 5
document.write("++b 先运算，再取值，打印出来是: " + ++b)
document.write("<br/>")
a += 6
document.write("a+=6就是a=a+6的意思，打印出来的值为：" + a)

document.write("<br/>")
document.write("<br/>")
document.write("当+两边都是数字，+就是运算符，1+2= " + (1 + 2))
document.write("<br/>")
document.write("当+任意一边是数字，+就是字符串连接符号，1+\'2\'= " + (1 + "2"))

function logic(s) {
    document.write(s)
    document.write("<br/>")
}

document.write("<br/>")
document.write("<br/>")
logic("1=='1': " + (1 == '1'))
logic("1==='1': " + (1 === '1'))

document.write("<br/>")
document.write("age<18?'cartoon':'you see' 为三目表示法")
document.write("<br/>")
document.write("age<18看cartoon,否则看 you see")

function ternary(age) {
    movie = age < 18 ? "cartoon" : "you see"
    return movie
}

movie = ternary(15)
document.write("<br/>")
document.write("age值为15，所以看" + movie)
movie = ternary(20)
document.write("<br/>")
document.write("age值为20，所以看" + movie)


