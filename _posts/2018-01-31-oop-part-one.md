---
layout: post
title: "Object-Oriented Programming Part 1"
---

Object-oriented programming is a programming paradigm based around separating data and the means of manipulating data into separate, reusable sections of code known "classes", with the logic of the program deriving from the interaction between classes. Classes are typically designed to serve as a data models of real world objects. For example, a chair might be represented by a "Chair" class, which would contain information about the chair such as how many legs it has, what color it is, and what material it is made out of, as well as representing actions that the chair may be able to perform, such as whether or not it can recline or roll. A basic class might look something like this:

```

class Person {

	public $career;

	private $name;

	protected $age;

	public function __construct($name, $age, $career)
	{
		$this->name = $name;
		$this->age = $age;
		$this->career = $career;
	}

	public function getName()
	{
		return $this->name;
	}

	public function changeName($new_name)
	{
		$this->name = $new_name;
	}

	public function getAge()
	{
		return $this->age;
	}

	public function haveBirthday() 
	{
		$this->age++;
	}

}

``` 

Some of the keywords in this example may seem foreign and confusing (protected, public, \__construct), but for the most part, notice that the class is primarily composed of simple variables and functions. In OOP, these variables and functions work the same way, with the exception being that variables within a class are known as "properties and functions within a class are called "methods".

This is all well and good, but what use are classes if we don't know how to access the data that is inside of them? And why is the paradigm called Object-Oriented Programming if it is made up of classes? As you may have noticed, the Person class that we have defined above refers to a general person, rather then to a specific individual such as a Sue class or a Bob class. This is because classes are the general blueprints that allow for the construction of specific instances, which are known as objects. To create an object from a class (a process known as instantiation), you can use the `new` keyword followed by the class and assign it to a variable, like so:

```
$sue = new Person();

die(var_dump($sue));
```

If you try running this, however, it will return an error stating that you are missing some arguments have undefined variables. This is where the `__construct` method that we alluded to earlier comes in. When you instantiate a new object, you may pass in arguments to the object as you would a function. The arguments will then be used within the `__construct` method as soon as the object is created. In this case, the constructor is used to assign values to the object's `$name`, `$age`, and `$career` properties. Thus, by inserting arguments to the pass to the constructor:

```
$sue = new Person('Sue', 30, 'Web Developer');

die(var_dump($sue));
```

we get:

```
object(Person)#1 (3) {
  ["name":protected]=>
  string(3) "Sue"
  ["age":protected]=>
  int(30)
  ["career"]=>
  string(13) "Web Developer"
}
```

Voila! We now have a `$sue` object that is an instance of the `Person` class and that gives us some basic information about Sue. You can instantiate as many objects from the same class as you like.

```
$sue = new Person('Sue', 30, 'Web Developer');
$bob = new Person('Bob', 27, 'Web Designer');
$batman = new Person('Batman', 32, 'Superhero');

die(var_dump($sue, $bob, $batman));

```

```
object(Person)#1 (3) {
  ["name":protected]=>
  string(3) "Sue"
  ["age":protected]=>
  int(30)
  ["career"]=>
  string(13) "Web Developer"
}
object(Person)#2 (3) {
  ["name":protected]=>
  string(3) "Bob"
  ["age":protected]=>
  int(27)
  ["career"]=>
  string(12) "Web Designer"
}
object(Person)#3 (3) {
  ["name":protected]=>
  string(6) "Batman"
  ["age":protected]=>
  int(32)
  ["career"]=>
  string(9) "Superhero"
}

```


## Getters and Setters

Now that we know how to create classes and objects, there are still three unfamiliar keywords to look at in the above code: `public`, `private`, and `protected`. Put simply, these words establish how the data within a class can be accessed. `public` properties and methods can be accessed from anywhere in the code. For example, if Bob decided to transition from web design to web development, we could update `$career` like so:

```
$bob->career = 'Web Developer';
```

If Bob decided to change his name, however, he would find the process a little more complicated.

```
$bob->name = 'Robert';


// Error alert

Fatal error: Uncaught Error: Cannot access private property Person::$name

```

