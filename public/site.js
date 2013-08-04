

var app = angular.module('myApp', ['ngResource']);

app.config(function($routeProvider) {
  $routeProvider.
    when('/task/:id', {
      controller: TaskCtrl,
      templateUrl: '/task.html'
    }). 
    when('/tasks/:category', {
      controller: TaskListCtrl,
      templateUrl: '/tasks.html'
    });

    /*
    when('/task/:id/edit', {
      controller: EditTaskCtrl, 
      templateUrl: '/editTask.html'
    }).
    */
});

app.factory('Task',  function($resource) {
  return $resource('/tasks/:id', {id: '@id'});
});

function TaskCtrl($location, $scope, $routeParams, Task) {
  $scope.task = Task.get({id: $routeParams.id});
}

function TaskListCtrl($scope, $routeParams, Task) {
  $scope.tasks = Task.query();
}
