var tbody_all = document.getElementById('tbmanager');
$.ajax({
    url: "./json/fund_manager.json", //json文件位置
    type: "GET", //请求方式为get
    dataType: "json", //返回数据格式为json
    success: function(data) { //请求成功完成后要执行的方法 
        //each循环 使用$.each方法遍历返回的数据date
        for (var i = 0; i < data.RECORDS.length; i++) { //遍历一下json数据  
            var trow = getDataRow(data.RECORDS[i], i); //定义一个方法,返回tr数据  
            tbody_all.appendChild(trow);
        }
    }
});

function getDataRow(h, num) {
    var row = document.createElement('tr'); //创建行  

    var m_name = document.createElement('td'); //创建第一列id  
    row.appendChild(m_name); //加入行  ，下面类似  
    var a1 = document.createElement('a')
    a1.innerText = h.name;
    a1.href = "#/manager/" + num;
    m_name.appendChild(a1); //填充数据  

    var m_sex = document.createElement('td'); //创建第二列  
    m_sex.innerHTML = h.gender;
    row.appendChild(m_sex);

    var m_edu = document.createElement('td'); //创建第三列 
    m_edu.innerHTML = h.edu;
    row.appendChild(m_edu);

    var m_resume = document.createElement('td'); //创建第四列  
    m_resume.innerHTML = h.resume.substring(0, 30) + "...";
    row.appendChild(m_resume);


    //到这里，json中的数据已经添加到表格中，下面为每行末尾添加添加按钮  

    var DelCell = document.createElement('td'); //创建第五列，操作列  
    row.appendChild(DelCell);
    var btnDel = document.createElement('input'); //创建一个input控件  
    btnDel.setAttribute('type', 'button'); //type="button"  
    btnDel.setAttribute('value', '删除');
    DelCell.appendChild(btnDel);
    //删除操作  
    btnDel.onclick = function() {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        //btnDel - td - tr - tbody - 删除(tr)  
        //刷新网页还原。实际操作中，还要删除数据库中数据，实现真正删除  
    }



    return row; //返回tr数据      
}