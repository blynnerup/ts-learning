function twoFer(name: string = "you"): string {
    return `One for ${name}, one for me.`
}

function isLeapYear(year: number): boolean {
    if (year % 4 === 0 && year % 100 != 0){
        return true;
    }
    if (year % 400 === 0){
        return true;
    }
    return false;
}

console.log(twoFer())
console.log(twoFer("Elivs"))
console.log(isLeapYear(2012))
console.log(isLeapYear(2013))