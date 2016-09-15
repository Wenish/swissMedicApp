var app = app || {};
app.ViewModelRooms = function() {
    var vm = this;
    vm.allRooms = ko.observableArray();

    (function getRooms() {
        $.ajax({
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/WebInfos",
            type: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
            },

            success: successCallback,
            error: errorCallback
        });

        function successCallback(data) {
            console.log(data);
            var results = data.d.results;
            for (var i = 0; i < results.length; i++) {
                var room = new app.Room({
                    id: results[i].Id,
                    title: results[i].Title,
                    created: results[i].Created,
                    serverRelativeUrl: results[i].ServerRelativeUrl,
                    lastItemModifiedDate: results[i].LastItemModifiedDate
                })
                vm.allRooms.push(room)
            }
        }

        function errorCallback(err) {
            console.log(JSON.stringify(err));
        }
    })();
};
