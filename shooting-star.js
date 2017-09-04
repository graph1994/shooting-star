function shootingStar(dir) {
  setInterval(function(){
    var yAxis = Math.floor(Math.random() * 80) + 1;
    yAxis = yAxis + '%';
    var xAxis = Math.floor(Math.random() * 40) + 1;
    xAxis = xAxis + '%';
    var trans = Math.floor(Math.random() * 300) + 1;
    trans = trans + 'deg';
    var ctx = document.getElementById('shooting-star');
    ctx.setAttribute('style','top:' + yAxis + ';' + dir + ':' + xAxis + '; transform:' + 'rotate(' + trans + ')');
  }, 2000);
}


shootingStar('left');
shootingStar('right');
