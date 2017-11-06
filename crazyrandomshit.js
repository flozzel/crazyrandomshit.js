

var cursors =
[
	"context-menu","help","pointer","progress","wait","cell","crosshair","text","vertical-text","alias","copy","move","no-drop","not-allowed",
	"e-resize","n-resize","ne-resize","nw-resize","s-resize","se-resize","sw-resize","w-resize","ew-resize","ns-resize","nesw-resize","nwse-resize",
	"col-resize","row-resize","all-scroll","zoom-in","zoom-out","grab","grabbing"
];

var directions =
[
	'top','bottom','right','left'
];

var elements = document.getElementsByTagName( '*' );

setInterval(
function()
{
	
	var cursorIndex = Math.floor( ( Math.random() * cursors.length ) + 1);
	var elementsIndex = Math.floor( ( Math.random() * elements.length ) + 1);
	
	var scrollX = Math.floor( ( Math.random() * 1000 ) + 1);
	var scrollY = Math.floor( ( Math.random() * 1000 ) + 1);
	
	
	element = elements[ elementsIndex ];
	element.style.position = "absolute";
	element.style.width = Math.floor( ( Math.random() * 100 ) + 1) + 'px';
	element.style.height = Math.floor( ( Math.random() * 100 ) + 1) + 'px';
	
	element['style'][ Math.floor( ( Math.random() * directions.length ) + 1) ] = Math.floor( ( Math.random() * 100 ) + 1) + 'px';
	element['style'][ Math.floor( ( Math.random() * directions.length ) + 1) ] = Math.floor( ( Math.random() * 100 ) + 1) + 'px';
	
	document.getElementsByTagName( 'html' )[ 0 ].style.cursor = cursors[ cursorIndex ];
	//window.scrollTo( scrollX, scrollY );

}, 100);
