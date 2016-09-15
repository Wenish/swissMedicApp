var app = app || {};
app.ViewModelRooms = function() {
    var vm = this;
    vm.allRooms = ko.observableArray(['Room1', 'Room2']);
};
