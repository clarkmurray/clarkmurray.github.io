---
layout: post
title: "Equal Height Columns With Flexbox"
---


Already in my web development endeavors, I have frequently encountered trouble with a staple of web design that has no easy and reliable solution using regular CSS: equal height columns. While it can be accomplished with "hacks" such as setting up your content as a table to make your columns cells with equal height, none of these solutions are reliable in their responsiveness or interaction with the rest of your page. JavaScript could also be used, but should we really be forced to violate separation of concerns and write a block of code just to accomplish some of the most essential tasks in modern web design? Of course not!

Thankfully, an easier and far more effective CSS-based method can be found using Flexbox. Flexbox (short for "flexible box") was introduced in CSS3 as a responsive alternative to the block model. Where the block model assigns block height based on the box's contents and is inflexible, Flexbox allows you to forego the headache of using floats and have more precide control over the style and positioning of your boxes and their child elements while also looking great on all screen sizes. To make the deal even sweeter, Flexbox is now supported on all major modern browsers (Chrome, FireFox, Safari, etc.), which means it is enjoying widespread use and, unless your site's audience is expected to be on IE9-, it is to safe to use reliably in your own projects.

As an example of Flexbox's usefulness, I recently used it to finish work on a Hangman project written in JavaScript. Initially I had each part of the game stacked on top of one another, for which the box model was perfectly appropriate. Upon deciding to place my word next to the "gallows", however, I found that I could not properly align my box contents because they were in separate divs and the gallows div was so much larger than the phrase div. The solution was to change the display of my boxes from `display: block;` to `display: flex`.

This plays very well with Bootstrap. Given that Bootstrap already divides the page's content into a series of  `<div class="row">`'s, all I had to do was add a class to the row indicating that Flexbox was to be used, and set that class's display to `flex`. Thus, with just a few words of code, I had equal-height columns regardless of the amount of content in each of them! To make columns more readable and to prevent the layout from breaking when child elements overflow out of their boxes, be sure to set `flex-wrap` to `wrap`. This will keep your columns neatly aligned in their rows the way you want them. 

Thus,

```css
.row.flex-row {
	display: flex;
	flex-wrap: wrap;
} 
```

will give all columns in rows `flex-row` a height equal to the largest box in the row, with overflowing boxes beginning a new row rather than squishing your boxes' contents. Ta-da!

There is so much more to Flexbox than just these examples. You can change the direction of your flex containers, make your flexboxes inline instead of block, justify and align your content, and determine the order of your contents within a flex container. For more information and examples, check out W3's [documentation](https://www.w3schools.com/css/css3_flexbox.asp) as well as the [Mozilla Developer's Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).