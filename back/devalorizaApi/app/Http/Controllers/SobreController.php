<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SobreController extends Controller
{
    public function __invoke()
    {
        $meta = [
            "tag" =>'<title>Sobre</title>
            <meta name="description" content="Desvalorização é uma ferramenta que te ajuda a entender os efeitos da inflação sobre o poder de compra da população brasileira. Usando os Índices IPCA (Índice de preços para consumidor amplo) e IPCM (Índice de preços ao consumidor - Merdado), monta-se um panorama da desvalorização do real no decorrer dos anos. Dessa forma, é mostrado valores de alguns produtos em determinadas épocas e seus respectivos valores junto aos dados dá inflação. Portando, é esperado que o usuário entenda como a inflação afeta-o diretamente." />
            <meta name="facebook-domain-verification" content="dz0rtvkf5s20ww9d9g1m8j960kp7bv" />
            <meta property="og:url"            content="https://desvalorizacao.com/" />
            <meta property="og:type"           content="site" />
            <meta property="og:title"          content="Será que o seu dinheiro ainda vale para alguma coisa? Descubra!" />
            <meta property="og:description"    content="Desvalorização é uma ferramenta que te ajuda a entender os efeitos da inflação sobre o poder de compra da população brasileira. Usando os Índices IPCA (Índice de preços para consumidor amplo) e IPCM (Índice de preços ao consumidor - Merdado), monta-se um panorama da desvalorização do real no decorrer dos anos. Dessa forma, é mostrado valores de alguns produtos em determinadas épocas e seus respectivos valores junto aos dados dá inflação. Portando, é esperado que o usuário entenda como a inflação afeta-o diretamente." />
            <meta property="og:image"          content="https://desvalorizacao.com/image/android-chrome-512x512.png" />'
            ];
        return Inertia::render('Sobre',$meta);
    }
}
