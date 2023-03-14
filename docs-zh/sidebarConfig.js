module.exports = [
  {
    text: '概览',
    children: [
      'overview/introduction.md',
      'overview/architecture.md',
    ]
  },
  {
    text: '快速入门',
    children: [
      'deploy/requirement.md',
      'deploy/node.md',
      'deploy/manual-deploy.md',
      'deploy/yum.md',
      'deploy/k8s.md',
      'deploy/verify.md',
    ]   
  },
  {
    text: '试用指南',
    children: [
      'user-guide/volume.md',
      'user-guide/file.md',
      'user-guide/objectnode.md',
      'user-guide/blobstore.md',
      'user-guide/hadoop.md',
      'user-guide/k8s.md',
    ] 
  },
  {
    text: '运维指南',
    children: [
      'maintenance/env.md',
    ] 
  },
  {
    text: '测试评估',
    children: [
      'evaluation/env.md',
      'evaluation/tiny.md',
      'evaluation/io.md',
      'evaluation/meta.md',                       
    ] 
  },
  {
    text: '设计文档',
    children: [
      'design/master.md',
      'design/metanode.md',
      'design/datanode.md',
      'design/blobstore.md',
      'design/objectnode.md',
      'design/client.md',
      'design/authnode.md',                              
    ] 
  },
  {
    text: '社区',
    children: [
      'community/overview.md',
      'community/article.md',                             
    ] 
  },
  {
    text: 'FAQ',
    children: [
      'faq/development.md',
      'faq/build.md',
      'faq/fuse.md',                                    
    ] 
  }            
]