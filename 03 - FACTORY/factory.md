## 03 - FACTORY DESIGN PATTERN


**Factory** pattern is one of the most used design patterns in Java. This type of design pattern comes under **creational pattern** as this pattern provides one of the best ways to create an object.


___

### Implementation with javaScript

#### First practice 
* In the first practice as always we start by the simplest approach is to make a class which hold a **static funciton** which specialized to create rectangle object.

* This method will take care of logic and it make sure if the object going to be created is rectangle or square.
> Refer to factory.js

```
node factory.js
```
### Second practice 
* When things get complicated we always make sure to create the cleanest possible code.
* In this example we have a herarkey of object so we need a relations between the factories.
* We have more than one foctory so we want to link them together with one class and using inheritance in clever way to still refer to the same object.

>refer to abstractfactory.js
```
node abstractfactory.js
```