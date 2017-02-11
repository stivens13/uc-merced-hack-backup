var fs = require("fs");
fs.writeFile("time.txt", "fuuccckkkk", (err) => {
    if (err) {
        console.log(err);
    }

})

fs.readFile("time.txt", {}, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString())
})