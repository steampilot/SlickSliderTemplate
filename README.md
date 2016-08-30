# README.md
GitHub README.md Template
## Synopsis

Simple and easy to use One-Page Template. Complete with a Slick Slider example
### Live example ###
[Slick Slider Template hosted on steampilot.ch](http://www.steampilot.ch/demo/Slick_Slider_Template/)

## Code Example
### Slick Slider
This example shows the basic settings of the Slick Slider.

```javascript
$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint:480,
                settings: "unslick"
            }
        ]
    });
});
```

## Motivation

I wanted to set the foundation for future responsive, mobile first, one page  websites

## Installation

Extract the content in your public_html folder

## API Reference

* [slick.js](http://kenwheeler.github.io/slick/)
* [Twitter Bootstrap](http://getbootstrap.com/)

## Tests

* Use your Web-Dev Browser vor example chrome and try out different screen resolutions.
  * The slider should be adjusting responsively until the smallest brake point is reached. From there on only bootstrap classes should work
* Turn off javascript.

## Contributors

You are welcome to create issues on GitHub
If you are a programmer you might want to submit a pullrequest.

### Codestyle
My Projects follow mostly PSR2 but extend on the following subjects.
* Tab is used as indentation
* Curly brackets stay on end of line

## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
