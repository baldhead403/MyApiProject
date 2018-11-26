 $(document).ready(function () {
    
     
     $("#clickMe").click(function () {
        let searchT = $("#titleSearch").val()
        const apiKey = "335bdd1"
   
        const url = "http://www.omdbapi.com/?t=" + searchT + "&type=movie&apikey=" + apiKey;
        
        
        console.log("ready");
        
        $.getJSON(url , function(data){
           $("#title").html(data.Title)
           $("#rated").html("Rated " + data.Rated)
           $("#plot").html(data.Plot)
           $("#genre").html(data.Genre)
           $("#actors").html(data.Actors)
           $("#year").html(data.Year)
           document.getElementById("image").src = data.Poster
           
           
           
           
           
           
        })
         
     })
        
 });

