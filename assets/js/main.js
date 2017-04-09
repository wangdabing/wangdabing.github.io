  var zTree;

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
          onClick: function(event, treeId, treeNode) {
              // var zTree = $.fn.zTree.getZTreeObj(treeId);
              // if (treeNode.isParent) {
              //     zTree.expandNode(treeNode);
              // }

              $(".content").find("[data-id='" + treeNode.id + "']").each(function() {
                  $(window).scrollTop($(this).offset().top)
              })
          }
      }
  };

  function buildNodes() {
      var zNodes = [];

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

      return zNodes;
  }

  $(document).ready(function() {
      var zNodes = buildNodes();

      var t = $("#tree");
      t = $.fn.zTree.init(t, setting, zNodes);
  });