import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopImage from "../components/TopImage";

export default function Home() {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <Header />

      <div style={{ flex: 1 }}>
        <TopImage />
      </div>

      <div style={{ padding: "10% 20%" } }>
        <div style={{padding:'5% 0%'}}>
          <h1>住宅の傷補修</h1>
          <p>生活しているうちに、フローリングやドア、家具などにキズが入ってしまった。
            そんな時にリペア技術を利用してみませんか？<br />
            ・物を落として床にキズが入ってしまった。<br />
            ・ドアのスリキズが気になる。<br />
            ・サッシがへこんでしまった。	<br />
            ・壁や床にネジ穴を作ってしまった。
          </p>
        </div>

        <div style={{padding:'5% 0%'}}>
          <h1>リペアのメリット・デメリット</h1>
          <p>メリット１<br />
            床やドアなどの破損箇所をピンポイントで補修することができる。
            破損した部材を交換するわけではなくキズを補修して部材はそのまま利用できます。<br />
            この特徴から、費用面では<br />
            ・新しい部材を購入しなくてよい<br />
            ・破損した部材の処分費用が不要になる<br />
            ・短時間で作業が完了するので人件費が少なくて済む・・・など、お得です！費用の目安ですが、交換修理の費用と比べて１/2～１/5程度になる場合が多いです。<br />
          </p>
        </div>

        <div>
          <h1>以降もこんな感じで入力</h1>
          <p>〜〜〜〜〜</p>
        </div>

        
      </div>

      <Footer />
    </div>
  );
}
