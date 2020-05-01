


function generateMarkdown(data) {

//   let licenseType = "This project has no license";
//   let badges = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"

// function licenseBadge () {
// if(${answers.license} === "MIT") {
//   let licenseType = "This project is licensed under the MIT license";
//   let badges = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
// } else {
//   let licenseType = "This project has no license";
//   let badges = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
// }
// }
// licenseBadge();

  return `
# ${data.title}

${data.licenseType}

${data.description}

<img src="${data.photo}" alt="Profile Photo" width="200px"/>

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
<!-- * [Credits](#credits) -->
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
## Installation

To install the necessary dependencies, run the following commnand:


## Usage

<!-- ## Credits? -->

## License



## Contributing

## Tests


`;
}

module.exports = generateMarkdown;
