function layoutPage(loggedIn) {
    let items = document.getElementsByClassName('loggedInVisible');
    if (loggedIn == 'false') {
        for (let item of items) {
      	    item.style.display = 'none';
        }
    }  else {
        for (let item of items) {
            item.style.display = 'block';
      }
    }
}

// Render image thumbnails
function handleImageSelection(event) {
    event.stopPropagation();
    event.preventDefault();
    
    const files = event.dataTransfer.files;

    for (var i=0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
            continue;
        }
        const fname = escape(f.name);
        var reader = new FileReader();
        reader.onload = (function(file) {
            return function(e) {
                var span = document.createElement('span');
                span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(file.name), '"/>'].join('');
                const imgObjName = "img-" + fname;
                //console.log(imgObjName);
                const imgObj = { "name": fname, "data": e.target.result };
                sessionStorage.setItem(imgObjName, JSON.stringify(imgObj));
                document.getElementById('list').insertBefore(span, null);
            };
        })(f);
        reader.readAsDataURL(f);
    }
}

function handleDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
}

function saveListing() {

    const titleFieldContents = document.getElementById("titleField").value;
    const descriptionFieldContents = document.getElementById("descriptionField").value;
    const listingTypeFieldContents = document.getElementById("postTypeField").value;

    var listingObj = { title: titleFieldContents, desc: descriptionFieldContents, listingIsOffer: listingTypeFieldContents, images: [] };

    var listingImgIdx = 0;
    for (var i = 0; i < sessionStorage.length; i++) {
        const imgObj = sessionStorage.getItem(sessionStorage.key(i));
        listingObj.images.push(imgObj);
    }

    console.log("x", listingObj);
}

function retrieveAllListings() {

    for (var i=0; i < sessionStorage.length; i++) {
        console.log(sessionStorage.getItem(sessionStorage.key(i)));
    }
}