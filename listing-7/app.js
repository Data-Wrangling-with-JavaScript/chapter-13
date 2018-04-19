//
// Manually adding elements to our visualization using D3.
//
// NOTE: This is not the best way to use D3, just a stepping stone on our way to understanding D3.
//

function pointOnCircle (radius, angleDegrees) { // Helper function to create a point on the perimeter of a circle.
    var angleRadians = (angleDegrees * Math.PI) / 180;
    return {
        x: radius * Math.cos(angleRadians),
        y: radius * Math.sin(angleRadians)
    };
};

window.onload = function () {

    var width = window.innerWidth; // Dimensions for our visualization are derived from the size of the browser window.
    var height = window.innerHeight;

    var earthRadius = 50; // Set the radius of the earth to 50 pixels.
    var earthTranslation = "translate(" + (width/2) + ", " + (height/2) + ")"; // Setup a translation to position the earth.
    var orbitDistance = 10; // The distance from our earth that space junk will orbit.

    var svgElement = d3.select("svg.chart") // Select the root SVG element for our visualization.
        .attr("width", width) // Set the width and height of the elemnt.
        .attr("height", height);

    var theEarth = svgElement.append("circle") // Add a circle to our visualization to represent the 'earth'.
    theEarth.attr("class", "earth") // Set the CSS class for the element to so that we can style our 'earth'.
        .attr("transform", earthTranslation) // Position the circle in the middle of the visualization.
        .attr("r", earthRadius); // Set the radius the earth.
    
        for (var rowIndex = 0; rowIndex < spaceJunkData.length; ++rowIndex) { // Manually loop our data and add it to the visualization.
            var spaceJunk = svgElement.append("g"); // Adding a group. This means we can have multiple sub-elements to comprise the visuals for a piece of space junk.
            spaceJunk.attr("class", "junk") // Set CSS clas so we can style our space junk.
                .attr("transform", function(row, index) { // Set the transform element to position the space junk in orbit around the 'earth'.
                    var orbitRadius = earthRadius + orbitDistance; // The distance from the center of the earth that the space junk is orbiting.
                    var randomAngle = Math.random() * 360;
                    var point = pointOnCircle(orbitRadius, randomAngle); // Choose a random position in orbit that is relative to the earth.
                    var x = (width/2) + point.x; // Translate the space junk coordinates into visualization-relative coordinates.
                    var y = (height/2) + point.y;
                    return "translate(" + x + ", " + y + ")" ; // Synthesize an SVG 'transform' attribute.
                })
                .append("circle") // Add a circle to represent the space junk.
                    .attr("r", 5); // Hard-coded circle radius.
        }
};

var spaceJunkData = [
    {
        "OBJECT_NAME": "NOAA 16 DEB",
        "PERIGEE": 849,
        "RCS_SIZE": "SMALL",
        "LAUNCH": "21/09/2000"
      },
      {
        "OBJECT_NAME": "NOAA 16 DEB",
        "PERIGEE": 778,
        "RCS_SIZE": "SMALL",
        "LAUNCH": "21/09/2000"
      },
      {
        "OBJECT_NAME": "NOAA 16 DEB",
        "PERIGEE": 812,
        "RCS_SIZE": "SMALL",
        "LAUNCH": "21/09/2000"
      },
      {
        "OBJECT_NAME": "NOAA 16 DEB",
        "PERIGEE": 848,
        "RCS_SIZE": "SMALL",
        "LAUNCH": "21/09/2000"
      }
];
