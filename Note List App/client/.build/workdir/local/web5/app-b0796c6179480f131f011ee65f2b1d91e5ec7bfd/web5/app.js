let AppAddNoteNote = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._title = null;
	this._description = null;
};

AppAddNoteNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppAddNoteNote.prototype.constructor = AppAddNoteNote;
AppAddNoteNote.prototype._t = {
	"AppAddNoteNote" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"JkLangStringObject" : true
};
AppAddNoteNote.prototype._tobj = AppAddNoteNote;

AppAddNoteNote.NEW = function() {
	var v = new AppAddNoteNote;
	return v.CTOR_AppAddNoteNote();
};

AppAddNoteNote.prototype.CTOR_AppAddNoteNote = function() {
	this._description = null;
	this._title = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppAddNoteNote.prototype.setTitle = function(value) {
	this._title = value;
	return this;
};

AppAddNoteNote.prototype.getTitle = function() {
	return this._title;
};

AppAddNoteNote.prototype.setDescription = function(value) {
	this._description = value;
	return this;
};

AppAddNoteNote.prototype.getDescription = function() {
	return this._description;
};

AppAddNoteNote.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._title != null) {
		v.setObject("title", (this.asJsonValue(this._title)));
	}
	if(this._description != null) {
		v.setObject("description", (this.asJsonValue(this._description)));
	}
	return v;
};

AppAddNoteNote.prototype.fromJsonObject = function(o1) {
	var v = (function(o) {
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			return o;
		}
		return null;
	}.bind(this))(o1);
	if(!(v != null)) {
		return false;
	}
	this._title = v.getString("title", null);
	this._description = v.getString("description", null);
	return true;
};

AppAddNoteNote.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppAddNoteNote.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppAddNoteNote.prototype.toString = function() {
	return this.toJsonString();
};

AppAddNoteNote.forJsonString = function(o) {
	var v = AppAddNoteNote.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppAddNoteNote.forJsonObject = function(o) {
	var v = AppAddNoteNote.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppAddNoteNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAddNoteNote"] === true;
};

let AppAddNote = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.container = null;
	this.vbox = null;
	this.title = null;
	this.description = null;
};

AppAddNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppAddNote.prototype.constructor = AppAddNote;
AppAddNote.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"AppAddNote" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppAddNote.prototype._tobj = AppAddNote;

AppAddNote.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppAddNote;
	return v.CTOR_AppAddNote_JkUiGuiApplicationContext(context);
};

AppAddNote.prototype.CTOR_AppAddNote_JkUiGuiApplicationContext = function(context) {
	this.description = null;
	this.title = null;
	this.vbox = null;
	this.container = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppAddNote.prototype.onViewClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppNotelist.NEW_JkUiGuiApplicationContext(this.context)));
};

AppAddNote.prototype.initializeWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
	var savebtn = JkWidgetCommonButtonWidget.forText(this.context, "SAVE", (function() {
		var note = AppAddNoteNote.NEW();
		note.setTitle((this.title.getWidgetText()));
		note.setDescription((this.description.getWidgetText()));
		AppAPIClient.getInstance().addNote((note.toDynamicMap()), (function(response1) {
			this.context.showMessageDialog("Notice", "Note Saved!", null);
			this.title.setWidgetText("");
			this.description.setWidgetText("");
		}.bind(this)), (function(error1) {
			this.context.showMessageDialog("Notice", "Failed to Save Note!", null);
		}.bind(this)));
	}.bind(this)));
	savebtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(savebtn);
};

AppAddNote.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	this.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.setWidgetMargin((this.context.getHeightValue("5mm")));
	var widget = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("VIEW NOTE LIST");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#D91E18")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onViewClicked();
	}.bind(this)));
	widget.addWidget1(this.btnHome, 1.0);
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("ADD NOTE");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("4mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.title = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.title.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.title.setWidgetPlaceholder("TITLE");
	this.title.setWidgetBackgroundColor((JkGfxColor.white()));
	this.title.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.title.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.title);
	this.description = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.description.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.description.setWidgetPlaceholder("DESCRIPTION");
	this.description.setWidgetBackgroundColor((JkGfxColor.white()));
	this.description.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.description.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.description);
	widget3.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget3);
	widget2.addWidget(this.container);
	this.addWidget(widget2);
};

AppAddNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAddNote"] === true;
};

let AppAPIClient = function() {
	JkWidgetWebJSONAPIClientWithGui.call(this);
	this.widgetDefaultErrorHandler = null;
};

