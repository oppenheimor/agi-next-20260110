import type { Concept } from '../data/concepts'
import './ConceptVisualization.css'

interface ConceptVisualizationProps {
  concept: Concept
}

export function ConceptVisualization({ concept }: ConceptVisualizationProps) {
  const renderVisualization = () => {
    switch (concept.visualization) {
      case 'flowchart':
        return <FlowchartVisualization concept={concept} />
      case 'comparison':
        return <ComparisonVisualization concept={concept} />
      case 'timeline':
        return <TimelineVisualization concept={concept} />
      case 'hierarchy':
        return <HierarchyVisualization concept={concept} />
      case 'analogy':
        return <AnalogyVisualization concept={concept} />
      default:
        return <div className="visualization-placeholder">暂无可视化内容</div>
    }
  }

  return (
    <div className="concept-visualization">
      {renderVisualization()}
    </div>
  )
}

// 流程图可视化
function FlowchartVisualization({ concept }: ConceptVisualizationProps) {
  const steps = getFlowchartSteps(concept.id)

  return (
    <div className="flowchart-visualization">
      {steps.map((step, index) => (
        <div key={index} className="flowchart-step">
          <div className="step-number">{index + 1}</div>
          <div className="step-content">
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
          {index < steps.length - 1 && <div className="step-arrow">↓</div>}
        </div>
      ))}
    </div>
  )
}

