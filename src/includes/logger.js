function logDo(i, t) {
    const logType = {
        0: ["OKAY", "color: rgb(0,148,255);"],
        1: ["ERROR", "color:red;"],
    };
    let logArray = [`%c[%cElite UI%c] [%c${logType[t][0]}%c] ${i}`, "color: none;", "color: rgb(0,148,255);", "color: none;", logType[t][1], "color: none;"];
    console.log.apply(null, logArray);
}