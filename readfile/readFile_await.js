const fs = require('fs');


function getNameFile(FileName) {
    return p = new Promise((resolve, reject) => {
        fs.readFile(FileName, 'utf-8', (err, data) => {
            if (err) {

                reject(err);

            } else {
                resolve(data);

            }
        });
    });
}

async function main() {
    try {
        let getName = await getNameFile("test.txt");
        console.log(getName);
    } catch (e) {
        console.log(e);
    }

}
main();