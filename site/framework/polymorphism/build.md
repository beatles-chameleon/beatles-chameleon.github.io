# 构建多态

chameleon-tool 是 chameleon 的构建工具，通过[脚手架命令](../../quick_start/cml_cmd.html)一节，可以学习到该工具的主要命令。如果细心观察，可以发现每一个端的构建是有一个独立的子命令，例如构建 web 端的命令均为`cml web` 为前缀。针对不同的端实现各自独立的构建命令体系，即为构建多态的思想。

具体实现上，主要体现在三个方面：

- 建立 webpack 配置
- 命令行处理
- 项目配置文件对象