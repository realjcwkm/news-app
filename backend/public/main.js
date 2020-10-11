const select = ( selector ) => {
    return document.querySelector( selector );
}
// select(".class");
const form = select( ".form" );
const message = select( ".message" );

const displayMessage = ( text, color ) => {
    message.style.visibility = "visible";
    message.style.backGroundColor = color;
    message.innerText = text;

    setTimeout( () => {
        message.style.visibility = "hidden";
    }, 3000 );
}

const validateForm = () => {
    const title = select( "#title" ).value.trim();
    const content = select( "#content" ).value.trim();
    const thumbnail = select( "#thumbnail" ).value;
    const category = select( "#category" ).value;

    const expectedImageFiles = ["jpg", "jpeg", "png"];

    if ( !title || !content || !thumbnail || category == '0' ) {
        return displayMessage( "Field can not be empty", "red" );
    }

    const extension = thumbnail.split( "." ).pop();
    if ( !expectedImageFiles.includes( extension ) ) {
        return displayMessage( "Image file is not valid", "red" );
    }
    return true;
}

form.addEventListener( "submit", ( e ) => {
    e.preventDefault();

    const valid = validateForm();

    if ( valid ) {

    }
} );