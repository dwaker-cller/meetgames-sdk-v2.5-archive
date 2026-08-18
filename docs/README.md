# 文档索引

本目录集中保存 MeetGames SDK Demo 的产品与工程文档。2026-08-18 补充的四组 DOCX/PDF 均为用户从飞书导出的原始文件，仓库未修改其正文或版式。

## 权威基线

产品需求以以下 V2.4.1 最终确认版为准：

- [MeetGames-SDK-产品需求文档-PRD-V2.4.1.md](product/V2.4.1/MeetGames-SDK-产品需求文档-PRD-V2.4.1.md)：权威内容源，文档版本 v1.1，状态 `final`。
- [产品需求版本索引](product/README.md)：说明当前版与历史版的权威关系。

如 V2.4.1 PRD 与历史 V2.5 DOCX/PDF、历史 Markdown 或交接记录存在冲突，以 V2.4.1 Markdown 和运行标记 `20260818-v24-multi-package-55` 的最终确认 Demo 为准。

## 分类

| 分类 | 文档 | 用途 |
|---|---|---|
| 产品需求 | [V2.4.1 final](product/V2.4.1/MeetGames-SDK-产品需求文档-PRD-V2.4.1.md) · [版本索引](product/README.md) | 当前权威 PRD；同游戏同渠道多包并继承最近包运营快照 |
| 历史产品需求 | [V2.5 DOCX](product/V2.5/MeetGames-SDK-产品需求文档-PRD-V2.5.docx) · [V2.5 PDF](product/V2.5/MeetGames-SDK-产品需求文档-PRD-V2.5.pdf) · [弃用说明](releases/V2.5-SUPERSEDED.md) | 已被 V2.4.1 取代，仅供审计追溯 |
| 产品分析 | [DOCX](analysis/MG后台SDK配置梳理.docx) · [PDF](analysis/MG后台SDK配置梳理.pdf) | MG 后台 SDK 配置现状与业务梳理，PDF 共 23 页 |
| 参数规范 | [DOCX](specifications/MG后台参数规范.docx) · [PDF](specifications/MG后台参数规范.pdf) | 后台参数字段与配置规范，PDF 共 11 页 |
| 技术设计 | [DOCX](technical-design/新版-MG-SDK-配置页面接口设计.docx) · [PDF](technical-design/新版-MG-SDK-配置页面接口设计.pdf) | 新版配置页面接口设计，PDF 共 51 页 |
| 项目历史 | [PRD working source](project-history/MeetGames-SDK-产品需求文档-PRD-V2.5-working-source.md) · [HANDOFF](project-history/HANDOFF-2026-08-14.md) | 历史工作材料，仅供追溯，不作为当前权威需求 |

## 文件管理约定

- 当前 V2.4.1 以 Markdown 及内嵌／关联流程图为权威内容源；本次没有把旧 V2.5 二进制文件改名冒充 V2.4.1。
- 历史 DOCX 保留可编辑原件，PDF 保留固定版式，二者成对归档。
- 原下载名 `MG后台参数规范 (1).pdf` 在仓库中规范化为 `MG后台参数规范.pdf`，文件内容未改变。
- 旧 V2.5 PRD Markdown 已降级到 `project-history/`，文件名增加 `working-source` 标识；旧 V2.5 DOCX/PDF 移入 `product/V2.5/`。
- 文件完整性校验值见 [CHECKSUMS.sha256](CHECKSUMS.sha256)。
- 这些文件包含原始导出元数据，仅限本私有仓库内部使用。
