# Pixrem CLI

A command line wrapper for the excellent [pixrem module](https://www.npmjs.com/package/pixrem).
Adds pixel fallbacks for rem units to support IE<9.

## Install

`npm install --save pixrem-cli`

## Usage

Pixrem CLI takes 3 arguments:

|Argument|Alias|Default|Description|
|---|---|---|---|
|`--input`|`-i`|`n/a`|Relative path to the stylesheet to process|
|`--output`|`-o`|`n/a`|Relative path to save the processed stylesheet|
|`--rootvalue`|`-r`|`16px`|Default font size for conversion e.g 16px == 1rem|

## Example

`pixrem -i style.css -o style.processed.css -r 16px`