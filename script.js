let memes = document.querySelectorAll(".meme");

memes.forEach(memes => {
  memes.addEventListener('click', e => {
    memes.classList.toggle('active');
    console.log("meme clicked");
  });
});

let userguess = document.getElementById("guess");

let doge = document.querySelector("#meme1");
let badluckbrian = document.querySelector("#meme2");
let overlyattachedgirlfriend = document.querySelector("#meme3");
let slenderman = document.querySelector("#meme4");
let rickroll = document.querySelector("#meme5");
let scumbagsteve = document.querySelector("#meme6");

function memeGuess() {
    if (userguess.value == "doge" && doge.classList.contains('active')) {
       console.log(userguess.value);
       doge.innerHTML = `<img src="http://i.imgur.com/6jr3M0j.png">`;
    }
    
     else if (userguess.value == "bad luck brian" && badluckbrian.classList.contains('active')) {
       console.log(userguess.value);
       badluckbrian.innerHTML = `<img src="https://pbs.twimg.com/profile_images/2376685728/mefsoyjdxx543cn1k6v4.png">`;
    }
    
    else if (userguess.value == "overly attached girlfriend" && overlyattachedgirlfriend.classList.contains('active')) {
       console.log(userguess.value);
       overlyattachedgirlfriend.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCKyRpRTUDI5W3g9EvswCTjy9kyhOtOqJkxHsJ5RiDmmqrx5XOQ">`;
    }
    
    else if (userguess.value == "slender man" && slenderman.classList.contains('active')) {
       console.log(userguess.value);
       slenderman.innerHTML = `<img src="https://dl.myket.ir/newresizing/resize/medium/png/icon/com.kingagizzi.slenderman.png">`;
    }
    
    else if (userguess.value == "rickroll" && rickroll.classList.contains('active')) {
       console.log(userguess.value);
       rickroll.innerHTML = `<img src="https://pm1.narvii.com/6341/b6d1b5a9fbc10d72e81bdb38ca9b92ac46806764_128.jpg">`;
    }
    
    else if (userguess.value == "scumbag steve" && scumbagsteve.classList.contains('active')) {
       console.log(userguess.value);
       scumbagsteve.innerHTML = `<img src="https://pbs.twimg.com/profile_images/2674411850/9e0c41ad4417bcf70ef67e778be3b9c9.jpeg">`;
    }
    
    else {
      console.log("incorrect guess");
    }
}