var app = angular.module( 'app', [ ] )
.controller('phonebookCtrl', function( $scope ){
  $scope.currentPersonId = -1;
  $scope.phonebook = [
    {
      name: 'Mike',
      phone: '0952851655'
    }
  ];
  $scope.addNewPerson = function() {
    if ( $scope.name != '' ) {
      $scope.phonebook.push({
        name: $scope.name,
        phone: $scope.phone
      });
      $scope.name = '';
      $scope.phone = '';
    }
  }
  $scope.savePerson = function() {
    if( $scope.currentPersonId > -1 ){
      var id = $scope.currentPersonId;
      $scope.phonebook[id].name = $scope.name;
      $scope.phonebook[id].phone = $scope.phone;
      $scope.name = '';
      $scope.phone = '';
      $scope.currentPersonId = -1;
    }
  }
  $scope.editPerson = function ( id ) {
    $scope.currentPersonId = id;
    $scope.name = $scope.phonebook[id].name;
    $scope.phone = $scope.phonebook[id].phone;
  }
  $scope.deletePerson = function( id ) {
    $scope.phonebook.splice( id, 1 );
  }
})