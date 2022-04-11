function superbowlWin(years) {
    const winningYear = years.find((year) => year["result"] === "W");
    return winningYear ? winningYear['year'] : winningYear;    
}