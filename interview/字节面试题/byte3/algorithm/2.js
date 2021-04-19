function BinarySearchTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    var root = null;


    this.inOrderTraverseNode = function (callback) { //前
        inOrderTraverseNode(root, callback);
    }
    var inOrderTraverseNode = function (node, callback) {
        if (node != null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }


    this.preOrderTraverseNode = function () { //中

    }


    this.postOrderTraverseNode = function () { //后

    }


    this.insert = function (key) { //插入
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }


    function insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }


    this.search = function (key) { //收索
        return searchNode(root, key);
    }
    var searchNode = function(node, key) {
        if (node === null) {
          return false;
        }
        if (node < node.key) {
          return searchNode(node.left, key);
        } else if (key > node.key) {
          return searchNode(node.right, key);
        } else {
          return true
        }
    }


    this.remove = function () { //移除
        root=removeNode(root,key)
    }
    var 


    this.max=function(){
        return maxNode(root);
    }
    function maxNode(node){
        if(node){
            while(node&&node.right!==null){
                node=node.right
            }
            return node.key;
        }
        return null;
    }

}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(5);
tree.insert(4);
tree.insert(8);
tree.insert(9);
tree.insert(10);
tree.insert(2);

var printNode = function (val) {
    console.log(val);
}

tree.inOrderTraverseNode(printNode)
console.log(tree.search(10));
