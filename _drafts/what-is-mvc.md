---
layout: post
title: "What is MVC?"
---

When I first began studying web development, I often encountered the acronym "MVC" when reading about various application frameworks, enough so that I was prompted to research what exactly "MVC" meant. A quick Google search was enough to reveal that it stood for "Model-View-Controller", but understanding what exactly that meant was a little more opaque. What was not opaque was its importance to the field of web development. From Laravel to .NET to Ruby on Rails and Django, MVC is everywhere in modern web development, and it doesn't appear to be going anywhere any time soon. Indeed, as I have advanced in my skills and project scope, it has become a cornerstone of my own applications, necessitating a thorough understanding of what it is and why it is so popular. So what is MVC?

MVC is a software architecture pattern built around the concept of separation of concerns. It was first invented by Trygve Reenskaug while working at the famed Xerox Palo Alto Research Center (PARC) in 1979 and subsequently implemented into the Smalltalk programming language as a means of working with graphical user interfaces (GUI). Over time, it evolved into one of the most popular and influential patterns in software development across a variety of platforms, though it has gained an especially strong foothold in web development due to its modularity and the ease with which it can create and manage user interfaces. As the name implies, MVC applications consist of three components--models, views, and controllers--with each component handling a different part of the application. 




## Model


The model is, simply put, the data for the application. A model can be a defined class or series of objects, or it can be the application's database (or both). While it is the backbone of any MVC application, it serves only to provide a representation of real-world objects via data--with any updates to the data itself or how it is displayed being handled by the two other components. In other words, the model is passive--it allows the data to be manipulated, but does not manipulate it itself.




## View


The view is responsible for displaying the data from the Model. However, it rarely displays *all* of the data that the model provides. Instead, it filters the data, presenting only what is most pertinent to the user of that given view. Views are capable of processing minor logic by themselves, such as looping through data in the view or basic conditionals to determine which elements of the view to display or how to display them.




## Controller


Controllers manipulate the data from the models. In other words, they contain the bulk of the logic of the application. When a user interacts with a view via an input, the controller processes the data from the input and uses it to update the model and determine which view to present the user with next. The controller updates the view as well, either indirectly (as a result of the view serving as a filtered presentational reflection of the model), or directly, as in the case of sorting or toggling presentation elements that do not interact directly with the data. In this way, the controller acts as the middleman between the model and the view, being neither seen by the user nor containing an actual data of its own. 




## Pros & Cons


MVC applications have several benefits. Due to the modularity of their design, it is easy to work on multiple components simultaneously without fear of "breaking" the application, or to test the functionality of the front-end or the back-end without the other layer being completed. For example, changes to the model can be made without needing to adjust the views to accomodate said changes, as the view is itself an independent component that simply filters the data from the model rather than being dependent on it. Likewise, the logic in a controller can be reworked simultaneously with a view or a model. This makes development more streamlined and conducive to both small and large teams, and even individual projects. 

The MVC pattern also makes managing the project and finding and squashing bugs easier. Each definition of a component is typically contained within its own file and contains its own variables and functions, making the amount of code one is required to parse through significantly more confined than having to parse through the entire directory structure. This also means that the code is reusable, with components being easily refactored for use in other projects, and thus means that MVC applications can benefit from shorter and clean development cycles and that every application developed can help in building the next one.

The MVC pattern is the perfect architecture pattern for every project, however. MVC projects can be complex in their logic and directory structure, and as such they can feel intimidating to beginners. It can take a while for the interplay between components and where to find them to click, and even once it does, your workflow can still get messy. Even to experienced developers, the constant navigation required to work across multiple components can grow tedious and confusing, and it can be easy to lose track of which controller houses a particular functionality or which view you want to direct the user to (this is why giving your files and variables good names is important!). 

Another drawback to the MVC is that its effectiveness is tied to user input and the GUI, meaning applications without heavy interactivity would receive little benefit from it and likely suffer from a bloated directory structure. Concerns over bloat also apply to smaller projects. While the MVC pattern's emphasis on separation of concerns is nice, it can be overkill for an application that doesn't require a lot of logic or different views, and can lead to poorer performance. 




## Conclusion


While it may not be a catch-all solution for every type of application, it's easy to see how MVC has become one of the dominant software architectural patterns ever since the advent of the GUI. While the frameworks that utilize it may come and go as best practices change, the pattern itself is timeless thanks to its adherence to fundamental software engineering principles such as modularity and portability, and 