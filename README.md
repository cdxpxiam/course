# 智测知行课程入口

GitHub Pages版本：静态资料库、16单元原理与活动、自测、知达AI外部入口。

## 发布

1. 在账号 cdxpxiam 下新建公开仓库 course。
2. 将本目录内的文件及 materials 文件夹上传到仓库根目录。不要只上传ZIP。
3. 仓库 Settings → Pages → Deploy from a branch → main → /(root) → Save。
4. 等待Pages部署完成，以GitHub显示的成功网址为准。预计入口为 https://cdxpxiam.github.io/course/ 。

## 接入香港互动课堂

香港服务器完成部署和HTTPS验证后，编辑 config.js 中的 interactiveUrl。入口将跳转到服务器上的完整课程网站，账号登录、共享记录、作品提交和模型调用均在该站处理。当前该值为空，不伪装为已上线。

本静态页不使用API密钥、账号数据库、作品记录或个人登录信息。不要上传 course_web/data、.env、SSH密钥或整个工作目录。

所有资源路径均为相对路径，适用于 GitHub项目子路径。电脑离线版继续使用原有桌面入口。
