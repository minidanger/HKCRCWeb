package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.User;
import com.example.demo.mapper.UserMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.sql.Wrapper;

@RestController //返回Json的Controller
@RequestMapping("/user") //接口的路由
public class UserController {

  @Resource
  UserMapper userMapper; //一般会写一个service类，control引入service， service引入mapper

  @PostMapping("/login")
  public Result<?> login(@RequestBody User user){ //前台传过来的对象映射成实体
    User res = userMapper.selectOne(Wrappers.<User>lambdaQuery().eq(User::getUsername, user.getUsername()).eq(User::getPassword, user.getPassword()));
    if(res == null){
      return Result.error("-1", "用户名或密码错误");
    }
    return Result.success();
  }

  @PostMapping
  public Result<?> save(@RequestBody User user){ //前台传过来的对象映射成实体
    if(user.getPassword() == null)
    {
      user.setPassword("123456");
    }
    userMapper.insert(user); //将数据传输到数据库
    return Result.success();
  }

  @GetMapping
  public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                            @RequestParam(defaultValue = "10") Integer pageSize,
                            @RequestParam(defaultValue = "") String search){
    LambdaQueryWrapper<User> wrapper = Wrappers.<User>lambdaQuery();

    if(StrUtil.isNotBlank(search))
    {
      wrapper.like(User::getNickName,search);
    }
    Page<User> userPage = userMapper.selectPage(new Page<>(pageNum, pageSize), wrapper);
    return Result.success(userPage);
  }

  @PutMapping
  public Result<?> update(@RequestBody User user){ //前台传过来的对象映射成实体
    userMapper.updateById(user); //将数据传输到数据库
    return Result.success();
  }

  @DeleteMapping("/{id}")
  public Result<?> update(@PathVariable long id){ //前台传过来的对象映射成实体
    userMapper.deleteById(id);
    return Result.success();
  }

}
