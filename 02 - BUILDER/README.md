Builder : When piecewise object contruction is complicated provide an API for doing it succinctly
Some time one Builder will not solve the problem ..

{1} we are calling super to the base class which creates the new object. but how this actually works ????
if we're using multiple objects they are all working on the same object dont make copies .
You should save the object in base class .....
