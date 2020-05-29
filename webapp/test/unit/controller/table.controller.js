/*global QUnit*/

sap.ui.define([
	"Demo/Table/controller/table.controller"
], function (Controller) {
	"use strict";

	QUnit.module("table Controller");

	QUnit.test("I should test the table controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});