AppAPIClient.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetWebJSONAPIClientWithGui.prototype);
AppAPIClient.prototype.constructor = AppAPIClient;
AppAPIClient.prototype._t = {
	"JkWebJsonJSONAPIClient" : true,
	"AppAPIClient" : true,
	"JkWidgetWebJSONAPIClientWithGui" : true
};
AppAPIClient.prototype._tobj = AppAPIClient;

AppAPIClient.NEW = function() {
	var v = new AppAPIClient;
	return v.CTOR_AppAPIClient();
};

AppAPIClient.prototype.CTOR_AppAPIClient = function() {
	this.widgetDefaultErrorHandler = null;
	if(JkWidgetWebJSONAPIClientWithGui.prototype.CTOR_JkWidgetWebJSONAPIClientWithGui.call(this) == null) {
		return null;
	}
	return this;
};

AppAPIClient.getInstance = function() {
	return AppAPIClient.instance;
};

AppAPIClient.create = function(context, parentWidget) {
	if(!(context != null)) {
		return null;
	}
	AppAPIClient.instance = AppAPIClient.NEW();
	AppAPIClient.instance.setApiUrl("http://ec2-54-169-20-89.ap-southeast-1.compute.amazonaws.com:30665");
	AppAPIClient.instance.setContext(context);
	if(parentWidget != null) {
		AppAPIClient.instance.setParentWidget(parentWidget);
	}
	return AppAPIClient.instance;
};

AppAPIClient.prototype.onError1 = function(error, callback) {
	if(!(callback != null)) {
		this.onDefaultErrorHandler(error);
		return;
	}
	JkWidgetWebJSONAPIClientWithGui.prototype.onError1.call(this, error, callback);
};

AppAPIClient.prototype.onDefaultErrorHandler = function(error) {
	var context = this.getContext();
	if(!(context != null)) {
		return;
	}
	if(!(error != null)) {
		return;
	}
	if(!(this.widgetDefaultErrorHandler != null)) {
		context.showErrorDialog((error.toString()), null);
		return;
	}
	this.widgetDefaultErrorHandler(error);
};

AppAPIClient.prototype.addNote = function(data, callback, errorCallback) {
	this.doPost("/note", data, callback, errorCallback);
};

AppAPIClient.prototype.updateNote = function(id, data, callback, errorCallback) {
	this.doPut("/note/" + (JkLangString.safeString(id)), data, callback, errorCallback);
};

AppAPIClient.prototype.deleteNote = function(id, callback, errorCallback) {
	this.doDelete("/note/" + (JkLangString.safeString(id)), callback, errorCallback);
};

AppAPIClient.prototype.getNote = function(callback, errorCallback) {
	this.doGet("/note", callback, errorCallback);
};

AppAPIClient.prototype.getWidgetDefaultErrorHandler = function() {
	return this.widgetDefaultErrorHandler;
};

AppAPIClient.prototype.setWidgetDefaultErrorHandler = function(v) {
	this.widgetDefaultErrorHandler = v;
	return this;
};

AppAPIClient.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAPIClient"] === true;
};

AppAPIClient.instance = null;

let AppDeleteNote = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.container = null;
	this.vbox = null;
	this.id = null;
};

AppDeleteNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppDeleteNote.prototype.constructor = AppDeleteNote;
AppDeleteNote.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetContainerWidget" : true,
	"AppDeleteNote" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppDeleteNote.prototype._tobj = AppDeleteNote;

AppDeleteNote.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppDeleteNote;
	return v.CTOR_AppDeleteNote_JkUiGuiApplicationContext(context);
};

AppDeleteNote.prototype.CTOR_AppDeleteNote_JkUiGuiApplicationContext = function(context) {
	this.id = null;
	this.vbox = null;
	this.container = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppDeleteNote.prototype.onViewClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppNotelist.NEW_JkUiGuiApplicationContext(this.context)));
};

AppDeleteNote.prototype.initializeWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
	var deletebtn = JkWidgetCommonButtonWidget.forText(this.context, "SUBMIT", (function() {
		AppAPIClient.getInstance().getNote((function(response1) {
			var data = response1.getDynamicMap("data");
			if(!(data != null)) {
				return;
			}
			var records = data.getDynamicVector("records");
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						if(record.getString("id", null) == this.id.getWidgetText()) {
							var popup = JkWidgetCommonPopupDialogManager.NEW_JkUiGuiApplicationContextJkWidgetWidget(this.context, this);
							popup.showConfirmDialog("Confirmation", "Continue to delete this Note?", (function() {
								AppAPIClient.getInstance().deleteNote((this.id.getWidgetText()), (function(res1) {
									this.context.showMessageDialog("Notice", "Successfully deleted!", null);
									this.id.setWidgetText("");
								}.bind(this)), (function(err1) {
									this.context.showMessageDialog("Notice", "Failed!", null);
								}.bind(this)));
							}.bind(this)), (function() {
								;
							}.bind(this)));
						}
					}
				}
			}
		}.bind(this)), null);
	}.bind(this)));
	deletebtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(deletebtn);
};

