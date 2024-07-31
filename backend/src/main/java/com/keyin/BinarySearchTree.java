package com.keyin;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class BinarySearchTree {

    private Node root;

    private static class Node {
        int value;
        Node left, right;

        Node(int item) {
            value = item;
            left = right = null;
        }
    }

    public void insert(int value) {
        root = insertRec(root, value);
    }

    private Node insertRec(Node root, int value) {
        if (root == null) {
            root = new Node(value);
            return root;
        }

        if (value < root.value) {
            root.left = insertRec(root.left, value);
        } else if (value > root.value) {
            root.right = insertRec(root.right, value);
        }

        return root;
    }

    public String toJson() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.writeValueAsString(toJsonTree(root));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return "{}";
        }
    }

    private TreeNode toJsonTree(Node node) {
        if (node == null) {
            return null;
        }
        TreeNode treeNode = new TreeNode(node.value);
        treeNode.left = toJsonTree(node.left);
        treeNode.right = toJsonTree(node.right);
        return treeNode;
    }

    private static class TreeNode {
        private int value;
        private TreeNode left;
        private TreeNode right;

        TreeNode(int value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }

        // Add getters for Jackson serialization
        public int getValue() {
            return value;
        }

        public TreeNode getLeft() {
            return left;
        }

        public TreeNode getRight() {
            return right;
        }
    }

}

