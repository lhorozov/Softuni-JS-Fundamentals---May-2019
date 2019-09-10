function cents(centuries) {
    let years = centuries * 100;
    let days = (years * 365.2422).toFixed(0);
    let hours = parseInt(days * 24);
    let minutes = parseInt(hours * 60);

    console.log(`${centuries} centuries = ${parseInt(years)} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}
cents(5)

//1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes