# cf-detect [![Build Status](https://travis-ci.org/nicholasadamou/cf-detect.svg?branch=master)](https://travis-ci.org/nicholasadamou/cf-detect)

![project preview](cf-detect.png)

![license](https://img.shields.io/apm/l/vim-mode.svg)
[![DevDependencies](https://img.shields.io/david/dev/nicholasadamou/cf-detect.svg?style=flat-square)](https://david-dm.org/nicholasadamou/cf-detect#info=devDependencies)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=nicholasadamou/cf-detect)](https://dependabot.com)
[![Say Thanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/NicholasAdamou)

[About](#about) / [Requirements](#requirements) / [Installation](#installation) / [Credits](#credits) / [License](#license)

## About

`cf-detect` is a simple web application to check whether a site is running behind Cloudflare.

## Installation

Clone the repository and install all dependencies by running:

```
$ git clone https://github.com/nicholasadamou/cf-detect
$ cd cf-detect/
$ yarn install
```

Subsequently, create a `.env` file and declare a variable called `SECRET` (for session security purposes):

```
$ echo "SECRET=[your-secret-goes-here]" > .env
```

Finally, build the project by running:

```
$ yarn start
```

You can then access the service by navigating to [`localhost:3000`](http://localhost:3000/).

## Credits

-   Cloudflare's logo was taken from [seeklogo.com](https://seeklogo.com/vector-logo/294312/cloudflare).

## Related

-   [cloudflare-detect](https://github.com/k4m4/cloudflare-detect) - Detect whether a site is running behind Cloudflare.

## License

Copyright (c) 2018 by Nicholas Adamou. Some rights reserved.

`cf-detect` is under the terms of the **MIT License**, following all clarifications stated in the [license file](license.md).
