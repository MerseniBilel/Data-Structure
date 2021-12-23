class oneNode<T> {
  public data: T;
  public next: oneNode<T> | null = null;
  constructor(data: T) {
    this.data = data;
  }
}

interface ILinkedList<T> {
  insertInBegin(data: T): oneNode<T>;
  insertInEnd(data: T): oneNode<T>;
  deleteNode(index: number): void;
  deleteFirstNode(): void;
  deleteLastNode(): void;
  size(): number;
  searchNode(data: T): [oneNode<T> | null, number];
  printLinkedList(): void;
}

export class LinkedList<T> implements ILinkedList<T> {
  private head: oneNode<T> | null = null;
  private linkedSize: number = 0;

  insertInBegin(data: T): oneNode<T> {
    const node = new oneNode(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let tmp: oneNode<T> = this.head;
      this.head = node;
      node.next = tmp;
    }
    this.linkedSize++;
    return this.head;
  }
  insertInEnd(data: T): oneNode<T> {
    const node = new oneNode(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let temp: oneNode<T> = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
    }
    this.linkedSize++;
    return node;
  }
  deleteNode(index: number): void {
    if (this.head == null) {
      console.log("empty linkde list");
      return;
    }
    if (index < 0) {
      throw new Error("index is negative");
    }

    if (index > this.linkedSize) {
      throw new Error("index out of range");
    }

    if (index == this.linkedSize) {
      this.deleteLastNode();
      return;
    }

    if (index == 0) {
      this.deleteFirstNode();
      return;
    }
    
    // delete at position

  }
  deleteFirstNode(): void {
    if (this.head == null) {
      console.log("empty linked list");
      return;
    } else {
      this.head = this.head.next;
      this.linkedSize--;
    }
  }
  deleteLastNode(): void {
    if (this.head == null) {
      return;
    }
    let temp: oneNode<T> = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    delete temp.next.next;
    temp.next = null;
    this.linkedSize--;
  }
  size(): number {
    return this.linkedSize;
  }
  searchNode(data: T): [oneNode<T> | null, number] {
    let temp: oneNode<T> = this.head;
    let counter: number = 0;
    while (temp !== null) {
      if (temp.data == data) {
        return [temp, counter];
      }
      temp = temp.next;
      counter++;
    }
    return [null, -1];
  }
  printLinkedList(): void {
    let temp: oneNode<T> | null = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
