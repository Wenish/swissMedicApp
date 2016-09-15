var app = app || {};
app.ViewModelRooms = function() {
    var vm = this;
    vm.allRooms = ko.observableArray();

    (function getRooms (){
      /*TODO: AJAX Call***/
      vm.allRooms.push(new app.Room('room1'));
      vm.allRooms.push(new app.Room('room2'));
      vm.allRooms.push(new app.Room('room3'));
      vm.allRooms.push(new app.Room('room4'));
      /*----------------*/
    })();
};
