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
import java.text.SimpleDateFormat;
import java.util.Date;
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
    @RequestMapping (value = "/weather/{temperature}/{humidity}", method = RequestMethod.GET)
    public String weather(ModelAndView model, @PathVariable String temperature, @PathVariable String humidity){
        System.out.println("温度为："+temperature);
        System.out.println("湿度为："+humidity);
//        Map<String, Object> WeatherMap = new HashMap<~>();
//        WeatherMap.put("10001",temperature);
//        WeatherMap.put("10002",humidity);
        //weather.WeatherSource(WeatherMap);
        model.setViewName("main/STM32");


        return "TP2390P";

    }

    /**
     *
     * @param
     * @return
     * @throws IOException
     */
    @RequestMapping (value = "/ESP32Sensors/{SensorsValue}", method = {RequestMethod.GET, RequestMethod.POST})
    public int weather(ModelAndView model, @PathVariable String SensorsValue){
        System.out.println("传感器值："+SensorsValue);
        //System.out.println("湿度为："+newDeviceID1);
//        Map<String, Object> WeatherMap = new HashMap<~>();
//        WeatherMap.put("10001",temperature);
//        WeatherMap.put("10002",humidity);
        //weather.WeatherSource(WeatherMap);
        //model.setViewName("main/STM32");
        String[] sensorsValue = SensorsValue.split(",");

        if(sensorsValue.length!=4) return 1;

        return 0;

    }


}
