let
$= document.querySelector.bind(document),
$$= document.querySelectorAll.bind(document); 

let
obj= {
"http://sc-bb.1.fm:8017":"Bombay Beats",
"http://109.169.46.197:8011/stream":"Diverse FM",
"http://music2.vvradio.co.in:2802/stream2":"V V Radio",
"https://astro4.rastream.com/india?type=mp3":"India Beat",
"https://c5.radioboss.fm:18125/stream":"Radio Manpasand",
"http://s0.desimusicmix.com:8012/;stream.mp3":"Desi Music Mix",
"https://streaming.webhostnepal.com/8020/stream":"Himal Filmy",
"http://indifun.net:7000/;stream.nsv":"Indifun Radio",
"http://peridot.streamguys.com:7150/Mirchi":"Mirchi FM",
"http://79.120.39.202:8002/indiancinema":"Radio Caprice",
"https://prclive1.listenon.in/":"Radio City - Talk",
"https://funasia.streamguys1.com/live9":"Big Melodies",
"https://cp12.serverse.com/proxy/hummfm?mp=/live":"Humm FM",
"http://radio.punjabrocks.com:9998/taal":"Taal Radio",
"http://hoth.alonhosting.com:1080/;stream.mp3":"BollyHits Radio",
"https://s5.alhastream.com/radio/8260/radio":"Nitnut Radio",
"https://streamz.zeno.fm/a69txeenvzzuv":"SRK Online Radio",
};

let not= "NO RADIO PLAYING",
    dur= $("#duration");

dur.innerHTML= not;
document.title= "KD Radio - Bollywood"; 

//DISPLAY DURATION
function duration (a,b){
a.ontimeupdate= function() {
let time= new Date(a.currentTime * 1000).toISOString().substr(11, 8).split(":"),
       h= time[0], m= time[1], s= time[2];
    
if (h<=9 && h>0) h= h.replace("0","");
if (m<=9 && m>0) m= m.replace("0","");
if (s<=9 && s>0) s= s.replace("0","");
if (s==00) s= s.replace("0","");


if(!a.paused){

let hey="Listening to " +b+" for";

if(h<0 && m<0 && s<=0) dur.innerHTML= "Loading " + b +"....";


/*function show(a,b,c){
if(a && b) dur.innerHTML= `${hey} ${c}`;
}


show("h==0", "m<1",`${s} seconds`);
show("h==0", "m==1", `1 minute and ${s} seconds`);
show("h==0", "m>1",`${m} minutes and ${s} seconds`);

}*/

if (h==0 && m<1) dur.innerHTML=`${hey} ${s} seconds`;
if (h==0 && m==1) dur.innerHTML=`${hey} 1 minute and ${s} seconds`;
if (h==0 && m>1) dur.innerHTML=`${hey} ${m} minutes and ${s} seconds`;

if (h==1 && m<1) dur.innerHTML=`${hey} 1 hour and ${s} seconds`;
if (h==1 && m==1) dur.innerHTML=`${hey} 1 hour, 1 minute and ${s} seconds`;
if (h==1 && m>1) dur.innerHTML=`${hey} 1 hour, ${m} minutes and ${s} seconds`;

if (h>1 && m<1) dur.innerHTML=`${hey} ${h} hours and ${s} seconds`;
if (h>1 && m==1) dur.innerHTML=`${hey} ${h} hours, 1 minute and ${s} seconds`;
if (h>1 && m>1) dur.innerHTML= `${hey} ${h} hours, ${m} minutes and ${s} seconds`;
}
else{
dur.innerHTML= not;
}

};}



let
url= Object.keys(obj),
tit= Object.values(obj),
name= $$("span"),
player= $$("span>audio");


//Extract & Assign Radio Names and URLs
url.forEach((i,x)=>{
name[x].innerHTML= tit[x];
player[x].src= i;
})


let night= false;


//Change Radio Colors
function colors(a,b,c){
if(!night){
a.style.color= b;
a.style.background= c;
}
else{
a.style.color= "white";
a.style.background= "black";
}
}


$("#night").onclick=()=>{

name.forEach(i=>{
i.style.border= "1px solid gray";
if(!night){
colors(i,"black","white");
$("#night").src= "/storage/emulated/0/Download/off.png";
night=1;
}
else{
colors(i,"white","black");
$("#night").src= "/storage/emulated/0/Download/on.png";
night=0;
}
})

};



//ASSIGN CSS IN START
name.forEach((i,x)=>{
i.style.border= "1px solid gray";
if(!night){
colors(i,"black","white");
}
else{
colors(i,"white","black");
}
})


//Stop All Radios
function stopAll(){
player.forEach((i,x)=>{
i.src= "";
name[x].style.border= "1px solid gray";
colors(name[x],"black","white");
})
document.title= "KD Radio - Bollywood";
}

//------------------------------START-MAIN-FUNCTION-------
name.forEach((i,x)=>{

//ON TAP OR CLICK
i.onclick=()=>{
if(player[x].paused){
stopAll();
colors(i,"white","green");
player[x].src= url[x];
player[x].play();
}
else{
return false;
}
};

//ON PAUSE
player[x].onpause=()=>{
if(night) name[x].style.border= "1px solid red";
colors(i,"white","red");
}

//ON PLAY
player[x].onplay=()=>{
dur.innerHTML= `Loading ${i.innerHTML}...`;
duration
(player[x],i.innerHTML);
if(night) name[x].style.border= "1px solid #00fd03";
colors(i,"white","green");
document.title= "KD Radio - "+ i.innerHTML;
}


})
//--------------------------------END-MAIN-FUNCTION-------



//DISABLE SELECTION
$("body").onselectstart=()=>{ return false; };


//STOPPING RADIO
let stop= $("p"); 
stop.onclick= stopAll; 


//EXPAND AND COLLAPSE RADIOS
let xo= "two";
let loser= $$("#x3, #x4, #x5, #x6, #x8, #x9, #x11, #x13");
loser.forEach(i=>{i.style.display="none";})

$("#frog").onclick= function(){
if(xo==="one"){
loser.forEach(i=> {i.style.display= "none";})
xo= "notone";
}
else{
loser.forEach(i=> {i.style.display= "flex";})
xo= "one";
}

};
