"use strict";

sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
	"sap/ui/demo/walkthrough/controller/HelloDialog"
], function(UIComponent, JSONModel, HelloDialog) {
  return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
    metadata: {
      manifest: "json"
    },
    init: function() {
      UIComponent.prototype.init.apply(this, arguments);
      var oData = {
        recipient: {
          name: "Мир"
        }
      };
      var oModel = new JSONModel(oData);
      this.setModel(oModel);

      // set dialog
      this._helloDialog = new HelloDialog(this.getRootControl());

      // create the views based on the url/hash
			this.getRouter().initialize();
    },

		getContentDensityClass: function() {
			if (!this._sContentDensityClass) {
				if (!sap.ui.Device.support.touch) {
					this._sContentDensityClass = "sapUiSizeCompact";
				} else {
					this._sContentDensityClass = "sapUiSizeCozy";
				}
			}
			return this._sContentDensityClass;
    },
    
    exit: function() {
      this._helloDialog.destroy();
      delete this._helloDialog;
    },

    openHelloDialog: function() {
      this._helloDialog.open();
    },
  });
});