import React from "react";
import RadarChart from "./src/features/components/RadarChart";
import Card from "./src/features/components/content";

export default function Page() {
  return (
    <main>
      <div className="menu">
        <nav className="fixed">
          <ul className="items">
            <li>
              <a href="#Profile">PROFILE</a>
            </li>
            <li>
              <a href="#Skill">SKILL</a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="section" id="Top">
        <div className="inner">
          <div className="logo">
            <h1>DAI SHIMIZU</h1>
          </div>
        </div>
      </section>
      <section className="section" id="Profile">
        <div className="inner">
          <h1>
            <img width={60} src="image/profile.png"/>
            <span>PROFILE</span>
          </h1>
          <p>
              はじめまして！
              東京工業大学工学院情報通信系を3年半で卒業後、
              大阪大学大学院医学部・医学研究科に進学いたします清水大です。
              友人の起業をきっかけに、自身で扱えるプログラミング言語を増やすため勉強中です
              現在は脳波xAIの研究を行っており、深層学習モデルによる脳波の次元圧縮が可能なのか、
              またその説明可能性についても追っています。
              本ポートフォリオサイトでは、私の持っているスキルや制作物を
              知ってほしく作成しました。<br></br>
              (最終更新日：2025/03/21)
          </p>
        </div>
      </section>

      <section className="section" id="Skill">
        <div className="inner">
          <h1>
            <img width={60} src="image/program.png"/>
            <span>SKILL</span>
          </h1>
          <p>
            主にオープン系の言語を中心にフロントエンドからバックエンドまで
            幅広い領域に触れながら、フルスタックエンジニアになれるよう日々研鑽を積んでいます。
            下のグラフは各スキルの理解度を表しています。
          </p>
          <div className="chart">
            <RadarChart label="SKILL" labels={["Front-End", "Back-End", "DB", "Frame-Work", "OS"]} radarData={[2, 4, 3, 2, 4]}></RadarChart>
          </div>
        </div>

        <Card label="Front-End" labels={["HTML5", "CSS3", "JavaScript"]} star={[2, 2, 2]} detail="WEBサイトやElectronでデスクトップアプリを作成する際に習得しました。"></Card>
        <Card 
          label="Back-End" 
          labels={["Python", "C", "C++", "PHP", "Java"]} 
          star={[5, 3, 3, 2, 2]} 
          detail="Pythonは私がこよなく愛する言語であり、WEBサイトやデスクトップアプリ、Webスクレイピングなどの開発を行いました。CやC++はPICマイコンのコーディングで使用しました。PHPとJavaは現在独学中です。"
        ></Card>
        <Card
          label="DB"
          labels={["MySQL", "MariaDB", "SQLite"]}
          star={[3, 3, 3]}
          detail="普段の個人開発ではMariaDBを使用しています。"
        ></Card>
        <Card
          label="Frame-Work"
          labels={["Django", "Deno", "Node.js", "Next.js"]}
          star={[4, 2, 2, 2]}
          detail="本サイトはNext.jsで作成し、Vercelにて公開されています。"
        ></Card>
        <Card
          label="OS"
          labels={["Windows", "Linux"]}
          star={[4, 3]}
          detail="普段の開発はWindowsで行っています。LinuxはUbuntuやFedora、CentOSなど代表的なOSはインストールから環境構築、開発まで可能です。私のお気入りはFedoraです。"
        ></Card>
        <Card
          label="Others"
          labels={["Raspberry Pi", "Vs Code", "GitHub"]}
          star={[3, 4, 2]}
          detail="普段のコーディングはVS Codeで行っています。Raspberry Piは電子工作からサーバーの構築まで行った経験があり、現在は自宅サーバーとして使用しています。"
        ></Card>
      </section>
      <footer>
        <div className="copyRight">@SHOYA KOUNO. All Rights Reserved.</div>
      </footer>
    </main>
  )
}