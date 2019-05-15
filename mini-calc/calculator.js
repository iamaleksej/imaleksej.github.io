function plus(){
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
}

function minus(){
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
}

function umnozhit(){
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;
    document.getElementById('out').innerHTML = result;
}

function delit(){
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 / num2;
    document.getElementById('out').innerHTML = result;
}

function steret(){
    document.getElementById("c").onclick = function(e){
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
        document.getElementById('out').innerHTML = 'Результат:';
    }

}