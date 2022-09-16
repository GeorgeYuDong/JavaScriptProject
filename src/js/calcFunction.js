function calc() {
    addend = document.getElementById("addend").value
    augend = document.getElementById("augend").value

    addend = parseFloat(addend)
    augend = parseFloat(augend)

    result = addend + augend
    document.getElementById("result").value = result
}
