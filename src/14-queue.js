// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

// const ListNode = require('../extensions/list-node');

class Queue {
  // constructor() {
  //   this.stack = new ListNode();
  // }
  get size() {
    throw new Error('Not implemented');
    //   let tmp = this.stack
    //   let counter = 0
    //   while (tmp) {
    //     counter++;
    //     tmp=tmp.next
    //   }
    //   return counter
  }

  enqueue(/* element */) {
    throw new Error('Not implemented');
  }

  dequeue() {
    throw new Error('Not implemented');
  }
}

module.exports = Queue;
