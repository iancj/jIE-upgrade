// window.onload = function() {
//     testie({chrome: true,firefox: true,maxthon: true,ie9: true});
// };

function testie(args,title) {
    if(document.getElementById("IEWraning")){
        return;
    }

    if(!title){
        title="您正在使用低版本浏览器，为了获得更良好的体验，建议您升级浏览器，为您推荐："
    }
    var html = '<h3 class="IEW_info">'+title+'</h3><div class="IEW_links">';
    if (args != null && args.chrome) {
        html += '<a href="https://www.google.com/intl/zh-CN/chrome/" target="_blank">谷歌浏览器</a>';
    }
    if (args != null && args.firefox) {
        html += '<a href="http://download.firefox.com.cn/releases/stub/official/zh-CN/Firefox-latest.exe" target="_blank">火狐浏览器</a>';
    }
    if (args != null && args.maxthon) {
        html += '<a href="http://www.maxthon.cn/" target="_blank">遨游浏览器</a>';
    }
    if (args != null && args.ie9) {
        html += '<a href="http://www.microsoft.com/zh-cn/download/internet-explorer-9-details.aspx" target="_blank">Internet Explorer 9</a>';
    }
    html += '</div><a href="javascript:;" id="IEWClose">×</a>';

    var IEWraning = document.createElement("div");

        IEWraning.setAttribute("id", "IEWraning");

        document.getElementsByTagName("body")[0].appendChild(IEWraning);

    var domIEWraning = document.getElementById("IEWraning");

        IEWraning.innerHTML = html;

    var domIEWClose = document.getElementById("IEWClose");

        domIEWClose.onclick = function() {
            domIEWraning.style.display = "none";
            return false;
        };
}