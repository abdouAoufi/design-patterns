# 05 - SINGLETONE DESIGN PATTERN 

___

**Singleton** pattern is one of the simplest design patterns. This type of design pattern comes under **creational patterns** as this pattern provides one of the best ways to create an object.

This pattern involves a **single** class which is responsible to create an object while making sure that only **single** object gets created. This class provides a way to access its only object which can be accessed directly without need to instantiate the object of the class.

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frefactoring.guru%2Fimages%2Fpatterns%2Fcontent%2Fsingleton%2Fsingleton.png&f=1&nofb=1)


___

## Implementation with javaScript

### First practice create singletone class :

we defined a class with special constructor which makes sure that this class can be used only once 
>refer to intro.js

### Second practice monostate :
In this way we wont't use the **constructor** at all instead we create **instances** on the class and manipulate them with **setters** and **getters**, We share data amoung objects.
>refer to monostate.js