This is because unlike `$career`, `$name` is a `private` property (note that the error message tells us "Cannot access private property"). While `public` properties and methods such as `$career` can be accessed from anywhere in the code, `private` properties and methods such as `$name` _can only be accessed from within the object itself_. Thus, when we tried to change it from outside of the Bob object, it caused the program to fail. 

If `private` data inside of an object can be accessed from outside of an object, how are we supposed to access it then? The answer is with getters and setters. Within the Person class, there are four methods aside from `__construct` that we have defined. Two of these methods, `getName` and `getAge` return data to us, while the other two, `changeName` and `haveBirthday`, change the data. The first two methods are known as getters, since they allow us to get the data, and the last two are known as setters, as they can set the data. Furthermore, all four methods are `public`, which means that while the properties they are changing cannot be accessed from outside of the object, the methods that access them can be. So if we were to run

```
$bob->changeName('Robert');
```

we would see that the ensuing `var_dump` would list Person #2's (that is, the second instance of the Person class) as "Robert" rather than "Bob".

If you were paying attention, you may have already noticed that I said `getAge` and `haveBirthday` function the same way as `getName` and `changeName`, despite the the former properties dealing with a `protected` property rather than a `private` one. If neither `private` or `protected` data can be accessed from outside of the object, and both use getters and setters, what is the difference? There is only one: unlike `private` data, which can only be accessed from within the object that defines it, `protected` data can be accessed via parent and inheriting classes as well.

## Inheritance

Classes do not just consist of the data that has been explicitly defined within them. They can also consist of data that has been passed to them from parent classes (of which the class in question is a subclass), and pass their data to their own subclasses. For example, a Person class may inherit some properties and methods from a Mammal class, which may in turn have inherited some data from an Animal class. As mentioned in the previous section, a subclass inherits all of the public and protected data from its parent class, and passes on all of its public and protected data to its own subclasses. Subclasses declare what their parent class is via the `extends` keyword.

```

class Animal {

	protected $multicellular = true;
	private $reproduces = true;

	public function isMulticellular()
	{
		return $this->multicellular;
	}

	public function doesReproduce()
	{
		return $this->reproduces;
	}

}

class Mammal extends Animal {

	protected $lays_egges = false;

}

class Person extends Mammal {

	public $career;

	private $name;

	protected $age;

	public function __construct($name, $age, $career)
	{
		$this->name = $name;
		$this->age = $age;
		$this->career = $career;
	}

	public function getName()
	{
		return $this->name;
	}

	public function changeName($new_name)
	{
		$this->name = $new_name;
	}

	public function getAge()
	{
		return $this->age;
	}

	public function haveBirthday() 
	{
		$this->age++;
	}

}

```

Here, the Mammal class inherits the `$multicellular` protected property from the Animal class, as well as the public method `isMulticellular()`. The same holds true for the subclass of a subclass, so that the Person class inherits the `laysEggs()` method from the Mammal class, as well as the `isMulticellular()` method from the Animal class via the Mammal class.

```
// bool(true)

$animal = new Animal();

die(var_dump($animal->isMulticellular()));


// bool(true)

$mammal = new mammal();

die(var_dump($mammal->isMulticellular()));


// bool(false)

$mammal = new Mammal();

die(var_dump($mammal->laysEggs()));


// bool(false)

$person = new Person('Sue', 30, 'Web Developer');

die(var_dump($person->laysEggs()));


//bool(true)

$person = new Person('Sue', 30, 'Web Developer');

die(var_dump($person->isMulticellular()));

```

Inheritance is a handy way for a program to reuse code and keep classes closely aligned with the real-world objects they are modeled after. 

Lastly, you are able to override inherited properties or methods by simply redefining it within the subclass.

```
class Color {
	protected $light = true;

	public function lightPresent()
	{
		return $this->light;
	}
}

class Black {
	protected $light = false;
}

```

```

\\bool(true)

$red = new Color();
die(var_dump($red->lightPresent()));


\\bool(false)

$black = new Black();
die(var_dump($black->lightPresent()));

```
