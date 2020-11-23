// Unsure why, but declaring all of those "document.getElementById()" lines as variables made it not work.
// Doesn't make much difference in terms of number of lines, just would've made it look neater.



function shawshankShow() {
    document.getElementById('defaultInfo').style.display = "none";
    //
    document.getElementById('shawshankInfo').style.display = "block";
    document.getElementById('movie-image').style.backgroundImage = "url('screens/shawshank.jpg')";
    document.getElementById('shawshank-poster').style.border = "2px solid #de9a1d"; 
    //
    document.getElementById('batmanInfo').style.display = "none";
    document.getElementById('batman-poster').style.border = "none"; 
    document.getElementById('godfatherInfo').style.display = "none";
    document.getElementById('godfather-poster').style.border = "none"; 
    document.getElementById('pulpfictionInfo').style.display = "none";
    document.getElementById('pulpfiction-poster').style.border = "none"; 
    document.getElementById('schindlerInfo').style.display = "none";
    document.getElementById('schindler-poster').style.border = "none"; 
}
function batmanShow() {
    document.getElementById('defaultInfo').style.display = "none";
    document.getElementById('shawshankInfo').style.display = "none";
    document.getElementById('shawshank-poster').style.border = "none"; 
    //
    document.getElementById('batmanInfo').style.display = "block";
    document.getElementById('movie-image').style.backgroundImage = "url('screens/batman.jpg')"; 
    document.getElementById('batman-poster').style.border = "2px solid #de9a1d"; 
    //
    document.getElementById('godfatherInfo').style.display = "none";
    document.getElementById('godfather-poster').style.border = "none"; 
    document.getElementById('pulpfictionInfo').style.display = "none";
    document.getElementById('pulpfiction-poster').style.border = "none"; 
    document.getElementById('schindlerInfo').style.display = "none";
    document.getElementById('schindler-poster').style.border = "none"; 
}
function godfatherShow() {
    document.getElementById('defaultInfo').style.display = "none";
    document.getElementById('shawshankInfo').style.display = "none";
    document.getElementById('shawshank-poster').style.border = "none"; 
    document.getElementById('batmanInfo').style.display = "none";
    document.getElementById('batman-poster').style.border = "none";
    //
    document.getElementById('godfatherInfo').style.display = "block";
    document.getElementById('movie-image').style.backgroundImage = "url('screens/godfather.jpg')"; 
    document.getElementById('godfather-poster').style.border = "2px solid #de9a1d"; 
    //
    document.getElementById('pulpfictionInfo').style.display = "none";
    document.getElementById('pulpfiction-poster').style.border = "none"; 
    document.getElementById('schindlerInfo').style.display = "none";
    document.getElementById('schindler-poster').style.border = "none"; 
}
function pulpfictionShow() {
    document.getElementById('defaultInfo').style.display = "none";
    document.getElementById('shawshankInfo').style.display = "none";
    document.getElementById('shawshank-poster').style.border = "none"; 
    document.getElementById('batmanInfo').style.display = "none";
    document.getElementById('batman-poster').style.border = "none"; 
    document.getElementById('godfatherInfo').style.display = "none";
    //
    document.getElementById('pulpfictionInfo').style.display = "block";
    document.getElementById('movie-image').style.backgroundImage = "url('screens/pulpfiction.jpg')";
    document.getElementById('pulpfiction-poster').style.border = "2px solid #de9a1d";  
    //
    document.getElementById('schindlerInfo').style.display = "none";
    document.getElementById('schindler-poster').style.border = "none"; 
}
function schindlerShow() {
    document.getElementById('defaultInfo').style.display = "none";
    document.getElementById('shawshankInfo').style.display = "none";
    document.getElementById('shawshank-poster').style.border = "none"; 
    document.getElementById('batmanInfo').style.display = "none";
    document.getElementById('batman-poster').style.border = "none"; 
    document.getElementById('godfatherInfo').style.display = "none";
    document.getElementById('godfather-poster').style.border = "none"; 
    document.getElementById('pulpfictionInfo').style.display = "none";
    document.getElementById('pulpfiction-poster').style.border = "none"; 
    //
    document.getElementById('schindlerInfo').style.display = "block";
    document.getElementById('movie-image').style.backgroundImage = "url('screens/schindler.jpg')"; 
    document.getElementById('schindler-poster').style.border = "2px solid #de9a1d"; 
}