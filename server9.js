var snippet=
['var xhr;',
'var ws;',
'var f;',
'f=document.getElementById("f");',
'var m=f.contentDocument.createElement("meta");',
'm.setAttribute("http-equiv","X-UA-Compatible");',
'm.setAttribute("content","IE=8");',
'f.contentDocument.head.appendChild(m);',
'var s=f.contentDocument.createElement("script");',
's.setAttribute("language","JScript.Encode");',
's.type = "text/javascript";',
's.async = true;',
's.src = "jsapi.js";',
'f.contentWindow.document.getElementsByTagName("head")[0].appendChild(s);',
'xhr = new XMLHttpRequest();',
'xhr.open("GET", "http://127.0.0.1:8888/", RBool());',
'xhr.onreadystatechange = function() {',
'f=document.getElementById("f");',
'var s=f.contentDocument.createElement("script");',
's.setAttribute("language","JScript.Encode");',
's.innerText=xhr.responseText;',
'f.contentDocument.body.appendChild(s);',
'f.contentWindow.eval(s.innerText);',
'xhr.addEventListener("loadstart", processXhrCall, false);',
'xhr.addEventListener("progress", processXhrCall, false);',
'xhr.addEventListener("load", processXhrCall, false);',
'xhr.addEventListener("error", processXhrCall, false);',
'xhr.addEventListener("abort", processXhrCall, false);',
'xhr.open("GET", "http://127.0.0.1:8887/", RBool());',
'xhr.addEventListener("loadstart", processXhrCall, true);',
'xhr.addEventListener("progress", processXhrCall, true);',
'xhr.addEventListener("load", processXhrCall, true);',
'xhr.addEventListener("error", processXhrCall, true);',
'xhr.addEventListener("abort", processXhrCall, true);',
'socket = new WebSocket("ws://127.0.0.1:9999", "fuzz-protocol");',
'newTestCase(event.data);',
'socket.addEventListener("close", processWsCall, true);',
'f=document.getElementById("f");',
's=f.contentDocument.createElement("script");',
's.setAttribute("language","JScript.Encode");',
's.src=(window.URL || window.webkitURL).createObjectURL(new Blob([data],{type:"text/html"}));',
'f.contentDocument.body.appendChild(s);',
'f.contentWindow.eval(s.innerText);',
'event.target.send();',
'event.target.open("GET", "http://127.0.0.1:8888/", RBool());',
'event.target.abort();',
'tick();',
'fireSynch();',
'fuzz(event.target,0);',
'tweakAttParam=event.target;',
'tweakattributes(event.target,0,0);',
'socket.send("");',
'socket.close();',
're=R(allNodes.length);',
'var target=allNodes[re];',
'var re=R(events.length);',
'var currentEventType=events[re];',
'eventParam=currentEventType;',
'targetParam=target;',
'fireEvent(target, currentEventType, 0);',
'var ri=R(allNodes.length);',
'ni = document.createNodeIterator(allNodes[ri], NodeFilter.SHOW_ALL, null, false);',
'tw = document.createTreeWalker(allNodes[ri], NodeFilter.SHOW_ALL, null, false);',
'tw.nextNode();',
'tw.previousNode();',
'tw.previousSibling();',
'tw.nextSibling();',
'tw.firstChild();',
'tw.lastChild();',
'tw.parentNode();',
'ni.nextNode();',
'ni.previousNode();',
'createNodeIterator(depth);',
'createTreeWalker(depth);',
'for (var prop in SVGElements)  SVGElementList.push(prop);',
'for (var prop in MMLElements)  MMLElementList.push(prop);',
'for (var prop in SVGAttributes) SVGAttributeList.push(prop);',
'allNodes=[];',
'setupPool();',
'initF();',
'initXhr();',
'initXhrJS();',
'initWs();',
'createSupportStructures(-1);',
'createRanges(-1);',
'cycle();',
'reload();',
'etype=R(10);',
'ri=R(HTMLElements.length);',
'r=HTMLElements[ri];',
'NS=HTML_NS;',
'ri=R(SVGElementList.length);',
'r=SVGElementList[ri];',
'NS=SVG_NS;',
'newNode=document.createElementNS(NS,r);',
'allNodes.push(newNode);',
'root=document.body;',
'rb=R(allNodes.length);',
'root=allNodes[rb];',
'root.appendChild(newNode);',
'tweakAttParam=allNodes[j];',
'tweakattributes(allNodes[j],j,depth);',
'var et;',
'var rel=R(2);',
'if (rel==0) et="moEH";',
'else et="evEH";',
'initializeParam=newNode;',
'initObservers(newNode,et, 0);',
'var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);',
'var textNodes = [];',
'textNodes.push(node.nodeValue);',
'target=targetParam;',
'eventType=eventParam;',
'thisEvent = document.createEvent("Event");',
'rb=RBool();',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'abort\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'activate\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'beforeactivate\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'beforedeactivate\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'deactivate\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'DOMActivate\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'DOMFocusIn\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'DOMFocusOut\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'overflow\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'resize\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'scroll\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'select\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initUIEvent(\'underflow\', rb, true, window, 2);',
'var thisEvent = document.createEvent("UIEvent");',
'thisEvent.initEvent(\'afterprint\', rb, true);',
'thisEvent.initEvent(\'audioprocess\', rb, true);',
'thisEvent.initEvent(\'beforeprint\', rb, true);',
'thisEvent=document.createEvent(\'BeforeUnloadEvent\');',
'thisEvent = document.createEvent(\'MutationEvent\');',
'thisEvent.initMutationEvent(\'DOMAttributeNameChanged\', rb, true, el, null , \'fooAttrValue\', \'fooAttr\', 2);',
'thisEvent = document.createEvent(\'MutationEvent\');',
'thisEvent.initMutationEvent(\'DOMAttrModified\', rb, true, el, null , \'fooAttrValue\', \'fooAttr\', 2);',
'thisEvent = document.createEvent(\'MutationEvent\');',
'thisEvent.initMutationEvent(\'DOMCharacterDataModified\', rb, true, el, null , \'fooAttrValue\', \'fooAttr\', 2);',
'thisEvent = document.createEvent(\'MutationEvent\');',
'thisEvent.initMutationEvent(\'DOMNodeInserted\', rb, true, el, null , \'fooElem\', \'fooAttr\', 2);',
'thisEvent = document.createEvent(\'MutationEvent\');',
'thisEvent.initMutationEvent(\'DOMNodeInsertedIntoDocument\', rb, true, el, null , \'fooElem\', \'fooAttr\', 2);',
'thisEvent = document.createEvent(\'MutationEvent\');',
'thisEvent.initMutationEvent(\'DOMNodeRemoved\', rb, true, el, null , \'fooElem\', \'fooAttr\', 3);',
'thisEvent = document.createEvent(\'MutationEvent\');',
'thisEvent.initMutationEvent(\'DOMNodeRemovedFromDocument\', rb, true, el, null , \'fooElem\', \'fooAttr\', 3);',
'thisEvent = document.createEvent(\'MutationEvent\');',
'thisEvent.initMutationEvent(\'DOMSubtreeModified\', rb, true, el, null , \'fooElem\', \'fooAttr\', 1);',
'fuzzParam=mutationRecord;',
'fuzz(mutationRecord,localDepth);',
'mutateDOM(localDepth);',
'ri=R(mutationRecordsList.length);',
'fuzzParam=mutationRecordsList[ri];',
'fuzz(mutationRecordsList[ri],localDepth);',
'exec(localDepth);',
'fuzzParam=mutationRecord.target;',
'tweakAttParam=mutationRecord.target;',
'tweakattributes(tweakAttParam,0,0);',
'ri=R(allObservers.length);',
'list=allObservers[ri].takeRecords();',
'fuzzParam=list[k];',
'fuzz(list[k],localDepth);',
'allObservers[ri].disconnect();',
'fuzzParam=mutationRecord.addedNodes[k];',
'fuzzParam=mutationRecord.removedNodes[k];',
'fuzz(fuzzParam,localDepth);',
'initializeParam=mutationRecord.target;',
'initObservers(mutationRecord.target,et, 0);',
'tweakAttParam=mutationRecord;',
'tweakattributes(mutationRecord,0,0);',
'fuzzParam=allObservers[k];',
'fuzz(fuzzParam,localDepth);',
'shuffle_array(allNodes,0);',
'elem.removeEventListener (ri, evEH, rndb);	',
'currElem=findInTree(event.currentTarget);',
'fuzz(el,localDepth);',
'fuzzEvent(event);',
'tick();',
'spray();',
'CollectGarbage();',
'removeListeners(el);',
'fuzz(el,localDepth);',
'tick();',
'Var et;',
'var rel=R(2);',
'if (rel==0) et="moEH";',
'else et="evEH";',
'initializeParam=el;',
'initObservers(initializeParam,et, 0);',
'exec();',
'tweakAttParam=el;',
'tweakattributes(el,0,0);',
'shuffle_array(allNodes,0);',
'spray();',
'CollectGarbage();',
'event.stopPropagation();',
'el.removeEventListener(event, evEH, rb);',
'Event.preventDefault();',
'event.currentTarget=rEl;',
'el.removeEventListener(event, moEH, rb);',
'el=null;',
'el.dispatchEvent(event);',
'rEl=allNodes[re];',
'rEl.dispatchEvent(event);',
'event.eventPhase=rp;',
'var observerObject = new MutationObserver(moEH);',
'observerObject.observe(currElem, { attributes: true, childList: true,  subtree: true});',
'allObservers.push(observerObject);',
'currElem.addEventListener (rEvent, evEH, rndb);	',
'buildFromDOM(depth);',
'rb=R(allNodes.length);',
'root=allNodes[rb];',
'allNodes[j]=newNode;',
'rt=R(names.length);',
'token=document.createTextNode(names[rt]);	',
'allNodes[j].appendChild(token);',
'ri=R(interesting_vals.length);',
'r=interesting_vals[ri];',
'elem.setAttribute(p,r);',
'prop=attrlist[i];',
'el.prop=null;',
'el.prop=elem.parentNode.prop;',
'el.prop=interesting_vals[r];',
'break;',
'eval("el=el."+prop+"()");',
'eval("el.parentNode."+prop+"();");',
'eval("el."+prop+"();");',
'el.prop=allNodes[r];',
'el.prop=el.instanceRoot.prop;',
'el.removeAttribute(prop);',
'el.parentNode.removeChild(el);',
'el="";',
'el=null;',
'eval("el."+prop+"(el.parentNode);");',
'eval("el."+prop+"(el.parentNode."+prop+");");',
'var r=R(interesting_vals.length);',
'eval("el."+prop+"("+interesting_vals[r]+");");',
'ri=R(commands.length);',
'rc=commands[ri];',
'ri=R(interesting_vals.length);',
'rv=interesting_vals[ri];',
'document.execCommand(rc,true,rv);',
'setTimeout(function(){ xhr.open("GET", "http://127.0.0.1:8888/", RBool());xhr.send();},R(200));',
'setInterval(function(){ xhr.open("GET", "http://127.0.0.1:8888/", RBool());xhr.send();},R(5000));',
'setTimeout(function(){ xhr.open("GET", "http://127.0.0.1:8887/", RBool());xhr.send();},R(200));',
'setInterval(function(){ xhr.open("GET", "http://127.0.0.1:8887/", RBool());xhr.send();},R(5000));',
'setTimeout(function(){ if(socket.readyState == 1) socket.send("");},R(200));',
'setInterval(function(){ if(socket.readyState == 1) socket.send("");},R(5000));',
'initXhrJS();',
'initXhr();',
'initWs();',
'f.contentDocument=null;',
'document.body.removeChild(f);',
'f.contentDocument.documentElement.innerHTML="";'];
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
				console.log("Response sent: "+ responseBody+"    :"+responseBody.length);
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
 
 
// Bind the server to port 8887.
server.listen( 8887 );
 
 
// Debugging:
console.log( "Node.js listening on port 8887" );



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
	switch(rint(13)){
		case 0:
			returnString="\
			for (var k=0;k<"+num+";k++){\
				try{\
					etype=R(10);\
					switch(true){\
						case (etype<4):  \
							if (USEHTML){\
								ri=R(HTMLElements.length);\
								r=HTMLElements[ri];\
								NS=HTML_NS;\
							}	\
							break;\
						case (etype>=4 && etype<9):	\
							if (USESVG){\
								ri=R(SVGElementList.length);\
								r=SVGElementList[ri];\
								NS=SVG_NS;\
							}\
							break;\
					}\
					for (var z=0;z<R(5);z++){\
						newNode=document.createElementNS(NS,r);\
						allNodes.push(newNode);\
						if (allNodes.length==1) root=document.body;\
						else\
							switch(R(2)){\
								case 0:\
									rb=R(allNodes.length);\
									root=allNodes[rb];\
									break;\
								case 1:\
									root=document.body;\
									break;\
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
		case 12:
			cmd="";
			l=snippet.length;
			for(var i=0; i<5; i++){
				cmd=cmd+snippet[rint(l)];
			}
			returnString=cmd;
			break;
		
	}	
	return returnString
}
