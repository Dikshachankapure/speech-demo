sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("project.SpeehDemo.controller.View1", {
		onInit: function () {
			
		},

		_searchBySpeech: function (oEvent) {
			var btnSpeech = this.getView().byId("btnSpeech");
			var btnCancel = this.getView().byId("btnCancel");
			var txtSearch = this.getView().byId("txtSearch");
			if (window.hasOwnProperty("webkitSpeechRecognition")) {
				var recognition = new webkitSpeechRecognition();
				recognition.continuous = false;
				recognition.interimResults = false;
				recognition.lang = "en-US";
				recognition.start();
				//btnSpeech.setBusy(true);
				btnCancel.setVisible(true);
				btnSpeech.setVisible(false);
				recognition.onresult = function (event) {
					var transcript = event.results[0][0].transcript;
					txtSearch.setValue(transcript);
					recognition.stop();
					btnCancel.setVisible(false);
					btnSpeech.setVisible(true);
					//btnSpeech.setBusy(false);
				};

				recognition.onerror = function (e) {
					recognition.stop();
					
				};
			}
		},
		
		_cancelSpeech: function (oEvent) {
			var btnSpeech = this.getView().byId("btnSpeech");
			var btnCancel = this.getView().byId("btnCancel");
			btnCancel.setVisible(false);
			btnSpeech.setVisible(true);
		}
	});
});