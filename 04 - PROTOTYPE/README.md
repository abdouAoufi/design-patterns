# 04 - PROTOTYPE DESIGN PATTERN

___
**Prototype** allows us to hide the complexity of making new instances from the client. The concept is to **copy** an existing object rather than creating a new instance from scratch, something that may include costly operations. The existing object acts as a prototype and contains the state of the object. The newly copied object may change same properties only if required. This approach saves costly resources and time, especially when the object creation is a heavy process.

The prototype pattern is a **creational design pattern**. Prototype patterns is required, when object creation is time consuming, and costly operation, so we create object with existing object itself. One of the best available way to create object from existing objects are clone() method. Clone is the simplest approach to implement prototype pattern. However, it is your call to decide how to copy existing object based on your business model.

___

## Implementation with javaScript

### First practice **Stand alone method**

* First we begin with simple practice, with simple method used to create new instance to **avoid** shared state (shared reference).
* This way is fine but it has some limitation.
  * When dealing with primitive types it works fine.
  * But the problem is when we work with non-primitive type (objects).
  * In this case we have to add the method to that praticular object and this could be annoying and mess.

 > refer to protointro.js

```
node protointro.js
```
### Second practice **Serializer**

* In this way have different approach. We use something called **Serialization** basically we store the object in some data format in this case we used **JSON** and whenever we need it we deserialize it by parcing it and return the object we want to clone.
* The problem we face here is we loose the type of this object since it will be converted to plain text (JSON).
* The most important thing you keep in mind is that before we serialize it we have to make sure that we store a referece to its **type**

> Refer to protoserialization

  ``` 
  node protoserialization
  ```

### Third practice **Factory**

* In this approach we combine two design pattern together, The current Design pattern **Prototype** and the **Factory**.
* We create a class that is resposable for creating employee object by providing a method that return a copy of the object we want to create.
* This funciton takes **proto** as parameter and after produce the object it gonna paersonalize it with the rest of the parameter.
  > Refer to protofactory.js

  ``` 
  node protofactory.js
  ```