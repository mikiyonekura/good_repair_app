'use client'

import Image from "next/image";
import Box from '@mui/material/Box';
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopImage from "../components/TopImage";

export default function Home() {
  return (
    <Box sx={{ height: "100vh", overflowY: "auto" }}>
      <meta name="google-site-verification" content="YHLJDj0u6M0GCXSv9Y6hcWPNp-UWaGFEafWWJ5il2d4" />

      <Header />

      <Box sx={{ width: '100%', maxWidth: '100%', height: 'auto' }}>
        <TopImage />
      </Box>

      <Box sx={{ padding: { xs: '5%', md: '5%' } }}>
        <Box sx={{ padding: '0' }}>
          <h1 className="topic_name">住宅の傷補修</h1>
          <Box className="text_contents" sx={{ padding: '2%' }}>
            生活しているうちに、フローリングやドア、家具などにキズが入ってしまった。<br />
            そんな時にリペア技術を利用してみませんか？<br />
            ・物を落として床にキズが入ってしまった。<br />
            ・ドアのスリキズが気になる。<br />
            ・サッシがへこんでしまった。<br />
            ・壁や床にネジ穴を作ってしまった。
          </Box>
          <img className="sample_image" src="repair_example.png" alt="" style={{ width: '100%', height: 'auto' }} />
        </Box>

        <Box sx={{ padding: '0' }}>
          <h1 className="topic_name">リペアのメリット・デメリット</h1>
          <Box className="text_contents" sx={{ padding: '2%' }}>
            <p>メリット１<br />
              床やドアなどの破損箇所をピンポイントで補修することができる。<br />
              破損した部材を交換するわけではなくキズを補修して部材はそのまま利用できます。<br />
              この特徴から、費用面では<br />
              ・新しい部材を購入しなくてよい<br />
              ・破損した部材の処分費用が不要になる<br />
              ・短時間で作業が完了するので人件費が少なくて済む・・・など、お得です！<br />
              費用の目安ですが、交換修理の費用と比べて１/2～１/5程度になる場合が多いです。<br />
            </p>
          </Box>
        </Box>

        <Box>
          <h1 className="topic_name">問い合わせ</h1>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf2QrK0LM0SszhyAB9WytQkrpounpPuH0urzHs0s2fEBCS-nA/viewform?embedded=true"
            width="100%"
            height="1928"
            style={{ padding: '2%' }}
          >
            読み込んでいます…
          </iframe>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
