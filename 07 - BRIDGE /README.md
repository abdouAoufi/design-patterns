##  Bridge design pattern 
___

The Bridge design pattern allows you to **separate** the **abstraction** from the **implementation**. It is a structural design pattern.

![](https://media.geeksforgeeks.org/wp-content/uploads/Bridge_Design.png)

There are 2 **parts** in Bridge design pattern :

    1 - Abstraction.
    2 - Implementation.

This is a design mechanism that encapsulates an implementation class inside of an interface class.

* The bridge pattern allows the Abstraction and the Implementation to be developed independently and the client code can access only the Abstraction part without being concerned about the Implementation part.
  
* The abstraction is an interface or abstract class and the **implementor** is also an interface or abstract class.
* The abstraction contains a reference to the implementor. Children of the abstraction are referred to as refined abstractions, and children of the implementor are concrete implementors. Since we can change the reference to the implementor in the abstraction, we are able to change the abstraction’s implementor at run-time. Changes to the implementor do not affect client code.
* It increases the loose coupling between class abstraction and it’s implementation.
___

## Implementation with JavaScript :
