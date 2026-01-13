import { Link } from 'react-router-dom'
import { experts } from '../data/experts'
import { panelDiscussion } from '../data/panel'
import './Home.css'

export function Home() {
  // 排除主持人李广密
  const featuredExperts = experts.filter(e => e.id !== 'li-guangmi')

  return (
    <div className="home">
      {/* 英雄区域 */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-overline">圆桌对话</p>
            <h1 className="hero-title">中国AI的下一步</h1>
            <p className="hero-subtitle">
              2025年，是中国开源模型大放异彩的一年。中国的开源模型在全球取得突破，
              Coding场景一年增长10~20倍。与此同时，硅谷几家头部公司开始明显分化：
              Anthropic聚焦企业和Coding，Google押注全模态，OpenAI继续To C。
            </p>
            <div className="hero-actions">
              <Link to="/panel" className="button">
                查看圆桌讨论
              </Link>
              <Link to="/concepts" className="button button-outline">
                探索关键概念
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 嘉宾介绍 */}
      <section className="section experts-section">
        <div className="container">
          <div className="section-header">
            <h2>对话嘉宾</h2>
            <p className="section-description">
              四位横跨学术与产业、中国与硅谷的一线参与者
            </p>
          </div>
          <div className="experts-grid">
            {featuredExperts.map(expert => (
              <Link
                key={expert.id}
                to={`/expert/${expert.id}`}
                className="expert-card"
              >
                <div className="expert-card-header">
                  <h3 className="expert-name">{expert.name}</h3>
                  <p className="expert-title">{expert.title}</p>
                </div>
                <p className="expert-organization">{expert.organization}</p>
                <p className="expert-bio">{expert.bio}</p>
                <div className="expert-topics">
                  {expert.topics.slice(0, 3).map(topic => (
                    <span key={topic} className="tag">{topic}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 讨论话题 */}
      <section className="section topics-section">
        <div className="container">
          <div className="section-header">
            <h2>核心话题</h2>
            <p className="section-description">
              探讨分化、范式、Agent以及中国AI的胜算
            </p>
          </div>
          <div className="topics-grid">
            {panelDiscussion.map((topic, index) => (
              <Link key={topic.id} to="/panel" className="topic-card">
                <div className="topic-number">0{index + 1}</div>
                <h3 className="topic-title">{topic.title}</h3>
                <p className="topic-summary">{topic.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 关键概念预览 */}
      <section className="section concepts-preview">
        <div className="container">
          <div className="section-header">
            <h2>关键概念</h2>
            <p className="section-description">
              理解AI发展的核心概念与技术趋势
            </p>
          </div>
          <div className="concepts-actions">
            <Link to="/concepts" className="button">
              浏览所有概念
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
