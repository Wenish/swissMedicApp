var app = app || {};
app.ViewModelMain = function() {
    var vm = this;
    vm.rooms = new app.ViewModelRooms();
    vm.newRoom = new app.ViewModelNewRoom();
};
