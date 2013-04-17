glCarousel
==========
Yet another jQuery plugin for carousels!

## Features
* Slide through items in a list
* You could put any content in a carousel item
* Auto-play
* Loop back when the last item is reached
* Pagination
* Stop Youtube (and iframe-based) media player within a carousel item if it's no longer in view

## Why would you like this
(over the other hundreds of similar plugins around)
* Minimal CSS (requires only 3 lines of CSS to work). 
* Unobstructive and easily customisable to your own UI.

## Live demo
[View live demo](http://mrdungx.net/github/glcarousel/demo.html)

## Usage
Default:
```
$('#carousel-1').glCarousel();
```


With pagination:
```
$('#carousel-3').glCarousel({
	itemsToScroll: 1,
	scrollTime: 800,
	loop: true,
	interval: 0,
	pagination: true
});
```


Auto-play, scrolling through 3 items at a time:
```
$('#carousel-2').glCarousel({
	itemsToScroll: 3,
	scrollTime: 800,
	loop: true,
	interval: 3000,
	pagination: false
});
```
