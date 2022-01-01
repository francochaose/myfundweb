function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setDate(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires" + d.toTimeString
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var cok = document.cookie.split(';');
    for (var i = 0; i < cok.length; i++) {
        var c = cok[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user == "" || user == null || user.length > 9) {
        while (user == "" || user == null || user.length > 9) {
            user = prompt("请输入你的名字(不为空且小于9):", "");
        }
        setCookie("username", user, 1);
        initlocal();
    }
    set_wlc_p();
    return true;
}

function set_wlc_p() {
    var wp = document.getElementsByClassName('wlc_p')[0];
    wp.innerHTML = "欢迎！" + getCookie("username");
}