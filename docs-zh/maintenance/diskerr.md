# 节点或磁盘故障

## datanode

### 节点故障处理
当三副本的卷其中一个datanode所处的机器故障导致宕机，从而使得节点上的所有的data partition处于unavailable状态时，需要及时进行迁移下线处理，防止其他节点再宕机造成某些data partition 同时缺少两副本导致不可用。
#### 下线节点
```
curl -v "http://192.168.0.11:17010/dataNode/decommission?addr=192.168.0.33:17310"
```
>下线命令均发送到master节点，下面均已单机docker环境为例，master：192.168.0.11

| 参数   | 类型     | 描述     |
|------|--------|--------|
| addr | string | 数据节点地址 |

从集群中下线某个数据节点, 该数据节点上的所有数据分片都会被异步的迁移到集群中其它可用的数据节点

#### 设置迁移速率
当被迁移的节点有大量的extent文件时，其中副本所在的其他节点带来大量的读IO，以及对被迁移到的节点造成大量的写IO，如果负载较高时，可以限制迁移的速率：

```shell
curl -v "http://192.168.0.11:17010/admin/setNodeInfo?autoRepairRate=2000"
```

| 参数                  | 类型     | 描述                          |
|---------------------|--------|-----------------------------|
| batchCount          | uint64 | metanode 删除批量大小             |
| markDeleteRate      | uint64 | datanode批量删除限速设置. 0代表未做限速设置 |
| autoRepairRate      | uint64 | datanode上同时修复的extent个数      |
| deleteWorkerSleepMs | uint64 | 删除间隔时间                      |
| loadFactor          | uint64 | 集群超卖比，默认0，不限制               |
| maxDpCntLimit       | uint64 | 每个节点上dp最大数量，默认3000， 0 代表默认值 |

#### 查看下线迁移状态
如果需要判断下线是否完成，可以看下当前当前集群的data partition状态

```shell
curl -v "http://192.168.0.11:17010/dataPartition/diagnose"
```

`BadDataPartitionIDs`字段为空说明下线完成

```json
{
    "code": 0,
    "data": {
        "BadDataPartitionIDs": [],
        "BadReplicaDataPartitionIDs": [],
        "CorruptDataPartitionIDs": [],
        "InactiveDataNodes": [],
        "LackReplicaDataPartitionIDs": []
    },
    "msg": "success"
}
```

### 磁盘故障处理
当datanode节点上发生某个磁盘故障时，可以根据具体磁盘执行该磁盘的下线迁移

```shell
curl http://192.168.0.11:17010/disk/decommission?addr=192.168.0.30:17310&disk=/path/to/disk/dir"
```


| 参数    | 类型     | 描述                |
|-------|--------|-------------------|
| addr  | string | 要下线的磁盘的节点地址       |
| disk  | string | 故障磁盘              |
| count | int    | 每次下线个数，默认0，代表全部下线 |

同样可以根据datanode的负载情况来设置迁移速率

## metanode
### 节点故障处理
当节点不可用（机器故障或者网络不同），需要执行节点的下线，防止节点上的meta partition出现多数副本不可用从而导致整个partition 出现unavailable的情况。
#### 下线节点
从集群中下线某个元数据节点, 该节点上的所有元数据分片都会被异步的迁移到集群中其它可用的元数据节点。

```shell
curl -v "http://10.196.59.198:17010/metaNode/decommission?addr=10.196.59.202:17210"
```

| 参数   | 类型     | 描述      |
|------|--------|---------|
| addr | string | 元数据节点地址 |

同时为了避免下线node时其被写入新数据，可以先进行设置节点状态操作

```
curl -v "http://192.168.0.11:17010/admin/setNodeRdOnly?addr=192.168.0.40:17210&nodeType=1&rdOnly=true"
```

| 参数       | 类型     | 描述                     |
|----------|--------|------------------------|
| addr     | string | metanode的节点地址          |
| nodeType | string | 1：metanode, 2:datanode |
| rdOnly   | bool   | true,false             |

#### 查看下线迁移状态
如果需要判断下线是否完成，可以看下当前当前集群的meta partition状态

```shell
curl -v "http://192.168.0.11:17010/metaPartition/diagnose"
```

`BadMetaPartitionIDs`字段为空说明下线完成

```json
{
    "code": 0,
    "data": {
        "BadMetaPartitionIDs": [],
        "CorruptMetaPartitionIDs": [],
        "InactiveMetaNodes": [],
        "LackReplicaMetaPartitionIDs": []
    },
    "msg": "success"
}
```

## 纠删码子系统

Access、Proxy均为无状态节点，不涉及到数据搬迁，这里仅介绍Clustermgr与Blobnode的故障处理

### Clustermgr

#### 节点故障

#### 磁盘故障

### Blobnode

#### 节点故障

#### 磁盘故障
