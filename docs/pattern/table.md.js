webpackJsonp([103,210],{

/***/ 1751:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "内容"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "结构示例",
	    "src": "https://os.alipayobjects.com/rmsportal/zFqqEqKKAylKkxv.png"
	  }]], ["p", "通常表格的组成元素以及相关元素会有，这几部分组成。"], ["ol", ["li", ["p", "按钮组"]], ["li", ["p", "搜索条件"]], ["li", ["p", "排序"]], ["li", ["p", "筛选"]], ["li", ["p", "状态点"]], ["li", ["p", "单行操作"]], ["li", ["p", "分页器／无限加载（可选）"]]], ["h3", "筛选"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "筛选示例",
	    "src": "https://os.alipayobjects.com/rmsportal/YRcnmAFUvcfMlpN.png"
	  }]], ["p", "当该列选项有限，用户又希望只查看一个或者多个值时，可考虑使用。"], ["h3", "状态点"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "状态示例",
	    "src": "https://os.alipayobjects.com/rmsportal/EYmtSshUxKydwns.png"
	  }]], ["p", "一般用四种颜色来表明系统的不同状态。"], ["h3", "更多操作"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "更多操作示例",
	    "description": "依次分别为：完整内容、暂时不可用、没有该权限。",
	    "src": "https://os.alipayobjects.com/rmsportal/ZlcZDOZNZpYQcMM.png"
	  }]], ["p", "该项暂时不可用时，直接灰化该操作；用户没有该权限时，直接隐藏该操作。"], ["h3", "跳转至详情"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "名称跳转示例",
	    "src": "https://os.alipayobjects.com/rmsportal/tfJiUmrUJRzBlzt.png"
	  }]], ["p", "把 ID、名称等唯一性的表格项处理成文字链，点击后跳转至详情。"], ["ul", ["li", ["p", "优点：节省空间；"]], ["li", ["p", "缺点：可发现性较低；点击区域受到内容限制，可能出现不易点击的情况。"]]], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "查看跳转示例",
	    "src": "https://os.alipayobjects.com/rmsportal/zjDqNVTzSrzXaWg.png"
	  }]], ["p", "在操作中增加一列『查看』，点击后进行跳转至详情。"], ["ul", ["li", ["p", "优点：可发现性高；点击范围固定，不受影响；"]], ["li", ["p", "缺点：比较占空间。"]]], ["p", ["br"]], ["p", "结论：可根据业务系统中表格的实际情况，统一使用一种类型。"], ["h2", "交互"], ["h3", "显示长表格"], ["p", "参考『列表页面』中的 ", ["a", {
	    "title": null,
	    "href": "/docs/pattern/list#%E6%98%BE%E7%A4%BA%E9%95%BF%E5%88%97%E8%A1%A8"
	  }, "显示长列表"], "。"], ["h3", "全选数据"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "状态一",
	    "src": "https://os.alipayobjects.com/rmsportal/QqafGErOPnuDKyy.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "状态二：点击 Table 顶部的复选框，出现『Alert』",
	    "src": "https://os.alipayobjects.com/rmsportal/qwRSMFNilVCNoym.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "状态三：点击『选择全部』后",
	    "src": "https://os.alipayobjects.com/rmsportal/POvEJGjMYAexGut.png"
	  }]], ["p", "当使用了分页器，又想实现全选数据的功能，可以结合『Alert』来实现。"], ["h3", "跨页选数据"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "状态一：选中一行数据",
	    "src": "https://os.alipayobjects.com/rmsportal/OcIWSystreURrPV.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "状态二：切换分页后，记录所选的项目",
	    "src": "https://os.alipayobjects.com/rmsportal/HuzwUWDzXszOkEI.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "状态三：在其他页中再选择一项，多记录一项选择",
	    "src": "https://os.alipayobjects.com/rmsportal/yCjrxTSElzNUsFn.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "状态四：用户可以在记录条直接取消选择",
	    "src": "https://os.alipayobjects.com/rmsportal/jtepHsDPApPnQlD.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "状态五：表格选择框同步取消选择",
	    "src": "https://os.alipayobjects.com/rmsportal/OAVQZqxPyuAWvTh.png"
	  }]], ["p", "当需要对表格／列表的数据进行跨分页器选择时，结合『Alert』来实现。"], ["h3", "固定按钮组"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "顶部固定示例",
	    "src": "https://os.alipayobjects.com/rmsportal/AhgnVIhTIvtHpok.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "底部固定示例",
	    "src": "https://os.alipayobjects.com/rmsportal/hUHidNAJczLRVCg.png"
	  }]], ["p", "用在表格行数很多时（一般多于 20 行），又想对表格数据进行频繁的操作时，尤其适用在无限加载的表格中。"], ["h3", "某一项内容过长"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "气泡显示示例",
	    "description": "当过长信息可以被隐藏时，用户悬浮／点击该项时，用『Tooltip／Popover』来显示完整内容。",
	    "src": "https://os.alipayobjects.com/rmsportal/vgNHOYAiuQbXCOi.png"
	  }]], ["p", "某一项内容过长／不确定长度，既不希望用户在列表和详情之间来回跳转，又不希望不确定的数据撑爆表格时。"], ["h3", "模块编辑"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "模块编辑示例",
	    "description": "启动和禁用要尽可能相似（对称性交互）；保证启用和禁用切换时，页面不在水平方向不错位。",
	    "src": "https://os.alipayobjects.com/rmsportal/mUhSLOTjzGYTQaE.png"
	  }]], ["p", "适用在易读性高于易编辑性时；适用在有一定数量的项需要编辑时。"], ["h3", "直接编辑"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "直接编辑示例",
	    "description": "用户输入后，系统需要及时保存数据。",
	    "src": "https://os.alipayobjects.com/rmsportal/VgvZjqTZBuAfGuO.png"
	  }]], ["p", "适用在易编辑性高于易读性时。"], ["h3", "悬浮层编辑"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "悬浮层编辑示例",
	    "src": "https://os.alipayobjects.com/rmsportal/QhIyXeNxAZEaLjT.png"
	  }]], ["p", "悬浮层会遮挡部分页面，适用在上下文对编辑任务不那么重要时。"], ["h2", "规格"], ["h3", "行高"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "标准",
	    "src": "https://os.alipayobjects.com/rmsportal/OXTCkOkAtaWtzNA.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "适中",
	    "src": "https://os.alipayobjects.com/rmsportal/irjamuwZFdQLYWJ.png"
	  }]], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "紧凑",
	    "src": "https://os.alipayobjects.com/rmsportal/SdlTVIAoxickNMM.png"
	  }]], ["p", "提供了多种规格的行高，适用在页面、弹出框等场景中。"], ["h3", "列宽"], ["p", ["img", {
	    "class": "preview-img bad",
	    "align": "right",
	    "alt": "错误示例",
	    "src": "https://os.alipayobjects.com/rmsportal/TbuuZNfOTrSflVg.png"
	  }]], ["p", ["img", {
	    "class": "preview-img good",
	    "align": "right",
	    "alt": "正确示例",
	    "src": "https://os.alipayobjects.com/rmsportal/cSSSfNrFMioHDBJ.png"
	  }]], ["p", "一般是根据栅格来排版，通过设定每一列的宽度比列，来保证一定尺寸之上（eg：1366px）有好的浏览效果。需要注意："], ["ol", ["li", ["p", "表头不换行；"]], ["li", ["p", "固定字节长度的列尽量不换行（eg：创建时间、操作等）。"]]], ["h3", "对齐方式"], ["p", ["img", {
	    "class": "preview-img",
	    "align": "right",
	    "alt": "对齐示例",
	    "src": "https://os.alipayobjects.com/rmsportal/RWCMGdnGSZXYULc.png"
	  }]], ["p", "数值右对齐（带小数则按小数点对齐），其余左对齐。"], ["h2", ["span", {
	    "class": "waiting"
	  }, "案例（敬请期待）"]]],
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "表格",
	      "en-US": "Table"
	    },
	    "filename": "docs/pattern/table.md"
	  },
	  "description": ["section", ["p", "表格可被视为一种列表。它经常和其他界面元素一起协同，用于展示和操作结构化数据，并经常用于详情信息的入口。"]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#内容"
	  }, "内容"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#交互"
	  }, "交互"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#规格"
	  }, "规格"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#案例（敬请期待）"
	  }, ["span", {
	    "class": "waiting"
	  }, "案例（敬请期待）"]]]]
	};

/***/ }

});