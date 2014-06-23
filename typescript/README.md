TypeScript is a superset of JavaScript (Ecmascript 5/6) from Microsoft that compiles into readable Javascript. Any valid JavaScript code is also valid TypeScript code.

TypeScript supports classes, type hinting, optional arguments, modules (which can be compiled to CommonJS or AMD modules).

Typescript can interact with JavaScript libraries like jQuery with using of declaration files (which has d.ts suffix).


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


## Useful links

* [Handbook](http://www.typescriptlang.org/Handbook) - is good place to start

* [Language source and examples](http://typescript.codeplex.com/SourceControl/latest#README.txt)

* [Language Specification](http://www.typescriptlang.org/Content/TypeScript%20Language%20Specification.pdf)

* [Language Roadmap](http://typescript.codeplex.com/wikipage?title=Roadmap&referringTitle=Home)

* [Declaration (d.ts) files for JavaScript libraries](https://github.com/borisyankov/DefinitelyTyped).
