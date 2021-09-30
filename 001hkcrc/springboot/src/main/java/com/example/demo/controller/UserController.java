package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.User;
import com.example.demo.mapper.UserMapper;
import lombok.var;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.annotation.Resource;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.File;
import java.io.IOException;
import java.sql.Wrapper;

@RestController //返回Json的Controller
@RequestMapping("/user") //接口的路由
public class UserController {

  @Resource
  UserMapper userMapper; //一般会写一个service类，control引入service， service引入mapper

  @PostMapping("/login")
  public Result<?> login(@RequestBody User user){ //前台传过来的对象映射成实体
    User res = userMapper.selectOne(Wrappers.<User>lambdaQuery().eq(User::getDocketno, user.getDocketno()).eq(User::getDocketno, user.getDocketno()));
    if(res == null){
      return Result.error("-1", "用户名或密码错误");
    }
    return Result.success();
  }

  @PostMapping
  public Result<?> save(@RequestBody User user)   { //前台传过来的对象映射成实体

    //readFile();

//    if(user.getPassword() == null)
//    {
//      user.setPassword("123456");
//    }
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
      wrapper.like(User::getDocketno,search);
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



  @PostMapping("/load")
  public Result<?> load()   { //前台传过来的对象映射成实体

    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
    try {
      DocumentBuilder builder = factory.newDocumentBuilder();
      Document d = builder.parse("C:\\Software\\IDEA_Projects\\HKCRC\\Website\\index1\\dktGetByTrk.xml");
      NodeList sList = d.getElementsByTagName("dockets");


      for (int i = 0; i <sList.getLength() ; i++) {
        Node node = sList.item(i);
        NodeList childNodes = node.getChildNodes();
        int num = 0;
        User user = new User();
        for (int j = 0; j <childNodes.getLength() ; j++) {
          if (childNodes.item(j).getNodeType()==Node.ELEMENT_NODE) {
            System.out.print(childNodes.item(j).getNodeName() + ":");
            System.out.println(childNodes.item(j).getFirstChild().getNodeValue());

            if(num==0)user.setDocketno(childNodes.item(j).getFirstChild().getNodeValue().toString());
            else if(num==1)user.setSitename(childNodes.item(j).getFirstChild().getNodeValue().toString());
            else if(num==2)user.setLocation(childNodes.item(j).getFirstChild().getNodeValue().toString());
            else if(num==3)user.setTrucknumber(childNodes.item(j).getFirstChild().getNodeValue().toString());
            else if(num==4)user.setDespatchtime(childNodes.item(j).getFirstChild().getNodeValue().toString());
            else if(num==5)user.setArrivaltime(childNodes.item(j).getFirstChild().getNodeValue());
            else if(num==6)user.setBatchname(childNodes.item(j).getFirstChild().getNodeValue());
            //else if(num==7)user.setThisload(7);
            //else if(num==8)user.setCummulatedqty(14);
            else if(num==7)user.setThisload(Double.valueOf(childNodes.item(j).getFirstChild().getNodeValue()));
            else if(num==8)user.setCummulatedqty(Double.valueOf(childNodes.item(j).getFirstChild().getNodeValue()));
            else continue;
            num++;
          }
        }
        userMapper.insert(user);
      }

    }catch(Exception e){
      e.printStackTrace();
    }

    return Result.success();
  }

}
