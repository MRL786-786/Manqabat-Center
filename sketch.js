var m0
var manqabat;
var m2
var m3
var m4
var m5
var m6
var m7
var m8
var m9

function preload(){
  
  BG= loadImage("Screenshot (40).png")
  
  m0 = loadSound("Ali Ke Chahane Walay- Ali Safdar Rizvi.mp3")
 manqabat = loadSound("Ajal Allah ho Zahurak - Arabi Munqabat.mp3")
  
 m2 = loadSound("Mir-Hasan-Mir-Apni-Kismat-Azma-K.mp3")
  m3 = loadSound("ALI-ALI-MOLA-FARHAN-ALI-WARIS-Ne.mp3")
  
  m4 = loadSound("Faqeer-Ki-Sada-Hussain-Hai-Mir-H.mp3")
  
  m5 = loadSound("Jab Khuda ko Pukara By Prof Sibte Jafar.mp3")
  
  m6= loadSound("Mir Hasan Mir 2012 Manqabat jang e khyber suno suno khaibar ka majra suno (1).mp3")

  m7= loadSound("Suno-Siffeen-Suno-Mir-Hasan-Mir.mp3")
  
  m8= loadSound("Jab Imam Aaynge By Prof Sibte Jaffer.mp3")
  
  m9= loadSound("ABBAS TERAY DAR SA DUNIYA MEIN DAR KAHA'NFARHAN ALI WARISExclusive MANQABAT.mp3")
}

function setup() {
  createCanvas(1000,650);
  
}

function draw() {
  background(BG);
  
   if(keyIsDown(48)){
    m0.play();
  }
  
  if(keyIsDown(49)){
    manqabat.play();
  }
  
  if(keyIsDown(50)){
    m2.play();
  }
  
  if(keyIsDown(51)){
    m3.play();
  }
  
  if(keyIsDown(52)){
    m4.play();
  }
  
  if(keyIsDown(53)){
    m5.play();
  }
  
   if(keyIsDown(54)){
    m6.play();
  }
  
  if(keyIsDown(55)){
    m7.play();
  }
  
  if(keyIsDown(56)){
    m8.play();
  }
  
  if(keyIsDown(57)){
    m9.play();
  }
}