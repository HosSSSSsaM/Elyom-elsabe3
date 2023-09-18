
setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minets = date.getMinutes();
    let second = date.getSeconds();
    let year = date.getFullYear();
    let montharry = ["يناير" , "فبراير" , "مارس" , "ابريل" , "مايو" , "يونيو" , "يوليو" , "اغسطس" , "سبتمبر" , "أكتوبر" , "نوفمبر" , "ديبسمبر"];
    let monthname = montharry[date.getMonth()];
    let day = date.getDay();
    let dayarry = ["الاحد" , "الاثنين" , "الثلاثاء" , "الاربعاء" , "الخميس" , "الجمعه" , "السبت"]
    let dayname = dayarry[date.getDay()];
    document.querySelector(".date-time").innerHTML = `${dayname}, ${day} ${monthname} ${year}`;
    document.querySelector(".date-history").innerHTML = `${hour}:${minets}:${second}`;
}, 1000);


setInterval(() => {
    let texts = ["الدخليه المغربية : ارتفاع ضحايا الزلزال الي 2662 وفاة و 2986 " ,"تلفزيون اليوم السابع : يستعرض ماذا جني العالم من احداث 11 سبتمبر" , "منتخب تونس يختتم استعداداته لمواجهة مصر بمشاركه علي معلول " , "ليبيا تسجل العثور علي عشرات الجثث في درنه ...وتسجل فقدان اكثر من 7 الاف شخص" , "الدائري شكل تاني : شاهد اعمال تحسين شكل العقارات المطله علي الطريق" , "بورتريه خاص في ذكري رحيل ملك الجيتار بليغ حمدي" ]
    let randomtext = Math.round(Math.random() * texts.length-1)
    document.querySelector(".random-text").innerHTML = texts[randomtext]
    document.querySelector(".random-text").style.color = "white"
}, 5000);

document.querySelector(".p1").onclick = function(){
    document.querySelector(".test").src="imgaes/تقديم 30مليون.jpg"
    document.querySelector(".p1").style.backgroundColor = "#cd1c25"
    document.querySelector(".p2").style.backgroundColor = "black"
    document.querySelector(".p3").style.backgroundColor = "black"
    document.querySelector(".p4").style.backgroundColor = "black"
}
document.querySelector(".p2").onclick = function(){
    document.querySelector(".test").src="imgaes/المتقدمون لمعاهد.jpg"
    document.querySelector(".p1").style.backgroundColor = "black"
    document.querySelector(".p2").style.backgroundColor = "#cd1c25"
    document.querySelector(".p3").style.backgroundColor = "black"
    document.querySelector(".p4").style.backgroundColor = "black"
}
document.querySelector(".p3").onclick = function(){
    document.querySelector(".test").src="imgaes/موعد مباراه الاهلي واتحاد العاصمه.jpg"
    document.querySelector(".p1").style.backgroundColor = "black"
    document.querySelector(".p2").style.backgroundColor = "black"
    document.querySelector(".p3").style.backgroundColor = "#cd1c25"
    document.querySelector(".p4").style.backgroundColor = "black"
}
document.querySelector(".p4").onclick = function(){
    document.querySelector(".test").src="imgaes/حبس وغرامه.jpg"
    document.querySelector(".p1").style.backgroundColor = "black"
    document.querySelector(".p2").style.backgroundColor = "black"
    document.querySelector(".p3").style.backgroundColor = "black"
    document.querySelector(".p4").style.backgroundColor = "#cd1c25"
}

document.querySelector(".num1").onclick = function(){
    document.querySelector(".num1").classList.add("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".num14").classList.remove("active")
    document.querySelector(".pic1").classList.add("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num2").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.add("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.add("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num3").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.add("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.add("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num4").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.add("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.add("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num5").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.add("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.add("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num6").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.add("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.add("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num7").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.add("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.add("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num8").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.add("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.add("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num9").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.add("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.add("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num10").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.add("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.add("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num11").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.add("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".num14").classList.remove("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.add("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num12").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.add("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.add("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num13").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.add("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.add("addion")
    document.querySelector(".pic14").classList.remove("addion")
}
document.querySelector(".num14").onclick = function(){
    document.querySelector(".num1").classList.remove("active")
    document.querySelector(".num2").classList.remove("active")
    document.querySelector(".num3").classList.remove("active")
    document.querySelector(".num4").classList.remove("active")
    document.querySelector(".num5").classList.remove("active")
    document.querySelector(".num6").classList.remove("active")
    document.querySelector(".num7").classList.remove("active")
    document.querySelector(".num8").classList.remove("active")
    document.querySelector(".num9").classList.remove("active")
    document.querySelector(".num10").classList.remove("active")
    document.querySelector(".num11").classList.remove("active")
    document.querySelector(".num12").classList.remove("active")
    document.querySelector(".num13").classList.remove("active")
    document.querySelector(".num14").classList.add("active")
    document.querySelector(".pic1").classList.remove("addion")
    document.querySelector(".pic2").classList.remove("addion")
    document.querySelector(".pic3").classList.remove("addion")
    document.querySelector(".pic4").classList.remove("addion")
    document.querySelector(".pic5").classList.remove("addion")
    document.querySelector(".pic6").classList.remove("addion")
    document.querySelector(".pic7").classList.remove("addion")
    document.querySelector(".pic8").classList.remove("addion")
    document.querySelector(".pic9").classList.remove("addion")
    document.querySelector(".pic10").classList.remove("addion")
    document.querySelector(".pic11").classList.remove("addion")
    document.querySelector(".pic12").classList.remove("addion")
    document.querySelector(".pic13").classList.remove("addion")
    document.querySelector(".pic14").classList.add("addion")
}

window.onscroll = function (){
    if(window.scrollY > 1000){
        document.querySelector(".fa-chevron-up").style.display = "block"
    }else{
        document.querySelector(".fa-chevron-up").style.display = "none"
    }
}
document.querySelector(".fa-chevron-up").onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}



document.querySelector(".fa-xmark").onclick = function(){
    document.querySelector(".advertisment1").style.opacity = "0"
}


document.querySelector(".click2").onclick = function(){
    document.querySelector(".adver2").style.opacity = "0"
}











