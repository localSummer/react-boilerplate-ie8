import React from 'react'

class Echarts2 extends React.Component {
    state = {
        option: {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 52, 200, 334, 390, 330, 220]
                }
            ]
        }
    }

    componentDidMount() {
        let {option} = this.state
        console.log(echarts)
        let charts = echarts.init(document.getElementById('charts2'))
        charts.setOption(option)
    }

    render() {
        return (
            <div id="charts2" style={{width: '500px', height: '500px'}}></div>
        )
    }
}

export default Echarts2