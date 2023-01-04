<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-PINGOTHER, Content-Type, Authorization");
header("Access-Control-Max-Age: 86400");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require '/usr/share/php/libphp-phpmailer/src/Exception.php';
require '/usr/share/php/libphp-phpmailer/src/PHPMailer.php';
require '/usr/share/php/libphp-phpmailer/src/SMTP.php';

// require 'libphp-phpmailer/PHPMailerAutoload.php';

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    // company - 회사명
    // number - 회사번호
    // email - 이메일
    // name - 담당자 명
    // phone - 담당자 전화번호
    // message - 메세지

    $mail = new PHPMailer(true); // the true param means it will throw exceptions on errors, which we need to catch $mail->IsSMTP(); // telling the class to use SMTP
    $mail->IsSMTP(); // telling the class to use SMTP
        try {
            $mail->SMTPDebug = 1;                                       
            $mail->CharSet = "utf-8";                               //한글이 안깨지게 CharSet 설정
            $mail->Encoding = "base64";
            $mail->Host = "smtp.worksmobile.com";                                       // email 보낼때 사용할 서버를 지정
            $mail->SMTPAuth = true;                                                     // SMTP 인증을 사용함
            $mail->Port = 587;                                                          // email 보낼때 사용할 포트를 지정
            $mail->SMTPSecure = "tls";                                                  // SSL을 사용함

            $mail->Username = "director@grigompictures.com";                            // Gmail 계정
            $mail->Password = ""; 

            $mail->SetFrom('director@grigompictures.com');           // 보내는 사람 email 주소와 표시될 이름 (표시될 이름은 생략가능)
            $mail->AddAddress('director@grigompictures.com');        // 받을 사람 email 주소와 표시될 이름 (표시될 이름은 생략가능)

            $mail->Subject = "Grigom_Pictures CONTACT MAIL - ".$_POST['company'];                          // 메일 제목
            $mail->Body = nl2br(
                "회사명 : ".$_POST['company']."\n".
                "회사번호 : ".$_POST['number']."\n".
                "이메일 : ".$_POST['email']."\n".
                "담당자 명 : ".$_POST['name']."\n".
                "담당자 전화번호 : ".$_POST['phone']."\n".
                "내용 : ".$_POST['message']."\n"
            );
            $mail->IsHTML(true);
            $mail->Send();                                          // 발송
        echo "Message Sent OK //발송 확인
        \n";
        } catch (phpmailerException $e) {
            echo $e->errorMessage();                                //Pretty error messages from PHPMailer
        } catch (Exception $e) {
            echo $e->getMessage();                                  //Boring error messages from anything else!
    }
?>