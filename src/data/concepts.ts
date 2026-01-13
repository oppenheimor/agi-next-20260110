// 关键概念数据
export interface Concept {
  id: string
  name: string
  category: string
  expert: string
  expertId: string
  context: string
  explanation: string
  visualization: 'flowchart' | 'comparison' | 'timeline' | 'hierarchy' | 'analogy'
  relatedConcepts?: string[]
}

export const concepts: Concept[] = [
  {
    id: 'pretraining',
    name: '预训练 (Pre-training)',
    category: '基础技术',
    expert: '唐杰',
    expertId: 'tang-jie',
    context: '预训练走了三年，大家说走到了七八成的收益',
    explanation: '预训练是大模型的第一步训练阶段。就像一个人先读万卷书，积累大量基础知识。模型通过阅读海量文本数据，学习语言的规律、世界知识和推理能力。这是大模型"变聪明"的基础，但收益会逐渐递减。',
    visualization: 'hierarchy',
    relatedConcepts: ['rl', 'scaling-law', 'fine-tuning']
  },
  {
    id: 'rl',
    name: '强化学习 (Reinforcement Learning)',
    category: '训练方法',
    expert: '姚顺雨',
    expertId: 'yao-shunyu',
    context: 'RL 强化学习今天大家也都成为共识，可能走到了百分之四五十的空间',
    explanation: '强化学习是一种通过"试错"和"奖励"来训练AI的方法。就像训练小狗，做对了给奖励，做错了不给奖励。在AI中，让模型尝试完成任务，根据结果好坏调整参数，让它越做越好。OpenAI的O1系列就是用RL提升了推理能力。',
    visualization: 'flowchart',
    relatedConcepts: ['pretraining', 'autonomous-learning']
  },
  {
    id: 'toc-vs-tob',
    name: 'To C vs To B',
    category: '商业模式',
    expert: '姚顺雨',
    expertId: 'yao-shunyu',
    context: '很明显，当大家想到 AI 的 Super App，现在大家想到的就是两个：一个是 ChatGPT，另一个是 Claude Code',
    explanation: 'To C（To Consumer）面向普通消费者，To B（To Business）面向企业用户。To C产品像ChatGPT，大家聊天、写文章；To B产品像Claude Code，帮助程序员写代码。To B更愿意为最强的AI付费，因为能直接提升工作效率和赚钱能力。',
    visualization: 'comparison',
    relatedConcepts: ['vertical-integration', 'coding-agent']
  },
  {
    id: 'vertical-integration',
    name: '垂直整合',
    category: '产品策略',
    expert: '姚顺雨',
    expertId: 'yao-shunyu',
    context: '"垂直整合"这条路，以及"模型和应用分层"这条路，也开始出现了分化',
    explanation: '垂直整合是指一家公司既做大模型，又做应用。像ChatGPT，OpenAI既训练模型又做产品。好处是配合紧密，但需要巨大资源。另一种是"分层"，专业做大模型的公司提供API，其他公司用这个API做各种应用。',
    visualization: 'comparison',
    relatedConcepts: ['toc-vs-tob', 'model-as-product']
  },
  {
    id: 'autonomous-learning',
    name: '自主学习',
    category: '前沿技术',
    expert: '姚顺雨',
    expertId: 'yao-shunyu',
    context: '现在自主学习在硅谷非常热门，在硅谷的大街小巷、咖啡馆里，大家都在谈论',
    explanation: '自主学习是指AI能够自己设定学习目标、寻找学习材料、评估学习效果，而不需要人类一步步教。就像一个学生不仅能完成作业，还能自己发现不懂的地方、主动查资料学习。这可能实现"AI训练AI"，让AI持续变强。',
    visualization: 'flowchart',
    relatedConcepts: ['rl', 'test-time-scaling']
  },
  {
    id: 'agent',
    name: 'Agent (智能体)',
    category: '应用形态',
    expert: '唐杰',
    expertId: 'tang-jie',
    context: 'Agent 今天可以在后台比如推理 3～5 个小时，做人类 1~2 天的工作量',
    explanation: 'AI Agent是大模型的"升级版"。不仅回答问题，还能自主规划、执行任务、使用工具。比如给它一个"做PPT"的任务，它能自己查资料、列大纲、生成内容、调整格式。未来Agent可能能完成人类一周的工作量。',
    visualization: 'flowchart',
    relatedConcepts: ['long-horizon-agent', 'coding-agent']
  },
  {
    id: 'federated-learning',
    name: '联邦学习',
    category: '技术范式',
    expert: '杨强',
    expertId: 'yang-qiang',
    context: '联邦学习的主要思想是"多个中心，大家协作"',
    explanation: '联邦学习是一种"数据不出门，模型来学习"的方法。多家机构可以用各自的数据训练模型，但不用共享原始数据。比如多家医院可以联合训练诊断AI，但病人的隐私数据不会离开医院。这解决了隐私和商业机密的问题。',
    visualization: 'hierarchy',
    relatedConcepts: ['pretraining', 'decentralized-ai']
  },
  {
    id: 'scaling-law',
    name: 'Scaling Law (缩放定律)',
    category: '基础规律',
    expert: '唐杰',
    expertId: 'tang-jie',
    context: '反正最笨的办法就是 Scaling',
    explanation: 'Scaling Law是AI的一个重要发现：当模型参数、训练数据量、计算资源都按比例增加时，模型能力会稳定提升。就像堆砖头，堆得越高楼越稳。但继续Scaling的收益在递减，所以大家开始寻找更"聪明"的提升方法。',
    visualization: 'timeline',
    relatedConcepts: ['pretraining', 'intelligence-efficiency']
  },
  {
    id: 'test-time-scaling',
    name: 'Test-time Scaling',
    category: '前沿技术',
    expert: '林俊旸',
    expertId: 'lin-junyang',
    context: 'Test-time Scaling 这件事情是不是真的能够发生',
    explanation: 'Test-time Scaling是指在AI回答问题时，让它"多想一会儿"。通过更多的推理步骤、自我验证、多次尝试，来提升答案质量。就像考试时多花时间思考，答案会更准确。OpenAI的O1系列就是这个思路，虽然慢一些，但更准确。',
    visualization: 'comparison',
    relatedConcepts: ['rl', 'autonomous-learning']
  },
  {
    id: 'memory',
    name: 'Memory (记忆)',
    category: '核心能力',
    expert: '林俊旸',
    expertId: 'lin-junyang',
    context: 'Memory 有没有可能到某一个临界点的时候，让人觉得说，你结合你的 Memory 真的能够像生活当中的人一样',
    explanation: 'AI记忆是指AI能够记住与用户的对话历史、偏好和上下文。就像你和朋友聊天，他记得你之前说过的话。有了记忆，AI可以提供更个性化的帮助，比如记住你的饮食偏好、工作习惯等，让交互更自然、更贴心。',
    visualization: 'hierarchy',
    relatedConcepts: ['personalization', 'context']
  },
  {
    id: 'context',
    name: 'Context (上下文)',
    category: '核心能力',
    expert: '姚顺雨',
    expertId: 'yao-shunyu',
    context: '很多时候我们的 Bottleneck 可能在 To C 这一端不是更大的模型，而是额外的 Context 和 Environment',
    explanation: '上下文是AI理解问题所需的背景信息。比如问"今天该去吃什么"，AI需要知道你在哪、天气如何、你喜欢吃什么、有没有同伴等信息。有了足够的上下文，AI才能给出真正有用的建议，而不是泛泛而谈。',
    visualization: 'analogy',
    relatedConcepts: ['memory', 'personalization']
  },
  {
    id: 'long-horizon-agent',
    name: 'Long Horizon Agent (长程智能体)',
    category: '前沿应用',
    expert: '唐杰',
    expertId: 'tang-jie',
    context: '包括您刚才讲的 Long Horizon 的长程 Agent',
    explanation: '长程智能体是指能够处理长期、复杂任务的AI。不是回答一个简单问题，而是完成需要多天、多步骤的项目。比如"帮我筹备一个产品发布会"，它能分解任务、逐步执行、跟踪进度、应对变化，持续工作直到完成。',
    visualization: 'timeline',
    relatedConcepts: ['agent', 'autonomous-learning']
  },
  {
    id: 'model-as-product',
    name: '模型即产品',
    category: '产品策略',
    expert: '林俊旸',
    expertId: 'lin-junyang',
    context: '我其实比较同意你的观点，叫"模型即产品"',
    explanation: '模型即产品是指大模型本身就是一个完整的产品，不需要额外包装。比如Claude Code，模型的能力直接转化为产品价值。而不是用一个普通模型，再通过复杂的应用层来弥补能力不足。这要模型足够强，才能直接解决用户问题。',
    visualization: 'comparison',
    relatedConcepts: ['vertical-integration', 'toc-vs-tob']
  },
  {
    id: 'coding-agent',
    name: 'Coding Agent (编程智能体)',
    category: '应用形态',
    expert: '姚顺雨',
    expertId: 'yao-shunyu',
    context: 'Coding 的革命可能一年前还没有开始，但是这一年，夸张一点说，已经在重塑整个计算机行业做事的方式',
    explanation: '编程智能体是专门帮助写代码的AI。它能理解需求、写代码、调试、优化。现在很多程序员已经从"写代码"变成"用英语和电脑交流"。这正在重塑软件开发行业，让编程变得更高效、门槛更低。',
    visualization: 'flowchart',
    relatedConcepts: ['agent', 'toc-vs-tob']
  },
  {
    id: 'personalization',
    name: 'Personalization (个性化)',
    category: '核心能力',
    expert: '林俊旸',
    expertId: 'lin-junyang',
    context: '更持续地理解用户这件事情，比如说 Personalization 其实还挺重要的',
    explanation: '个性化是指AI能够根据每个用户的特点提供定制化服务。就像推荐系统能记住你的喜好，AI也要能理解你的工作习惯、沟通风格、需求偏好，给出更贴合的建议。这需要AI有强大的记忆和理解能力。',
    visualization: 'hierarchy',
    relatedConcepts: ['memory', 'context']
  },
  {
    id: 'open-source-models',
    name: '开源模型',
    category: '产业趋势',
    expert: '多位专家',
    expertId: 'tang-jie',
    context: '2025 年，是中国开源模型大放异彩的一年',
    explanation: '开源模型是指公开代码和参数的AI模型，任何人都可以使用、修改。中国的开源模型（如DeepSeek、Qwen）在全球表现突出。开源促进了AI技术的普及和创新，让更多人能使用和改进AI，而不是依赖少数几家大公司的闭源产品。',
    visualization: 'comparison',
    relatedConcepts: ['pretraining', 'toc-vs-tob']
  }
]
