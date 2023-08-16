const inputField = document.getElementsById("tinggi-input");
const button = document.getElementById("count-button")

inputField.addEventListener('input', function() {
    const inputValue = inputField.value

    if (inputValidation(inputValue)) {
        console.log("Sucess")
        button.style.display = "block"
    } else {
        console.log("fail")
        button.style.display = "none"
    }
})

function inputValidation(input) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}

try {
    var bilangan = 10
    var pembagi = 0
    if (pembagi === 0) {
        throw new Error("Pembagi Bernilai 0")
    }
    console.log("success")
} catch (error) {
    console.log("Ada error", error)
    alert("Maaf ada yang error")
}
