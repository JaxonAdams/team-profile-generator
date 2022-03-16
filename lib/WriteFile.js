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
    <div class="jumbotron bg-success">
        <h1 class="display-4 mx-4">${managerInfo.name}'s Team</h1>
    </div>

    <div class="container">
        <div class="row justify-space-around">
            <div class="card col-3 p-0 m-2 justify-space-around">
                <div class="card-header m-0 bg-info">
                    <h3 class="card-title text-center">${managerInfo.name}</h3>
                </div>
                <div class="card-body">
                    <h4 class="card-title text-center"><i class="bi bi-person-workspace"></i> ${managerInfo.getRole()}</h4>
                    <p class="card-text mb-1">Employee ID: ${managerInfo.id}</p>
                    <p class="card-text mb-1">Email: <a class="text-info" href="mailto:${managerInfo.email}">${managerInfo.email}</a></p>
                    <p class="card-text mb-1">Office Number: ${managerInfo.officeNumber}</p>
                </div>
            </div>
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
                <div class="card-header m-0 bg-info">
                    <h3 class="card-title text-center">${element.name}</h3>
                </div>
                <div class="card-body">
                    <h4 class="card-title text-center"><i class="bi bi-person-workspace"></i> ${element.getRole()}</h4>
                    <p class="card-text mb-1">Employee ID: ${element.id}</p>
                    <p class="card-text mb-1">Email: <a class="text-info" href="mailto:${element.email}">${element.email}</a></p>
                    <a class="card-text mb-1 text-info" href="https://github.com/${this.getUniqueGithub(element)}" target="_Blank">${this.getUniqueGithub(element)}</a>
                    <p class="card-text mb-1">${this.getUniqueSchool(element)}</p>
                </div>
            </div>
        `);

        return cards.join('');
    }

    getUniqueGithub(element) {
        if (!element.github) {
            return '';
        }

        return element.github;
    }

    getUniqueSchool(element) {
        if (!element.school) {
            return '';
        } 

        return `Attending ${element.school}`;
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