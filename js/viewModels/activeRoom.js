var app = app || {};
app.ViewModelActiveRoom = function() {
    var vm = this;
    vm.room = ko.observable(undefined);
    vm.openRoom = function(){
      vm.room(this);
    }
    vm.deleteActiveRoom = function() {
        var serverRelativeUrl = vm.room().serverRelativeUrl;
        $.ajax({
            url: serverRelativeUrl + '/_api/web',
            type: "POST",
            headers: {
                "accept": "application/json;odata=verbose",
                "content-type": "application/json;odata=verbose",
                "X-RequestDigest": $('#__REQUESTDIGEST').val(),
                "X-HTTP-Method": "DELETE"
            },
            success: successCallback,
            error: errorCallback
        });

        function successCallback(data) {
            console.log(data);
            console.log('site deleted');
        };

        function errorCallback(err) {
            console.log(JSON.stringify(err));
            console.log('Error deleting site');
        };
    };
};
