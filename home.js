function openModal() {
    const selectedLocation = document.getElementById('location-link').textContent; 
    if (selectedLocation !== "Select Location") {
        // If a location is already selected, show the modal to re-select
        const modal = new bootstrap.Modal(document.getElementById('locationModal'));
        modal.show();
    } else {
        // If no location is selected, just show the modal
        const modal = new bootstrap.Modal(document.getElementById('locationModal'));
        modal.show();
    }
}

function updateLocation() {
    const locationSelect = document.getElementById('locationSelect');
    const selectedLocation = locationSelect.value;

    if (selectedLocation) {
        // Update the link text to the selected location and change its color to black
        const locationLink = document.getElementById('location-link');
        locationLink.textContent = selectedLocation;
        locationLink.classList.add('selected-location'); // Add class for black color

        // Close the modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('locationModal'));
        modal.hide();
    }
}