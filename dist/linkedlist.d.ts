declare class Item<T> {
    data: T;
    next: Item<T> | null;
    prev: Item<T> | null;
    constructor(data: T);
}
export declare class DoublyLinkedList<T> {
    private head;
    private tail;
    private length;
    constructor();
    addToList(data: T): Item<T>;
    unshift(data: T): Item<T>;
    shift(): Item<T>;
    pop(): Item<T>;
    deleteNode(node: Item<T>): void;
    getNode(index: number): Item<T>;
    set(index: number, value: T): Item<T>;
    insert(index: number, value: T): Item<T>;
    removeNode(index: number): Item<T>;
}
export {};
