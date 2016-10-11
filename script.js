$( document ).ready(function() {
  var names = ["Edward", "Barefoot Contessa", "Alucard", "Shania", "Bobby Brown"];

  var article = {
    header: {
      title: "Gibberish",
      byline: "by Chaos Octopus"
    },
    editors: ["Daniella Stanley", "Stan Danley"],
    body: {
      imageUrl: "http://www.placebear.com/333/333",
      text: 'Shark far unsafely some hello a over hey overabundant rarely amiable so as surreptitious ceaseless busted flabbily as some quail jeepers some vibrantly house the wow wow hello far. Hey this hey concomitant when horrendous gull within far alas forgave thanks after poignantly tritely flamingo rarely one sullenly jocose.'
    }
  }

//Question 2
  for (i=0;i<names.length;i++) {
    console.log(names[i]);
  }

//Question 3
$( "div" ).each(function( index ) {
  $( this ).text();
});

//Question 4
$( "div" ).each(function(  ) {
  $( this ).text("Rob");
});

//Question 5
$( "div" ).each(function( index ) {
  $( this ).text(names[index]);
});

//Question 6
var mainText = $("article").text();
$("main").text(mainText);

//Bonus 1
var title = "Title";
$("h3").text(title);

});
