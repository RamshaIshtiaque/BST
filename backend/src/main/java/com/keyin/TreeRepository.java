package com.keyin;

import com.keyin.TreeEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TreeRepository extends JpaRepository<TreeEntity, Long> {
}

