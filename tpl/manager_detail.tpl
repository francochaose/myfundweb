<div class="raw">
            <div class="tablebody">
                <div class="card">
                    <h1 class="index_bt">基金经理详情</h1>
                    <span class="index_span">注:因数据原因暂时无法动态获取数据，故用几支基金的数据模拟</span>
                    <div class="box1">
                        <div class="box_sm">
                            <span class="index_span">姓名:</span>
                            <p><%= data.name %></p>
                        </div>
                        <div class="box_sm">
                            <span class="index_span">学历:</span>
                            <p><%= data.edu %></p>
                        </div>
                        <div class="box_sm">
                            <span class="index_span">简介:</span>
                            <p><%= data.resume %></p>
                        </div>
                    </div>
                    <div class="e_charts"></div>
                </div>
            </div>
            <script src="scripts/createcharts.js"></script>
            <div class="aside">
                <div class="card">
                    <span class="ml">推荐基金</span>
                    <ul class="list">
                        <ul class="list1">
                            <li><a href="qukjj.html">159703.SZ</a></li>
                            <li><a href="qklyy.html">159729.SZ</a></li>
                            <li><a href="">159742.SZ</a></li>
                            <li><a href="">159786.SZ</a></li>
                        </ul>
                    </ul>

                </div>
            </div>
        </div>