const fs = require('fs');

class WriteFile {
    constructor(managerInfo, employeeInfo) {
        this.fileContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <div class="jumbotron">
        <h1 class="display-4 mx-4">${managerInfo.name}'s Team</h1>
    </div>

    <div class="container">
        <div class="row justify-space-around">
            ${this.writeCards(employeeInfo)}
        </div>
    </div>
</body>
</html>
        `;
    }

    writeCards(employeeInfo) {
        const cards = employeeInfo.map(element => `
            <div class="card col-3 p-0 m-2 justify-space-around">
                <div class="card-header m-0">
                    <h3 class="card-title text-center">${element.name}</h3>
                </div>
                <div class="card-body">
                    <h4 class="card-title text-center">${element.getRole()}</h4>
                </div>
            </div>
        `);

        return cards.join('');
    }

    writeHTML() {
        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/index.html', this.fileContent, err => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve({
                    return: true,
                    message: 'Profile generated!'
                });
            });
        });
    }
};

module.exports = WriteFile;