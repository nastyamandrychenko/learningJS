window.onload = function () {

    const input1 = document.getElementById("first");
    const input2 = document.getElementById("second");
    let btn = document.getElementsByClassName("equals")[0];
    let plus = document.getElementsByClassName("plus")[0];
    let minus = document.getElementsByClassName("minus")[0];
    let multiply = document.getElementsByClassName("multiply")[0];
    let divide = document.getElementsByClassName("divide")[0];
    console.log(btn)
    let clear = document.getElementsByClassName("clear")[0];
    var resultNumber;
    let i;

    btn.addEventListener("click",
        function () {
            let number1 = Number(input1.value);
            let number2 = Number(input2.value);
            switch (i) {
                case '+':
                    resultNumber = number1 + number2;
                    break;
                case '-':
                    resultNumber = number1 - number2;
                    break;
                case '*':
                    resultNumber = number1 * number2;
                    break;
                case '/':
                    resultNumber = number1 / number2;
                    break;
                default:
                    resultNumber = 'Выберите операцию!';

            }
            if (!number1 || !number2) {
                resultNumber = "Ошибка"
            }
            document.getElementById("result").innerHTML = resultNumber;
        },
        false);

        plus.addEventListener("click",
        function () {
            i = "+"
        },
        false);

        minus.addEventListener("click",
        function () {
            i = "-"
        },
        false);
        multiply.addEventListener("click",
        function () {
            i = "*"
        },
        false);
        divide.addEventListener("click",
        function () {
            i = "/"
        },
        false);


    clear.addEventListener("click", function () {
        input1.value = "";
        input2.value = "";
        document.getElementById("result").innerHTML = "";
    }, false)
}
