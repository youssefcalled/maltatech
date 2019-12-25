<?php

if(empty($_POST['nome']) || empty($_POST['email']) || empty($_POST['assunto']) || empty($_POST['mensagem']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  
  exit();
}

$nome = strip_tags(htmlspecialchars($_POST['nome']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$assunto = strip_tags(htmlspecialchars($_POST['assunto']));
$mensagem = strip_tags(htmlspecialchars($_POST['mensagem']));


$to = "seuemail@provedor.com.br";
$subject = "$assunto";
$mensagem = "<strong>Nome:</strong> $nome<br /><br /><strong>E-mail:</strong>$email<br /><br /><strong>Assunto:</strong> $assunto<br /><br /><strong>Mensagem:</strong> $mensagem ";
$header = "MIME-Version: 1.0\n";
$header .= "Content-type: text/html; charset=utf-8\n";
$header .= "From: $email\n";
mail($to, $subject, $mensagem,$header);
?>
