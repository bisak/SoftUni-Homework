function exec(input) {
    let users = [];
    for (let x of input) {
        let user = x.split('@')[0];
        let domain = x.split('@')[1];
        let domainDots = domain.split('.');
        let secondary = [];
        for(let y of domainDots){
            secondary.push(y[0]);
        }
        users.push(user+"."+secondary.join(""));
    }
    console.log(users.join(", "))
}
exec(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])