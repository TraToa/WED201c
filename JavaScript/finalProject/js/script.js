/*Name this external file gallery.js*/

function update(source){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */

    var element = document.getElementById("display")
    var previewPic = source.querySelector('img')
    var alt = previewPic.alt
    var src = previewPic.src

    element.innerHTML = alt
    element.style.backgroundImage = "url(" + src + ")"
    element.style.backgroundSize = "cover"
}

function undo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */

    var element = document.getElementById("display")

    element.innerHTML = "hover images to inspect agnas"
    element.style.backgroundImage = "url()"
}