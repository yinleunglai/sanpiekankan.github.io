document.write("<div id=QQFloat style=Z-INDEX:20;LEFT:88%;VISIBILITY:visible;WIDTH:112px;POSITION:absolute;TOP:400px;HEIGHT:300px;>")
document.write("<div class=qq><div class=qq_t><img src=https://code4good.cn/qqimages/qq01.png /></div><div class=qq_bg><ul>")
document.write("<li><img SRC=https://code4good.cn/qqimages/qq.gif  border=0 align=absmiddle /><a target=_blank href='http://wpa.qq.com/msgrd?v=3&uin=1715991945&site=qq&menu=yes'><font color='#000000'>业务咨询</font></a></li>")
document.write("</ul></div><div class=qq_d><img src=https://code4good.cn/qqimages/qq02.png /></div></div>")
document.write("</div>")
var tips; var theTop = 200
var old = theTop;
function initFloatTips() {
  tips = document.getElementById('QQFloat');
  moveTips();
};
function moveTips() {
  var tt=50;
  if (window.innerHeight) {
    pos = window.pageYOffset
  }
  else if (document.documentElement && document.documentElement.scrollTop) {
    pos = document.documentElement.scrollTop
  }
  else if (document.body) {
    pos = document.body.scrollTop;
  }

  pos=pos-tips.offsetTop+theTop;
  pos=tips.offsetTop+pos/10;
	
  if (pos < theTop) pos = theTop;
  if (pos != old) {
    tips.style.top = pos+"px";
    tt=10;
  }	
  old = pos;
  setTimeout(moveTips,tt);
}
initFloatTips();