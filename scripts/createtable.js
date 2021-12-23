window.onload = function() {
    $.ajax({
        url: "https://francochaose.github.io/webfrontcpsdw/json/fund_daiy1213.json", //json文件位置
        type: "GET", //请求方式为get
        dataType: "json", //返回数据格式为json
        success: function(data) { //请求成功完成后要执行的方法 
            var tbody_all = document.getElementById('tbMain_all');
            for (var i = 0; i < data.length; i++) { //遍历一下json数据  
                var trow = getDataRow(data[i]); //定义一个方法,返回tr数据  
                tbody_all.appendChild(trow);
            }
        }
    })


}

function getDataRow(h) {
    var row = document.createElement('tr'); //创建行  

    var codeCell = document.createElement('td'); //创建第一列id  
    row.appendChild(codeCell); //加入行  ，下面类似  
    var a1 = document.createElement('a')
    a1.innerText = h.ts_code;
    a1.href = "charts.html";
    codeCell.appendChild(a1); //填充数据  

    var jcCell = document.createElement('td'); //创建第一列  
    jcCell.innerHTML = '基金简称';
    row.appendChild(jcCell);

    var preCell = document.createElement('td'); //创建第二列 
    preCell.innerHTML = h.pre_close;
    row.appendChild(preCell);

    var tgCell = document.createElement('td'); //创建第三列  
    tgCell.innerHTML = '托管人';
    row.appendChild(tgCell);

    var formCell = document.createElement('td'); //创建第四列 
    formCell.innerHTML = '投资类型';
    row.appendChild(formCell);

    var manCell = document.createElement('td'); //创建第五列name  
    manCell.innerHTML = '基金经理';
    row.appendChild(manCell);

    //到这里，json中的数据已经添加到表格中，下面为每行末尾添加添加按钮  

    var addCell = document.createElement('td'); //创建第六列，操作列  
    row.appendChild(addCell);
    var btnAdd = document.createElement('input'); //创建一个input控件  
    btnAdd.setAttribute('type', 'button'); //type="button"  
    btnAdd.setAttribute('value', '添加');
    btnAdd.setAttribute('id', 'add');
    addCell.appendChild(btnAdd); //把删除按钮加入td
    //删除操作  
    btnAdd.onclick = function() {
        var tbody_selected = document.getElementById('tbMain_selected')
            //找到按钮所在行的节点，然后删掉这一行  
        var s_row = document.createElement('tr');
        s_row.innerHTML = this.parentNode.parentNode.innerHTML;
        s_row.removeChild(s_row.lastElementChild);
        var delCell = document.createElement('td'); //创建第六列，操作列  
        s_row.appendChild(delCell);
        var btnDel = document.createElement('input'); //创建一个input控件  
        btnDel.setAttribute('type', 'button'); //type="button"  
        btnDel.setAttribute('value', '删除');
        delCell.appendChild(btnDel);
        btnDel.onclick = function() {
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        }
        tbody_selected.appendChild(s_row);
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        //btnDel - td - tr - tbody - 删除(tr)  
        //刷新网页还原。实际操作中，还要删除数据库中数据，实现真正删除  
    }



    return row; //返回tr数据      
}
