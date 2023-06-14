"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    let toVisitQueue = [this];
    let depthCounter = 1;

    while (toVisitQueue.length) {
      let currentNode = toVisitQueue.shift();

      if (!currentNode.left || !currentNode.right) {
        return depthCounter;
      }

      toVisitQueue.push(this.left);
      toVisitQueue.push(this.right);
    }
  }

  // [A] 1 | 1
  // [B, C] 2 | 2
  // [C, D, E] 3 | 3
  // [D, E, G, H] 3 | 4
  // [E, G, H, DL, DR] 4 | 5
  // [G, H, DL, DR, EL, ER] 4 | 6
  // [H, DL, DR, EL, ER, GL, GR] 4 | 7
  // [DL, DR, EL, ER, GL, GR, HL, HR] 5 | 8

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    let depth = 1;

    if (!this) return 0;

    let lefty = this.left ? this.left.maxDepth() : 0;
    let righty = this.right ? this.right.maxDepth() : 0;

    return Math.max(depth + lefty, depth + righty);
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
   minDepth() {
    let depth = 1;

    if (!this.left && !this.right) {
      return 1;
    } else if (!this.left) {
      return depth + this.right.minDepth();
    } else if (!this.right) {
      return depth + this.left.minDepth();
    } else {
      return depth + Math.min(this.left.minDepth(), this.right.minDepth());
    }
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (!this.root) return 0;

    return this.root.maxDepth();
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    if (!this.root) return 0;

    return this.root.minDepth();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