AppDeleteNote.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	this.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.setWidgetMargin((this.context.getHeightValue("5mm")));
	var widget = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("VIEW NOTE LIST");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#D91E18")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onViewClicked();
	}.bind(this)));
	widget.addWidget1(this.btnHome, 1.0);
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("DELETE NOTE");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("4mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.id.setWidgetPlaceholder("PLEASE INPUT THE ID YOU WANT TO DELETE");
	this.id.setWidgetBackgroundColor((JkGfxColor.white()));
	this.id.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	widget3.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget3);
	widget2.addWidget(this.container);
	this.addWidget(widget2);
};

AppDeleteNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppDeleteNote"] === true;
};

let AppMainScreen = function() {
	JkWidgetScreenForWidget.call(this);
	this.navi = null;
};

AppMainScreen.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetScreenForWidget.prototype);
AppMainScreen.prototype.constructor = AppMainScreen;
AppMainScreen.prototype._t = {
	"JkUiScreen" : true,
	"JkUiScreenWithContext" : true,
	"AppMainScreen" : true,
	"JkWidgetScreenForWidget" : true
};
AppMainScreen.prototype._tobj = AppMainScreen;

AppMainScreen.NEW = function() {
	var v = new AppMainScreen;
	return v.CTOR_AppMainScreen();
};

AppMainScreen.prototype.CTOR_AppMainScreen = function() {
	this.navi = null;
	if(JkWidgetScreenForWidget.prototype.CTOR_JkWidgetScreenForWidget.call(this) == null) {
		return null;
	}
	return this;
};

AppMainScreen.prototype.initialize = function() {
	JkWidgetScreenForWidget.prototype.initialize.call(this);
	this.navi = JkWidgetCommonNavigationWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.navi.setWidgetEnableActionBar(false);
	this.setWidget(this.navi);
	AppAPIClient.create(this.context, this.navi);
	this.navi.pushWidget((AppNotelist.NEW_JkUiGuiApplicationContext(this.context)));
};

AppMainScreen.main = function(args) {
	var context = JkUiGuiApplicationContextForHTML.NEW();
	var resources = [];
	context.prepareResources(resources, (function() {
		var main = AppMainScreen.NEW();
		if(JkUiScreenWithContext.IS_INSTANCE && JkUiScreenWithContext.IS_INSTANCE(main)) {
			main.setContext(context);
		}
		main.initialize();
	}.bind(this)));
	return 0;
};

AppMainScreen.main();

AppMainScreen.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppMainScreen"] === true;
};

let AppNotelist = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnAdd = null;
	this.btnUpdate = null;
	this.btnDelete = null;
	this.container = null;
	this.vbox = null;
	this.grid = null;
};

AppNotelist.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppNotelist.prototype.constructor = AppNotelist;
AppNotelist.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetWidgetWithLayout" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"AppNotelist" : true
};
AppNotelist.prototype._tobj = AppNotelist;

AppNotelist.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppNotelist;
	return v.CTOR_AppNotelist_JkUiGuiApplicationContext(context);
};

AppNotelist.prototype.CTOR_AppNotelist_JkUiGuiApplicationContext = function(context) {
	this.grid = null;
	this.vbox = null;
	this.container = null;
	this.btnDelete = null;
	this.btnUpdate = null;
	this.btnAdd = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppNotelist.prototype.initializeWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
	this.grid.addColumn("ID", "id", 0.5, 0);
	this.grid.addColumn("Title", "title", 1.0, 0);
	this.grid.addColumn("Description", "description", 1.0, 0);
	this.grid.addColumn("Time Added", "timeStampAdded", 1.0, 0);
	this.grid.addColumn("Time Updated", "timeStampLastUpdated", 1.0, 0);
	this.grid.addWidgetHeaderRow();
	AppAPIClient.getInstance().getNote((function(response1) {
		var data = response1.getDynamicMap("data");
		if(!(data != null)) {
			return;
		}
		var records = data.getDynamicVector("records");
		if(!(records != null) || records.getSize() < 1) {
			this.grid.addRow(["No Notes!"], null, null);
		}
		else {
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						this.grid.addRow([record.getString("id", null), record.getString("title", null), record.getString("description", null), record.getString("timeStampAdded", null), record.getString("timeStampLastUpdated", null)], null, null);
					}
				}
			}
		}
	}.bind(this)), (function(err1) {
		this.grid.addRow(["Error"], null, null);
	}.bind(this)));
};

