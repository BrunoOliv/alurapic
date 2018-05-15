angular.module('alurapic').controller('FotosController', function($scope, $http) {
	$scope.fotos = [
		/*{
			titulo: 'Leão 1',
			url: 'http://images.terra.com/2015/07/09/leao.png'
		},
		{
			titulo: 'Leão 2',
			url: 'http://images.terra.com/2015/07/09/leao.png'
		},
		{
			titulo: 'Leão 3',
			url: 'http://images.terra.com/2015/07/09/leao.png'
		}*/
	];

	$http.get('/v1/fotos')
	.success(function(retorno) {
		$scope.fotos = retorno;
	})
	.error(function(erro) {
		console.log(erro);
	});


	/*var promise = $http.get('v1/fotos');
	promise.then(function(retorno) {
		$scope.fotos = retorno.data;
	}).catch(function(error){
		console.log(error);
	});*/
});