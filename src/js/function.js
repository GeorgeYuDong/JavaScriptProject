function print() {
    document.write("print hello")
}

print()

//同一个js,print不能重载
function printMessage(message) {
    document.write(message)
}

printMessage("<br/>")
printMessage("first message")
printMessage("<br/>")
printMessage("second message")
printMessage("<br/>")

function calc(x, y) {
    return x + y
}

sum = calc(500, 20)
printMessage(sum)
