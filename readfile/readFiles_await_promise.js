const fs = require('fs/promises');

(async() => {
    try {
        let FileName = "test.txt";
        let result = await fs.readFile(FileName, "utf-8");
        console.log(result);
        // console.log(result("test.txt"));
    } catch (e) {
        console.log(e);
    }
})();