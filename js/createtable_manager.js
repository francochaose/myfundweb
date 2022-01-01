var tbody_all = document.getElementById('tbmanager');

data = getposts()
for (var i = 0; i < data.length; i++) { //遍历一下json数据  
    var m_id = data[i].id;
    var trow = getDataRow(data[i], m_id); //定义一个方法,返回tr数据  
    tbody_all.appendChild(trow);
}


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
    var btnEdit = document.createElement('input'); //创建一个input控件  
    btnEdit.setAttribute('type', 'button'); //type="button"  
    btnEdit.setAttribute('value', '修改');
    DelCell.appendChild(btnEdit);
    //删除操作  
    btnDel.onclick = function() {
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
        localStorage.removeItem(num);
        //btnDel - td - tr - tbody - 删除(tr)  
        //刷新网页还原。实际操作中，还要删除数据库中数据，实现真正删除  
    }
    btnEdit.onclick = function() {
        window.location.href = "#/edit/" + num;
    }


    return row; //返回tr数据      
}