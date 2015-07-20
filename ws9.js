require('randoms.js')
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 9999});
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
		setTimeout(function(){},rint(5000));
		ws.send(generateTestCase());
		console.log("sent response ");
    });
    //ws.send('something');
	console.log("connection ok");
});


function generateTestCase(){

	var returnString='';
	returnString+=generateScript(3)+''
	return returnString;
}

function generateScript(num){
	var returnString=""
	switch(rint(11)){
		case 0:
			returnString="\
			for (var k=0;k<"+num+";k++){\
				try{\
					for (var z=0;z<R(5);z++){\
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
			returnString="shuffle_array(allNodes,0);";
			break;	
		case 8:
			returnString="crawlParam=t1;addParam=add_set;crawl_properties(path, t1, 0, add_set,depth);";
			break;			
		case 9:
			returnString="callParam=t1;useParam=add_set;addParam=add_set;call_methods(path, t1, 0, 0, add_set, add_set,depth);";
			break;	
		case 10:
			returnString="tweakParam=t1;useParam=add_set;tweak_properties(path, t1, 0, add_set,depth);";
			break;
	}	
	return returnString
}
