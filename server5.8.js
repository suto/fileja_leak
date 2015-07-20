// Include our HTTP module.
var http = require( "http" );
require('randoms.js')
 
// Create an HTTP server so that we can listen for, and respond to
// incoming HTTP requests. This requires a callback that can be used
// to handle each incoming request.
var server = http.createServer(
    function( request, response ){
 
 
        // When dealing with CORS (Cross-Origin Resource Sharing)
        // requests, the client should pass-through its origin (the
        // requesting domain). We should either echo that or use *
        // if the origin was not passed.
        var origin = (request.headers.origin || "*");
 
 
        // Check to see if this is a security check by the browser to
        // test the availability of the API for the client. If the
        // method is OPTIONS, the browser is check to see to see what
        // HTTP methods (and properties) have been granted to the
        // client.
        if (request.method.toUpperCase() === "OPTIONS"){
 
 
            // Echo back the Origin (calling domain) so that the
            // client is granted access to make subsequent requests
            // to the API.
            response.writeHead(
                "204",
                "No Content",
                {
                    "access-control-allow-origin": origin,
                    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "access-control-allow-headers": "content-type, accept",
                    "access-control-max-age": 10, // Seconds.
                    "content-length": 0
                }
            );
 
            // End the response - we're not sending back any content.
            return( response.end() );
 
 
        }
 
 
        // -------------------------------------------------- //
        // -------------------------------------------------- //
 
 
        // If we've gotten this far then the incoming request is for
        // our API. For this demo, we'll simply be grabbing the
        // request body and echoing it back to the client.
 
 
        // Create a variable to hold our incoming body. It may be
        // sent in chunks, so we'll need to build it up and then
        // use it once the request has been closed.
        var requestBodyBuffer = [];
 
        // Now, bind do the data chunks of the request. Since we are
        // in an event-loop (JavaScript), we can be confident that
        // none of these events have fired yet (??I think??).
        request.on(
            "data",
            function( chunk ){
 
                // Build up our buffer. This chunk of data has
                // already been decoded and turned into a string.
                requestBodyBuffer.push( chunk );
 
            }
        );
 
 
        // Once all of the request data has been posted to the
        // server, the request triggers an End event. At this point,
        // we'll know that our body buffer is full.
        request.on(
            "end",
            function(){
 
                // Flatten our body buffer to get the request content.
                var requestBody = requestBodyBuffer.join( "" );
 
                // Create a response body to echo back the incoming
                // request.
                var responseBody = generateTestCase();
 
                // Send the headers back. Notice that even though we
                // had our OPTIONS request at the top, we still need
                // echo back the ORIGIN in order for the request to
                // be processed on the client.
				console.log("Response sent: "+responseBody.length);
                response.writeHead(
                    "200",
                    "OK",
                    {
                        "access-control-allow-origin": origin,
                        "content-type": "text/plain",
                        "content-length": responseBody.length,
						"Cache-Control": "no-cache"
                    }
                );
 
                // Close out the response.
                return( response.end( responseBody ) );
 
            }
        );
 
 
    }
);
 
 
// Bind the server to port 8888.
server.listen( 8888 );
 
 
// Debugging:
console.log( "Node.js listening on port 8888" );



function generateTestCase(){

	var prepend='';
	var postpend='';
	switch(rint(5)){
		case 0:
			prepend="setTimeout(function(){";
			postpend="},0);";
			break;
	}
	returnString=generateScript(3);
	setTimeout(function(){},rint(5000));
	return prepend+returnString+postpend;
}

function generateScript(num){
	var returnString=""
	switch(rint(12)){
		case 0:
			returnString="\
			function R( x ){\
				return Math.floor( Math.random() * x );\
			}\
			for (var k=0;k<"+num+";k++){\
				try{\
					HTMLElements = ['CANVAS','ARTICLE','ASISE','B','BDI','BDO', 'BLOCKQUOTE','BR','BUTTON','CANVAS','CAPTION','CITE','COL','CODE','COMMAND','DATALIST','DD','DEL','DETAILS','DFN','DL','DT', 'EM','STYLE','FIELDSET','FIGCAPTION','SCRIPT', 'EMBED','FIGURE','FOOTER','HEADER','HGROUP','HR','I','INPUT','INS','KEYGEN','KBD','LEGEND','MARK','MENU','METER','NAV','NOSCRIPT','OPTGROUP','OUTPUT','P','PARAM','PRE','PROGRESS','Q','RP','RT','RUBY','S','SAMP','SECTION','SELECT','SMALL','SOURCE','SPAN','SUP','TH','THEAD','TIME','OBJECT','IFRAME','TEXTAREA','TRACK','U','VAR','WBR','FORM','A','BODY','HTML','DIV','TABLE','AREA','TD','TR','LINK','BASE','FONT','HEAD','IMG','MAP','META','OL','LI','TBODY','TITLE','H1','BLINK','!DOCTYPE','AREA','COL','SPAN','FRAMESET','FRAME','UL','OPTION','NOFRAMES','TFOOT','XMP','ISINDEX','CENTER','HR','LABEL','OPTGROUP','AUDIO','VIDEO','TEMPLATE','SVG'];\
					for (var z=0;z<R(5);z++){\
						ri=R(HTMLElements.length);\
						r=HTMLElements[ri];\
						newNode=document.createElement(r);\
						allNodes.push(newNode);\
						if (allNodes.length==1) root=document.body;\
						else{\
							switch(R(2)){\
								case 0:\
									rb=R(allNodes.length);\
									root=allNodes[rb];\
									break;\
								case 1:\
									root=document.body;\
									break;\
							}\
						}\
						root.appendChild(newNode);\
						console.log(newNode.tagName);\
					}\
				}catch(e){console.log(\"error in generateScript: \"+e.message);}\
			}";	
			break;
		case 1:
			returnString="mutateDOM(0);";
			break;
		case 2:
			returnString="exec(0);";
			break;
		case 3:
			returnString="fireSynch();";
			break;
		case 4:
			returnString="tick();";
			break;
		case 5:
			returnString="tweakAttParam=xhr;\
			tweakattributes(tweakAttParam,1,0);";
			break;
		case 6:
			returnString="fuzzParam=xhr;\
			fuzz(fuzzParam,0);";
			break;
		case 7:
			//returnString="shuffleParam=allXhr; shuffle_array(allXhr,0);";
			break;
		case 8:
			returnString="shuffleParam=allNodes; shuffle_array(allNodes,0);";
			break;	
		case 9:
			returnString="crawlParam=t1;addParam=add_set;crawl_properties(path, t1, 0, add_set,depth);";
			break;			
		case 10:
			returnString="callParam=t1;useParam=add_set;addParam=add_set;call_methods(path, t1, 0, 0, add_set, add_set,depth);";
			break;	
		case 11:
			returnString="tweakParam=t1;useParam=add_set;tweak_properties(path, t1, 0, add_set,depth);";
			break;
		
		
	}	
	return returnString
}
