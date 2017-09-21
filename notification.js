function timeSince(dateIn) {

	var date = new Date(dateIn);

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}



var json = require('./data.json');	
for(i=0;i<json.length;i++)
{
	if (json[i].type == "message"){	
		console.log(timeSince(json[i].created_at)+" @ "+json[i].data.from_name + " messaged you in "+ json[i].data.subject );
	}
	else if(json[i].type == "forum"){
		console.log(timeSince(json[i].created_at)+" @ "+json[i].data.from_name + " replied to you in "+ json[i].data.subject );		
	}
	else if(json[i].type == "gallery"){
		console.log(timeSince(json[i].created_at)+" @ "+json[i].user_name + " uploaded new file to gallery "+ json[i].data.gallery_title);				
	}
	else if(json[i].type == "file"){
		console.log(timeSince(json[i].created_at)+" @ "+json[i].data.user_name + " uploaded new file "+ json[i].data.file_name + " to "+ json[i].data.module_name);						
	}
}