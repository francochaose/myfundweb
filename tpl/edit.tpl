<div class="raw">
    <div class="indexbody">
            <div class="card">
                <h1 class="index_bt">修改基金经理</h1>
                <form class="writearticle">
                    <input type="hidden" name="m_id" value = "<%= id %>">
                    <div>
                        <p>姓名</p>
                        <input type="text" id="new_manager_name" name="m_name" onfocus="showTips('name_hint','姓名长度大于一')" onblur="hint_hide('name_hint')" value = "<%= data.name %>">
                        <span id="name_hint"></span>
                    </div>
                    <div>
                        <P>性别</P>
                        <input type="radio" id="new_manager_sex" name="m_sex" value="M" onclick="hint_hide('sex_hint')">男
                        <input type="radio" id="new_manager_sex" name="m_sex" value="F" onclick="hint_hide('sex_hint')">女
                        <span id="sex_hint"></span>
                    </div>
                    <div>
                        <p>学历</p>
                        <input type="text" id="new_manager_edu" name="m_edu" onblur="hint_hide('edu_hint')" value = "<%= data.edu %>">
                        <span id="edu_hint"></span>
                    </div>
                    <div>
                        <p>简介</p>
                        <textarea id="new_manager_resume" name="m_resume" class="articletext" onfocus="showTips('resume_hint','简介必须超过20字！')" onblur="hint_hide('resume_hint')"><%= data.resume %></textarea>
                        <span id="resume_hint"></span>
                    </div>
                    <div>
                        <input type="button" name="submit" value="提交" onclick="addmanager()">
                    </div>
                </form>
            </div>
    </div>
</div>
        <script src=" scripts/inputcheck.js "></script>