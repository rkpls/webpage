
//javascrip for Adler COMMS

$(document).ready(function() { function connectToMicroPython()
{ var socket = new WebSocket('ws://80.187.124.97:81/');
  socket.onopen = function(event) {
    console.log('Connected to MicroPython device');
    getTerminalLog();
  };

  socket.onmessage = function(event) {
    var log = JSON.parse(event.data);
    if (log.length > 0) {
      for (var i = 0; i < log.length; i++) {
        $('#terminal').append(log[i] + '<br>');
      }
    }
  };

  socket.onclose = function(event) {
    console.log('Disconnected from MicroPython device');
    setTimeout(connectToMicroPython, 5000);
  };

  socket.onerror = function(event) {
    console.log('Error connecting to MicroPython device');
    setTimeout(connectToMicroPython, 5000);
  };
}

function getTerminalLog() {
  $.ajax({
    url: 'http://80.187.124.97:81/terminal_log',
    dataType: 'json',
    success: function(log) {
      if (log.length > 0) {
        for (var i = 0; i < log.length; i++) {
          $('#terminal').append(log[i] + '<br>');
        }
      }
      setTimeout(getTerminalLog, 1000);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log('Error fetching terminal log: ' + textStatus);
      setTimeout(getTerminalLog, 1000);
    }
  });
}

connectToMicroPython();
});