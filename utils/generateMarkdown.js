// Create badge depending on license type selected
function licenseBadge(data) {
  if (data.license === "MIT") {
    data.licenseType = "This project is licensed under the MIT license";
    data.badges =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (data.license === "GNU GPLv3") {
    data.licenseType = "This project is licensed under the GNU GPLv3 license";
    data.badges =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "WTFPL") {
    data.licenseType = "This project is licensed under the WTFPL license";
    data.badges =
      "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
  } else if (data.license === "Unlicense") {
    data.licenseType = "This project is licensed under the Unlicense license";
    data.badges =
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else {
    data.licenseType = "This project has no license information";
    data.badges =
      "[![Generic badge](https://img.shields.io/badge/License-NoLicense-red.svg)](https://shields.io/)";
  }
}

function generateMarkdown(data) {
  licenseBadge(data);
  return `
# ${data.title}

${data.badges}

${data.url}

${data.description}
The generated README file is intended to be a template and will likely require some additions specific to the repository.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
## Installation

To install the necessary dependencies, run ${data.install} on the commnand line.

## Usage

${data.usage}

## License

${data.licenseType}

## Contributing

${data.contribute}

## Tests

To test the project, run ${data.tests} on the command line.

## Questions

If you have any questions please email me at ${data.email}.

<img src="${data.photo}" alt="Profile Photo" width="100px"/>

## Credits

${data.credits}

`;
}

module.exports = generateMarkdown;
