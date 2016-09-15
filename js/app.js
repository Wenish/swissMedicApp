var app = app || {};

$(document).ready(function() {
    app.vm = new app.ViewModelMain();
    console.log(ko.toJS(app.vm))
});
