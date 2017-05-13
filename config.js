function generatePostData(randomString){
  return JSON.stringify({
    "Property1":randomString(2,'#'),//number Property
	  "Property2":randomString(10,'aA')//String Property
  });
}
module.exports = (randomString)=>{
  return {
    "hostname": "localhost",
    "port": 9000,
    "path": "/Thingworx/Things/myThing/Properties/*",
    "method": "PUT",
    "count":100,
    "timeBased":true,
    "intervalTime":500,//in milisecond,
    "headers":{
      "Content-Type":"application/json",
      "appKey":"b8eea0b2-cd36-4b0d-9447-4ceae5756d92",
      "Accept":"application/json"
    },
    "postData":generatePostData.bind(null,randomString)
  }
}
