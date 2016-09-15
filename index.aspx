<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <title>Swiss Medic App</title>
    <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE" />
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui" name="viewport">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="black" name="apple-mobile-web-app-status-bar-style">

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/png" href="https://twitchemotes.com/favicon.png" />

    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="css/app.css">
</head>

<body>
    <form runat="server">
        <SharePoint:FormDigest ID="FormDigest1" runat="server"></SharePoint:FormDigest>
    </form>
    <div class="rooms" data-bind="foreach: rooms.allRooms">
      <span data-bind="text: 'Room: ' + title"></span><br/>
    </div>
    <button data-bind="click: newRoom.createRoom">creat Room</button>
    <!-- js sharepoint -->
    <script src="/_layouts/15/core.js"></script>
    <script src="/_layouts/1033/init.js"></script>
    <script src="/_layouts/15/MicrosoftAjax.js"></script>
    <script src="/_layouts/15/sp.core.js"></script>
    <script src="/_layouts/15/sp.runtime.js"></script>
    <script src="/_layouts/15/sp.js"></script>

    <!-- js vendor -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>

    <!-- js classes -->
    <script src="js/classes/file.js"></script>
    <script src="js/classes/room.js"></script>
    <script src="js/classes/user.js"></script>

    <!-- js viewModels -->
    <script src="js/viewModels/main.js"></script>
    <script src="js/viewModels/rooms.js"></script>
    <script src="js/viewModels/newRoom.js"></script>

    <!-- js custom -->
    <script src="js/app.js"></script>
</body>

</html>
