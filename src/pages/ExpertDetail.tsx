import { Link, useParams } from 'react-router-dom'
import { experts } from '../data/experts'
import { speeches } from '../data/speeches'
import './ExpertDetail.css'

export function ExpertDetail() {
  const { expertId } = useParams<{ expertId: string }>()
  const expert = experts.find(e => e.id === expertId)
  const speech = speeches.find(s => s.expertId === expertId)

  if (!expert) {
    return (
      <div className="container">
        <div className="not-found">
          <h1>专家未找到</h1>
          <Link to="/">返回首页</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="expert-detail">
      <div className="container">
        {/* 面包屑 */}
        <nav className="breadcrumb">
          <Link to="/">首页</Link>
          <span className="separator">/</span>
          <span>{expert.name}</span>
        </nav>

        {/* 专家头部 */}
        <header className="expert-header">
          <h1 className="expert-name">{expert.name}</h1>
          <p className="expert-title">{expert.title}</p>
          <p className="expert-organization">{expert.organization}</p>
          <p className="expert-bio">{expert.bio}</p>
          <div className="expert-topics">
            {expert.topics.map(topic => (
              <span key={topic} className="tag">{topic}</span>
            ))}
          </div>
        </header>

        <hr className="divider" />

        {/* 演讲内容 */}
        {speech && (
          <article className="speech-content">
            <h2 className="speech-title">{speech.title}</h2>
            <p className="speech-summary">{speech.summary}</p>

            {speech.sections.map((section, index) => (
              <section key={index} className="speech-section">
                <h3 className="section-title">{section.title}</h3>
                <div className="section-content">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
                {section.highlights && (
                  <div className="section-highlights">
                    {section.highlights.map((highlight, hIndex) => (
                      <blockquote key={hIndex} className="highlight">
                        {highlight}
                      </blockquote>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </article>
        )}

        {/* 返回按钮 */}
        <div className="expert-actions">
          <Link to="/" className="button button-outline">
            返回首页
          </Link>
          <Link to="/panel" className="button">
            查看圆桌讨论
          </Link>
        </div>
      </div>
    </div>
  )
}
