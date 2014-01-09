Stabilized
==========

A lightweight, responsive css boilerplate for [Lightwell's](http://lightwell3d.com) web projects.

See the sample at [lightwell3d.github.io](http://lightwell3d.github.io/Stabilized)

Docs
---

### Installation

You can obtain the source code either by cloning this repository or by copying `Stabilized.css` from the `css` subdirectory in this project into your stylesheet directory. Include the following in your HTML:

	<link rel="stylesheet" type="text/css" href="your/path/to/Stabilized.css">

### Usage

Contributing
---

### Setup

Stabilized is written using [SASS](http://sass-lang.com). Builds are managed with Grunt, so you will need to have [NodeJS](http://nodejs.org) and [Grunt](http://gruntjs.com) installed on your machine to build these files. You will also need [Compass](http://compass-style.org) to compile the CSS.

First, go to [nodejs.org](http://nodejs.org) and download and install Node. A download link is right in the middle of the Node homepage. Next, type the following lines into a new terminal window:

	$ npm install -g grunt-cli
	$ gem update --system
	$ gem install compass modular-scale sass

Now, clone the repository in whatever working directory you would like:

	$ cd ~/path/to/your/preferred/directory
	$ git clone https://github.com/lightwell3d/Stabilized.git
	$ cd Stabilized

Install dependencies and run the grunt build task:

	$ npm install
	$ grunt build

You should see that the css directory has been rebuilt from the source code and contains a new `Stabilized.css` file.

### Watching for Changes

Running the grunt watch task with

	$ grunt watch

will monitor `app/*.jade` and the entire `app/sass` directory for changes. Any time one of these files is updated, Grunt will rebuild the stylesheets in the `css` directory.

Copyright & License
---

Lightwell Modifications:

Copyright (C) 2013 Lightwell - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.