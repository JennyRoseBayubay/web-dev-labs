<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Selection</title>
</head>
<body>
    <h1 id="page-title">Original Heading</h1>
    <button id="change-button">Change Heading</button>

    <script src="dom.js"></script>
</body>
</html>

document.addEventListener('DOMContentLoaded', function() {
    const changeButton = document.getElementById('change-button');
    const pageTitle = document.getElementById('page-title');

    changeButton.addEventListener('click', function() {
        pageTitle.innerText = 'New Heading Text!';
    });
});