    function modalImage(imageId, modalId, modalImageId, captionId, closeId) {
        // Get the modal
        var modal = document.getElementById(modalId);

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById(imageId);
        var modalImg = document.getElementById(modalImageId);
        var captionText = document.getElementById(captionId);
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        };

        // Get the <span> element that closes the modal
        var span = document.getElementById(closeId);

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
    }