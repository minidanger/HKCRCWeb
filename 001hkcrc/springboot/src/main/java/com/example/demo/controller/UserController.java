package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
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
import java.io.*;
import java.sql.Wrapper;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

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

    //Page<User> userPage = userMapper.selectPage(new Page<>(pageNum, pageSize), Wrappers.<User>lambdaQuery().like(User::getDocketno,search));
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

  @DeleteMapping("/deletelist/{num}")
  public Result<?> deleteList(@PathVariable long num){ //前台传过来的对象映射成实体
    int deletednum=0;

    for(int id=0;id<3*num;id++)
    {
      try{
        userMapper.deleteById(id);
        userMapper.deleteById(id);
        userMapper.deleteById(id);
      }
      catch (Exception e){
        continue;
      }
      deletednum++;
      //if(deletednum==num)break;
    }

    //userMapper.delete(userMapper);
    //userMapper.deleteById();
    return Result.success();
  }



  @PostMapping("/loadlist/{id}")
  public Result<?> load(@PathVariable int id)   { //前台传过来的对象映射成实体

    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
    try {
      DocumentBuilder builder = factory.newDocumentBuilder();
      Document d = builder.parse("C:\\Software\\IDEA_Projects\\GIT\\001hkcrc\\springboot\\src\\main\\resources\\file\\dktGetByTrk.xml");
      NodeList sList = d.getElementsByTagName("dockets");

      int validData=0;
      if(id==0) id=1;
      for (int i = 0; i <sList.getLength() ; i++) {
        Node node = sList.item(i);
        NodeList childNodes = node.getChildNodes();
        int num = 0;
        User user = new User();
        for (int j = 0; j <childNodes.getLength() ; j++) {
          if (childNodes.item(j).getNodeType()==Node.ELEMENT_NODE) {
            //System.out.print(childNodes.item(j).getNodeName() + ":");
            //System.out.println(childNodes.item(j).getFirstChild().getNodeValue());

            if(num==0)user.setDocketno(childNodes.item(j).getFirstChild().getNodeValue().toString());
            else if(num==1)user.setSitename(childNodes.item(j).getFirstChild().getNodeValue().toString());
            else if(num==2)user.setLocation(childNodes.item(j).getFirstChild().getNodeValue().toString());
            else if(num==3)user.setTrucknumber(childNodes.item(j).getFirstChild().getNodeValue().toString());
            else if(num==4)
            {
              try {
                String val = childNodes.item(j).getFirstChild().getNodeValue();
                if (childNodes.item(j).getFirstChild().getNodeValue() == null) user.setDespatchtime(" ");
                else user.setDespatchtime(childNodes.item(j).getFirstChild().getNodeValue().toString());
              }catch(Exception e){
                user.setDespatchtime(" ");
              }
            }
            else if(num==5)
            {
              try {
                if (childNodes.item(j).getFirstChild().getNodeValue() == null) user.setArrivaltime(" ");
                else user.setArrivaltime(childNodes.item(j).getFirstChild().getNodeValue());
              }catch(Exception e){
                user.setArrivaltime(" ");
              }
            }
            else if(num==6)user.setBatchname(childNodes.item(j).getFirstChild().getNodeValue());
            //else if(num==7)user.setThisload(7);
            //else if(num==8)user.setCummulatedqty(14);
            else if(num==7)
            {
              try {
                if (childNodes.item(j).getFirstChild().getNodeValue() == null) user.setThisload(0.0);
                else user.setThisload(Double.valueOf(childNodes.item(j).getFirstChild().getNodeValue()));
              }catch(Exception e){
                user.setThisload(0.0);
              }
            }
            else if(num==8)
            {
              try {
                if (childNodes.item(j).getFirstChild().getNodeValue() == null) user.setCummulatedqty(0.0);
                else user.setCummulatedqty(Double.valueOf(childNodes.item(j).getFirstChild().getNodeValue()));
              }catch(Exception e){
                user.setCummulatedqty(0.0);
              }
            }
            else continue;
            user.setNum(id+i);
            user.setId(id+i);
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

  @GetMapping("/updateCurrentTruck/{total}/{currentTruckID}")
  public Result<?> updateCurrentTruck(@PathVariable int total, @PathVariable int currentTruckID)   { //前台传过来的对象映射成实体
    copylatestfiles();
    String trkno = "truck", despatchTime = "";
    double thisload = 0.0, loadQual = 0.0;
    int curTruckNum =0, isMatched = 0;
    User user = new User();
    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();

    try {
      DocumentBuilder builder = factory.newDocumentBuilder();
      Document d = builder.parse("C:\\Software\\IDEA_Projects\\GIT\\001hkcrc\\springboot\\src\\main\\resources\\file\\dktGetDocketsCurrent.xml");
      NodeList sList = d.getElementsByTagName("dockets");

      int validData=0;
      for (int i = 0; i <sList.getLength() ; i++) {
        Node node = sList.item(i);
        NodeList childNodes = node.getChildNodes();
        int num = 0;
        for (int j = 0; j <childNodes.getLength() ; j++) {
          if (childNodes.item(j).getNodeType()==Node.ELEMENT_NODE) {
            System.out.print(childNodes.item(j).getNodeName() + ":");
            System.out.println(childNodes.item(j).getFirstChild().getNodeValue());
            if(num==2)trkno = childNodes.item(j).getFirstChild().getNodeValue().toString();
            if(num==3)despatchTime = childNodes.item(j).getFirstChild().getNodeValue().toString();
            if(num==6)thisload = Double.valueOf(childNodes.item(j).getFirstChild().getNodeValue());
            if(num==7)loadQual = Double.valueOf(childNodes.item(j).getFirstChild().getNodeValue());

            //else continue;
            num++;
          }
        }
      }

    }catch(Exception e){
      e.printStackTrace();
    }

    for(int i=0;i<total; i++)
    {
      try{
        User user2 = userMapper.selectById(i);
        if(user2!=null) {
          String truck = user2.getTrucknumber();
          if (truck.equalsIgnoreCase(trkno))
          {
            curTruckNum = user2.getNum();
            user = user2;
            isMatched = 1;
          }
        }
      }catch(Exception e){

      }
    }
    if(currentTruckID != curTruckNum && isMatched ==1) {
      SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd 'T' HH:mm:ss");
      Date date = new Date(System.currentTimeMillis());
      String timer = formatter.format(date);

      user.setDespatchtime(despatchTime);
      user.setThisload(thisload);
      user.setCummulatedqty(loadQual);
      user.setArrivaltime(timer);

      update(user);
    }

    return Result.success(user);
  }

  public static void copylatestfiles() {
    // TODO Auto-generated method stub
    String batPath = "C:\\Software\\IDEA_Projects\\GIT\\001hkcrc\\test.bat"; // 把你的bat脚本路径写在这里
    File batFile = new File(batPath);
    boolean batFileExist = batFile.exists();
    System.out.println("batFileExist:" + batFileExist);
    if (batFileExist) {
      callCmd(batPath);
    }
  }

  private static void  callCmd(String locationCmd){
    StringBuilder sb = new StringBuilder();
    try {
      Process child = Runtime.getRuntime().exec(locationCmd);
      InputStream in = child.getInputStream();
      BufferedReader bufferedReader=new BufferedReader(new InputStreamReader(in));
      String line;
      while((line=bufferedReader.readLine())!=null)
      {
        sb.append(line + "\n");
      }
      in.close();
      try {
        child.waitFor();
      } catch (InterruptedException e) {
        System.out.println(e);
      }
      System.out.println("sb:" + sb.toString());
      System.out.println("callCmd execute finished");
    } catch (IOException e) {
      System.out.println(e);
    }
  }

}
