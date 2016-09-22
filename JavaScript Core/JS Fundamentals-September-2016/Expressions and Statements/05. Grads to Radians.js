function exe([grads]) {
    let degrees;
    degrees = grads*0.9;
    let rem = Math.abs(degrees%360);
    if(degrees<0) degrees = 360 - rem;
    else if (degrees>360) degrees = degrees%360;
    console.log(degrees);
}

exe([850])