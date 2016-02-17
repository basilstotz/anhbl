// Gratefully derived from Kevin Deldycke's post on 7/12/12
// http://kevin.deldycke.com/2012/07/displaying-upcoming-events-google-calendar-javascript
function GCalEvents(gcal_json_url) {

        // Get list of upcoming iCal events formatted in JSON
        jQuery.getJSON(gcal_json_url, function(data){

            // Parse and render each event
            jQuery.each(data.feed.entry, function(i, item){
                if(i == 0) {
                    jQuery("#gcal-events li").first().hide();
                };
                
                // event title
                var event_title = item.title.$t;
                
                // event contents
                var event_contents = jQuery.trim(item.content.$t);
                // make each separate line a new list item
                event_contents = event_contents.replace(/\n/g,"</li><li>");

                // event start date/time
                var event_start_date = new Date(item.gd$when[0].startTime);
                
                // if event has a start time (as oppose to all day), format date with time
                if(event_start_date.getHours() != 0 || event_start_date.getMinutes() != 0) {
                    var event_start_str = event_start_date.toString("ddd MMM d, h:mm tt");
                } else {
                // otherwise format start as date only (without time)
                    var event_start_str = event_start_date.toString("ddd MMM d");                
                };
                
                // event location - if not null, surround with parens
                var event_loc = item.gd$where[0].valueString;
                if(event_loc!="") {
	                event_loc = " (" + event_loc + ")";
	            };
                
                // Render the event
                jQuery("#gcal-events li").last().before(
                    "<li>" + event_title
                    + "<ul>"
                    + "<li>" + event_contents + "</li>"
                    + "<li>" + event_start_str + event_loc + "</li>"
                    + "</ul>"
                    + "</li>"
                );
            });
        });
    }
