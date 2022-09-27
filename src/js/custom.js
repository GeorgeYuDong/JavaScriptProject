hero = new Object()
hero.name = "jason"
hero.kill = function () {
    document.write(hero.name + "正在杀敌")
}
hero.kill()

document.write("<br>")
document.write("<br>")
document.write("通过function设计对象")
document.write("<br>")

function Hero(name) {
    this.name = name
    this.kill = function () {
        document.write(this.name + "正在杀敌<br>")
    }
}

gareen = new Hero("盖伦")
gareen.kill()

teemo = new Hero("提莫")
teemo.kill()

document.write("<br>")
document.write("为Hero对象增加新方法，通过prototype实现")
document.write("<br>")

Hero.prototype.keng = function () {
   document.write(this.name + "正在坑队友<br>")
}

gareen.keng()
teemo.keng()
