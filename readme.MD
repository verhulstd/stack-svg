# STACK-SVG

A Node module to convert icomoon symbol-defs.svg to an svg stack accessible with fragment identifiers for usage in img-src, background-image, mask-image,...
Every SVG can be accessed, sized and colored separately.

[Link to icomoon](https://www.icomoon.io){:target="\_blank"}

## Installation

First install the module globally with the following cli command in your favorite terminal:

    npm i -g stack-svg

## Usage

After installation you can convert your downloaded icomoon 'symbol-defs.svg' using the following command:

    stack-svg ./symbol-defs.svg ./icons/icons.svg

## sass mixin:

    @mixin icon($id, $color: black, $size: 32px) {
        width: $size;
        height: $size;
        -webkit-mask-image: url('./icons/icons.svg#{"#"}#{$id}');
        mask-image: url('./icons/icons.svg#{"#"}#{$id}');
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        mask-size: contain;
        background-color: $color;
    }

## sass usage:

    &::after {
        content: "";
        display: block;
        position: absolute;
        right: 0px;
        top: 11px;
        @include icon("icon-chevron", #f00, 4.4rem);
    }

'icon-chevron' is the name of the icon given by icomoon.
