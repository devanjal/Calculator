//loading the 'login' angularJS module
var calculator = angular.module('calculator', []);
//defining the calculator controller
calculator.controller('calculator', function($scope, $http) {

	$scope.invalid_login = true;
	$scope.validlogin = true;
	$scope.submit = function() {
		$http({
			method : "POST",
			url : '/multiply',
			data : {
				"number1" : $scope.number1,
				"number2" : $scope.number2,
			}
		}).success(function(data) {
			//checking the response data for statusCode
			if (data.statusCode == 401) {
				$scope.invalid_login = false;
				$scope.validlogin = true;
			}
			else
				{
				$scope.validlogin = false;
				$scope.invalid_login = true;
					$scope.data=data.x;
				//	alert(data.x);
				}

		}).error(function(error) {
			$scope.validlogin = true;
			$scope.invalid_login = true;
		});
	};
	$scope.submit1 = function() {
		$http({
			method : "POST",
			url : '/add',
			data : {
				"number1" : $scope.number1,
				"number2" : $scope.number2
			}
		}).success(function(data) {
			//checking the response data for statusCode
			if (data.statusCode == 401) {
				$scope.invalid_login = false;
				$scope.validlogin = true;
			}
			else
			{
				$scope.validlogin = false;
				$scope.invalid_login = true;
				$scope.data=data.x;
				//	alert(data.x);
			}

		}).error(function(error) {
			$scope.validlogin = true;
			$scope.invalid_login = true;
		});
	};
	$scope.submit2 = function() {
		$http({
			method : "POST",
			url : '/sub',
			data : {
				"number1" : $scope.number1,
				"number2" : $scope.number2
			}
		}).success(function(data) {
			//checking the response data for statusCode
			if (data.statusCode == 401) {
				$scope.invalid_login = false;
				$scope.validlogin = true;
			}
			else
			{
				$scope.validlogin = false;
				$scope.invalid_login = true;
				$scope.data=data.x;
				//	alert(data.x);
			}

		}).error(function(error) {
			$scope.validlogin = true;
			$scope.invalid_login = true;
		});
	};
	$scope.submit3 = function() {
		$http({
			method : "POST",
			url : '/divide',
			data : {
				"number1" : $scope.number1,
				"number2" : $scope.number2
			}
		}).success(function(data) {
			//checking the response data for statusCode
			if (data.statusCode == 401) {
				$scope.invalid_login = false;
				$scope.validlogin = true;
			}
			else
			{
				$scope.validlogin = false;
				$scope.invalid_login = true;
				$scope.data=data.x;
				//	alert(data.x);
			}

		}).error(function(error) {
			$scope.validlogin = true;
			$scope.invalid_login = true;
		});
	};
})
