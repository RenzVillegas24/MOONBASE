var head = document.getElementsByTagName('head')[0];

head.innerHTML += ` 
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">    
    <link id="icon" rel="icon" href="${window.location.origin}/files/images/icon/moonbase_${window.matchMedia('(prefers-color-scheme: dark)').matches ? "light" : "dark"}.png">
    `;


var jQueryScript = document.createElement('script');
jQueryScript.type = 'text/javascript';
jQueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js";
jQueryScript.onreadystatechange = jQueryOnLoad;
jQueryScript.onload = jQueryOnLoad;

head.appendChild(jQueryScript);


// jQuery loaded
function jQueryOnLoad(){

    var header = $('<nav/>', {
        id: 'header'
    })

    header.append( $('<div/>', {
        id: 'title',
        html: $("#headerVals").data("title")
    }));  
    
    if (typeof $("#headerVals").data("subtitle") !== 'undefined'){
        header.append( $('<div/>', {
            id: 'subTitle',
            html: $("#headerVals").data("subtitle")
        }));  
    }

    $("#headerVals").remove()
    $("body").append(header);

}

console.log(`${window.location.origin}/files/images/icon/MoonbaseDark.png`)
if(window.matchMedia){
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        $("#icon").attr('href', `${window.location.origin}/files/images/icon/moonbase_${event.matches ? "light" : "dark"}.png`);
    });
}