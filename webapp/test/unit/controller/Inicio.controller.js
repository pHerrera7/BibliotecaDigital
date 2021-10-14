/*global QUnit*/

sap.ui.define([
	"becloudcl./project1/controller/Inicio.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Inicio Controller");

	QUnit.test("I should test the Inicio controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
