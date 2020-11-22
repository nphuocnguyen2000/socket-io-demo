let socket = io("http://localhost:5000/")

socket.on('server-send-data', (data) => {
    $('#content').append(data + ',')
})

socket.on('server-send-result-num', data => {
    $('#result-number').append(data)
})