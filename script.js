let d, h, m, s, clock, color;
function clocky(){
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

     if (h <= 9){
         h = '0' + h;

     }
     if (m <= 9){
        m = '0' + h;

    }
    if (s <= 9){
        s = '0' + s;

    }
    color = '#' + h + m + s;
    clock = 'Your time is up my time is now ->' + h + ':' + m + ':' + s;

    document.getElementById('clock').innerHTML = clock;
    document.body.style.background = color;

    setTimeout (clocky,1000);
 }
  clocky();