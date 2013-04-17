glCarousel
==========

### Live demo

### Usage
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