AppNotelist.prototype.onAddClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAddNote.NEW_JkUiGuiApplicationContext(this.context)));
};

AppNotelist.prototype.onUpdateClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppUpdateNote.NEW_JkUiGuiApplicationContext(this.context)));
};

AppNotelist.prototype.onDeleteClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppDeleteNote.NEW_JkUiGuiApplicationContext(this.context)));
};

AppNotelist.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	this.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.setWidgetMargin((this.context.getHeightValue("5mm")));
	var widget = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetText("NOTE LIST APPLICATION");
	widget.setWidgetTextColor((JkGfxColor.black()));
	widget.setWidgetFontSize((this.context.getHeightValue("5mm")));
	widget.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget.setWidgetFontBold(true);
	this.addWidget(widget);
	var widget2 = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnAdd = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnAdd.setWidgetText("ADD NOTE");
	this.btnAdd.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnAdd.setWidgetBackgroundColor((JkGfxColor.instance("#D91E18")));
	this.btnAdd.setWidgetClickHandler((function() {
		this.onAddClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnAdd, 1.0);
	this.btnUpdate = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnUpdate.setWidgetText("UPDATE NOTE");
	this.btnUpdate.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnUpdate.setWidgetBackgroundColor((JkGfxColor.instance("#D91E18")));
	this.btnUpdate.setWidgetClickHandler((function() {
		this.onUpdateClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnUpdate, 1.0);
	this.btnDelete = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnDelete.setWidgetText("DELETE NOTE");
	this.btnDelete.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnDelete.setWidgetBackgroundColor((JkGfxColor.instance("#D91E18")));
	this.btnDelete.setWidgetClickHandler((function() {
		this.onDeleteClicked();
	}.bind(this)));
	widget2.addWidget1(this.btnDelete, 1.0);
	this.addWidget(widget2);
	var widget3 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	var widget4 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("40mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	widget4.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget4);
	this.grid = JkWidgetDatagridDataGridWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.grid.setWidgetCellPadding(1);
	this.container.addWidget(this.grid);
	widget3.addWidget(this.container);
	this.addWidget(widget3);
};

AppNotelist.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppNotelist"] === true;
};

let AppUpdateNoteNotes = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._title = null;
	this._description = null;
};

AppUpdateNoteNotes.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppUpdateNoteNotes.prototype.constructor = AppUpdateNoteNotes;
AppUpdateNoteNotes.prototype._t = {
	"AppUpdateNoteNotes" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"JkLangStringObject" : true
};
AppUpdateNoteNotes.prototype._tobj = AppUpdateNoteNotes;

AppUpdateNoteNotes.NEW = function() {
	var v = new AppUpdateNoteNotes;
	return v.CTOR_AppUpdateNoteNotes();
};

AppUpdateNoteNotes.prototype.CTOR_AppUpdateNoteNotes = function() {
	this._description = null;
	this._title = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppUpdateNoteNotes.prototype.setTitle = function(value) {
	this._title = value;
	return this;
};

AppUpdateNoteNotes.prototype.getTitle = function() {
	return this._title;
};

AppUpdateNoteNotes.prototype.setDescription = function(value) {
	this._description = value;
	return this;
};

AppUpdateNoteNotes.prototype.getDescription = function() {
	return this._description;
};

AppUpdateNoteNotes.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._title != null) {
		v.setObject("title", (this.asJsonValue(this._title)));
	}
	if(this._description != null) {
		v.setObject("description", (this.asJsonValue(this._description)));
	}
	return v;
};

AppUpdateNoteNotes.prototype.fromJsonObject = function(o1) {
	var v = (function(o) {
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			return o;
		}
		return null;
	}.bind(this))(o1);
	if(!(v != null)) {
		return false;
	}
	this._title = v.getString("title", null);
	this._description = v.getString("description", null);
	return true;
};

AppUpdateNoteNotes.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppUpdateNoteNotes.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppUpdateNoteNotes.prototype.toString = function() {
	return this.toJsonString();
};

