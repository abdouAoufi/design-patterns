# Command design pattern

Command pattern is a data driven design pattern and falls under behavioral pattern category. A request is wrapped under an object as command and passed to invoker object. Invoker object looks for the appropriate object which can handle this command and passes the command to the corresponding object which executes the command.

## We want an object that represent operation.

- person should change age to 22
- car should do something 

## Uses of Command design pattern 

- GUI commands.
- Multi-level unde/redo.
- Macro recording.
