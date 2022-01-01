function showTips(spanid, tips) {
    var span = document.getElementById(spanid);
    span.innerHTML = tips;
    span.setAttribute('style', 'color : black');
}

function hint_hide(spanid) {
    var span = document.getElementById(spanid);
    span.innerHTML = "";
}

function check_name() {
    var name = $('input[name="m_name"]').val();
    var name_span = document.getElementById('name_hint');
    if (name == " " || name.length == 0) {
        name_span.innerHTML = "姓名不能为空";
        name_span.setAttribute('style', 'color : red');
        return false
    }
    return true
}

function check_sex() {
    var s = $('input[name="m_sex"]:checked').val();
    var sex_span = document.getElementById('sex_hint');
    if (!s) {
        sex_span.innerHTML = "未选择性别！"
        sex_span.setAttribute('style', 'color : red');
        return false
    }
    return true
}

function check_edu() {
    var edu = $('option[name="m_edu"]:checked').val();
    var edu_span = document.getElementById('edu_hint');
    if (edu == "" || edu.length == 0) {
        edu_span.innerHTML = "学历不能为空"
        edu_span.setAttribute('style', 'color : red');
        return false
    }
    return true
}

function check_resume() {
    var resume = $('textarea[name="m_resume"]').val();
    var resume_span = document.getElementById('resume_hint');
    if (resume == "" || resume.length <= 20) {
        resume_span.innerHTML = "简介不能为空且不能少于20字"
        resume_span.setAttribute('style', 'color : red');
        return false
    }
    return true
}

function addmanager() {
    check_name();
    check_sex();
    check_edu();
    check_resume();
    var flag = check_name() && check_sex() && check_edu() && check_resume();
    if (flag) {
        let post = {};
        post["name"] = $('input[name="m_name"]').val();
        post["gender"] = $('input[name="m_sex"]:checked').val();
        post["edu"] = $('option[name="m_edu"]:checked').val();
        post["resume"] = $('textarea[name="m_resume"]').val();
        var m_id = $('input[name="m_id"]').val();
        if (!m_id) {
            m_id = get_last_key();
        }
        localStorage.setItem(m_id, JSON.stringify(post));
        window.location.href = "#/manager";
    }

}