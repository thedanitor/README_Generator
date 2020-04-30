function generateMarkdown(data) {
  return `
# ${data.title}

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

## Usage

<!-- ## Credits? -->

## License



## Contributing

## Tests


`;
}

module.exports = generateMarkdown;
