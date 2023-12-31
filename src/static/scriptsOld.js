// function to enable darkmode
function enableDarkMode() {
    const body = document.querySelector('body');
    body.classList.add('dark-mode');
}

// function to disable darkmode
function disableDarkMode() {
    const body = document.querySelector('body');
    body.classList.remove('dark-mode');
}

// Event-Handler for dark mode button
const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.addEventListener('click', function () {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});


// function for loading initials
function loadInitials() {
    $.ajax({
        url: '/get_initials',
        method: 'GET',
        success: function (data) {
            var initialsSelect = $('#initials_select_old');
            initialsSelect.empty();
            initialsSelect.append($('<option>').val('').text('Choose Initials'));
            $.each(data, function (index, initials) {
                initialsSelect.append($('<option>').val(initials).text(initials));
            });
        }
    });
}

// function for loading tracks
function loadTracks(initials) {
    $.ajax({
        url: '/get_tracks/' + initials,
        method: 'GET',
        success: function (data) {
            var tracksSelect = $('#tracks_select_old');
            tracksSelect.empty();
            tracksSelect.append($('<option>').val('').text('Choose a Track'));
            $.each(data, function (index, trackId) {
                tracksSelect.append($('<option>').val(trackId).text('Track ' + trackId));
            });
        }
    });
}

// function for displaying tracks on map
function displayTrack(trackId) {
    if (trackId) {
        // get waypoints for given track id
        $.ajax({
            url: '/display_track/' + trackId,
            method: 'GET',
            success: function (mapHtml) {
                // replace map-container content with rendered map for track
                $('.map-container').html(mapHtml);
            }
        });
    } else {
        // if no track available empty container
        $('#map-container').empty();
    }
}

// Event-Handler for initials
$('#initials_select_old').change(function () {
    var initials = $(this).val();
    if (initials) {
        loadTracks(initials);
        displayTrack(null);
    }
});

// Event-Handler for track selection
$('#tracks_select_old').change(function () {
    var trackId = $(this).val();
    displayTrack(trackId);
});

// Event-Handler für den Button "Neue Version öffnen"
const newVersionButton = document.getElementById('new-version');
newVersionButton.addEventListener('click', function () {
    // Weiterleitung zur neuen Version
    window.location.href = '/'; // Passe die Route entsprechend an
});

// load initials on page startup
loadInitials();