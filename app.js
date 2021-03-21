window.onload = function(){

fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1000')
.then(function(response){  
    let data = response.json();  
    return data;
}) 
.then(data => {
    var x = 0;
    getQuote = () => {
        x = x + 1;
 var   quote = data["quotes"][x]["text"]
 var   author = data["quotes"][x]["author"]
console.log(quote)
console.log(author)
document.getElementById("quote").innerHTML =`"${quote}"` ;
document.getElementById("author").innerHTML = `~${author}`;
}
})
}
