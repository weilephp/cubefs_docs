module.exports = [
    {
        text: '概览',
        children: [
            'overview/introduction.md',
            'overview/architecture.md',
            'overview/plan.md',
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
        text: '使用指南',
        children: [
            'user-guide/volume.md',
            'user-guide/file.md',
            'user-guide/objectnode.md',
            'user-guide/blobstore.md',
            'user-guide/hadoop.md',
            'user-guide/k8s.md',
            'user-guide/fuse.md',
        ]
    },
    {
        text: '运维指南',
        children: [
            'maintenance/env.md',
            'maintenance/tool.md',
            {
                text: '服务管理命令',
                children: [
                    'maintenance/admin-api/master/cluster.md',
                    'maintenance/admin-api/master/metanode.md',
                    'maintenance/admin-api/master/datanode.md',
                    'maintenance/admin-api/master/volume.md',
                    'maintenance/admin-api/master/meta-partition.md',
                    'maintenance/admin-api/master/data-partition.md',
                    'maintenance/admin-api/master/management.md',
                    'maintenance/admin-api/master/user.md',
                    'maintenance/admin-api/master/failureDomain.md',
                    'maintenance/admin-api/metanode/partition.md',
                    'maintenance/admin-api/metanode/inode.md',
                    'maintenance/admin-api/metanode/dentry.md',
                    'maintenance/admin-api/blobstore/base.md',
                    'maintenance/admin-api/blobstore/clustermgr.md',
                    'maintenance/admin-api/blobstore/blobnode.md',
                    'maintenance/admin-api/blobstore/access.md',
                    'maintenance/admin-api/blobstore/scheduler.md',
                ]
            },
            {
                text: '服务配置介绍',
                children: [
                    'maintenance/configs/master.md',
                    'maintenance/configs/metanode.md',
                    'maintenance/configs/datanode.md',
                    'maintenance/configs/objectnode.md',
                    'maintenance/configs/client.md',
                    'maintenance/configs/blobstore/base.md',
                    'maintenance/configs/blobstore/rpc.md',
                    'maintenance/configs/blobstore/cm.md',
                    'maintenance/configs/blobstore/access.md',
                    'maintenance/configs/blobstore/proxy.md',
                    'maintenance/configs/blobstore/scheduler.md',
                ]
            },
            {
                text: '监控与可视化配置',
                children: [
                    'maintenance/metrics/metrics.md',
                    'maintenance/metrics/collect.md',
                    'maintenance/metrics/view.md',
                ]
            },
            'maintenance/config.md',
            'maintenance/diskerr.md',
            'maintenance/capacity.md',
            'maintenance/zone.md',
            'maintenance/log.md',
            'maintenance/upgrade.md',
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