(function(){tinymce.create("tinymce.plugins.StylePlugin",{init:function(a,b){a.addCommand("mceStyleProps",function(){a.windowManager.open({file:b+"/props.htm",width:480+parseInt(a.getLang("style.delta_width",0)),height:320+parseInt(a.getLang("style.delta_height",0)),inline:1},{plugin_url:b,style_text:a.selection.getNode().style.cssText})}),a.addCommand("mceSetElementStyle",function(b,c){if(e=a.selection.getNode())a.dom.setAttrib(e,"style",c),a.execCommand("mceRepaint")}),a.onNodeChange.add(function(a,b,c){b.setDisabled("styleprops",c.nodeName==="BODY")}),a.addButton("styleprops",{title:"style.desc",cmd:"mceStyleProps"})},getInfo:function(){return{longname:"Style",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/style",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("style",tinymce.plugins.StylePlugin)})();