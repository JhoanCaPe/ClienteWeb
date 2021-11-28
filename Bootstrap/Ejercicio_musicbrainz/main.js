const api_root = 'https://musicbrainz.org/ws/2/';
const api_covers = 'http://coverartarchive.org/release-group/';

function obtenerArtista(mbid) {
    return mbid.name;
}

function obtenerReleaseGroup(mbid) {
   return mbid.title;
}

function getResults(entity, query, offset) {
    $("#table_body").empty();
    $("#headers_row").empty();
   //TODO
   $.get(`${api_root}${entity}?query=${query}&limit=0&offset=${offset}&fmt=json`, (r) =>{
       console.log(r);
   
    
   if(entity === 'artist'){
       const thName = document.createElement('th');
       const thDisambiguation = document.createElement('th');
       
       thName.innerText = "Nombre";
       thDisambiguation.innerText = "Mas informacion";
       $("#headers_row").append(thName);
       $("#headers_row").append(thDisambiguation);

       $("#tabla_resultados").show();

       r.artists.forEach((artista) => {
           // Creamos fila
           const trFila = document.createElement('tr');
           $("#table_body").append(trFila);
           // Creamos celda, Ponemos valores de artista
           const tdCelda = document.createElement('td');
           tdCelda.innerText = obtenerArtista(artista);
           $("#table_body").append(tdCelda);
           const tdCelda2 = document.createElement('td');
           tdCelda2.innerText = "Pais: " + artista.country;
           $("#table_body").append(tdCelda2);
           //tdCelda.innerText = artista.country;
           //$("#pais_artista").append(tdCelda);

       }
       );
   }
   else if(entity === "release-group"){
       const thTitle = document.createElement('th');
       const thArtist = document.createElement('th');
       const thType = document.createElement('th');
       thTitle.innerText = "Titulo";
       thArtist.innerText = "Artista";
       thType.innerText = "Tipo";
       $("#headers_row").append(thTitle);
       $("#headers_row").append(thArtist);
       $("#headers_row").append(thType);
       $("#tabla_resultados").show();

       r.release.forEach((releaseGroup) => {
           // Creamos fila
           const trFila = document.createElement('tr');
           $("#table_body").append(trFila);
           // Creamos celda, Ponemos valores de artista
           const tdCelda = document.createElement('td');
           tdCelda.innerText = obtenerReleaseGroup(releaseGroup);
           $("#table_body").append(tdCelda);
       }
       );

       
   }
})
}

function buscar() {
    // Extraemos el término de búsqueda
    const query = encodeURIComponent(document.getElementById('input_busqueda').value);
    const entity = document.getElementById('entity_selection').value;
    const offset = 0;
    // Lanzo la petición

    getResults(entity, query, offset);
    
}
