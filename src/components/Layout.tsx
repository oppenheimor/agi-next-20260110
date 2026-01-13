import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="container">
          <nav className="nav">
            <Link to="/" className="nav-logo">
              <h1>圆桌对话：中国AI的下一步</h1>
              <p className="nav-subtitle">2025 年中国开源模型大放异彩</p>
            </Link>
            <ul className="nav-menu">
              <li>
                <Link
                  to="/"
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                >
                  首页
                </Link>
              </li>
              <li>
                <Link
                  to="/panel"
                  className={`nav-link ${isActive('/panel') ? 'active' : ''}`}
                >
                  圆桌讨论
                </Link>
              </li>
              <li>
                <Link
                  to="/concepts"
                  className={`nav-link ${isActive('/concepts') || isActive('/concepts/') ? 'active' : ''}`}
                >
                  关键概念
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="layout-main">
        {children}
      </main>
      <footer className="layout-footer">
        <div className="container">
          <p className="footer-text">
            基于圆桌对话「中国AI的下一步」实录整理 · 2025
          </p>
        </div>
      </footer>
    </div>
  )
}
