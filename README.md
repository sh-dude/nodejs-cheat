Node.js information and cheatsheets.

General Javascript information will not be discussed here: only Node.js differences.
For a Javascript cheat see: <https://github.com/cirosantilli/web/blob/9db1039276bd8dfd04348e0abbf2b1d2ee75c00d/js.html>

#What is Node.js

Node is Javascript interpreted / compiled by Google's open source V8 Javascript engine
used in Chrome: <https://code.google.com/p/v8>,
official Git mirror at: <https://github.com/v8/v8> outside of browsers.

It transforms Javascript into a language + stdlib comparable to Python or Ruby.

It is often used on server side applications, although it already has many client applications as well.

V8 implements all of ECMAScript 5, so you can use all of it,
including things which you should not usually use from browsers because some browsers don't implement them.

Since it is run from outside the browser, built-in objects such as `document` and `window`
which represent web page concepts are not defined. That those built-in objects
are not defined as part of ECMAScript.

Node does add other built-ins and a file require system. These add functionality
which is often implemented in the stdlib of other languages like Python or Ruby,
such as file IO, and cannot be provided by in-browser Javascript for security concerns.

Node gives great importance to parallel processing, because its development
is closely related with web development, where requests are often made over the network
and always take a very large time to complete.
Many methods have both synchronous and asynchronous versions, including filesystem IO.

##Common js

Informal standard that aims at standardizing the API for Javascript outside of browsers: <http://www.commonjs.org/specs/>

Node implements it.

It specifies things like: Filesystem, log, etc.

##RequireJS

Module loader optimized for browser: <http://requirejs.org/docs/node.html>

Node does not use it.

#Why Node.js

The major advantages of Node.js are:

-   There is a huge number of people who know the base language (Javascript),
    because every web developer must know Javascript as it is run on the front-end,
    while there are tons of backend alternatives (Ruby, Python, PHP, Perl, Java, etc.)

    This means that if you write code in Node.js:

    - many people can understand it already
    - you don't have to learn a new language

