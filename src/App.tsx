import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ExpertDetail } from './pages/ExpertDetail'
import { Panel } from './pages/Panel'
import { Concepts } from './pages/Concepts'
import { ConceptDetail } from './pages/ConceptDetail'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expert/:expertId" element={<ExpertDetail />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="/concepts/:conceptId" element={<ConceptDetail />} />
      </Routes>
    </Layout>
  )
}

export default App
