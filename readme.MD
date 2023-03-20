# STACK-SVG

A Node module to convert icomoon symbol-defs.svg to a svg stack with fragments for usage in <img  src=''  />, background-image, mask-image, ...

[Link to icomoon](https://www.icomoon.io)

## Installation

First install the module globally with the following command:

    npm i -g stack-svg

## Usage

Than you can convert your downloaded icomoon 'symbol-defs.svg' using the following command.

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
        transition: all 200ms;
    }
