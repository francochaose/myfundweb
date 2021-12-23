$.ajax({
    url: "./json/fund_159972.sz.json", //json文件位置
    type: "GET", //请求方式为get
    dataType: "json", //返回数据格式为json
    success: function(data) { //请求成功完成后要执行的方法 
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
                text: '                                   基金涨跌情况曲线图'
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