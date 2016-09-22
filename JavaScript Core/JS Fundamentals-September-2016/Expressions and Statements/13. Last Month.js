function exe([day, month,year]) {
    let date = new Date(year, month-1, 0);
    console.log(date.getDate());
}
exe(['17','3','2002']);