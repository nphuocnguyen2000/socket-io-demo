$(document).ready(function () {
    // alert("Hello thomas")
    $('#sendData').click(function (e) { 
        e.preventDefault();
        socket.emit('client-send-data', 'Thomas send data')
    });
    $('#submit').click(function (e) { 
        e.preventDefault();
        socket.emit('send-number', {n1:$("#number1").val(), n2: $("#number2").val() })
   
    });

});