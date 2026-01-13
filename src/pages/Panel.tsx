import { Link } from 'react-router-dom'
import { panelDiscussion } from '../data/panel'
import './Panel.css'

export function Panel() {
  return (
    <div className="panel">
      <div className="container">
        {/* 页面头部 */}
        <header className="panel-header">
          <Link to="/" className="back-link">← 返回首页</Link>
          <h1>圆桌讨论</h1>
          <p className="panel-subtitle">
            四位横跨学术与产业、中国与硅谷的一线参与者，讨论四个核心问题：
            分化、范式、Agent、以及中国AI的胜算
          </p>
        </header>

        {/* 讨论话题 */}
        <div className="topics">
          {panelDiscussion.map((topic, index) => (
            <section key={topic.id} className="topic">
              <div className="topic-header">
                <span className="topic-number">0{index + 1}</span>
                <h2 className="topic-title">{topic.title}</h2>
              </div>
              <p className="topic-summary">{topic.summary}</p>

              <div className="speakers">
                {topic.speakers.map(speaker => (
                  <div key={speaker.name} className="speaker">
                    <h3 className="speaker-name">{speaker.name}</h3>
                    <ul className="speaker-points">
                      {speaker.points.map((point, pIndex) => (
                        <li key={pIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* 页面底部 */}
        <div className="panel-footer">
          <Link to="/concepts" className="button">
            探索关键概念
          </Link>
        </div>
      </div>
    </div>
  )
}
