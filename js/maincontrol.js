var atc1 = {
    "title": "区块链简介",
    "origin": "知乎",
    "body": [
        "区块链可以通过分布式账簿精确原始财务信息，利用哈希值固化信息，使得信息不可逆不可篡改，在去中心化和智能合约的条件下降低成本，提高信息处理能力，给“互联网+“下财务管理出现的新问题带来了新的解决方法。",
        "四）智能合约，提高信息处理能力。"
    ],
    "author": "忘且"
};
window.onhashchange = function() {
    var hash = window.location.hash
    var path = hash.substring(1)
    var atc = document.getElementsByTagName('article')[0];
    switch (path) {
        case 'qkljj':
            var a_bt = document.createElement('h2');
            a_bt.setAttribute('class', 'bt');
            a_bt.textContent = atc1.title;
            atc.appendChild(a_bt);
            var a_aut = document.createElement('h4');
            a_aut.setAttribute('class', 'zs')
            a_aut.textContent = atc1.origin;
            atc.appendChild(a_aut);
            for (var i = 0; i < atc1.body.length; i++) {
                var a_p = document.createElement('p');
                a_p.textContent = atc1.body[i];
                atc.appendChild(a_p);
            }
            var teset = document.getElementById('test')
            teset.setAttribute('style', 'display:none');
            break
        case 'show':
            document.write("dsadasdasd!"); // 可以进一步对path做解析和判断，获取id参数
            break
        case '':
            var teset = document.getElementById('test')
            teset.setAttribute('style', 'display:block');
            break
        case 'test/1':
            var testt = document.getElementsByTagName('main')[0];
            var first = testt.firstElementChild;
            clearall();
            break
        default:
            show404NotFound()
    }
}