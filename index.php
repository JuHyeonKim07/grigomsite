<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: X-PINGOTHER, Content-Type, Authorization");
    header("Access-Control-Max-Age: 86400");

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    // company - 회사명
    // number - 회사번호
    // email - 이메일
    // name - 담당자 명
    // phone - 담당자 전화번호
    // message - 메세지

    $to = "director@grigompictures.com";
    $subject = "Grigom_Pictures CONTACT MAIL - ".$_POST['company'];

    $contents= nl2br(
        "회사명 : ".$_POST['company']."\n".
        "회사번호 : ".$_POST['number']."\n".
        "이메일 : ".$_POST['email']."\n".
        "담당자 명 : ".$_POST['name']."\n".
        "담당자 전화번호 : ".$_POST['phone']."\n".
        "내용 : ".$_POST['message']."\n"
    );

    $headers = implode("\r\n", [
        //"From:" . $_POST['email'] . "",
        "From: grigompictures.com",
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'X-Mailer: PHP/' . PHP_VERSION
    ]);
    mail($to, $subject, $contents, $headers);

?>