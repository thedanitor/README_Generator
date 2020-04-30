function generateMarkdown(data) {
  return `
# ${data.title}

${data.description}

![Profile Photo](${data.photo}=250x) 

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
