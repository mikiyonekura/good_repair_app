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

      <Box id='ホーム' sx={{ width: '100%', maxWidth: '100%', height: 'auto' }}>
        <TopImage />
      </Box>


     
      <Box id='住宅の傷補修' sx={{ padding: { xs: '5%', md: '5%' } }}>
        <Box sx={{ padding: '5% 0' }}>
          <h1 className="topic_name">住宅の傷補修</h1>
          <Box className="text_contents" sx={{ padding: '2%' }}>
            生活しているうちに、フローリングやドア、家具などにキズが入ってしまった。<br />
            そんな時にリペア技術を利用してみませんか？<br />
            
            <ul className="cp_list" title="例">
              <li>物を落として床にキズが入ってしまった</li>
              <li>ドアのスリキズが気になる</li>
              <li>サッシがへこんでしまった</li>
              <li>壁や床にネジ穴を作ってしまった</li>
            </ul>

            <br />
            補修の例(左：補修前 右：補修後)<br />
            <img className="sample_image" src="repair_example_1.png" alt="" style={{padding: '2% 15%', width: '100%', height: 'auto' }} />
            <img className="sample_image" src="repair_example_2.png" alt="" style={{padding: '2% 15%', width: '100%', height: 'auto' }} />
            <img className="sample_image" src="repair_example_3.png" alt="" style={{padding: '2% 15%', width: '100%', height: 'auto' }} />

          </Box>
        </Box>

        <Box id='メリット' sx={{ padding: '5% 0' }}>
          <h1 className="topic_name">リペアのメリット・デメリット</h1>
          <Box className="text_contents" sx={{ padding: '2%' }}>
            <ul className="cp_list"  title="メリット">
              <li> 床やドアなどの破損箇所をピンポイントで補修することができる。<br />
                <span className="detail">破損した部材を交換するわけではなくキズを補修して部材はそのまま利用できます。この特徴から、費用面では以下の点でお得です！<br />
                ・新しい部材を購入しなくてよい<br />
                ・破損した部材の処分費用が不要になる<br />
                ・短時間で作業が完了するので人件費が少なくて済む <br /> 
                費用の目安ですが、交換修理の費用と比べて１/2～１/5程度になる場合が多いです。
                </span>
              </li>
              <li> キズ補修と調色を行うので違和感を最小限に抑えることができる。<br />
                <span className="detail">フローリングや建具などは、築年数とともに色あせてしまいます。フローリングを１枚だけ新品に交換するとその部分だけ違和感が出てしまうことも。違和感が出ないようにリフォームするとなれば時間もコストもとてもかかります。その点リペアはコストも時間も最小限にできます。</span>
              </li>
              <li> 物を大切にし環境にも優しい！まさにSDGｓ！<br />
                <span className="detail">物を大切にしましょう！小さいころ、親や学校の先生からよくいわれました。こわれたら修理し、汚れたら洗ったりみがいたりして物を大切に長く利用する。長く利用すると愛着が湧きかけがえのないものになっていきますよね。家もそうあって欲しいと私は思います。</span>
              </li>
            </ul>

            <ul className="cp_list" title="デメリット">
              <li> ニオイや換気<br />
                <span className="detail">リペア作業は、シンナーなどの有機溶剤を使用しますのでニオイが発生してしまいます。十分な換気が必要となりますのでご了承ください。ニオイに敏感な方は特に注意が必要です。<br />
                有機溶剤は、接着剤などにも含まれますのでリペアだけでなく部材交換（リフォーム）でも発生する場合があります。</span>
              </li>
              <li> リペアが厳しいところ<br />
                <span className="detail">ドアのヒンジなどの可動部や広範囲のキズには不向きです。その場合には交換をおすすめいたします。</span>
              </li>
            </ul>

          </Box>
        </Box>

        <Box id='リペアの内容' sx={{ padding: '5% 0' }}>
          <h1 className="topic_name">リペア内容</h1>
          <Box className="text_contents" sx={{ padding: '2%' }}>
            <ul>
              <li>① 建具、床などの木製品補修</li>
              <li>② アルミサッシや樹脂サッシの補修</li>
              <li>③ キッチン、洗面台などのコーキング</li>
              <li>④ 水切りなどやサッシ枠などの金属補修</li>
              <li>⑤ タイル、レンガの補修</li>
              <li>⑥ 建築業者様向け、竣工検査代行</li>
            </ul>
          </Box>
        </Box>

        <Box id='料金' sx={{ padding: '3% 0' }}>
          <h1 className="topic_name">料金</h1>
          <Box className="text_contents" sx={{ padding: '2%' }}>

            <ul>
              <span className="detail">材料費込みの金額です。</span> 
              <li>半日（３時間）　税込み２２０００円　
              <span className="detail">小傷 ２０～３０箇所</span></li>
              <li>１日（６時間）　税込み３３０００円　
              <span className="detail">小傷 ５０～６０箇所</span></li>
              <span className="detail">キズの種類や個数によって所要時間が変わります。まずは、お問い合わせください。</span>
              
            </ul>

            <br />
        
            <p>&lt; 交通費について &gt;<br />
              大分市、別府市は無料です。それ以外は、JR大分駅を起点としてガソリン代1km当たり50円と高速道路利用時は高速道路代を加算させていただきます。<br />
            </p>

          </Box>
        </Box>

        <Box id='問い合わせ' sx={{ padding: '3% 0' }}>
          <h1 className="topic_name">問い合わせ</h1>
          <Box className="text_contents" sx={{ padding: '2%' }}>
            <p>LINE，メール，お問い合わせフォームのいずれかにてお問い合わせを行うことができます。下記事項と写真を送っていただければ、お見積りをさせていただきます。</p>
            <br />
            
            <ul>
              <li>① お名前　（業者様の場合は会社名と担当者名もお願いします）</li>
              <li>② 連絡先　（施工の可否や金額等をお伝えできるメールアドレスや電話番号）</li>
              <li>③ 現場の住所　（マンション、アパート名もお書きください）</li>
              <li>④ 内容（床の線キズ2ヶ所、長さ約10センチ等、なるべく具体的にご記入ください）</li>
              <li>⑤ 施工箇所の写真　2枚以上<br />
                <span className="detail">・キズのアップ写真　(定規などキズの大きさがわかるものを入れて撮ってください。)<br />
                ・キズのある位置写真</span>
                <img className="sample_image" src="scar.png" alt="" style={{padding: '0 10%', width: '100%', height: 'auto' }} />

              </li>
            </ul>

      
      

           



            {/* 
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf2QrK0LM0SszhyAB9WytQkrpounpPuH0urzHs0s2fEBCS-nA/viewform?embedded=true"
              width="100%"
              height="1928"
              style={{ padding: '2%' }}
            >
              読み込んでいます…
            </iframe> */}

            <br />
            <p>&lt; 連絡先 &gt;<br /></p>

            <p>ご不明な点、質問、相談などがございましたらお気軽にご連絡ください。</p>
            <div style={{display:'flex', padding:'5% 25% ', gap:'35%'}}>
              
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2TQER3FSsXDxozxQcOuoVWxXF_y2SO3UJibK1UGqBOUX0zw/viewform" target="_blank" rel="noopener noreferrer">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <p>依頼フォーム</p>
                  <img src="form.png" alt="LINE" style={{width: '20vh', height: 'auto'}} />
                </div>
              </a>

              <a href="https://line.me/ti/p/62f62lqP6H" target="_blank" rel="noopener noreferrer">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <p>LINE</p>
                  <img src="line.png" alt="LINE" style={{width: '20vh', height: 'auto'}} />
                </div>
              </a>

            </div>
            <br />
            <p>〒８７０－０８４８<br />
              大分県大分市賀来北２－２０－１６　インペリアルKAKU４０２号室<br />
              グッドリペア大分 米倉義則<br />
              <br />
              TEL　０９０－８９１２－１９３９<br />
              MAIL　goodr.oita@gmail.com
            </p>            
            

            



          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  
  );
}