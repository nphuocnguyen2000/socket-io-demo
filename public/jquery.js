$(document).ready(function () {
    // alert("Hello thomas")
    // $('#sendData').click(function (e) { 
    //     e.preventDefault();
    //     socket.emit('client-send-data', 'Thomas send data')
    // });
    // $('#submit').click(function (e) { 
    //     e.preventDefault();
    //     socket.emit('send-number', {n1:$("#number1").val(), n2: $("#number2").val() })
    // });

    $('#submit').click(function (e) { 
        e.preventDefault();
        socket.emit('client-register', {userName: $("#userName").val() })
    });

    $('#submitChat').click(function (e) { 
        e.preventDefault();
        socket.emit('client-send-chat', $("#inputChat").val())
    });

    $('#submitRoomName').click(function (e) { 
        e.preventDefault();
        socket.emit('create-room', $("#roomName").val())
    });
    $('#submitMessageRoom').click(function (e) {
        e.preventDefault();
        socket.emit('send-message-room', $("#inputMessageRoom").val())
    })
    $('#register-wrap').show()
    $('#content-wrap').hide()

});