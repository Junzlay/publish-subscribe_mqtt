$(document).ready(function() {
    $client = mqtt.connect('wss://mqtt.eclipseprojects.io:443/mqtt')
$client.on('connect', function() {
    $('.connect').val('Connected to wss://mqtt.eclipseprojects.io:443/mqtt');
    console.log('connected')
})

$client.on('message', function(topic,payload) {
            if (topic.indexOf('/')) {
                topic = topic.substr(topic.indexOf("/") + 1)
            }
            $(".table tbody").append("<tr class='text-secondary'><td>" + topic + "</td><td>" + payload+ "</td></tr>")

       
    // $(".table tbody").append("<tr class='text-secondary'><td>" + $('#topic').val() + "</td><td>" + $('#payload').val() + "</td></tr>")
})


    $('#publish').click(function() {
        $client.publish($('#topic').val(), $('#payload').val())
    })
    $('#subscribe').click(function showAlert() {
        if ($('#subtopic').val() == "") {
            alert("Please Fill up the Field")
        } else {
            $client.subscribe($('#subtopic').val())
        }

    })
    $('#clear').click(function() {
        $('#Table tbody').fadeOut("slow")
    })
})

