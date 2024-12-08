const cards =[
     {img:"10ofculb.jfif",im:1},
     {img:"aceofdia.jfif",im:2},
     {img:"aceofculb.jfif",im:3},
     {img:"qofdia.jfif",im:4},
     {img:"qofclub.png",im:5},
     {img:"kingofspd.jfif",im:6},
     {img:"jackofhrt.jfif",im:7},
     {img:"aceofheart.png",im:8},
     {img:"aceofculb.jfif",im:9},
     {img:"4thofhert.webp",im:10}
]
const play =document.getElementById("play");
const number =document.getElementById('number');
const guess = document.getElementsByClassName('guess-num');
const first =document.getElementById("first");
const second =document.getElementById("second");
const third =document.getElementById("third");
const click=document.getElementById("click");
const cardsconter =document.getElementById('number-last');
let wonSound = new Audio('075747_inception-horn-victory-82997.mp3')
let lostsound = new Audio('you-loseheavy-echoed-voice-230555.mp3')
let firstcardshow =0;
let secondcardshow=0;
let thirdcardshow=0;
let firstcard ='';
let secondcard ='';
let thirdcard = '';
 

  click.style.display='none'
let count = 0;
 
play.addEventListener('click',()=>{
      firstcardshow=0;
      secondcardshow=0;
      thirdcardshow=0;
      count =0;
      cardsconter.style.display='flex'
     click.style.display='flex'
      let random1 = Math.floor(Math.random()*10)
      let random2 =Math.floor(Math.random()*10)
       let uppercard = Math.floor(Math.random()*10)
       let arr = [random1,random2,uppercard]
       arr.sort(() => Math.random() - 0.5);
       firstcard =arr[0]
       secondcard =arr[1]
       thirdcard =arr[2]

    
        
    number.innerHTML=`<img src="${cards[uppercard].img}" alt="" id ='${cards[uppercard].im}'>`

    Array.from(guess).forEach((ele,index)=>{
        let i = arr[index]
        ele.style.opacity='1'
        ele.innerHTML=`<img src="back2.png" alt="" class="backcover">`
    })  
     play.innerHTML ='Restart' 


})
first.addEventListener('click',()=>{
   
    const fcard =document.getElementById("f");
     
        if(firstcardshow===0)
            {
             
              fcard.innerHTML = `<img src="${cards[firstcard].img}" alt="" id = "${cards[firstcard].im}">`
              fcard.style.opacity='1'
              if(number.innerHTML==fcard.innerHTML)
              {
                      wonSound.play()
                      setTimeout(()=>{
                             wonSound.pause()
                             wonSound.currentTime=0;
                      },2000)
              }
              count++;
              firstcardshow=1
            }
            if(count>=1) {
              
                if(number.innerHTML!==fcard.innerHTML)
                    {
                        lostsound.play()
                            setTimeout(()=>{
                                lostsound.pause()
                                lostsound.currentTime =0
                            },2000)
                    }
                   click.style.display='none'
                    count=0
                    return
                } 
   
})
second.addEventListener('click',()=>{
  
   
    const scard =document.getElementById("s");
     if(secondcardshow===0)
        {
        
          scard.innerHTML=`<img src="${cards[secondcard].img}" alt="" id = "${cards[secondcard].im}">`
        
          scard.style.opacity='1'
          if(number.innerHTML==scard.innerHTML)
            {
                wonSound.play()
                    setTimeout(()=>{
                        wonSound.pause()
                        wonSound.currentTime=0;
                    },2000)
            }
          count++;
          secondcardshow=1;
        }
        if(count>=1) {
            //   cardsconter.style.display='none'
            if(number.innerHTML!==scard.innerHTML)
                {
                       lostsound.play()
                        setTimeout(()=>{
                               lostsound.pause()
                               lostsound.currentTime =0
                        },2000)
                }
               click.style.display='none'
             count=0
             return
         } 
})
third.addEventListener('click',()=>{
    const tcard =document.getElementById("t");
 
    if(thirdcardshow===0)
        {
        
         tcard.innerHTML = `<img src="${cards[thirdcard].img}" alt=""  id = "${cards[thirdcard].im}">`
           tcard.style.opacity='1'
           if(number.innerHTML==tcard.innerHTML)
            {
                    wonSound.play()
                    setTimeout(()=>{
                           wonSound.pause()
                           wonSound.currentTime=0;
                    },2000)
            }
         
           thirdcardshow=1
           count++;
          
        }
    
        if(count>=1) {
            if(number.innerHTML!==tcard.innerHTML)
                {
                       lostsound.play()
                        setTimeout(()=>{
                            lostsound.pause()
                            lostsound.currentTime =0
                        },2000)
                }
             
               click.style.display='none'
            count=0
            return
        } 
})
