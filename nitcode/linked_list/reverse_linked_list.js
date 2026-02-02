/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head, newHead = null) {
        if (!head) return newHead;
        if (!head.next && newHead === null){
            return new ListNode(head.val);
        }

        if (head.next) {
            if (newHead) {
                newHead = new ListNode(head.next.val, newHead);
            } else {
                newHead = new ListNode(head.next.val, new ListNode(head.val));
            }

            return this.reverseList(head.next, newHead)
        }

        return newHead;
    }
}
