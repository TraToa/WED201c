/*Name this external file gallery.js*/

var element = document.getElementById("image")

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */

    var alt = previewPic.alt
    var src = previewPic.src

    element.innerHTML = alt

    let sheet = document.styleSheets[0];
    for (let rule of sheet.cssRules) {
        if (rule.selectorText === "#image") {
            rule.style.backgroundImage = "url(" + src + ")"
        }
    }
}

function unDo(){
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */

    element.innerHTML = "Hover over an image below to display here."

    let sheet = document.styleSheets[0];
    for (let rule of sheet.cssRules) {
        if (rule.selectorText === "#image") {
            rule.style.backgroundImage = "url(" + ")"
        }
    }
}