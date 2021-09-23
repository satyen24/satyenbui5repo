sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("pdm.project1.controller.View1", {
			onInit: function () {
                console.log("In init function");
			}
		});
	});
