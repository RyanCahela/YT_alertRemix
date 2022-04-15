function alertRemix(message) {

    //grab the body element
    const body = document.querySelector("body");

    //remove last alert if present
    const previousAlert = document.querySelector(".alert-container");
    if(previousAlert !== null) {
        previousAlert.remove();
    }


    //create the alert box


    //create container
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alert-container');

    //create heading
    const alertHeading = document.createElement("h5");
    alertHeading.textContent = "This page says"
    alertHeading.classList.add("alert__heading");

    //create message
    const alertMessage = document.createElement("p");
    alertMessage.classList.add("alert__message");
    alertMessage.textContent = message;


    //create button
    const alertBtn = document.createElement('button');
    alertBtn.classList.add("alert__btn");
    alertBtn.textContent = "ok";
    alertBtn.addEventListener("click", (e) => {
        alertContainer.remove();
    });

    //insert all element into alert container
    alertContainer.appendChild(alertHeading);
    alertContainer.appendChild(alertMessage);
    alertContainer.appendChild(alertBtn);

    //add alert box to the dom;
    body.prepend(alertContainer);
}