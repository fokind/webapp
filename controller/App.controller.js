"use strict";

sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function(Controller, MessageToast) {
  return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
    onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
    },
    
    onPress: function() {
      var sUsername = this.getView().getModel().getProperty("/username");
      var sPassword = this.getView().getModel().getProperty("/password");
      MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("authMsg", [sUsername, sPassword]));
    },

    onOpenDialog: function() {
			this.getOwnerComponent().openHelloDialog();
		},
  });
});