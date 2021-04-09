
bot()
function bot(){
  let token = "1748921180:AAH8FeyPSn-vU8PWxWpZ3WouWcLgmvEhpXQ"
  let website = "https://api.telegram.org/bot"
  let getMe = [website+token+"/getupdates"]
 var str = getMe.toString()
 
 
 
fetch(str)

    .then(response => response.text())
    .then(data =>   {
      var obj= JSON.parse(data)
      let len = obj["result"].length-1
    
     let hel =[
       {name:"hello"},
       {name:"hi"},
       {name:"Wlc"},
       {name:"Who are you"},
       {name:"welcome"},
       ]
       let random = Math.floor(Math.random()*hel.length)
      let text = obj["result"][len]["message"]["text"]
     let chatId = obj["result"][len]["message"]["chat"]["id"]

    
     if (text == "/start"){
        sendMessage(chatId , "*Welcome To geys*")

     }else if(text=="/help"){
       sendMessage(chatId,"``` What do you want?```")
     }else if (text == "hi"){
       sendMessage(chatId, "*"+hel[random].name+"*")
     }
     
     else{
       sendMessage(chatId , "min")
     }
     sendMessage(1722286859 , "hello")
     function sendMessage(chatId,message){
     let url= `https://api.telegram.org/bot1748921180:AAH8FeyPSn-vU8PWxWpZ3WouWcLgmvEhpXQ/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=markdown`
     let api = new XMLHttpRequest();
     api.open("GET" , url , true)
     api.send()
     console.log("message send sucss")
            
            }
     

        
    
    })
}
