#WellStoried Demo

Live version hosted at [http://wellstoried.8pi.ca/](http://wellstoried.8pi.ca/)


Gulp usage: 

```
// watch sass and build when changed
gulp stream

// compress js and move to dist
gulp uglify

// optimize images and move to disk
gulp images

// compile sass
gulp compass

//perform all tasks and move result to dist
gulp build
```

To do list given more time:

* Kerning on "Well Storied" seems off, don't have font to redo
* Write fallback code so it degrades gracefully on older browsers
* Add favicon/apple touch icons
* Play with other animation effects for main circle
* Footer is true to design, but is hard to read, make links bigger/brighter?
* In small screen responsive version, make circle fit as per design, would require some time/math to make work and scale exactly
* Image preloader for main background
