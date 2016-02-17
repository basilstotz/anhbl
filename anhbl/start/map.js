
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var plain=getUrlVars()["plain"];

if(plain==="true"){
   //alert(plain);
   plain=true;
}else{
   plain=false;
}

//alert(plain);

 $(function() {
   if(!plain){
      $("#dialog").dialog({minWidth:800,maxHeight:600,title:'Kennen Sie die ANHBL?'}).on('dialogclose',function(event,ui){$("#menu").show();});
      $("#menu").hide();
      $("#menu").on('click',function(){$("#dialog").dialog('open');$("#menu").hide();});

GCalEvents("https://www.google.com/calendar/feeds/2iejlpbjb52n3gonrns7a092mk%40group.calendar.google.com/public/basic?orderby=starttime&sortorder=ascending&max-results=3&futureevents=true&alt=json");
}
   

});

    var gk, topo, thunderforest, osm, osm_high,osm_low,sat,sat_low, hiking,ggl,ggl2;

 



/*
    thunderforest = new L.TileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.thunderforest.com">Thunderforest</a> '
              + '(<a target="_blank" href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA 2.0</a>)'
    });
*/

/*
 var   mtl = L.TileLayer.multi({
        14: {
                url: 'http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
        },
        15: {
                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        }
}, {
        minZoom: 0,
        maxZoom: 19,
        attribution: 'tiles &copy; <a href="http://www.statkart.no/">OpenTopomap</a>'+
                     ' tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
*/

 var  adminwms = L.tileLayer.wms('http://wms.geo.admin.ch', {
//    layers: 'ch.bafu.bundesinventare-auen',
    layers: 'ch.swisstopo.geologie-geologische_karte',
//      layers: 'ch.bfe.statistik-wasserkraftanlagen',  
//        layers: 'ch.swisstopo.pixelkarte-pk25.metadata',
  format: 'image/png',
    opacity: 1.0,
    transparent: true,
    attribution: 'WMS layer by http://www.geo.admin.ch',
    crs: L.CRS.EPSG900913
 });

 var  geobl = L.tileLayer.wms('http://geowms.bl.ch', {
//    layers: 'ch.bafu.bundesinventare-auen',
    layers: 'grundkarte_farbig_group',
    format: 'image/png',
    opacity: 1.0,
    transparent: true,
    attribution: 'WMS layer by http://wmsge.bl.ch',
    crs: L.CRS.EPSG900913
 });

 var  geobl1 = L.tileLayer.wms('http://geowms.bl.ch', {
//    layers: 'ch.bafu.bundesinventare-auen',
    layers: 'grundkarte_farbig_group',
    format: 'image/png',
    opacity: 1.0,
    transparent: false,
    attribution: 'WMS layer by http://wmsge.bl.ch',
    crs: L.CRS.EPSG900913
 });


 var hillshade = L.tileLayer.wms('http://129.206.228.72/cached/hillshade', {
    minZoom:0,
    maxZoom:15,
    layers: 'europe_wms:hs_srtm_europa',
    format: 'image/png',
    opacity: 0.3,
    transparent: true,
    attribution: 'Hillshade layer by GIScience http://www.osm-wms.de',
    crs: L.CRS.EPSG900913
 });

 var  osmwms = L.tileLayer.wms('http://129.206.228.72/cached/osm', {
    layers: 'osm_auto:all',
    format: 'image/png',
    opacity: 1.0,
    transparent: false,
    attribution: 'WMS layer by GIScience http://www.osm-wms.de',
    crs: L.CRS.EPSG900913
 });

 var  osmwms_low = L.tileLayer.wms('http://129.206.228.72/cached/osm', {
    maxZoom: 8,
    minZoom: 0,
    layers: 'osm_auto:all',
    format: 'image/png',
    opacity: 1.0,
    transparent: false,
    attribution: 'WMS layer by GIScience http://www.osm-wms.de',
    crs: L.CRS.EPSG900913
 });





        ggl = new L.Google('ROADMAP');
    ggl2 = new L.Google('TERRAIN');
