// 专家数据
export interface Expert {
  id: string
  name: string
  title: string
  organization: string
  bio: string
  topics: string[]
}

export const experts: Expert[] = [
  {
    id: 'yang-qiang',
    name: '杨强',
    title: '荣休教授',
    organization: '香港科技大学 / 加拿大两院院士',
    bio: '联邦学习领域奠基人，长期研究人工智能与机器学习，关注工业界与学术界的协同发展。',
    topics: ['联邦学习', '持续学习', '学术与工业界协同', '哥德尔不完备定理']
  },
  {
    id: 'tang-jie',
    name: '唐杰',
    title: '教授 / 首席科学家',
    organization: '清华大学 / 智谱AI',
    bio: '智谱AI创始人，清华大学计算机系教授，专注于大模型研发与智能化应用。',
    topics: ['基座模型', 'Coding', '长程Agent', '智能效率', '范式革新']
  },
  {
    id: 'lin-junyang',
    name: '林俊旸',
    title: '技术负责人',
    organization: '阿里通义千问',
    bio: 'Qwen开源模型核心贡献者，北大校友，专注于多模态与全模态AI研究。',
    topics: ['全模态', '模型即产品', '长尾问题', '主动性学习', '个性化']
  },
  {
    id: 'yao-shunyu',
    name: '姚顺雨',
    title: '首席AI科学家',
    organization: '腾讯',
    bio: '前OpenAI研究员，ReAct/SWE-agent作者，横跨中美AI研究一线。',
    topics: ['To C vs To B', '垂直整合', '自主学习', '强化学习', '编码革命']
  },
  {
    id: 'li-guangmi',
    name: '李广密',
    title: 'CEO',
    organization: '拾象科技',
    bio: '前红杉中国投资人，「海外独角兽」创办者，本次圆桌对话主持人。',
    topics: ['产业观察', '投资视角', '市场分化']
  }
]
