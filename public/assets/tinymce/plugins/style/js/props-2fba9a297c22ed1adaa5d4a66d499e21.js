function init(){var a=document.getElementById("container"),b;a.style.cssText=tinyMCEPopup.getWindowArg("style_text"),b=getBrowserHTML("background_image_browser","background_image","image","advimage"),document.getElementById("background_image_browser").innerHTML=b,document.getElementById("text_color_pickcontainer").innerHTML=getColorPickerHTML("text_color_pick","text_color"),document.getElementById("background_color_pickcontainer").innerHTML=getColorPickerHTML("background_color_pick","background_color"),document.getElementById("border_color_top_pickcontainer").innerHTML=getColorPickerHTML("border_color_top_pick","border_color_top"),document.getElementById("border_color_right_pickcontainer").innerHTML=getColorPickerHTML("border_color_right_pick","border_color_right"),document.getElementById("border_color_bottom_pickcontainer").innerHTML=getColorPickerHTML("border_color_bottom_pick","border_color_bottom"),document.getElementById("border_color_left_pickcontainer").innerHTML=getColorPickerHTML("border_color_left_pick","border_color_left"),fillSelect(0,"text_font","style_font",defaultFonts,";",!0),fillSelect(0,"text_size","style_font_size",defaultSizes,";",!0),fillSelect(0,"text_size_measurement","style_font_size_measurement",defaultMeasurement,";",!0),fillSelect(0,"text_case","style_text_case","capitalize;uppercase;lowercase",";",!0),fillSelect(0,"text_weight","style_font_weight",defaultWeight,";",!0),fillSelect(0,"text_style","style_font_style",defaultTextStyle,";",!0),fillSelect(0,"text_variant","style_font_variant",defaultVariant,";",!0),fillSelect(0,"text_lineheight","style_font_line_height",defaultLineHeight,";",!0),fillSelect(0,"text_lineheight_measurement","style_font_line_height_measurement",defaultMeasurement,";",!0),fillSelect(0,"background_attachment","style_background_attachment",defaultAttachment,";",!0),fillSelect(0,"background_repeat","style_background_repeat",defaultRepeat,";",!0),fillSelect(0,"background_hpos_measurement","style_background_hpos_measurement",defaultMeasurement,";",!0),fillSelect(0,"background_vpos_measurement","style_background_vpos_measurement",defaultMeasurement,";",!0),fillSelect(0,"background_hpos","style_background_hpos",defaultPosH,";",!0),fillSelect(0,"background_vpos","style_background_vpos",defaultPosV,";",!0),fillSelect(0,"block_wordspacing","style_wordspacing","normal",";",!0),fillSelect(0,"block_wordspacing_measurement","style_wordspacing_measurement",defaultSpacingMeasurement,";",!0),fillSelect(0,"block_letterspacing","style_letterspacing","normal",";",!0),fillSelect(0,"block_letterspacing_measurement","style_letterspacing_measurement",defaultSpacingMeasurement,";",!0),fillSelect(0,"block_vertical_alignment","style_vertical_alignment",defaultVAlign,";",!0),fillSelect(0,"block_text_align","style_text_align","left;right;center;justify",";",!0),fillSelect(0,"block_whitespace","style_whitespace","normal;pre;nowrap",";",!0),fillSelect(0,"block_display","style_display",defaultDisplay,";",!0),fillSelect(0,"block_text_indent_measurement","style_text_indent_measurement",defaultIndentMeasurement,";",!0),fillSelect(0,"box_width_measurement","style_box_width_measurement",defaultMeasurement,";",!0),fillSelect(0,"box_height_measurement","style_box_height_measurement",defaultMeasurement,";",!0),fillSelect(0,"box_float","style_float","left;right;none",";",!0),fillSelect(0,"box_clear","style_clear","left;right;both;none",";",!0),fillSelect(0,"box_padding_left_measurement","style_padding_left_measurement",defaultMeasurement,";",!0),fillSelect(0,"box_padding_top_measurement","style_padding_top_measurement",defaultMeasurement,";",!0),fillSelect(0,"box_padding_bottom_measurement","style_padding_bottom_measurement",defaultMeasurement,";",!0),fillSelect(0,"box_padding_right_measurement","style_padding_right_measurement",defaultMeasurement,";",!0),fillSelect(0,"box_margin_left_measurement","style_margin_left_measurement",defaultMeasurement,";",!0),fillSelect(0,"box_margin_top_measurement","style_margin_top_measurement",defaultMeasurement,";",!0),fillSelect(0,"box_margin_bottom_measurement","style_margin_bottom_measurement",defaultMeasurement,";",!0),fillSelect(0,"box_margin_right_measurement","style_margin_right_measurement",defaultMeasurement,";",!0),fillSelect(0,"border_style_top","style_border_style_top",defaultBorderStyle,";",!0),fillSelect(0,"border_style_right","style_border_style_right",defaultBorderStyle,";",!0),fillSelect(0,"border_style_bottom","style_border_style_bottom",defaultBorderStyle,";",!0),fillSelect(0,"border_style_left","style_border_style_left",defaultBorderStyle,";",!0),fillSelect(0,"border_width_top","style_border_width_top",defaultBorderWidth,";",!0),fillSelect(0,"border_width_right","style_border_width_right",defaultBorderWidth,";",!0),fillSelect(0,"border_width_bottom","style_border_width_bottom",defaultBorderWidth,";",!0),fillSelect(0,"border_width_left","style_border_width_left",defaultBorderWidth,";",!0),fillSelect(0,"border_width_top_measurement","style_border_width_top_measurement",defaultMeasurement,";",!0),fillSelect(0,"border_width_right_measurement","style_border_width_right_measurement",defaultMeasurement,";",!0),fillSelect(0,"border_width_bottom_measurement","style_border_width_bottom_measurement",defaultMeasurement,";",!0),fillSelect(0,"border_width_left_measurement","style_border_width_left_measurement",defaultMeasurement,";",!0),fillSelect(0,"list_type","style_list_type",defaultListType,";",!0),fillSelect(0,"list_position","style_list_position","inside;outside",";",!0),fillSelect(0,"positioning_type","style_positioning_type","absolute;relative;static",";",!0),fillSelect(0,"positioning_visibility","style_positioning_visibility","inherit;visible;hidden",";",!0),fillSelect(0,"positioning_width_measurement","style_positioning_width_measurement",defaultMeasurement,";",!0),fillSelect(0,"positioning_height_measurement","style_positioning_height_measurement",defaultMeasurement,";",!0),fillSelect(0,"positioning_overflow","style_positioning_overflow","visible;hidden;scroll;auto",";",!0),fillSelect(0,"positioning_placement_top_measurement","style_positioning_placement_top_measurement",defaultMeasurement,";",!0),fillSelect(0,"positioning_placement_right_measurement","style_positioning_placement_right_measurement",defaultMeasurement,";",!0),fillSelect(0,"positioning_placement_bottom_measurement","style_positioning_placement_bottom_measurement",defaultMeasurement,";",!0),fillSelect(0,"positioning_placement_left_measurement","style_positioning_placement_left_measurement",defaultMeasurement,";",!0),fillSelect(0,"positioning_clip_top_measurement","style_positioning_clip_top_measurement",defaultMeasurement,";",!0),fillSelect(0,"positioning_clip_right_measurement","style_positioning_clip_right_measurement",defaultMeasurement,";",!0),fillSelect(0,"positioning_clip_bottom_measurement","style_positioning_clip_bottom_measurement",defaultMeasurement,";",!0),fillSelect(0,"positioning_clip_left_measurement","style_positioning_clip_left_measurement",defaultMeasurement,";",!0),TinyMCE_EditableSelects.init(),setupFormData(),showDisabledControls()}function setupFormData(){var a=document.getElementById("container"),b=document.forms[0],c,d,e;selectByValue(b,"text_font",a.style.fontFamily,!0,!0),selectByValue(b,"text_size",getNum(a.style.fontSize),!0,!0),selectByValue(b,"text_size_measurement",getMeasurement(a.style.fontSize)),selectByValue(b,"text_weight",a.style.fontWeight,!0,!0),selectByValue(b,"text_style",a.style.fontStyle,!0,!0),selectByValue(b,"text_lineheight",getNum(a.style.lineHeight),!0,!0),selectByValue(b,"text_lineheight_measurement",getMeasurement(a.style.lineHeight)),selectByValue(b,"text_case",a.style.textTransform,!0,!0),selectByValue(b,"text_variant",a.style.fontVariant,!0,!0),b.text_color.value=tinyMCEPopup.editor.dom.toHex(a.style.color),updateColor("text_color_pick","text_color"),b.text_underline.checked=inStr(a.style.textDecoration,"underline"),b.text_overline.checked=inStr(a.style.textDecoration,"overline"),b.text_linethrough.checked=inStr(a.style.textDecoration,"line-through"),b.text_blink.checked=inStr(a.style.textDecoration,"blink"),b.background_color.value=tinyMCEPopup.editor.dom.toHex(a.style.backgroundColor),updateColor("background_color_pick","background_color"),b.background_image.value=a.style.backgroundImage.replace(new RegExp("url\\('?([^']*)'?\\)","gi"),"$1"),selectByValue(b,"background_repeat",a.style.backgroundRepeat,!0,!0),selectByValue(b,"background_attachment",a.style.backgroundAttachment,!0,!0),selectByValue(b,"background_hpos",getNum(getVal(a.style.backgroundPosition,0)),!0,!0),selectByValue(b,"background_hpos_measurement",getMeasurement(getVal(a.style.backgroundPosition,0))),selectByValue(b,"background_vpos",getNum(getVal(a.style.backgroundPosition,1)),!0,!0),selectByValue(b,"background_vpos_measurement",getMeasurement(getVal(a.style.backgroundPosition,1))),selectByValue(b,"block_wordspacing",getNum(a.style.wordSpacing),!0,!0),selectByValue(b,"block_wordspacing_measurement",getMeasurement(a.style.wordSpacing)),selectByValue(b,"block_letterspacing",getNum(a.style.letterSpacing),!0,!0),selectByValue(b,"block_letterspacing_measurement",getMeasurement(a.style.letterSpacing)),selectByValue(b,"block_vertical_alignment",a.style.verticalAlign,!0,!0),selectByValue(b,"block_text_align",a.style.textAlign,!0,!0),b.block_text_indent.value=getNum(a.style.textIndent),selectByValue(b,"block_text_indent_measurement",getMeasurement(a.style.textIndent)),selectByValue(b,"block_whitespace",a.style.whiteSpace,!0,!0),selectByValue(b,"block_display",a.style.display,!0,!0),b.box_width.value=getNum(a.style.width),selectByValue(b,"box_width_measurement",getMeasurement(a.style.width)),b.box_height.value=getNum(a.style.height),selectByValue(b,"box_height_measurement",getMeasurement(a.style.height)),selectByValue(b,"box_float",a.style.cssFloat||a.style.styleFloat,!0,!0),selectByValue(b,"box_clear",a.style.clear,!0,!0),setupBox(b,a,"box_padding","padding",""),setupBox(b,a,"box_margin","margin",""),setupBox(b,a,"border_style","border","Style"),setupBox(b,a,"border_width","border","Width"),setupBox(b,a,"border_color","border","Color"),updateColor("border_color_top_pick","border_color_top"),updateColor("border_color_right_pick","border_color_right"),updateColor("border_color_bottom_pick","border_color_bottom"),updateColor("border_color_left_pick","border_color_left"),b.elements.border_color_top.value=tinyMCEPopup.editor.dom.toHex(b.elements.border_color_top.value),b.elements.border_color_right.value=tinyMCEPopup.editor.dom.toHex(b.elements.border_color_right.value),b.elements.border_color_bottom.value=tinyMCEPopup.editor.dom.toHex(b.elements.border_color_bottom.value),b.elements.border_color_left.value=tinyMCEPopup.editor.dom.toHex(b.elements.border_color_left.value),selectByValue(b,"list_type",a.style.listStyleType,!0,!0),selectByValue(b,"list_position",a.style.listStylePosition,!0,!0),b.list_bullet_image.value=a.style.listStyleImage.replace(new RegExp("url\\('?([^']*)'?\\)","gi"),"$1"),selectByValue(b,"positioning_type",a.style.position,!0,!0),selectByValue(b,"positioning_visibility",a.style.visibility,!0,!0),selectByValue(b,"positioning_overflow",a.style.overflow,!0,!0),b.positioning_zindex.value=a.style.zIndex?a.style.zIndex:"",b.positioning_width.value=getNum(a.style.width),selectByValue(b,"positioning_width_measurement",getMeasurement(a.style.width)),b.positioning_height.value=getNum(a.style.height),selectByValue(b,"positioning_height_measurement",getMeasurement(a.style.height)),setupBox(b,a,"positioning_placement","","",["top","right","bottom","left"]),c=a.style.clip.replace(new RegExp("rect\\('?([^']*)'?\\)","gi"),"$1"),c=c.replace(/,/g," "),hasEqualValues([getVal(c,0),getVal(c,1),getVal(c,2),getVal(c,3)])?(b.positioning_clip_top.value=getNum(getVal(c,0)),selectByValue(b,"positioning_clip_top_measurement",getMeasurement(getVal(c,0))),b.positioning_clip_right.value=b.positioning_clip_bottom.value=b.positioning_clip_left.value):(b.positioning_clip_top.value=getNum(getVal(c,0)),selectByValue(b,"positioning_clip_top_measurement",getMeasurement(getVal(c,0))),b.positioning_clip_right.value=getNum(getVal(c,1)),selectByValue(b,"positioning_clip_right_measurement",getMeasurement(getVal(c,1))),b.positioning_clip_bottom.value=getNum(getVal(c,2)),selectByValue(b,"positioning_clip_bottom_measurement",getMeasurement(getVal(c,2))),b.positioning_clip_left.value=getNum(getVal(c,3)),selectByValue(b,"positioning_clip_left_measurement",getMeasurement(getVal(c,3))))}function getMeasurement(a){return a.replace(/^([0-9.]+)(.*)$/,"$2")}function getNum(a){return(new RegExp("^(?:[0-9.]+)(?:[a-z%]+)$","gi")).test(a)?a.replace(/[^0-9.]/g,""):a}function inStr(a,b){return(new RegExp(b,"gi")).test(a)}function getVal(a,b){var c=a.split(" ");return c.length>1?c[b]:""}function setValue(a,b,c){a.elements[b].type=="text"?a.elements[b].value=c:selectByValue(a,b,c,!0,!0)}function setupBox(a,b,c,d,e,f){typeof f=="undefined"&&(f=["Top","Right","Bottom","Left"]),isSame(b,d,e,f)?(a.elements[c+"_same"].checked=!0,setValue(a,c+"_top",getNum(b.style[d+f[0]+e])),a.elements[c+"_top"].disabled=!1,a.elements[c+"_right"].value="",a.elements[c+"_right"].disabled=!0,a.elements[c+"_bottom"].value="",a.elements[c+"_bottom"].disabled=!0,a.elements[c+"_left"].value="",a.elements[c+"_left"].disabled=!0,a.elements[c+"_top_measurement"]&&(selectByValue(a,c+"_top_measurement",getMeasurement(b.style[d+f[0]+e])),a.elements[c+"_left_measurement"].disabled=!0,a.elements[c+"_bottom_measurement"].disabled=!0,a.elements[c+"_right_measurement"].disabled=!0)):(a.elements[c+"_same"].checked=!1,setValue(a,c+"_top",getNum(b.style[d+f[0]+e])),a.elements[c+"_top"].disabled=!1,setValue(a,c+"_right",getNum(b.style[d+f[1]+e])),a.elements[c+"_right"].disabled=!1,setValue(a,c+"_bottom",getNum(b.style[d+f[2]+e])),a.elements[c+"_bottom"].disabled=!1,setValue(a,c+"_left",getNum(b.style[d+f[3]+e])),a.elements[c+"_left"].disabled=!1,a.elements[c+"_top_measurement"]&&(selectByValue(a,c+"_top_measurement",getMeasurement(b.style[d+f[0]+e])),selectByValue(a,c+"_right_measurement",getMeasurement(b.style[d+f[1]+e])),selectByValue(a,c+"_bottom_measurement",getMeasurement(b.style[d+f[2]+e])),selectByValue(a,c+"_left_measurement",getMeasurement(b.style[d+f[3]+e])),a.elements[c+"_left_measurement"].disabled=!1,a.elements[c+"_bottom_measurement"].disabled=!1,a.elements[c+"_right_measurement"].disabled=!1))}function isSame(a,b,c,d){var e=[],f,g;typeof d=="undefined"&&(d=["Top","Right","Bottom","Left"]);if(typeof c=="undefined"||c==null)c="";e[0]=a.style[b+d[0]+c],e[1]=a.style[b+d[1]+c],e[2]=a.style[b+d[2]+c],e[3]=a.style[b+d[3]+c];for(f=0;f<e.length;f++){if(e[f]==null)return!1;for(g=0;g<e.length;g++)if(e[g]!=e[f])return!1}return!0}function hasEqualValues(a){var b,c;for(b=0;b<a.length;b++){if(a[b]==null)return!1;for(c=0;c<a.length;c++)if(a[c]!=a[b])return!1}return!0}function applyAction(){var a=document.getElementById("container"),b=tinyMCEPopup.editor;generateCSS(),tinyMCEPopup.restoreSelection(),b.dom.setAttrib(b.selection.getSelectedBlocks(),"style",tinyMCEPopup.editor.dom.serializeStyle(tinyMCEPopup.editor.dom.parseStyle(a.style.cssText)))}function updateAction(){applyAction(),tinyMCEPopup.close()}function generateCSS(){var a=document.getElementById("container"),b=document.forms[0],c=new RegExp("[0-9]+","g"),d,e;a.style.cssText="",a.style.fontFamily=b.text_font.value,a.style.fontSize=b.text_size.value+(isNum(b.text_size.value)?b.text_size_measurement.value||"px":""),a.style.fontStyle=b.text_style.value,a.style.lineHeight=b.text_lineheight.value+(isNum(b.text_lineheight.value)?b.text_lineheight_measurement.value:""),a.style.textTransform=b.text_case.value,a.style.fontWeight=b.text_weight.value,a.style.fontVariant=b.text_variant.value,a.style.color=b.text_color.value,d="",d+=b.text_underline.checked?" underline":"",d+=b.text_overline.checked?" overline":"",d+=b.text_linethrough.checked?" line-through":"",d+=b.text_blink.checked?" blink":"",d=d.length>0?d.substring(1):d,b.text_none.checked&&(d="none"),a.style.textDecoration=d,a.style.backgroundColor=b.background_color.value,a.style.backgroundImage=b.background_image.value!=""?"url("+b.background_image.value+")":"",a.style.backgroundRepeat=b.background_repeat.value,a.style.backgroundAttachment=b.background_attachment.value,b.background_hpos.value!=""&&(d="",d+=b.background_hpos.value+(isNum(b.background_hpos.value)?b.background_hpos_measurement.value:"")+" ",d+=b.background_vpos.value+(isNum(b.background_vpos.value)?b.background_vpos_measurement.value:""),a.style.backgroundPosition=d),a.style.wordSpacing=b.block_wordspacing.value+(isNum(b.block_wordspacing.value)?b.block_wordspacing_measurement.value:""),a.style.letterSpacing=b.block_letterspacing.value+(isNum(b.block_letterspacing.value)?b.block_letterspacing_measurement.value:""),a.style.verticalAlign=b.block_vertical_alignment.value,a.style.textAlign=b.block_text_align.value,a.style.textIndent=b.block_text_indent.value+(isNum(b.block_text_indent.value)?b.block_text_indent_measurement.value:""),a.style.whiteSpace=b.block_whitespace.value,a.style.display=b.block_display.value,a.style.width=b.box_width.value+(isNum(b.box_width.value)?b.box_width_measurement.value:""),a.style.height=b.box_height.value+(isNum(b.box_height.value)?b.box_height_measurement.value:""),a.style.styleFloat=b.box_float.value,a.style.cssFloat=b.box_float.value,a.style.clear=b.box_clear.value,b.box_padding_same.checked?a.style.padding=b.box_padding_top.value+(isNum(b.box_padding_top.value)?b.box_padding_top_measurement.value:""):(a.style.paddingTop=b.box_padding_top.value+(isNum(b.box_padding_top.value)?b.box_padding_top_measurement.value:""),a.style.paddingRight=b.box_padding_right.value+(isNum(b.box_padding_right.value)?b.box_padding_right_measurement.value:""),a.style.paddingBottom=b.box_padding_bottom.value+(isNum(b.box_padding_bottom.value)?b.box_padding_bottom_measurement.value:""),a.style.paddingLeft=b.box_padding_left.value+(isNum(b.box_padding_left.value)?b.box_padding_left_measurement.value:"")),b.box_margin_same.checked?a.style.margin=b.box_margin_top.value+(isNum(b.box_margin_top.value)?b.box_margin_top_measurement.value:""):(a.style.marginTop=b.box_margin_top.value+(isNum(b.box_margin_top.value)?b.box_margin_top_measurement.value:""),a.style.marginRight=b.box_margin_right.value+(isNum(b.box_margin_right.value)?b.box_margin_right_measurement.value:""),a.style.marginBottom=b.box_margin_bottom.value+(isNum(b.box_margin_bottom.value)?b.box_margin_bottom_measurement.value:""),a.style.marginLeft=b.box_margin_left.value+(isNum(b.box_margin_left.value)?b.box_margin_left_measurement.value:"")),b.border_style_same.checked?a.style.borderStyle=b.border_style_top.value:(a.style.borderTopStyle=b.border_style_top.value,a.style.borderRightStyle=b.border_style_right.value,a.style.borderBottomStyle=b.border_style_bottom.value,a.style.borderLeftStyle=b.border_style_left.value),b.border_width_same.checked?a.style.borderWidth=b.border_width_top.value+(isNum(b.border_width_top.value)?b.border_width_top_measurement.value:""):(a.style.borderTopWidth=b.border_width_top.value+(isNum(b.border_width_top.value)?b.border_width_top_measurement.value:""),a.style.borderRightWidth=b.border_width_right.value+(isNum(b.border_width_right.value)?b.border_width_right_measurement.value:""),a.style.borderBottomWidth=b.border_width_bottom.value+(isNum(b.border_width_bottom.value)?b.border_width_bottom_measurement.value:""),a.style.borderLeftWidth=b.border_width_left.value+(isNum(b.border_width_left.value)?b.border_width_left_measurement.value:"")),b.border_color_same.checked?a.style.borderColor=b.border_color_top.value:(a.style.borderTopColor=b.border_color_top.value,a.style.borderRightColor=b.border_color_right.value,a.style.borderBottomColor=b.border_color_bottom.value,a.style.borderLeftColor=b.border_color_left.value),a.style.listStyleType=b.list_type.value,a.style.listStylePosition=b.list_position.value,a.style.listStyleImage=b.list_bullet_image.value!=""?"url("+b.list_bullet_image.value+")":"",a.style.position=b.positioning_type.value,a.style.visibility=b.positioning_visibility.value,a.style.width==""&&(a.style.width=b.positioning_width.value+(isNum(b.positioning_width.value)?b.positioning_width_measurement.value:"")),a.style.height==""&&(a.style.height=b.positioning_height.value+(isNum(b.positioning_height.value)?b.positioning_height_measurement.value:"")),a.style.zIndex=b.positioning_zindex.value,a.style.overflow=b.positioning_overflow.value,b.positioning_placement_same.checked?(d=b.positioning_placement_top.value+(isNum(b.positioning_placement_top.value)?b.positioning_placement_top_measurement.value:""),a.style.top=d,a.style.right=d,a.style.bottom=d,a.style.left=d):(a.style.top=b.positioning_placement_top.value+(isNum(b.positioning_placement_top.value)?b.positioning_placement_top_measurement.value:""),a.style.right=b.positioning_placement_right.value+(isNum(b.positioning_placement_right.value)?b.positioning_placement_right_measurement.value:""),a.style.bottom=b.positioning_placement_bottom.value+(isNum(b.positioning_placement_bottom.value)?b.positioning_placement_bottom_measurement.value:""),a.style.left=b.positioning_placement_left.value+(isNum(b.positioning_placement_left.value)?b.positioning_placement_left_measurement.value:"")),b.positioning_clip_same.checked?(d="rect(",e=isNum(b.positioning_clip_top.value)?b.positioning_clip_top.value+b.positioning_clip_top_measurement.value:"auto",d+=e+" ",d+=e+" ",d+=e+" ",d+=e+")",d!="rect(auto auto auto auto)"&&(a.style.clip=d)):(d="rect(",d+=(isNum(b.positioning_clip_top.value)?b.positioning_clip_top.value+b.positioning_clip_top_measurement.value:"auto")+" ",d+=(isNum(b.positioning_clip_right.value)?b.positioning_clip_right.value+b.positioning_clip_right_measurement.value:"auto")+" ",d+=(isNum(b.positioning_clip_bottom.value)?b.positioning_clip_bottom.value+b.positioning_clip_bottom_measurement.value:"auto")+" ",d+=isNum(b.positioning_clip_left.value)?b.positioning_clip_left.value+b.positioning_clip_left_measurement.value:"auto",d+=")",d!="rect(auto auto auto auto)"&&(a.style.clip=d)),a.style.cssText=a.style.cssText}function isNum(a){return(new RegExp("[0-9]+","g")).test(a)}function showDisabledControls(){var a=document.forms,b,c;for(b=0;b<a.length;b++)for(c=0;c<a[b].elements.length;c++)a[b].elements[c].disabled?tinyMCEPopup.editor.dom.addClass(a[b].elements[c],"disabled"):tinyMCEPopup.editor.dom.removeClass(a[b].elements[c],"disabled")}function fillSelect(a,b,c,d,e,f){var g,h,i,j;a=document.forms[a],e=typeof e=="undefined"?";":e,f&&addSelectValue(a,b,"",""),h=tinyMCEPopup.getParam(c,d).split(e);for(g=0;g<h.length;g++)j=!1,h[g].charAt(0)=="+"&&(h[g]=h[g].substring(1),j=!0),i=h[g].split("="),i.length>1?(addSelectValue(a,b,i[0],i[1]),j&&selectByValue(a,b,i[1])):(addSelectValue(a,b,i[0],i[0]),j&&selectByValue(a,b,i[0]))}function toggleSame(a,b){var c=document.forms[0].elements,d;a.checked?(c[b+"_top"].disabled=!1,c[b+"_right"].disabled=!0,c[b+"_bottom"].disabled=!0,c[b+"_left"].disabled=!0,c[b+"_top_measurement"]&&(c[b+"_top_measurement"].disabled=!1,c[b+"_right_measurement"].disabled=!0,c[b+"_bottom_measurement"].disabled=!0,c[b+"_left_measurement"].disabled=!0)):(c[b+"_top"].disabled=!1,c[b+"_right"].disabled=!1,c[b+"_bottom"].disabled=!1,c[b+"_left"].disabled=!1,c[b+"_top_measurement"]&&(c[b+"_top_measurement"].disabled=!1,c[b+"_right_measurement"].disabled=!1,c[b+"_bottom_measurement"].disabled=!1,c[b+"_left_measurement"].disabled=!1)),showDisabledControls()}function synch(a,b){var c=document.forms[0];c.elements[b].value=c.elements[a].value,c.elements[a+"_measurement"]&&selectByValue(c,b+"_measurement",c.elements[a+"_measurement"].value)}tinyMCEPopup.requireLangPack();var defaultFonts="Arial, Helvetica, sans-serif=Arial, Helvetica, sans-serif;Times New Roman, Times, serif=Times New Roman, Times, serif;Courier New, Courier, mono=Courier New, Courier, mono;Times New Roman, Times, serif=Times New Roman, Times, serif;Georgia, Times New Roman, Times, serif=Georgia, Times New Roman, Times, serif;Verdana, Arial, Helvetica, sans-serif=Verdana, Arial, Helvetica, sans-serif;Geneva, Arial, Helvetica, sans-serif=Geneva, Arial, Helvetica, sans-serif",defaultSizes="9;10;12;14;16;18;24;xx-small;x-small;small;medium;large;x-large;xx-large;smaller;larger",defaultMeasurement="+pixels=px;points=pt;inches=in;centimetres=cm;millimetres=mm;picas=pc;ems=em;exs=ex;%",defaultSpacingMeasurement="pixels=px;points=pt;inches=in;centimetres=cm;millimetres=mm;picas=pc;+ems=em;exs=ex;%",defaultIndentMeasurement="pixels=px;+points=pt;inches=in;centimetres=cm;millimetres=mm;picas=pc;ems=em;exs=ex;%",defaultWeight="normal;bold;bolder;lighter;100;200;300;400;500;600;700;800;900",defaultTextStyle="normal;italic;oblique",defaultVariant="normal;small-caps",defaultLineHeight="normal",defaultAttachment="fixed;scroll",defaultRepeat="no-repeat;repeat;repeat-x;repeat-y",defaultPosH="left;center;right",defaultPosV="top;center;bottom",defaultVAlign="baseline;sub;super;top;text-top;middle;bottom;text-bottom",defaultDisplay="inline;block;list-item;run-in;compact;marker;table;inline-table;table-row-group;table-header-group;table-footer-group;table-row;table-column-group;table-column;table-cell;table-caption;none",defaultBorderStyle="none;solid;dashed;dotted;double;groove;ridge;inset;outset",defaultBorderWidth="thin;medium;thick",defaultListType="disc;circle;square;decimal;lower-roman;upper-roman;lower-alpha;upper-alpha;none";tinyMCEPopup.onInit.add(init);