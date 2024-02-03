function getsource(id) {
    $.ajax({
        url:"https://api.spoonacular.com/recipes/"+id+`information?${DB_APIKEY}`,
        success: function(res) {
            document.getElementById("sourceLink").innerHTML=res.sourceUrl
            document.getElementById("sourceLink").href=res.sourceUrl
        }
    });
}

function getrecipe(q) {
    $.ajax({
        url:`https://api.spoonacular.com/recipes/search?${DB_APIKEY}&number=1&query=`+q,
        success: function(res){
            document.getElementById("output").innerHTML="<h1>"+res.results[0].title+"</h1><br><img src='"+res.baseUri+res.results[0].image+"' width='400'/> <br> ready in "+res.results[0].readyInMinutes+" minutes"
            getsource(res.results[0].id)
        }
    })
}

function mybtn() {
    console.log('Button clicked!');
    button.addEventListener('click', mybtn);
    getElementById('button').value;
}