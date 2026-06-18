function calculateFare(){

    let distance =
    document.getElementById("distance").value;

    let rate =
    document.getElementById("rideType").value;

    if(distance === ""){
        alert("Enter Distance");
        return;
    }

    let fare = distance * rate;

    document.getElementById("fare").innerHTML =
    "Estimated Fare: ₹" + fare;
}