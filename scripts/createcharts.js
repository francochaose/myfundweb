$.ajax({
    url: "./json/fund_159972.sz.json", //json文件位置
    type: "GET", //请求方式为get
    dataType: "json", //返回数据格式为json
    success: function(data) { //请求成功完成后要执行的方法 
        function saerch1() {
            var s_max = data.RECORDS[0].pct_chg;
            for (var i = 1; i < data.RECORDS.length; i++) {
                if (data.RECORDS[i].pct_chg > s_max) {
                    s_max = data.RECORDS[i].pct_chg;
                }
            }
            return s_max;
        }

        function saerch2() {
            var s_max = data.RECORDS[0].close;
            for (var i = 1; i < data.RECORDS.length; i++) {
                if (data.RECORDS[i].close > s_max) {
                    s_max = data.RECORDS[i].close;
                }
            }
            return s_max;
        }

        function saerch3() {
            var s_min = data.RECORDS[0].close;
            for (var i = 1; i < data.RECORDS.length; i++) {
                if (data.RECORDS[i].close < s_min) {
                    s_min = data.RECORDS[i].close;
                }
            }
            return s_min;
        }


        var db1 = document.getElementById('dbs_1');
        db1.innerHTML = saerch1();
        var db2 = document.getElementById('dbs_2');
        db2.innerHTML = data.RECORDS[1].close;
        var db3 = document.getElementById('dbs_3');
        db3.innerHTML = saerch2();
        var db4 = document.getElementById('dbs_4');
        db4.innerHTML = saerch3();

        function arr_y() {
            var arr = new Array;
            for (var i = data.RECORDS.length - 1; i >= 0; i--) { //遍历一下json数据  
                arr.push(data.RECORDS[i].pre_close);
            }
            return arr;
        }

        function arr_x() {
            var arr = new Array;
            for (var i = data.RECORDS.length - 1; i >= 0; i--) { //遍历一下json数据     
                arr.push(data.RECORDS[i].trade_date);
            }
            return arr;
        }

        var myChart = echarts.init(document.getElementsByClassName('e_charts')[0]);



        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '     基金涨跌情况曲线图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Email']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: arr_x()
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '基金收盘价',
                type: 'line',
                stack: 'Total',
                data: arr_y()
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
});