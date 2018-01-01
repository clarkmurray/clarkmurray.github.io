---
layout: post
title: "Frameworks vs. Libraries"
---

Despite libraries and frameworks both enjoying widespread use in web development, there is much confusion about the difference between the two, and the two terms are often (incorrectly) used interchangeably. The confusion is understandable. Both libraries and frameworks consist of pre-written code designed to reliably and efficiently solve common problems. However, the way in which the user calls said code differs greatly. For example, look at the following code required to call a 'greet' function and a 'goodbye' function using jQuery and Vue.js, a popular JavaScript library and framework respectively.


### jQuery

HTML:
```
<button id='greet'>Greeting</button> 
<button id='goodbye'>Goodbye</button>
```

JavaScript:
```
$('#greet').click(function() {
	alert('Hello Reader!');
});


document.getElementById('goodbye').addEventListener('click', goodbye);

function goodbye() {
	alert('Goodbye Reader!');
}
```


### Vue.js

HTML:
```
<div id='app'>
	<button v-on:click='greet'>Greeting</button>
	button v-on:click='goodbye'>Goodbye</button>
</div>
```

JavaScript:
```
var app = new Vue({
  el: '#app',
  data: {
    greeting: 'Hello Reader!',
    goodbye: 'Goodbye Reader!'
  },
  methods: {
  	greet: function() {
  		alert(this.greeting);
  	},
  	goodbye: function() {
  		alert(this.goodbye);
  	}
  }
});

```


Notice how the jQuery example appears to be shorter and cleaner than the Vue component that does the same thing. This is because developers have complete control over libraries. They can choose when, where, and how to call them, with control over the structure of the application being immediatedly returned to the developer after the library method has been called and performed. That is to say, using a library method once does not dictate if or how it should be used again. They are non-invasive and do not need to fit within a certain design pattern, making them very flexible.

Frameworks, on the other hand, always apply once called. Rather than putting code from the framework into your HTML and scripts, as you would with a library, you instead put your code within the rigid structure of the framework. This is known as "Inversion of Control"--the framework, not the developer, is in charge of the structure and flow of the application, and there is a set of best practice patterns that the developer is expected to adhere to. Thus, whereas libraries do not require that all functions be written with the library in mind (for example, note the vanilla JavaScript function in the jQuery snippet), all functions performed within the Vue component must be defined within that component's "methods" object. The vanilla JavaScript function would therefore not work within the Vue component, nor should it have to be, as the framework includes the event listener within the actual HTML instead.

Given that libraries are smaller and simpler, why would you use a framework instead? In the case of this application, you wouldn't. This is because the size of the application is very small and straightforward, making a framework overkill. The advantage of frameworks is that they scale well with larger applications and make working with data (both from the front-end and the back-end) more efficient. The skeleton of a component only needs to be written once, with each subsequent method or data variable that you add being placed within its corresponding object. Many frameworks, including Vue, offer benefits such as writing HTML code within your JavaScript or utilizing a Virtual DOM, which allows updates to data to be reflected on screen without requiring the browser to refresh the page. These are far more complex tasks than libraries such as jQuery can handle. 

The decision between choosing a library or a framework is largely an arbitary one, however. It is common to use both a library and a framework (or even many libraries and frameworks) within the same application to fulfill different purposes. For example, a chat app might make use of the jQuery library for animations and the Carbon library for message timestamps, while also using the CSS framework Bootstrap for styling, Vue.js for the front-end, and Django or Ruby on Rails as a server-side framework.