$(document).ready(function () {
    // alert("Hello thomas")
    $('#sendData').click(function (e) { 
        e.preventDefault();
        socket.emit('client-send-data', 'Thomas send data')
    });


});