let socket = io("http://localhost:5000/")

// socket.on('server-send-data', (data) => {
//     $('#content').append(data + ',')
// })

// socket.on('server-send-result-num', data => {
//     $('#result-number').append(data)
// })

socket.on('server-not-register', () => {
    alert('Username đã tồn tại')
})


socket.on('server-register-success', (data) => {
    $('#show-userName').append(data)
    $('#register-wrap').hide(1000)
    $('#content-wrap').show(1000)
})

socket.on('server-send-list-users', data => {
    $("#table-content").html("")
    data.forEach(i => {
        $("#table-content").append(
            "<tr>" +
            "<th>" + i + "</th>" + "</tr>"     
        )
    });
})

socket.on('server-send-message', data => {
    $("#content-box").append(
        " <div id='content-item' style='padding: 5px; margin: 10px; background-color: rgb(223, 223, 223); border-radius: 10px;'>" +
        "<span id='content-item-userName' style='font-weight: bold; margin-right: 5px;'>" +
                data.userName +
        "</span> <span id='content-item-content'>" +
                data.message +
        "</span></div>"
    )
})
socket.on('server-send-message-roommm', data => {
    console.log('data', data);
    $('#content-box-room').append(
        `
        <div> ${data} </div>
        `
    )
})
socket.on('show-name-rooms', data => {
    $('#show-nameRoom').append(data)
})

