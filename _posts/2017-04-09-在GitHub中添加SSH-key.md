## 右键打开 Git Bash Here

输入 cd ~/.ssh 回车，查看是否有ssh-key

## 生成密钥文件

输入 ssh-keygen -t rsa -C "your email" 回车

根据提示输入密码，密码可以为空

最后生成密钥文件 id_rsa 和 id_rsa.pub

## 添加密钥到 GitHub

打开 id_rsa.pub 文件（路径一般为 C:\Users\administrator\.ssh），复制里面所有内容

登陆 GitHub，单击右上角你的头像显示下来菜单

选择 Settings -> SSH and GPG keys 菜单，单击 New SSH key

粘贴你刚才复制的内容到 Key 文本框中，Title 中随便写点，最后单击添加即可。

## 测试连接

输入 ssh -T git@github.com

如果成功会提示是否继续，输入 yes 继续，这样配置就完成了。

## 设置项目的 .git/config

如果之前通过 https 方式 clone 下来的项目，需用修改连接类型为ssh

将 url 后面的前缀修改为 git@github.com: 即可，如下：

![20170409011930](/assets/img/20170409011930.png)
