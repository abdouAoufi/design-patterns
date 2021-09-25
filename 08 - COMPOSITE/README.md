## COMPOSITE DESIGN PATTERN
**Composite** pattern is a partitioning design pattern and describes a group of objects that is treated the same way as a single instance of the same type of object. The intent of a composite is to “compose” objects into tree structures to represent part-whole hierarchies. It allows you to have a tree structure and ask each node in the tree structure to perform a task.

![](https://media.geeksforgeeks.org/wp-content/uploads/Composite-Design-Pattern-Diagram-1.png)

The Composite Pattern has four participants:

1.**Component** – Component declares the interface for objects in the composition and for accessing and managing its child components. It also implements default behavior for the interface common to all classes as appropriate.

2.**Leaf** – Leaf defines behavior for primitive objects in the composition. It represents leaf objects in the composition.

3.**Composite** – Composite stores child components and implements child related operations in the component interface.

4.**Client** – Client manipulates the objects in the composition through the component interface.

### Implementation in javascript
