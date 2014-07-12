## About

TypeScript is a superset of JavaScript (Ecmascript 5/6) from Microsoft that compiles into readable Javascript. Any valid JavaScript code is also valid TypeScript code.

TypeScript supports classes, type hinting, optional arguments, modules (which can be compiled to CommonJS or AMD modules) and other features.

Typescript can interact with JavaScript libraries like jQuery with using of declaration files (*.d.ts or *.ts files).

This cheet sheet contains the following two files:
- index.ts - quick intro to the TypeScript. To run/stop of it use the `make` and `make kill`.
- browser.ts - simple demo of the TypeScript in the browser. To run of it compile it manuall and open browser.html in the browser.


## Installation

Install of the TypeScript Compiler (tsc)

    npm install -g typescript


## Usage

Compile to `file.js`:

    tsc file.ts

---

Generate the CommonJS module `my-module.js`:

    tsc -m commonjs my-module.ts

---

Generate the AMD module `my-module.js`:

    tsc -m amd my-module.ts

---

Watch and compile the `my-script.ts` on change:

    tsc -w my-script.ts


## Useful links

* [Handbook](http://www.typescriptlang.org/Handbook) - is good place to start

* [Language source and examples](http://typescript.codeplex.com/SourceControl/latest#README.txt)

* [Language Specification](http://www.typescriptlang.org/Content/TypeScript%20Language%20Specification.pdf)

* [Language Roadmap](http://typescript.codeplex.com/wikipage?title=Roadmap&referringTitle=Home)

* [Declaration (d.ts) files for JavaScript libraries](https://github.com/borisyankov/DefinitelyTyped).
