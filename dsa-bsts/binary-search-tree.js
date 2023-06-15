"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (this.val === val) return this;
    if (this.val > val) {
      if (this.left) {
        return this.left.findRecursively(val);
      } return;
    } else if (this.val < val) {
      if (this.right) {
        return this.right.findRecursively(val);
      } return;
    }
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    let insertNode = new Node(val);
    let current = this;

    if (val > current.val) {
      if (!current.right) {
        current.right = insertNode;
        return insertNode;
      } current.right.insertRecursively(val);
    } else {
      if (!current.left) {
        current.left = insertNode;
        return insertNode;
      } current.left.insertRecursively(val);
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {
    const visits = [];

    function preOrder(node) {
      if (node === null) return;
      visits.push(node.val);
      preOrder(node.left);
      preOrder(node.right);
    }
    preOrder(this);
    return visits;
  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {
    const visits = [];

    function inOrder(node) {
      if (node === null) return;
      inOrder(node.left);
      visits.push(node.val);
      inOrder(node.right);
    }
    inOrder(this);
    return visits;
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {
    const visits = [];

    function postOrder(node) {
      if (node === null) return;
      postOrder(node.left);
      postOrder(node.right);
      visits.push(node.val);
    }
    postOrder(this);
    return visits;
  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    let node = new Node(val);

    if (!this.root) {
      this.root = node;
    };

    let current = this.root;

    while (current) {
      if (!current.left && !current.right) {
        current.left = val < current.val ? node : null;
        current.right = val > current.val ? node : null;
        return this;
      } else if (!current.right && val > current.val) {
        current.right = node;
        return this;
      } else if (!current.left && val < current.val) {
        current.left = node;
        return this;
      } else {
        current = (val < current.val) ? current.left : current.right;
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    return this.root.insertRecursively(val);
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) return current;
      current = current.val < val ? current.right : current.left;
    }

    return;
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return;

    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (!this.root) return [];

    return this.root.dfsPreOrder();
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return [];

    return this.root.dfsInOrder();
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return [];

    return this.root.dfsPostOrder();
  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {
    const visits = [];
    if (!this.root) return visits;

    const visitQueue = [this.root];
    while (visitQueue.length) {
      let curr = visitQueue.shift();
      visits.push(curr.val);

      if (curr.left) visitQueue.push(curr.left);
      if (curr.right) visitQueue.push(curr.right);
    }

    return visits;
  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};


// if (val > current.val) {
//   if (!current.right) {
//     current.right = node;
//     return this;
//   }
//   else {
//     current = (val < current.val) ? current.left : current.right;
//   }
// }
// if (val < current.val) {
//   if (!current.left) {
//     current.left = node;
//     return this;
//   } else {
//     current = (val < current.val) ? current.left : current.right;
//   }
// }