AppUpdateNoteNotes.forJsonString = function(o) {
	var v = AppUpdateNoteNotes.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppUpdateNoteNotes.forJsonObject = function(o) {
	var v = AppUpdateNoteNotes.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppUpdateNoteNotes.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppUpdateNoteNotes"] === true;
};

let AppUpdateNote = function() {
	JkWidgetVerticalBoxWidget.call(this);
	this.btnHome = null;
	this.container = null;
	this.vbox = null;
	this.id = null;
	this.title = null;
	this.description = null;
};

AppUpdateNote.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetVerticalBoxWidget.prototype);
AppUpdateNote.prototype.constructor = AppUpdateNote;
AppUpdateNote.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidget" : true,
	"AppUpdateNote" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetVerticalBoxWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppUpdateNote.prototype._tobj = AppUpdateNote;

AppUpdateNote.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppUpdateNote;
	return v.CTOR_AppUpdateNote_JkUiGuiApplicationContext(context);
};

AppUpdateNote.prototype.CTOR_AppUpdateNote_JkUiGuiApplicationContext = function(context) {
	this.description = null;
	this.title = null;
	this.id = null;
	this.vbox = null;
	this.container = null;
	this.btnHome = null;
	if(JkWidgetVerticalBoxWidget.prototype.CTOR_JkWidgetVerticalBoxWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppUpdateNote.prototype.onViewClicked = function() {
	JkWidgetCommonNavigationWidget.switchToContainer(this, (AppNotelist.NEW_JkUiGuiApplicationContext(this.context)));
};

AppUpdateNote.prototype.initializeWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.initializeWidget.call(this);
	var updatebtn = JkWidgetCommonButtonWidget.forText(this.context, "SUBMIT", (function() {
		AppAPIClient.getInstance().getNote((function(response1) {
			var data = response1.getDynamicMap("data");
			if(!(data != null)) {
				return;
			}
			var records = data.getDynamicVector("records");
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						if(record.getString("id", null) == this.id.getWidgetText()) {
							var note = AppUpdateNoteNotes.NEW();
							var popup = JkWidgetCommonPopupDialogManager.NEW_JkUiGuiApplicationContextJkWidgetWidget(this.context, this);
							popup.showConfirmDialog("Confirmation", "Continue to Update Note?", (function() {
								note.setTitle((this.title.getWidgetText()));
								note.setDescription((this.description.getWidgetText()));
								AppAPIClient.getInstance().updateNote((this.id.getWidgetText()), (note.toDynamicMap()), (function(res1) {
									this.context.showMessageDialog("Notice", "Successfully updated!", null);
									this.id.setWidgetText("");
									this.title.setWidgetText("");
									this.description.setWidgetText("");
								}.bind(this)), (function(err1) {
									this.context.showMessageDialog("Notice", "Failed!", null);
								}.bind(this)));
							}.bind(this)), (function() {
								;
							}.bind(this)));
						}
					}
				}
			}
		}.bind(this)), null);
	}.bind(this)));
	updatebtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(updatebtn);
};

AppUpdateNote.prototype.createWidget = function() {
	JkWidgetVerticalBoxWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	this.setWidgetSpacing((this.context.getHeightValue("2000um")));
	this.setWidgetMargin((this.context.getHeightValue("5mm")));
	var widget = JkWidgetHorizontalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetSpacing((this.context.getHeightValue("100um")));
	this.btnHome = JkWidgetCommonTextButtonWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.btnHome.setWidgetText("VIEW NOTE LIST");
	this.btnHome.setWidgetPadding((this.context.getHeightValue("1000um")));
	this.btnHome.setWidgetBackgroundColor((JkGfxColor.instance("#D91E18")));
	this.btnHome.setWidgetClickHandler((function() {
		this.onViewClicked();
	}.bind(this)));
	widget.addWidget1(this.btnHome, 1.0);
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetScrollBarDisabled(true);
	this.container = JkWidgetLayerWithBackgroundColorWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.container.setWidgetColor((JkGfxColor.instance("#5d89e8")));
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("UPDATE NOTE");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("4mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_INTEGER);
	this.id.setWidgetPlaceholder("PLEASE INPUT THE ID YOU WANT TO UPDATE");
	this.id.setWidgetBackgroundColor((JkGfxColor.white()));
	this.id.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	this.title = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.title.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.title.setWidgetPlaceholder("TITLE");
	this.title.setWidgetBackgroundColor((JkGfxColor.white()));
	this.title.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.title.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.title);
	this.description = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.description.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.description.setWidgetPlaceholder("DESCRIPTION");
	this.description.setWidgetBackgroundColor((JkGfxColor.white()));
	this.description.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.description.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.description);
	widget3.addWidget1(this.vbox, 0.5, 0.5, false);
	this.container.addWidget(widget3);
	widget2.addWidget(this.container);
	this.addWidget(widget2);
};

AppUpdateNote.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppUpdateNote"] === true;
};
