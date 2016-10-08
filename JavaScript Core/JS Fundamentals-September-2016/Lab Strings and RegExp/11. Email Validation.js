function exec([email]) {
    let emailPattern = /^[a-z0-9]+@[a-z0-9.-]+\.[a-z]{2,20}$/i;
    if (emailPattern.test(email)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}
exec([]);