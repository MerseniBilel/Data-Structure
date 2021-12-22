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
  deleteNode(node: oneNode<T>): void;
  size(): number;
  searchNode(data: T): oneNode<T>;
  printLinkedList(): void;
}

export class LinkedList<T> implements ILinkedList<T> {
  private head: oneNode<T> | null = null;

  insertInBegin(data: T): oneNode<T> {
    const node = new oneNode(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let tmp: oneNode<T> = this.head;
      this.head = node;
      node.next = tmp;
    }
    return this.head;
  }
  insertInEnd(data: T): oneNode<T> {
    const node = new oneNode(data);
    if (this.head == null) {
      this.head = node;
    } else {
      let temp : oneNode<T> = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
    }
    return node;
  }
  deleteNode(node: oneNode<T>): void {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
  searchNode(data: T): oneNode<T> {
    throw new Error("Method not implemented.");
  }
  printLinkedList(): void {
    let temp: oneNode<T> | null = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
