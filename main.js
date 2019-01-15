$(document).ready(function(){
   var mymap = L.map('mymap',
                    {
                     center: [52.24, 21.01], 
                     zoom: 11,
                     zoomControl:true,
                     attributionControl:true
                    }
                    );
    var lyrORTO= L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer',
                                 {layers:'raster',
                                 format:'image/png',
                                 transparent: 'true',
                                 version:'1.1.1',}            
                                 
                                 );
     var lyrSOZO= L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer',
                                 {layers:'raster',
                                 format:'image/png',
                                 transparent: 'true',
                                 version:'1.1.1',}            
                                 
                                 );
    
    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    mymap.addLayer(lyrSOZO);
    
    var lyrPRGWOJ= L.tileLayer('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                                                      
                               {layers:'wojewodztwa',
                                format: 'image/png',
                                transparent:'true',
                                version: '1.1.1'
                               ,}
                               
                                );
     var lyrKOLEJ= L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                                                      
                               {layers:'KOLEJ',
                                format: 'image/png',
                                transparent:'true',
                                version: '1.1.1'
                               ,}
                               
                                );
    var lyrWODYL= L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                                                      
                               {layers:'WODYL',
                                format: 'image/png',
                                transparent:'true',
                                version: '1.1.1'
                               ,}
                               
                                );
       var lyrWODYA= L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                                                      
                               {layers:'WODYA',
                                format: 'image/png',
                                transparent:'true',
                                version: '1.1.1'
                               ,}
                               
                                );
    var lyrDROGI= L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                                                      
                               {layers:'DROGI',
                                format: 'image/png',
                                transparent:'true',
                                version: '1.1.1'
                               ,}
                               
                                );
    var lyrWIEZIENIA= L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                                                      
                               {layers:'WIEZIENIA',
                                format: 'image/png',
                                transparent:'true',
                                version: '1.1.1'
                               ,}
                               
                                );
     var lyrREKREACJA= L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                                                      
                               {layers:'REKREACJA',
                                format: 'image/png',
                                transparent:'true',
                                version: '1.1.1'
                               ,}
                               
                                );
    var lyrSZKOLY= L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                                                      
                               {layers:'SZKOLY',
                                format: 'image/png',
                                transparent:'true',
                                version: '1.1.1'
                               ,}
                               
                                );
    var lyrCMENTARZE= L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                                                      
                               {layers:'CMENTARZE',
                                format: 'image/png',
                                transparent:'true',
                                version: '1.1.1'
                               ,}
                               
                                );
    var lyrOSIEDLA= L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                                                                      
                               {layers:'OSIEDLA',
                                format: 'image/png',
                                transparent:'true',
                                version: '1.1.1'
                               ,}
                               );
    var baseMaps ={
        "OpenStreetMaps":lyrOSM,
            "Ortofotomapa": lyrORTO,
                "Mapa Sozologiczna": lyrSOZO,
                
        //lista obiektow typu checkbox

    };
    
    
            var overlays={ 
        "Wykaz Wojewodztw": lyrPRGWOJ,
        "Strefy buforowe dla kolei" : lyrKOLEJ,
                "Strefy buforowe dla wod liniowych" : lyrWODYL,
                "Strefy buforowe dla wod powierzchniowych" : lyrWODYA,
                "Strefy buforowe dla drog " : lyrDROGI,
                "Strefy buforowe dla wiezien " : lyrWIEZIENIA,
                "Strefy buforowe dla terenow rekreacyjnych " : lyrREKREACJA,
                 "Strefy buforowe dla szkol " : lyrSZKOLY,
                "Strefy buforowe dla cmentarzy " : lyrCMENTARZE,
                 "Strefy buforowe dla osiedli " : lyrOSIEDLA,
                
            };
    
    L.control.layers(baseMaps, overlays).addTo(mymap)
    


});