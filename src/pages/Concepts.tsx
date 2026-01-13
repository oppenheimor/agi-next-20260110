import { Link } from 'react-router-dom'
import { concepts } from '../data/concepts'
import './Concepts.css'

export function Concepts() {
  // 按类别分组
  const groupedConcepts = concepts.reduce((acc, concept) => {
    if (!acc[concept.category]) {
      acc[concept.category] = []
    }
    acc[concept.category].push(concept)
    return acc
  }, {} as Record<string, typeof concepts>)

  return (
    <div className="concepts">
      <div className="container">
        {/* 页面头部 */}
        <header className="concepts-header">
          <Link to="/" className="back-link">← 返回首页</Link>
          <h1>关键概念</h1>
          <p className="concepts-subtitle">
            理解AI发展的核心概念与技术趋势，让没有技术背景的普通人也能明白
          </p>
        </header>

        {/* 概念列表 */}
        <div className="concepts-list">
          {Object.entries(groupedConcepts).map(([category, categoryConcepts]) => (
            <section key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              <div className="concepts-grid">
                {categoryConcepts.map(concept => (
                  <Link
                    key={concept.id}
                    to={`/concepts/${concept.id}`}
                    className="concept-card"
                  >
                    <h3 className="concept-name">{concept.name}</h3>
                    <p className="concept-context">
                      <span className="context-label">语境：</span>
                      {concept.context}
                    </p>
                    <div className="concept-meta">
                      <span className="concept-expert">{concept.expert}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
