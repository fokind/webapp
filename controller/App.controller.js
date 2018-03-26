"use strict";

sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
  return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
    onInit: function() {
      var oData = {
        recipient: {
          name: "World"
        },
        username: "",
        password: ""
      };
      var oModel = new JSONModel(oData);
      this.getView().setModel(oModel);
      var i18nModel = new ResourceModel({
        bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
      });
      this.getView().setModel(i18nModel, "i18n");
    },

    onShowHello: function() {
      var oBundle = this.getView().getModel("i18n").getResourceBundle();
      var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      var sMsg = oBundle.getText("helloMsg", [sRecipient]);
      
      MessageToast.show(sMsg);
    },

    onPress: function() {
      var sUsername = this.getView().getModel().getProperty("/username");
      var sPassword = this.getView().getModel().getProperty("/password");
      MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("authMsg", [sUsername, sPassword]));
    }
 });
});