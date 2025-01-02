const Holder = require("../models/Holders");

/*
Method: PostOrder DFS 
Input: root's ID (type: number)
return: numbers of subtree (type: number)
*/
async function getSubtreeCount(rootId) {
  if (!rootId) return 0;
  const root = await Holder.findByPk(rootId);
  const leftCount = await getSubtreeCount(root.left_child);
  const rightCount = await getSubtreeCount(root.right_child);
  return 1 + leftCount + rightCount;
}

/*
Method: check left and right child amount in each level until find the empty node.
Input: root's ID (type: number)
return: object{root, side}, root = new node's parent, side = position
*/
async function findPosition(rootId) {
  const root = await Holder.findByPk(rootId);
  const leftCount = await getSubtreeCount(root.left_child);
  const rightCount = await getSubtreeCount(root.right_child);

  if (leftCount <= rightCount) {
    if (!root.left_child) return { root, side: "left_child" };
    return await findPosition(root.left_child);
  } else {
    if (!root.right_child) return { root, side: "right_child" };
    return await findPosition(root.right_child);
  }
}

/*
Method: PostOrder DFS 
Input: root's ID (type: number)
return: object{} or null if invalid id
*/
async function getSubtreeData(id) {
  if (!id) return null;

  const node = await Holder.findByPk(id);
  if (!node) return null;

  const leftChild = await getSubtreeData(node.left_child);
  const rightChild = await getSubtreeData(node.right_child);

  return {
    id: node.id,
    name: node.name,
    date: node.date,
    referrer: node.referrer,
    left: leftChild,
    right: rightChild,
    parent_id: node.parent_id,
  };
}

module.exports = {
  findPosition,
  getSubtreeData,
};

