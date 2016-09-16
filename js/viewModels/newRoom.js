var app = app || {};
app.ViewModelNewRoom = function() {
    var vm = this;
    vm.newRoomTitle = ko.observable('');
    vm.createRoom = function() {
        var rndNumber = Math.floor((Math.random() * 100000) + 1);
        var title = vm.newRoomTitle() + rndNumber;

        $.ajax({
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/webinfos/add",
            type: "POST",
            data: JSON.stringify({
                'parameters': {
                    '__metadata': {
                        'type': 'SP.WebInfoCreationInformation'
                    },
                    'Url': title,
                    'Title': title,
                    'Description': title,
                    'Language': 1033,
                    'WebTemplate': 'sts',
                    'UseUniquePermissions': true
                }
            }),
            headers: {
                "accept": "application/json; odata=verbose",
                "content-type": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val()
            },
            success: successCallback,
            error: errorCallback
        });

        function successCallback(data) {
            console.log(data);
            var room = new app.Room({
                id: data.d.Id,
                title: data.d.Title,
                created: data.d.Created,
                serverRelativeUrl: data.d.ServerRelativeUrl,
                webTemplate: data.d.WebTemplate,
                lastItemModifiedDate: data.d.LastItemModifiedDate
            });
            app.vm.rooms.allRooms.push(room);
        };

        function errorCallback(err) {
            console.log(JSON.stringify(err));
        };
    };
};
