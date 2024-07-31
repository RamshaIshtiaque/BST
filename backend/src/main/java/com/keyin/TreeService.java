package com.keyin;

import com.keyin.TreeEntity;
import com.keyin.TreeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class TreeService {
    @Autowired
    private TreeRepository repository;

    public TreeEntity processNumbers(String numbers) {
        BinarySearchTree bst = new BinarySearchTree();
        String[] numArray = numbers.split(",");
        for (String num : numArray) {
            bst.insert(Integer.parseInt(num.trim()));
        }

        TreeEntity treeEntity = new TreeEntity();
        treeEntity.setNumbers(numbers);
        treeEntity.setTreeStructure(bst.toJson());
        TreeEntity savedEntity = repository.save(treeEntity);
        System.out.println("Saved TreeEntity: " + savedEntity);
        return savedEntity;
    }

    public List<TreeEntity> getPreviousTrees() {
        return repository.findAll();
    }
}