//////////////////////////////////////////////////////////////////////////

    var tool_ohne  = L.tileLayer('http://{s}.www.toolserver.org/tiles/osm-no-labels/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 18,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var tool_label  = L.tileLayer('http://{s}.www.toolserver.org/tiles/osm-labels-en/{z}/{x}/{y}.png]', {
      minZoom: 0,
      maxZoom: 18,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var tool_label_en  = L.tileLayer('http://{s}.www.toolserver.org/tiles/osm-labels-en/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 18,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });



    
///////////////////////////////////////////////////////////////////

    var toner_hybrid  = L.tileLayer('http://c.sm.mapstack.stamen.com/toner-hybrid/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 18,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });


    var toner_terrain  = L.tileLayer('http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 18,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });


    var toner  = L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 18,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });


    var water_color  = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 18,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });


//http://a.www.toolserver.org/tiles/bw-mapnik

    var bw_mapnik  = L.tileLayer('http://a.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 18,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var hillshade2 = L.tileLayer('http://toolserver.org/~cmarqu/hill/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 16,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });


    osm_low = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 7,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });



    topo = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      minZoom:0,
      maxZoom: 16,
      attribution: 'tiles &copy; <a href="http://www.statkart.no/">OpenTopomap</a>'
    });


    osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom:0,
      maxZoom: 19,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var humanitarian = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      minZoom:0, 
      maxZoom: 19,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });


    osm_high = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 16,
      maxZoom: 19,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });



    sat_low= L.tileLayer('http://server.arcgisonline.com/ArcGIS/' + 'rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        minZoom: 0,
        maxZoom: 7,
        attribution: 'Tiles © Esri — ' 
            + 'Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, ' 
            + 'Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'});

    sat= L.tileLayer('http://server.arcgisonline.com/ArcGIS/' + 'rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        minZoom: 0,
        maxZoom: 18,
        attribution: 'Tiles © Esri — ' 
            + 'Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, ' 
            + 'Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'});


    var light = L.tileLayer('http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 19,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var refuges = L.tileLayer('http://maps.refuges.info/hiking/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 19,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var hs = L.tileLayer('http://maps.refuges.info/relief/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 19,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var hs2 = L.tileLayer('http://maps.refuges.info/relief/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 19,
      poacity: 0.3,
      attribution: 'tiles &copy; <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });



//overlays

    hiking = L.tileLayer('http://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png', {
      maxZoom: 19,
      opacity: 1.0,
      transparent: true,
      attribution: 'overlay &copy; <a target="_blank" href="http://hiking.waymarkedtrails.org">Waymarked Trails</a> '
              + '(<a target="_blank" href="http://creativecommons.org/licenses/by-sa/3.0/de/deed.en">CC-BY-SA 3.0 DE</a>)'
    });

    var biking = L.tileLayer('http://a.www.toolserver.org/tiles/bicycle_network/{z}/{x}/{y}.png', {
      maxZoom: 19,
      opacity: 1.0,
      transparent: true,
      attribution: 'overlay &copy; <a target="_blank" href="http://hiking.waymarkedtrails.org">Waymarked Trails</a> '
              + '(<a target="_blank" href="http://creativecommons.org/licenses/by-sa/3.0/de/deed.en">CC-BY-SA 3.0 DE</a>)'
    });


    var colors = ['red', 'blue', 'green', 'purple', 'orange', 'darkred', 'lightred', 'beige', 'darkblue', 'darkgreen', 'cadetblue', 'darkpurple', 'white', 'pink', 'lightblue', 'lightgreen', 'gray', 'black', 'lightgray'];


    var transport = L.tileLayer('http://www.openptmap.org/tiles/{z}/{x}/{y}.png', {
      maxZoom: 19,
      opacity: 1.0,
      transparent: true,
      attribution: 'overlay &copy; <a target="_blank" href="http://hiking.waymarkedtrails.org">Waymarked Trails</a> '
              + '(<a target="_blank" href="http://creativecommons.org/licenses/by-sa/3.0/de/deed.en">CC-BY-SA 3.0 DE</a>)'
    });

    var radius=10;



    var tourism = new L.OverPassLayer({
      query: "http://overpass-api.de/api/interpreter?data=[out:json];node(BBOX)[tourism];out;",
      callback: function(data) {
        for(i=0;i<data.elements.length;i++) {
          e = data.elements[i];

          if (e.id in this.instance._ids) return;
          this.instance._ids[e.id] = true;
          var pos = new L.LatLng(e.lat, e.lon);
          var popup = this.instance._poiInfo(e.tags,e.id);

          var draw_it=true;

          switch(e.tags.tourism){
             case 'information':
                 draw_it=false;
                 break;
             case 'museum':
             case 'zoo':
                 color='green';
                 glyph='umbrella';        
                 break;
             case 'viewpoint':
                 color='blue';
                 glyph='asterisk';
                 break;
             case 'picnic_site':
                 color='black';
                 glyph='fire';
                 break;
             case 'attraction':
             case 'artwork':
                 color='pink';
                 glyph='exclamation';
                 break;
                         case 'alpine_hut':
             case 'apartment':
             case 'camp_site':
             case 'caravan_site':
             case 'chalet':
             case 'guest_house':
             case 'hostel':
             case 'hotel':
             case 'wilderness_hut':
                 color='yellow';
                 glyph='home';
                 break;
             default:
                 color='gray'; 
                 glyph='question';
                 break; 
          }
          
          if(draw_it){
            var icon = L.AwesomeMarkers.icon({
                      icon: glyph,
                      prefix:'fa',
                      markerColor: 'orange'
                     });
            var marker = L.marker(pos,{icon: icon}).bindPopup(popup);
            this.instance.addLayer(marker);
          }
        }
      },
        minzoom:13
    });


    var shops = new L.OverPassLayer({
      query: "http://overpass-api.de/api/interpreter?data=[out:json];node(BBOX)[shop];out;",
      callback: function(data) {
        for(i=0;i<data.elements.length;i++) {
          e = data.elements[i];

          if (e.id in this.instance._ids) return;
          this.instance._ids[e.id] = true;
          var pos = new L.LatLng(e.lat, e.lon);
          var popup = this.instance._poiInfo(e.tags,e.id);

          var draw_it=true;

          switch(e.tags.shop){
             //food
             case 'alcohol':
             case 'bakery':
             case 'beverages':
             case 'butcher':
             case 'cheese':
             case 'confectory':
             case 'convenience':
             case 'deli':
             case 'dairy':
             case 'farm':
	     case 'greengrocer':
             case 'grocery':
             case 'organic':
             case 'pasta':
             case 'seafood':
             case 'wine':
             case 'general':
	     case 'mall':
             case 'supermarket':
                 color='green';
                 glyph='shopping-cart'
                 break;
             default:
                 color='darkgreen';
                 glyph='wrench';
                 break;
          }
          
          if(draw_it){
            
            var icon = L.AwesomeMarkers.icon({
                      icon: glyph,
                      prefix:'fa',
                      markerColor: color
                     });
           

            
/*
            console.log('../symbols/'+e.tags.shop+'.png');
            var icon= L.icon({
               
                 iconUrl: '../symbols/'+e.tags.shop+'-24.png',
                 shadowUrl: null,
  */ 
  /*    
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
   */
/*
		});
*/
            var marker = L.marker(pos,{icon: icon}).bindPopup(popup);
            this.instance.addLayer(marker);
          }
        }
      },
        minzoom:13
    });


    var amenity = new L.OverPassLayer({
      query: "http://overpass-api.de/api/interpreter?data=[out:json];node(BBOX)[amenity];out;",
      callback: function(data) {
        for(i=0;i<data.elements.length;i++) {
          e = data.elements[i];

          if (e.id in this.instance._ids) return;
          this.instance._ids[e.id] = true;
          var pos = new L.LatLng(e.lat, e.lon);
          var popup = this.instance._poiInfo(e.tags,e.id);

          var draw_it=true;
          color='red';

          switch(e.tags.amenity){
             //no shows
             case 'fire_station':
             case 'hunting_stand':
             case 'ice_cream':
             case 'college':
             case 'kindergarten':
             case 'recycling':
             case 'school':
             case 'university':
             case 'car_wash':
             case 'charging_station':
             case 'fuel':
             case 'grit_bin':
             case 'parking':
             case 'parking_entrance':
             case 'parking_space':
             case 'baby_hatch':
             case 'nursing_home':
             case 'social_facility':
             case 'bench':
             case 'vending_machine':
             case 'shelter':
                 draw_it=false;
                 break;
            // case 'recycling':
            //     glyph='recycle';
            //     break;
             case 'cinema':
                 glyph='film';
                 color='darkred';
                 break;
             //drink
             case 'bar':
             case 'biergarten':
             case 'cafe':
             case 'pub':
             case 'nightclub':
                 glyph='glass';
                 color='lightred'
                 break;
             //eat
             case 'bbq':
             case 'fast_food':
             case 'food_court':
             case 'restaurant':
                 color='lightred';
                 glyph='cutlery';
                 break;
             //place of worship
             case 'place_of_worship':
                 color='orange' 
                 glyph='eye';
                 break;
             //finacial
             case 'atm':
             case 'bank':
             case 'bureau_de_change':
                 color='darkred';
                 glyph='dollar';
                 
                 break;
             //healthcare
             case 'clinic':
             case 'dentist':
             case 'doctors':
             case 'hospital':
             case 'pharmacy':
             case 'veterinary':
                 color='darkred';
                 glyph='plus-square';
                 break;
             //essentials
             case 'sauna':
             case 'shower':
             case 'toilets':
             case 'drinking_water':
             case 'fountain':
             case 'swimming_pool':
                 color='lightred';
                 glyph='heart';
                 break;
             //transport
             case 'bicycle_rental':
             case 'bicycle_parking':
                  glyph='bicycle';
                  break;
             case 'bus_station':
                  glyph='truck';
                  break;
             case 'boat_sharing':
             case 'ferry_terminal':
                  glyph='anchor';
                  break;
             case 'car_rental':
             case 'car_sharing':
                 color='green';
                 glyph='car';
                 break;
             case 'taxi':
                 glyph='taxi';
                 break;
             case 'post_office':
             case 'post_box':
                 glyph='envelope';
                 break;
             case 'police':
                 glyph='bomb';
                 break;
             case 'library':
                 glyph='book';
                 break;
             case 'telephone':
                 glyph='phone';
                 break;
             default:
                 color='grey';
                 glyph='question';
                 break;
          }
          
          if(draw_it){ 
           var icon = L.AwesomeMarkers.icon({
                      icon: glyph,
                      prefix:'fa',
                      markerColor: color
                     });
            var marker = L.marker(pos,{icon: icon}).bindPopup(popup);
            this.instance.addLayer(marker);

          }
        }
      },
        minzoom:13
    });


//wiki
    var wiki = L.dbPediaLayer({lang:'de',
				includeCities:true,
				minZoom:10,
				displayMarkerLabel:true,
				displayTypes:true});


//multi tile layer
    mtl= L.layerGroup([osmwms_low,topo,osm_high]);

//map
    map = new L.Map('map', { 
//      layers: topo,
      center: new L.LatLng(47.4502,7.64305)
      ,zoom: 12
      ,minZoom:0
      ,maxZoom:18
    });

//    hillshade2.addTo(map);

    map.addControl(new L.Control.Permalink({text: 'Permalink'}));

/*


        L.tileLayer('http://{s}.tile.cloudmade.com/{key}/997/256/{z}/{x}/{y}.png', {
        maxZoom: 13,
        minZoom: 0,
        attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
        key: 'BC9A493B41014CAABB98F0471D759707'
    }),
        L.tileLayer('http://server.arcgisonline.com/ArcGIS/' + 'rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        minZoom: 14,
        maxZoom: 18,
        attribution: 'Tiles © Esri — ' 
            + 'Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, ' 
            + 'Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'})
	]

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
//                      orginsations layer                                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Anrede,Organ,Strasse,Bereich,P_Telefon,G_Telefon,Email,WWW,ID,Name,Ort,
// User,Pass,Vorname,Postfach,PLZ,Bemerkung,IsAdmin,Display,Breitengrad,Laengengrad

    //var organisations= L.layerGroup();
    var members= [];
    var organisations = new L.MarkerClusterGroup();
    
    $.get("members.csv", function(data){
      members= $.csv.toObjects(data);

     for(var i=0;i<members.length;i++){
       if(members[i].Breitengrad){
         var m= members[i];

         var content="<div>";
           //format pupup content
           if(m.Organ.trim()!=""){content+="<h3>"+m.Organ+"</h3>";}
           if(m.Strasse.trim()!=""){content+=m.Strasse+"<br>";}
           if(m.PLZ.trim()!=""){content+=m.PLZ+" ";}
           if(m.Ort.trim()!=""){content+="<b>"+m.Ort+"</b><br>";}
           if(m.Bemerkung.trim()!=""){content+="<p style='font-size:10px;'>"+m.Bemerkung+"</p>";}

           //format link
           if(m.WWW&&m.WWW.trim()!=""){  
               if(m.WWW.indexOf("http://")==-1){m.WWW="http://"+m.WWW}
               content+="<p><a target='_blanc' href='"+m.WWW+"'>"+m.WWW+"</a></p>";
           }
         content+="</div>";
         //create and add marker with popup
         var marker=new L.marker(L.latLng(m.Breitengrad,m.Laengengrad)).bindPopup(content);
         organisations.addLayer(marker);
       }
    }



   });

   if(!plain)map.addLayer(organisations);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 var geocoder = L.Control.geocoder().addTo(map);
    //L.easyPrint().addTo(map);

    map.addLayer(mtl);
    map.addLayer(hillshade);


var baseLayers= 
{
        'OpenTopomap': mtl,
        'Mapnik': osm,
        'Mapnik-S/W': bw_mapnik,
        'Mapnik-Ohne': tool_ohne,
//        'Humanitarian': humanitarian,
//        'OSM-WMS': osmwms,
//        'Light':light,
//        'Refuges': refuges,
//        'geobl': geobl1,
//        'adminwms':adminwms,
//        'Relief': hs,
//        'Toner': toner,
//        'Watercolor':water_color,
        'Satelite': sat,
        'Google Terain':ggl2,
        'Google Road':ggl


      //  'Terrain': toner_terrain,
};

if(plain){
var overlays=
{
     'Hillshade': hillshade,
     //  'Anschriften':toner_hybrid,
        'Wandern': hiking,
      //  'Biking': biking,
 
       'ÖV': transport,
        'Wikipedia': wiki,
        'Tourismus': tourism,
        'Amenity': amenity,
        'Einkaufen': shops
 
      //  'tool_label': tool_label,
      //   'geobl': geobl,
      //   'hs': hs2,
};
}else{
var overlays=
{
     'ANHBL': organisations,
     'Hillshade': hillshade,
     //  'Anschriften':toner_hybrid,
        'Wandern': hiking,
      //  'Biking': biking,
 
       'ÖV': transport,
        'Wikipedia': wiki,
        'Tourismus': tourism,
        'Amenity': amenity,
        'Einkaufen': shops
 
      //  'tool_label': tool_label,
      //   'geobl': geobl,
      //   'hs': hs2,
};
}

    L.control.layers( baseLayers,overlays).addTo(map);

var hs_on=true;

hillshade.setOpacity(0.0);

map.on('overlayadd', onOverlayAdd);

function onOverlayAdd(e){
    //alert(e.name);
    if(e.name==='Hillshade')hs_on=true;
    //do whatever
}

map.on('overlayremove', onOverlayRemove);

function onOverlayRemove(e){
    //alert("remove "+e.name);
    if(e.name==='Hillshade')hs_on=false;
    //do whatever
}

map.on('baselayerchange', function(e) {
    //alert(e.name);
    switch(e.name){
      //ohne hillshade
      case 'OpenTopomap':
      case 'Satelite':
      case 'Google Terain':
      case 'Google Road':
      case 'adminwms':
      case 'Relief':
      case 'Refuges':
      case 'Terrain':
           if(map.hasLayer(hillshade))hillshade.setOpacity(0.0);
           break;
      case 'Watercolor':
      case 'light':
           if(map.hasLayer(hillshade)){if(hs_on){hillshade.setOpacity(0.2);}else{hillshade.setOpacity(0.0);}}
           break;
      default:
           if(map.hasLayer(hillshade)){if(hs_on){hillshade.setOpacity(0.2);}else{hillshade.setOpacity(0.0);}}
           break;
    }

});

L.control.scale().addTo(map);


/*
var distance;
var traveltime;


//map.addControl( new L.Control.Search() );
//searchLayer is a L.LayerGroup contains searched markers

    //map.attributionControl.addAttribution('&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors');

    router = function(m1, m2, cb) {
      var proxy = 'http://www2.turistforeningen.no/routing.php?url=';
       
      var route = 'http://www.yournavigation.org/api/1.0/gosmore.php&format=geojson&v=foot&fast=0&layer=mapnik';
      var params = '&flat=' + m1.lat + '&flon=' + m1.lng + '&tlat=' + m2.lat + '&tlon=' + m2.lng;
      $.getJSON(proxy + route + params, function(geojson, status) {
        if (!geojson || !geojson.coordinates || geojson.coordinates.length === 0) {
          if (typeof console.log === 'function') {
            console.log('OSM router failed', geojson);
          }
          return cb(new Error());
        }
        distance=geojson.properties.distance;
        traveltime=geojson.properties.traveltime;
        return cb(null, L.GeoJSON.geometryToLayer(geojson));
      });
    }

    routing = new L.Routing({
      position: 'topleft'
      ,routing: {
        router: router
      }
      ,snapping: {
        layers: []
      }
      ,shortcut: { 
        draw: {
          enable: 68    // 'd'
          ,disable: 81  // 'q'
        }
      }
    });
    map.addControl(routing);
    routing.draw(false);

    L.easyButton('fa-user', 
              function (){
                map.locate({setView: true,maxZoom:15});
              },
             'Go to current position',
             map
            );

    L.easyButton('fa-play', 
              function (){ 
                routing.draw(true);
              },
             'Switch routing on',
             map
            );

    L.easyButton('fa-pause', 
               function (){
                routing.draw(false);
              },
             'Pause routing',
             map
            );

var geojson3D;
var polyl;

    L.easyButton('fa-stop', 
              function (){
                geojson3D=routing.toGeoJSON();
                polyl=routing.toPolyline();
                console.log('sdfsdfsadfsadf');
              },
             'Switch routing off',
             map
            );

    L.easyButton('fa-file', 
              function (){
                routing.draw(false);
              },
             'Download GPX-file',
             map
            );
//scale
     L.control.scale({imperial: false,metric:true,maxWidth:300}).addTo(map);

routing.on('routing:rerouteAllSegmentsEnd', function() {
  console.log('routing:reouteAllSegmentsEnd triggered');
})
routing.on('routing:draw-start', function() {
  console.log('routing:draw-startt triggered');
})
routing.on('routing:draw-end', function() {
  console.log('routing:draw-end triggered');
})
*/

