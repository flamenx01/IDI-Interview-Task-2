	var json = [
  {
    "id": 891,
    "type": "message",
    "data": {
      "from_name": "Gregory Windsor",
      "subject": "yfcrftuggyutgyhu"
    },
    "created_at": "2017-09-05T08:40:11+00:00"
  },
  {
    "id": 887,
    "type": "gallery",
    "data": {
      "gallery_title": "test topic",
      "user_name": "Noah Cranock"
    },
    "created_at": "2017-08-30T07:58:06+00:00"
  },
  {
    "id": 886,
    "type": "gallery",
    "data": {
      "gallery_title": "test topic",
      "user_name": "Jamie Ritchie"
    },
    "created_at": "2017-08-30T07:56:32+00:00"
  },
  {
    "id": 850,
    "type": "message",
    "data": {
      "from_name": "Jack Gordon",
      "subject": "Induction"
    },
    "created_at": "2017-08-29T11:05:14+00:00"
  },
  {
    "id": 851,
    "type": "message",
    "data": {
      "from_name": "Jack Gordon",
      "subject": "Induction"
    },
    "created_at": "2017-08-29T11:05:14+00:00"
  },
  {
    "id": 848,
    "type": "message",
    "data": {
      "from_name": "Jack Gordon",
      "subject": "Induction"
    },
    "created_at": "2017-08-29T11:05:04+00:00"
  },
  {
    "id": 849,
    "type": "message",
    "data": {
      "from_name": "Jack Gordon",
      "subject": "Induction"
    },
    "created_at": "2017-08-29T11:05:04+00:00"
  },
  {
    "id": 841,
    "type": "file",
    "data": {
      "user_name": "Noah Cranock",
      "file_name": "test_doc",
      "module_name": "Induction"
    },
    "created_at": "2017-08-29T11:03:38+00:00"
  },
  {
    "id": 835,
    "type": "forum",
    "data": {
      "from_name": "Stephen Doig",
      "subject": "Test"
    },
    "created_at": "2017-08-24T14:16:56+00:00"
  },
  {
    "id": 831,
    "type": "forum",
    "data": {
      "from_name": "Stephen Doig",
      "subject": "Test"
    },
    "created_at": "2017-08-22T11:52:02+00:00"
  },
  {
    "id": 822,
    "type": "file",
    "data": {
      "user_name": "Noah Cranock",
      "file_name": "test_pdf",
      "module_name": "Induction"
    },
    "created_at": "2017-08-22T11:03:44+00:00"
  },
  {
    "id": 820,
    "type": "message",
    "data": {
      "from_name": "Jack Gordon",
      "subject": "Induction"
    },
    "created_at": "2017-08-22T11:02:31+00:00"
  },
  {
    "id": 821,
    "type": "message",
    "data": {
      "from_name": "Jack Gordon",
      "subject": "Induction"
    },
    "created_at": "2017-08-22T11:02:31+00:00"
  },
  {
    "id": 803,
    "type": "gallery",
    "data": {
      "gallery_title": "New topic",
      "user_name": "Jamie Ritchie"
    },
    "created_at": "2017-08-21T09:21:09+00:00"
  },
  {
    "id": 790,
    "type": "file",
    "data": {
      "user_name": "Noah Cranock",
      "file_name": "test",
      "module_name": "The Leadership Challenge"
    },
    "created_at": "2017-08-18T10:09:02+00:00"
  },
  {
    "id": 789,
    "type": "file",
    "data": {
      "user_name": "Noah Cranock",
      "file_name": "test_csv",
      "module_name": "The Leadership Challenge"
    },
    "created_at": "2017-08-18T10:08:45+00:00"
  },
  {
    "id": 788,
    "type": "file",
    "data": {
      "user_name": "Noah Cranock",
      "file_name": "test_pdf",
      "module_name": "The Leadership Challenge"
    },
    "created_at": "2017-08-18T10:08:34+00:00"
  },
  {
    "id": 787,
    "type": "file",
    "data": {
      "user_name": "Noah Cranock",
      "file_name": "test_doc",
      "module_name": "The Leadership Challenge"
    },
    "created_at": "2017-08-18T10:08:19+00:00"
  },
  {
    "id": 779,
    "type": "message",
    "data": {
      "from_name": "Jack Gordon",
      "subject": "Induction"
    },
    "created_at": "2017-08-15T08:48:53+00:00"
  },
  {
    "id": 778,
    "type": "message",
    "data": {
      "from_name": "Jack Gordon",
      "subject": "Induction"
    },
    "created_at": "2017-08-15T08:48:52+00:00"
  }
];








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


function printNotifications() {
	var element = document.getElementById("div1");
	for(i=0;i<json.length;i++)
	{
		var messageText = null;
		if (json[i].type == "message"){
			messageText = timeSince(json[i].created_at)+" @ "+json[i].data.from_name + " messaged you in "+ json[i].data.subject ;
		
		}
		else if(json[i].type == "forum"){
			messageText = timeSince(json[i].created_at)+" @ "+json[i].data.from_name + " replied to you in "+ json[i].data.subject ;		
		}
		else if(json[i].type == "gallery"){
			messageText = timeSince(json[i].created_at)+" @ "+json[i].user_name + " uploaded new file to gallery "+ json[i].data.gallery_title;				
		}
		else if(json[i].type == "file"){
			messageText = timeSince(json[i].created_at)+" @ "+json[i].data.user_name + " uploaded new file "+ json[i].data.file_name + " to "+ json[i].data.module_name;						
		}
		if (messageText != null){
			var para = document.createElement("p");
			var node = document.createTextNode(messageText);
			para.appendChild(node);
			element.appendChild(para);
		}
	}
}
