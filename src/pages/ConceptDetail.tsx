import { Link, useParams } from 'react-router-dom'
import { concepts } from '../data/concepts'
import { ConceptVisualization } from '../components/ConceptVisualization'
import './ConceptDetail.css'

export function ConceptDetail() {
  const { conceptId } = useParams<{ conceptId: string }>()
  const concept = concepts.find(c => c.id === conceptId)

  if (!concept) {
    return (
      <div className="container">
        <div className="not-found">
          <h1>概念未找到</h1>
          <Link to="/concepts">返回概念列表</Link>
        </div>
      </div>
    )
  }

  // 查找相关概念
  const relatedConcepts = concept.relatedConcepts
    ?.map(id => concepts.find(c => c.id === id))
    .filter(Boolean)

  return (
    <div className="concept-detail">
      <div className="container">
        {/* 面包屑 */}
        <nav className="breadcrumb">
          <Link to="/">首页</Link>
          <span className="separator">/</span>
          <Link to="/concepts">关键概念</Link>
          <span className="separator">/</span>
          <span>{concept.name}</span>
        </nav>

        {/* 概念头部 */}
        <header className="concept-header">
          <span className="concept-category">{concept.category}</span>
          <h1 className="concept-name">{concept.name}</h1>
          <p className="concept-expert">由 {concept.expert} 讲解</p>
        </header>

        {/* 语境 */}
        <div className="concept-context-section">
          <h2>讨论语境</h2>
          <blockquote className="context-quote">
            "{concept.context}"
          </blockquote>
        </div>

        {/* 解释 */}
        <div className="concept-explanation-section">
          <h2>通俗解释</h2>
          <div className="explanation-content">
            {concept.explanation}
          </div>
        </div>

        {/* 可视化 */}
        <div className="concept-visualization-section">
          <h2>可视化理解</h2>
          <ConceptVisualization concept={concept} />
        </div>

        {/* 相关概念 */}
        {relatedConcepts && relatedConcepts.length > 0 && (
          <div className="related-concepts-section">
            <h2>相关概念</h2>
            <div className="related-concepts-list">
              {relatedConcepts.map(c => (
                <Link
                  key={c!.id}
                  to={`/concepts/${c!.id}`}
                  className="related-concept-card"
                >
                  <h3>{c!.name}</h3>
                  <p>{c!.category}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 返回按钮 */}
        <div className="concept-actions">
          <Link to="/concepts" className="button button-outline">
            返回概念列表
          </Link>
          <Link to="/panel" className="button">
            查看圆桌讨论
          </Link>
        </div>
      </div>
    </div>
  )
}
