
function licenseBadge (data) {
  if (data.license === "MIT") {
    data.licenseType = "This project is licensed under the MIT license";
    data.badges = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } 
  else if(data.license === "GNU GPLv3") {
    data.licenseType = "This project is licensed under the GNU GPLv3 license";
    data.badges = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
  } 
  else if(data.license === "WTFPL") {
    data.licenseType = "This project is licensed under the WTFPL license";
    data.badges = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  } 
  
  else if(data.license === "Unlicense") {
    data.licenseType = "This project is licensed under the Unlicense license";
    data.badges = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  } 
  
  
  
  
  
  
  
  
  
  
  else {
    data.licenseType = "This project has no license";
    data.badges = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
  }
}



function generateMarkdown(data) {

  licenseBadge(data);

  return `
# ${data.title}

${data.licenseType}
${data.badges}

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
