
// rows and coloums added 

var rows = 3;
var columns = 3;

//current and other tile  var for swaping  added

var currTile;
var otherTile; //blank tile

//turns var added

var turns = 0;

// var  swaped imgOrder string created 

var imgOrder = ["1", "7", "3", "6", "8", "2", "4", "9", "5"];

//Window onload function added
window.onload = function() {
    shuffleImage();// calling suffleImage method for shuffle Tiles.
    buildTile();   //calling buildTile method for display images.
}

//ShuffleImage method functionality defined here
function shuffleImage() {
    for (let i = 0; i < imgOrder.length; i++) {
        let j = Math.floor(Math.random() * imgOrder.length); // (0-1) * 52 => (0-51.9999)
        let temp = imgOrder[i];
        imgOrder[i] = imgOrder[j];
        imgOrder[j] = temp;
    }
}
    // console.log(imgOrder);
    
    function buildTile() 
    {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            // images added  as a string and shift function added <img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            //DRAG  fuunctions added - evetlisners
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);

        }
    }
}


//  drag function enabled with tiles and eventlistners

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault(); // remains default
}

function dragEnter(e) {
    e.preventDefault(); // remains default//
}

function dragLeave() {
 // blank
}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}


function dragEnd() {

    // cocoordination of tiles added with json

    let currCoords = currTile.id.split("-");
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords =otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    // movement resticted of tiles withi rows and coloums

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;


//tile swaping
if (isAdjacent) {
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;
      
    // turns function enabled
    turns += 1;
    document.getElementById("turns"). innerText = turns;
    }

}

        //added start btn      
        function shuffle() {
			$( "#popup" ).hide('');
			$('#startBtn').hide();
    
        }
           
        

    