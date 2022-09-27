document.write("文档内容")
document.write("文档显示区域的宽度" + window.innerWidth)
document.write("<br>")
document.write("文档显示区域的高度" + window.innerHeight)
document.write("<br>")
document.write("浏览器的宽度" + window.outerWidth)
document.write("<br>")
document.write("浏览器的高度" + window.outerHeight)

document.write("<br>")
document.write("<br>")
document.write("window.open('https://www.baidu.com'),不告知用户打开一个网站")
document.write("<br>")
function openNewWindow() {
    window.open("https://baidu.com")
}