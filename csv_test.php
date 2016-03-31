
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>CSV Playground</title>
    <style>
        body, html {
            margin:0;padding:0;
            width: 100%;
        }
        .row {
            display: block;
            position: relative;
            width: 100%;
            padding: 0 10px;
        }
        .col-4 {
            display: inline-block;
            width: 32%;
        }
    </style>
</head>

<body>
    <h2>California</h2>
    <div class="row">
        <div class="col-4"><h3>Location</h3></div>
        <div class="col-4"><h3>Time</h3></div>
        <div class="col-4"><h3>Event</h3></div>
    </div>
    <div class="row">
	  <?php     
    $filename = 'test_events.csv';
    if ( ($handle = fopen($filename, 'r')) !== FALSE ) {
        while ( ($data_row = fgetcsv($handle)) !== FALSE ) {
            # Store relevant data in associative array
            $event_info = array();
            $event_info['location'] = $data_row[6];
            $event_info['date'] = $data_row[4];
            $event_info['time'] = $data_row[5];
            $event_info['title'] = $data_row[3];
            $event_info['description'] = $data_row[7];
     ?>   
        
        <div class='col-4'>
            <p><?php echo "{$event_info['location']}"; ?></p>
        </div>
        <div class='col-4'>
            <p><?php echo "{$event_info['date']}" . " " . "{$event_info['time']}"; ?></p>
        </div>
        <div class='col-4'>
            <p><?php echo "{$event_info['title']}"; ?></p>
        </div>
        
    <?php  
        }
        fclose($handle);
    } ?>
    
    </div>
    
        
</body>
</html>    