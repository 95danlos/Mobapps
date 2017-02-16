

angular.module('starter', ['ionic'])

.controller('myCtrl', function($scope, $rootScope) {
	$scope.text = "";
	$scope.message = "";
	var write = true;
	
	$rootScope.writeTag = function(nfcEvent) {
		if(write){
			var message = [
			ndef.textRecord($scope.message),
			//ndef.uriRecord("http://github.com/chariotsolutions/phonegap-nfc")
			];
		nfc.write(message);
		$scope.text = "Succsess";
		write = false;
		}
		else{
			console.log(nfcEvent);
		}
    };
})

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
	
	
	nfc.addTagDiscoveredListener($rootScope.writeTag);
  });
});
