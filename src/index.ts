import { LinkedList } from "./linkedList";

let l = new LinkedList<number>();


l.insertInEnd(1);
l.insertInEnd(2);
l.insertInEnd(3);
l.insertInEnd(4);
l.insertInEnd(5);
l.insertInEnd(6);

l.printLinkedList();

console.log("#######################");

l.deleteNode(6)

l.printLinkedList();
