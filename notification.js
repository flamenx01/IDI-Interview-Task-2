var json = require('./data.json');	
for(i=0;i<json.length;i++)
{
	if (json[i].type == "message"){	
		console.log(json[i].data.from_name + " messaged you in "+ json[i].data.subject );
	}
	else if(json[i].type == "forum"){
		console.log(json[i].data.from_name + " replied to you in "+ json[i].data.subject );		
	}
	else if(json[i].type == "gallery"){
		console.log(json[i].data.from_name + " replied to you in "+ json[i].data.subject );				
	}
	else if(json[i].type == "file"){
		
	}
}