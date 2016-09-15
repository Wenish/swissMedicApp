var app = app || {};
app.Room = function(options) {
    this.id = options.id
    this.title = options.title
    this.created = options.created
    this.serverRelativeUrl = options.serverRelativeUrl
    this.lastItemModifiedDate = ko.observable(options.lastItemModifiedDate)
};
