class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let pointer = this.head;

        if (index === 0) {
            if (!this.head) return -1;
            return this.head.value;
        }

        let i = 0;

        while (pointer) {
            if (i === index) {
                return pointer.value;
            }
            pointer = pointer.next;
            i++;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newHead = new ListNode(val);

        if (!this.tail) {
            this.tail = newHead;
        }
        if (this.head) {
            newHead.next = this.head;
        }
        this.head = newHead;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newTail = new ListNode(val);
        if (!this.head) {
            this.head = newTail;
        }
        if (this.tail) {
            this.tail.next = newTail;
        }
        this.tail = newTail;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index === 0) {
            if (!this.head) return false;

            this.head = this.head.next;
            return true;
        }

        let pointer = this.head;
        let i = 0;

        while (pointer) {
            if (index === i + 1) {
                if (!pointer.next) return false;

                if (pointer.next.next) {
                    pointer.next = pointer.next.next;
                } else {
                    pointer.next = null;
                    this.tail = pointer;
                }

                return true;
            }
            pointer = pointer.next;
            i++;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let pointer = this.head;
        let arr = [];

        while (pointer) {
            arr.push(pointer.value);
            pointer = pointer.next;
        }
        return arr;
    }
}
