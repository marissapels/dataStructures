# Stacks

In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations:

## METHOD 1
* push, which adds an element to the collection, and
* pop, which removes the most recently added element that was not yet removed.

The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack. The name "stack" for this type of structure comes from the analogy to a set of physical items stacked on top of each other, which makes it easy to take an item off the top of the stack, while getting to an item deeper in the stack may require taking off multiple other items first.

This can be implemented in a similar way that we did with linked lists, but it's really not necessary since the array object in javascript does this so well already.

### Real world example: Stacking books!