-   It  is possible to write a single application that runs on:

    - the server
    - the browser
    - locally

    An example application are markdown engines, in which you may want coherent:

    - server backend rendering before giving content to the browser
    - in-browser rendering for preview as you type
    - local rendering for offline development

    It is therefore no surprise that there are currently 3 Node.js markdown engines
    with huge number of stars on GitHub: [Marked](https://github.com/chjj/marked),
    [markdown-js](https://github.com/evilstreak/markdown-js)
    and [Showdown](https://github.com/coreyti/showdown).

#Invocation

REPL interface:

    node

Run script:

    node a.js

Run `index.js` inside directory:

    node dir/

Analogous to `require(dir)`.

##Stability

The official documentation specifies the stability of each feature.

What each stability level means is specified at:
<http://nodejs.org/api/documentation.html#documentation_stability_index>

Level 3 or above guarantee backwards compatibility.

#Ubuntu install

Don't install from the official repositories: they are seriously outdated.

Be sane, and use `nvm`.

#NVM

Node Version Manager.

Analogous to Ruby RVM or Python virtualenv.

**Use it**.

Install:

    VERSION=0.10.26
    curl https://raw.github.com/creationix/nvm/master/install.sh | sh
    # Before using it, you must:
    source ~/.nvm/nvm.sh
    # so just add that to you `.bashrc`.
    echo "source ~/.nvm/nvm.sh
    nvm use "$VERSION" &>/dev/null
    " >> ~/.bashrc
    nvm install "$VERSION"

Install a new version of Node:

    nvm install 0.9.0
    nvm install 0.9.9

May either download a binary (fast) or compile from source if not possible
(slower and requires that you have dev tools installed).

List currently installed node versions:

    nvm ls

Use a node version:

    nvm use 0.9.9
    node --version
    nvm use 0.9.0
    node --version

Per directory configs:

    echo '0.9.9' > .nvmrc

Use per directory config inside `.nvmrc`:

    node use

Always use this in your project root to set the supported node version.

As of early 2014, does not change version automatically like RVM does.

#NPM

Node package manager. Analogous to Ruby Bundler, Python pip.

As of node `0.9.9` comes together with Node, but several tags behind head.

The config file is `package.json`.

Help:

    npm help
    npm help install
    npm help start

##install

Install all dependencies of `package.json` in current dir under `node_modules`:

    npm install

Help on the format of `package.json`:

    npm help json

- `dependencies`: are installed both when `npm install` from package root and `napm install package`.
- `devDependencies`: are only installed in the former case.
- `peerDependencies`: TODO <http://blog.nodejs.org/2013/02/07/peer-dependencies/>

As explained in `npm help folders`:

-   Local install (default): puts stuff in `./node_modules` of the current package root,
    which is high on the `require` search path.

    If the module comes with executables, those will be put under `./node_modules/.bin`,
    so you should add the following line to your `.bashrc`:

        export PATH="./node_modules/.bin:$PATH"

    This way you will use the executables at the same version as specified on the `package.json`.

-   Global install (with `-g`): puts stuff in `/usr/local` or wherever node is installed.
    TODO: `~/.npm/` vs `~/.nvm/v0.10.26/lib/node_modules/`

-   Install it locally if you´re going to `require()` it.

-   Install it globally if you´re going to run it on the command line.

-   If you need both, then install it in both places, or use `npm link`.

If the current directory contains a `package.json`, install given package under `./node_modeules`:

    npm install package_name

Also modify `dependencies` of `package.json` in current directory if there is one to include the new module:

    npm install package_name --save

Same for `devDependencies`:

    npm install package_name --saveDev

The main advantage of `--save` this is that it sets the current version for you:
you will probably want to edit the `package.json` file to put `dependencies`
in alphabetical order.

###Versions specification

For `dependencies`, `devDependencies` and `peerDependencies`:

-   caret `^`: latest major version. `^1.2.3` matches `1.3.5`, but not `2.0.0`.

    Default on NPM 1.4.3, and probably a good default, since with semantic versioning
    it incorporates new features (`MINOR`) and bug fixes (`PATCH`).

-   tilde `~`: latest minor version. `~1.2.3` matches `1.2.5`, but not `~1.2.0`

-   `""` or `"*"`: any version

##start

##test

##scripts

    npm help scripts

NPM supports a predefined list of scripts to do some common Makefile-like tasks.

The functionality is limited since only tasks with one of the standard names can be used.

Tasks have a default command, and you can configure them under `package.json`
`scripts` `name` section, e.g.:

    "scripts": {
      "start": "echo start",
      "test":  "echo test"
    }

Run the scripts:

    npm start
    npm test

Some scripts are automatically run by certain commands besides their respective command,
e.g. `prepublish` is run not only before `npm publish`, but also before `npm install`,
and can be used to do things like:

- CoffeeScript compilation
- minification
- `bower install`

##info

Get information on a remote package:

    npm info package_name

Returns a JSON which includes information such as available versions
and everything inside the `package.json`.

##Useful global packages

    npm install -g browserify
    npm install -g coffee-script
    npm install -g express-generator@3
    npm install -g marked

##link

Creates symlinks from projects in any directory into the search path.

Useful for interactive tests of a module inside another project.

Example:

    cd ~/projects/module1
    npm link ../module2

Now, running `module1` will use the development version of `module2` located at `~/projects/module2`
using symlinks.

##package.json

The following fields are mandatory:

- `name`
- `version`

##Create a package

<https://www.npmjs.org/doc/misc/npm-developers.html>

-   every file in the directory is published by `npm publish`, even if it's not tracked, unless ignored.

-   if a `.npmignore` file exists, it lists the ignored files and `.gitignore` is not used.

    Otherwise, `.gitignore` is used.

    A `.npmignore` is necessary in most cases, and it ignores the following files
    which are normally not gitignored:

    - tests
    - CoffeScript input

Publish a CoffeeScript package: <http://stackoverflow.com/questions/13645824/can-i-write-npm-package-in-coffeescript>:

- `.gititnore` the `.js` output
- `.npmignore` the CoffeeScript input
- `prepublish: "grunt coffee"`

#Sources

Short tutorials: <http://docs.nodejitsu.com>
