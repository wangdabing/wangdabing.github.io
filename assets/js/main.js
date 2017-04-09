  var zTree;
  var demoIframe;

  var setting = {
      view: {
          dblClickExpand: false,
          showLine: true,
          selectedMulti: false
      },
      data: {
          simpleData: {
              enable: true,
              idKey: "id",
              pIdKey: "pId",
              rootPId: ""
          }
      },
      callback: {
          beforeClick: function(treeId, treeNode) {
              var zTree = $.fn.zTree.getZTreeObj("tree");
              if (treeNode.isParent) {
                  zTree.expandNode(treeNode);
                  return false;
              } else {
                  demoIframe.attr("src", treeNode.file + ".html");
                  return true;
              }
          }
      }
  };

  var zNodes = [{
          id: 1,
          pId: 0,
          name: "[core] 基本功能 演示",
          open: true
      }, {
          id: 101,
          pId: 1,
          name: "最简单的树 --  标准 JSON 数据",
          file: "core/standardData"
      }, {
          id: 102,
          pId: 1,
          name: "最简单的树 --  简单 JSON 数据",
          file: "core/simpleData"
      }, {
          id: 103,
          pId: 1,
          name: "不显示 连接线",
          file: "core/noline"
      }, {
          id: 104,
          pId: 1,
          name: "不显示 节点 图标",
          file: "core/noicon"
      }, {
          id: 105,
          pId: 1,
          name: "自定义图标 --  icon 属性",
          file: "core/custom_icon"
      }, {
          id: 106,
          pId: 1,
          name: "自定义图标 --  iconSkin 属性",
          file: "core/custom_iconSkin"
      }, {
          id: 107,
          pId: 1,
          name: "自定义字体",
          file: "core/custom_font"
      }, {
          id: 115,
          pId: 1,
          name: "超链接演示",
          file: "core/url"
      }, {
          id: 108,
          pId: 1,
          name: "异步加载 节点数据",
          file: "core/async"
      }, {
          id: 109,
          pId: 1,
          name: "用 zTree 方法 异步加载 节点数据",
          file: "core/async_fun"
      }, {
          id: 110,
          pId: 1,
          name: "用 zTree 方法 更新 节点数据",
          file: "core/update_fun"
      }, {
          id: 111,
          pId: 1,
          name: "单击 节点 控制",
          file: "core/click"
      }, {
          id: 112,
          pId: 1,
          name: "展开 / 折叠 父节点 控制",
          file: "core/expand"
      }, {
          id: 113,
          pId: 1,
          name: "根据 参数 查找 节点",
          file: "core/searchNodes"
      }, {
          id: 114,
          pId: 1,
          name: "其他 鼠标 事件监听",
          file: "core/otherMouse"
      }
  ];

  zNodes = [];

  function buildNodes() {
      // 各等级标签的最新 id
      var levelIds = {
          '0': 0,
          '1': 0,
          '2': 0,
          '3': 0,
          '4': 0,
          '5': 0,
          '6': 0,
          '7': 0
      }

      // 遍历 .content 下的所有 h1~h7
      var lastTagName;
      $(".content")
          .find("h1,h2,h3,h4,h5,h6,h7")
          .each(function(index, domEl) {
              var level = this.tagName.substr(1, 1);

              var id = index + 1;
              var pId = levelIds[level - 1];
              
              zNodes.push({
                  id: id,
                  pId: pId,
                  name: $(this).text()
              });

              // 保存 id 到标签，用于跳转
              $(this).attr("data-id", id);

              // 更新当前等级的 id
              levelIds[level] = id;
          });
  }

  $(document).ready(function() {
      buildNodes()

      var t = $("#tree");
      t = $.fn.zTree.init(t, setting, zNodes);
  });