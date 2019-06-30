# Linked Lists

## Background
In computer science, a linked list is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing efficient insertion or removal from arbitrary element references. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality as compared to linked lists.

## Summary
* A sequence of elements where one element links to the next element.
* In an array, the elements are indexed.
* In a linked list, if you have to go through each element to get to an indexed
Advantages: insertions and deletions can be very quick
Disadvantages: slow to get to the nth element

## Other Information
* Doubly Linked Lists
  * Each element is also linked to the previous element