function exe([year]) {
    let answer = "";
    if ((Number(year) % 4 == 0 && Number(year) % 100 != 0) || Number(year) % 400 == 0) answer = "yes";
    else answer = "no";
    return answer;
}