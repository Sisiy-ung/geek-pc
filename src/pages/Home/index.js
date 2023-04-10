import './index.scss'
import Bar from '../../components/Bar'

// 1. 在rect获取dom节点 dom -> useRef
//  在什么地方获取dom节点 -> useEffect

const Home = () => {
  return (
    <div className='Home'>
      <Bar
        style={{ width: '500px', height: '400px' }}
        xData={['vue', 'angular', 'react']}
        yData={[50, 60, 70]}
        title='三大框架满意度' />

      <Bar
        style={{ width: '500px', height: '400px' }}
        xData={['vue', 'angular', 'react']}
        yData={[50, 60, 70]}
        title='三大框架使用度' />
    </div>
  )
}

export default Home