package com.example.demo.TCP;

import com.example.demo.controller.UserController;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.net.Socket;
import java.time.LocalDateTime;

import static com.example.demo.TCP.SocketHandler.*;

@Slf4j
@Data
public class ClientSocket implements Runnable {

    private Socket socket;
    private DataInputStream inputStream;
    private DataOutputStream outputStream;
    private String key;
    private String message;

    @Override
    public void run() {
        while (true){
            try {
                onMessage(this);
                log.info(LocalDateTime.now()+"当前设备,key:"+this.key);
                log.info(LocalDateTime.now()+"接收到数据,Message: " + this.message);
                //System.out.print("==========asassa=="+LocalDateTime.now()+"当前设备:"+this.key+" 接收到数据: <<<<<<" + this.message);
                sendMessage(this, "$"+UserController.currentTruckInfo+"#");
                Thread.sleep(100);
            } catch (Exception e) {
                e.printStackTrace();
            }
            if (isSocketClosed(this)){
                log.info("客户端已关闭,其Key值为：{}", this.getKey());
                //关闭对应的服务端资源
                close(this);
                break;
            }
        }
    }
}
