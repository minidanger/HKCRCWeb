package com.example.demo.controller;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.common.Result;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/ESP32")
public class ESP32Controller {
    @Value("${server.port}")
    private String port;

    private static final String ip = "http://localhost";
    /**
     *
     * @param
     * @return
     * @throws IOException
     */
    @GetMapping("/weather/{temperature}/{humidity}")
    public Object weather(ModelAndView model, @PathVariable String temperature, @PathVariable String humidity){
        System.out.println("温度为："+temperature);
        System.out.println("湿度为："+humidity);
//        Map<String, Object> WeatherMap = new HashMap<~>();
//        WeatherMap.put("10001",temperature);
//        WeatherMap.put("10002",humidity);
        //weather.WeatherSource(WeatherMap);
        model.setViewName("main/STM32");
        return model;
    }


}
