glCarousel
==========
Yet another jQuery plugin for carousels!

## Features
* Slide through items in a list
* Auto-play
* Loop back when the last item is reached
* Pagination

## Why will you like this
* Minimal CSS (requires only 3 lines of CSS to work). 
* Unobstructive and easily customisable to your own UI.

## Live demo
[View live demo](http://mrdungx.net/github/glcarousel/demo.html)

## Usage
Default
```
$('#carousel-1').glCarousel();
```


With pagination:
```
$('#carousel-2').glCarousel({
	itemsToScroll: 1,
	scrollTime: 800,
	loop: true,
	interval: 0,
	pagination: true
});
```


Auto-play, scrolling through 2 items at a time:
```
$('#carousel-3').glCarousel({
	itemsToScroll: 2,
	scrollTime: 800,
	loop: true,
	interval: 3000,
	pagination: false
});
```
