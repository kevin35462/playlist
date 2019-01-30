/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["rip 2 rip", "blank space", "rockin robin", "and 20 min"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
var imglinks = ["https://songtexte.co/Images/Songs/denzel-curry-rip-2-rip-r1p-2-r1p-songtext-lyrics-088c03.jpg", "https://media.planetradio.co.uk/one/radio-legacy/c9/0e54c/539e1/e6cde/94549/4f750/093e2/Taylor%20Swift%20blank%20space.jpg?quality=80&width=960&ratio=16-9&resizeStyle=aspectfill&format=jpg", "http://www.jackson5abc.com/michael/albums/got-to-be-there/rockin-robin/Cover310.png", "https://i.ytimg.com/vi/bnFa4Mq5PAM/maxresdefault.jpg"];
var artists = ["Denzel Curry", "taylor swift", "The Jackson 5", "Lil Uzi"];
var songlength = ["1:56", "4:32", "2:37", "3:40"];
var sglinks = ["https://www.youtube.com/watch?v=YDkjUrgB1g4", "https://www.youtube.com/watch?v=e-ORhEE9VVg", "https://www.youtube.com/watch?v=z-OteAgvINc", "https://www.youtube.com/watch?v=bnFa4Mq5PAM"];
var del = ["dasd", "sdds", "da", "ds"];
// Make sure they match the same order as your array above



function displaySongInfo() {
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(x) {
        $("#songs").append("<p>" + x + "</p>");
    });
    imglinks.forEach(function(x) {
        $("#images").append("<img src=" + x + ">");
    });
    artists.forEach(function(x) {
        $("#artists").append("<p>" + x + "</p>");
    });
    songlength.forEach(function(x) {
        $("#lengths").append("<p>" + x + "</p>");
    });
    sglinks.forEach(function(x) {
        $("#links").append("<a href=" + x + ">" + "Links" + "</a>");
    });
    //del.forEach(function(x) {
      //  $("#button").append("<button>" + x + "</button>");
    //});
}

function emptySongInfo() {
    // Use jQuery to empty all of the remaining
    $("#songs").empty();
    $("#images").empty();
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo() {
    // BELOW write the code to add new items to each of the arrays.
    var song = $("#song").val();
    songs.push(song);

    var glinks = $("#image").val();
    imglinks.push(glinks);

    var artist = $("#artist").val();
    artists.push(artist);

    var length = $("#length").val();
    songlength.push(length);

    var sonlin = $("#link").val();
    sglinks.push(sonlin);
}

$("#add").click(function() {
    addSongInfo();
    emptySongInfo();
    displaySongInfo();

});
displaySongInfo();
