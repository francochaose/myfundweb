<div class="raw">
            <div class="tablebody">
                <div class="card">
                    <h1 class="index_bt">基金经理详情</h1>
                    <span class="index_span">注:因数据原因暂时无法动态获取数据，故几个基金经理的数据模拟</span>
                    <div class="box1">
                        <div class="box_sm">
                            <p>姓名:  </p>
                            <p><strong><%= data.name %></strong></p>
                        </div>
                        <div class="box_sm">
                            <p">学历:  </p>
                            <p><strong><%= data.edu %></strong></p>
                        </div>
                        <div>
                            <p>简介:</p>
                            <article><%= data.resume %></article>
                        </div>
                    </div>
                </div>
            </div>
            <div class="aside">
                <div class="card">
                    <span class="ml">推荐基金经理</span>
                    <ul class="list">
                        <ul class="list1">
                            <li><a href="#/manager/0">董阳阳</a></li>
                            <li><a href="#/manager/1">彭海平</a></li>
                            <li><a href="#/manager/2">刘宁</a></li>
                            <li><a href="#/manager/3">盛丰衍</a></li>
                        </ul>
                    </ul>

                </div>
            </div>
        </div>