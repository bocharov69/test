<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

if (isset($_POST['phone-number'])) {$phone = $_POST['phone-number'];}
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['contact-way'])) {$contactWay = $_POST['contact-way'];}

if($contactWay == '1'){
  $contactWay = 'Звонок';
} elseif($contactWay == '2'){
  $contactWay = 'Телеграм';
} else {
	$contactWay = 'Вотсап';
}



$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
$mail->isSMTP(); 
$mail->SMTPDebug = 2; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
$mail->Host = "smtp.gmail.com"; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
$mail->Port = 587; // TLS only
$mail->SMTPSecure = 'tls'; // ssl is depracated
$mail->SMTPAuth = true;
$mail->Username = 'info@grill-kuhni.ru';
$mail->Password = 'cnkgvczxdmwzvysa';
$mail->setFrom('', 'Заявка с лендинга Гриль-кухни.рф');
$mail->addReplyTo('no-reply@гриль-кухни.рф', '');
$mail->addAddress('cd@email2business.ru', '');
$mail->addAddress('info@whogrill.ru', '');
$mail->Subject = 'Заявка';
$mail->msgHTML("Имя: " . $name ." Номер телефона: +7 " . $phone); //$mail->msgHTML(file_get_contents('contents.html'), __DIR__); //Read an HTML message body from an external file, convert referenced images to embedded,
$mail->AltBody = 'HTML messaging not supported';
// $mail->addAttachment('images/phpmailer_mini.png'); //Attach an image file

if(!$mail->send()){
    echo "Произошла ошибка: " . $mail->ErrorInfo;
}else{
    echo "Успешно отправлено!";
   
    echo "
    <script type=\"text/javascript\">
    window.history.back();
    </script>
";
}



?>

