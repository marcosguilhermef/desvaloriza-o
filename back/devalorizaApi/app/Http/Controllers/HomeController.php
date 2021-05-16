<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $meta = [
        "tag" =>'<title>Desvalorização</title>
    <meta name="description" content="Desvalorização é uma ferramenta criada para mostrar a perda do poder de compra do real nos últimos anos e como isso afeta diretamente na vida dos brasileiros." />
    <meta name="facebook-domain-verification" content="dz0rtvkf5s20ww9d9g1m8j960kp7bv" />
    <meta property="og:url"            content="http://desvalorizacao.com/" />
    <meta property="og:type"           content="site" />
    <meta property="og:title"          content="Quando o seu dinheiro se desvalorizou nos últimos anos? " />
    <meta property="og:description"    content="Essa ferramenta tem o objetico de demonstrar o tanto que o seu dinheiro se desvalorizou nos últimos anos." />
    <meta property="og:image"          content="https://desvalorizacao.com/image/android-chrome-512x512.png" />'
        ];
        return Inertia::render('Home',$meta);
    }
}
