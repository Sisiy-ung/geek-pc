import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'


// 可配置：组件的title、横向数据xData、纵向数据yData、样式

function echartsInit(node, xData, yData, title) {
  const myChart = echarts.init(node)
  // 绘制图表

  myChart.setOption({
    title: {
      text: title
    },
    tooltip: {},
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: yData
      }
    ]
  })
}

function Bar({ style, xData, yData, title }) {

  const nodeRef = useRef(null)
  useEffect(() => {
    echartsInit(nodeRef.current, xData, yData, title)
  }, [xData, yData, title])

  return (
    <div ref={nodeRef} style={style}></div>
  )
}

export default Bar