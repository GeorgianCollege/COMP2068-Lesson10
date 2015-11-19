// Main Application Module
var mainApplicationModuleName:string = "main";

var mainApplicationModule:ng.IModule = angular.module(mainApplicationModuleName,[]);

//waiting for the document to be ready before bootstrapping angular
angular.element(document).ready(function(){
	//now bootstrap angular on the document element
	angular.bootstrap(document,[mainApplicationModuleName]);
});	