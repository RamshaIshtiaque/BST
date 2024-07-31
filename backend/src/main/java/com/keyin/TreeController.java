package com.keyin;



import com.keyin.TreeEntity;
import com.keyin.TreeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trees")
public class TreeController {

    @Autowired
    private TreeService service;

    @PostMapping("/process")
    public TreeEntity processNumbers(@RequestBody String numbers) {
        return service.processNumbers(numbers);
    }

    @GetMapping("/previous")
    public List<TreeEntity> previousTrees() {
        return service.getPreviousTrees();
    }
}