// 对比可视化
function ComparisonVisualization({ concept }: ConceptVisualizationProps) {
  const comparison = getComparisonData(concept.id)

  return (
    <div className="comparison-visualization">
      <div className="comparison-side">
        <h3>{comparison.left.title}</h3>
        <ul>
          {comparison.left.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="comparison-divider">VS</div>
      <div className="comparison-side">
        <h3>{comparison.right.title}</h3>
        <ul>
          {comparison.right.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// 时间线可视化
function TimelineVisualization({ concept }: ConceptVisualizationProps) {
  const timeline = getTimelineData(concept.id)

  return (
    <div className="timeline-visualization">
      <div className="timeline-line"></div>
      {timeline.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>{item.phase}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// 层级可视化
function HierarchyVisualization({ concept }: ConceptVisualizationProps) {
  const hierarchy = getHierarchyData(concept.id)

  return (
    <div className="hierarchy-visualization">
      {hierarchy.map((level, index) => (
        <div key={index} className={`hierarchy-level level-${index}`}>
          <h4>{level.title}</h4>
          <div className="hierarchy-items">
            {level.items.map((item, i) => (
              <div key={i} className="hierarchy-item">{item}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// 类比可视化
function AnalogyVisualization({ concept }: ConceptVisualizationProps) {
  const analogy = getAnalogyData(concept.id)

  return (
    <div className="analogy-visualization">
      <div className="analogy-original">
        <h4>🔬 AI概念：{analogy.aiConcept}</h4>
        <p>{analogy.aiDescription}</p>
      </div>
      <div className="analogy-comparison">
        <div className="analogy-arrow">↕️</div>
        <p className="analogy-note">就像...</p>
      </div>
      <div className="analogy-relatable">
        <h4>🌍 生活中的例子：{analogy.lifeExample}</h4>
        <p>{analogy.lifeDescription}</p>
      </div>
    </div>
  )
}

// 辅助函数：获取流程图数据
function getFlowchartSteps(conceptId: string) {
  const flowchartData: Record<string, { title: string; description: string }[]> = {
    'rl': [
      { title: '尝试任务', description: 'AI尝试完成任务，比如做数学题' },
      { title: '获取反馈', description: '系统告诉AI做对了还是做错了' },
      { title: '调整参数', description: '根据反馈调整AI的内部参数' },
      { title: '重复训练', description: '不断重复这个过程，AI越做越好' }
    ],
    'autonomous-learning': [
      { title: '设定目标', description: 'AI自己决定要学习什么' },
      { title: '寻找资源', description: 'AI自己找学习材料' },
      { title: '自我训练', description: 'AI用找到的材料训练自己' },
      { title: '评估提升', description: 'AI自己检查有没有进步' },
      { title: '持续迭代', description: '重复以上过程，持续变强' }
    ],
    'agent': [
      { title: '理解任务', description: '用户说"帮我做PPT"' },
      { title: '规划步骤', description: 'AI分解成：查资料、列大纲、生成内容' },
      { title: '执行操作', description: 'AI逐步完成每个步骤' },
      { title: '使用工具', description: '需要时调用搜索、文件等工具' },
      { title: '完成任务', description: '交付最终成果' }
    ],
    'coding-agent': [
      { title: '需求理解', description: '你说"做一个登录页面"' },
      { title: '代码生成', description: 'AI写出HTML、CSS、JS代码' },
      { title: '测试调试', description: 'AI自己测试、发现Bug、修复' },
      { title: '优化改进', description: 'AI优化性能、改进体验' }
    ]
  }

  return flowchartData[conceptId] || [
    { title: '输入', description: '提供数据或任务' },
    { title: '处理', description: '系统进行处理' },
    { title: '输出', description: '产生结果' }
  ]
}

// 辅助函数：获取对比数据
function getComparisonData(conceptId: string) {
  const comparisonData: Record<string, {
    left: { title: string; items: string[] }
    right: { title: string; items: string[] }
  }> = {
    'toc-vs-tob': {
      left: {
        title: 'To C (面向消费者)',
        items: [
          '产品：ChatGPT、豆包',
          '用途：聊天、写作、搜索',
          '特点：满足日常需求',
          '付费意愿：较低'
        ]
      },
      right: {
        title: 'To B (面向企业)',
        items: [
          '产品：Claude Code、Copilot',
          '用途：写代码、数据分析',
          '特点：提升生产力赚钱',
          '付费意愿：很高'
        ]
      }
    },
    'vertical-integration': {
      left: {
        title: '垂直整合',
        items: [
          '例子：ChatGPT、豆包',
          '模型和应用一体化',
          '配合紧密、体验好',
          '需要巨大资源'
        ]
      },
      right: {
        title: '模型应用分层',
        items: [
          '例子：Claude API + 应用',
          '专业模型 + 应用生态',
          '灵活多样、创新快',
          '依赖模型能力'
        ]
      }
    },
    'model-as-product': {
      left: {
        title: '模型即产品',
        items: [
          '例子：Claude Code',
          '模型能力直接转化价值',
          '不需要额外应用层',
          '模型必须足够强'
        ]
      },
      right: {
        title: '应用包装模型',
        items: [
          '例子：各种AI助手',
          '通过应用弥补能力不足',
          '需要复杂应用层',
          '依赖模型基础能力'
        ]
      }
    },
    'test-time-scaling': {
      left: {
        title: '快速回答',
        items: [
          '立即给出答案',
          '可能不够准确',
          '适合简单问题',
          '成本低、速度快'
        ]
      },
      right: {
        title: '多想一会儿',
        items: [
          '花时间推理验证',
          '答案更准确可靠',
          '适合复杂问题',
          '成本高、速度慢'
        ]
      }
    },
    'open-source-models': {
      left: {
        title: '开源模型',
        items: [
          '例子：DeepSeek、Qwen',
          '代码和参数公开',
          '任何人可用可改',
          '促进技术创新'
        ]
      },
      right: {
        title: '闭源模型',
        items: [
          '例子：GPT-4、Claude',
          '只提供API服务',
          '技术不公开',
          '商业化程度高'
        ]
      }
    }
  }

  return comparisonData[conceptId] || {
    left: { title: '方案A', items: ['特点1', '特点2'] },
    right: { title: '方案B', items: ['特点1', '特点2'] }
  }
}

// 辅助函数：获取时间线数据
function getTimelineData(conceptId: string) {
  const timelineData: Record<string, { phase: string; description: string }[]> = {
    'scaling-law': [
      { phase: '早期', description: '模型参数小，能力有限，但Scaling带来明显提升' },
      { phase: '中期', description: '继续扩大规模，能力稳定增长，验证了Scaling Law' },
      { phase: '现在', description: '继续Scaling仍有收益，但效率下降，边际效应递减' },
      { phase: '未来', description: '需要新范式，用更少投入获得更多智能提升' }
    ],
    'long-horizon-agent': [
      { phase: '现在', description: 'Agent可以推理3-5小时，完成人类1-2天的工作量' },
      { phase: '2026年预期', description: 'Agent可能完成人类一周到两周的工作量' },
      { phase: '未来方向', description: '自主规划、自我进化、在真实环境中长期运行' }
    ]
  }

  return timelineData[conceptId] || [
    { phase: '开始', description: '初始阶段' },
    { phase: '发展', description: '逐步成长' },
    { phase: '成熟', description: '达到目标' }
  ]
}

// 辅助函数：获取层级数据
function getHierarchyData(conceptId: string) {
  const hierarchyData: Record<string, { title: string; items: string[] }[]> = {
    'pretraining': [
      {
        title: '基础层：预训练',
        items: ['阅读海量文本', '学习语言规律', '积累世界知识']
      },
      {
        title: '进阶层：微调',
        items: ['特定任务训练', '调整模型行为', '提升专业能力']
      },
      {
        title: '应用层：实际使用',
        items: ['回答问题', '生成内容', '辅助决策']
      }
    ],
    'federated-learning': [
      {
        title: '中心层：通用基座',
        items: ['大型通用模型', '基础能力', '共享知识']
      },
      {
        title: '协作层：本地模型',
        items: ['各机构私有数据', '本地训练', '保护隐私']
      },
      {
        title: '聚合层：知识融合',
        items: ['模型参数聚合', '知识共享', '共同提升']
      }
    ],
    'memory': [
      {
        title: '短期记忆',
        items: ['当前对话', '最近交互', '临时信息']
      },
      {
        title: '长期记忆',
        items: ['历史对话', '用户偏好', '重要事件']
      },
      {
        title: '语义记忆',
        items: ['知识图谱', '概念关联', '经验总结']
      }
    ],
    'personalization': [
      {
        title: '数据层',
        items: ['用户行为', '交互历史', '偏好设置']
      },
      {
        title: '理解层',
        items: ['习惯分析', '需求预测', '风格识别']
      },
      {
        title: '服务层',
        items: ['定制推荐', '个性化响应', '主动帮助']
      }
    ]
  }

  return hierarchyData[conceptId] || [
    { title: '基础', items: ['要素1', '要素2'] },
    { title: '进阶', items: ['要素3', '要素4'] }
  ]
}

// 辅助函数：获取类比数据
function getAnalogyData(conceptId: string) {
  const analogyData: Record<string, {
    aiConcept: string
    aiDescription: string
    lifeExample: string
    lifeDescription: string
  }> = {
    'context': {
      aiConcept: '上下文 (Context)',
      aiDescription: 'AI需要背景信息才能理解问题。比如问"今天该去吃什么"，AI需要知道你在哪、天气如何、你喜欢吃什么。',
      lifeExample: '朋友给你推荐餐厅',
      lifeDescription: '如果朋友不知道你在哪、喜欢吃什么、预算多少，就很难给出好的建议。有了这些背景信息，推荐才能精准。'
    },
    'memory': {
      aiConcept: 'AI记忆',
      aiDescription: 'AI记住与你的对话历史、偏好和上下文，让交互更自然、更贴心。',
      lifeExample: '和朋友聊天',
      lifeDescription: '朋友记得你之前说过的话，知道你的喜好，聊天就更自然。AI有了记忆，就像一个真正了解你的朋友。'
    },
    'pretraining': {
      aiConcept: '预训练',
      aiDescription: 'AI通过阅读海量文本，学习语言的规律、世界知识和推理能力。这是"变聪明"的基础。',
      lifeExample: '读书学习',
      lifeDescription: '就像一个人先读万卷书，积累大量基础知识，有了这个基础才能解决各种问题。'
    },
    'rl': {
      aiConcept: '强化学习',
      aiDescription: 'AI通过"试错"和"奖励"来学习。做对了给奖励，做错了不给奖励，慢慢越做越好。',
      lifeExample: '训练小狗',
      lifeDescription: '就像训练小狗坐下，做对了给零食奖励，重复多次后小狗就学会了。AI也是这样学习新技能的。'
    }
  }

  return analogyData[conceptId] || {
    aiConcept: conceptId,
    aiDescription: '这是一个AI相关的重要概念。',
    lifeExample: '生活中的例子',
    lifeDescription: '可以通过生活中的类似场景来理解这个概念。'
  }
}
