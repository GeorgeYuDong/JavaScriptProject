d = new Date()
document.write("new Date(): " + d)
document.write("<br/>")

document.write("获取年月日：")
document.write(d.getFullYear())
document.write("/")
document.write(d.getMonth() + 1)
document.write("/")
document.write(d.getDate())

document.write("<br/>")
document.write("获取时分秒毫秒：")
document.write(d.getHours())
document.write(":")
document.write(d.getMinutes())
document.write(":")
document.write(d.getSeconds())
document.write(":")
document.write(d.getMilliseconds())

document.write("<br/>")

day = d.getDay()
document.write("今天是一周的第" + day + "天")
day = d.getDate()
document.write("<br/>")
document.write("date表示几号:" + day)

document.write("<br/>")

month = d.getMonth() + 1
document.write("今天是一年的第" + month + "月")

document.write("<br/>")
time = d.getTime()
document.write("从1970/01/01 08:00:00 到今天的毫秒数：" + time)


document.write("<br/>")
document.write("修改日期对象的值为2012/12/12 00:00:00")
document.write("<br/>")
d.setHours(0)
d.setMinutes(0)
d.setSeconds(0)
d.setFullYear(2012)
d.setMonth(11)
d.setDate(12)
document.write(d)