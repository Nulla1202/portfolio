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
            <li>
              <a href="#Research">RESEARCH</a>
            </li>
            <li>
              <a href="#Publications">PUBLICATIONS</a>
            </li>
            <li>
              <a href="#Awards">AWARDS</a>
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
            <img width={60} src="/image/profile.png"/>
            <span>PROFILE</span>
          </h1>
          <p>
              はじめまして！
              東京工業大学工学院情報通信系を3年半で卒業後、
              大阪大学大学院医学部・医学研究科に進学した清水大です。
              現在は脳波xAIの研究を行っており、深層学習モデルによる脳波の次元圧縮から
              言語処理・聴覚情報処理における脳機能の解明に取り組んでいます。
              これまで東京工業大学、ドイツ人工知能研究センター(DFKI)、ジョージア工科大学、大阪大学など
              国内外の研究機関で神経科学とAIの融合研究に従事してきました。
              趣味で開発も行っており、現在は散歩経路を共有できるスマホアプリを個人開発中です。
              本ポートフォリオサイトでは、私の持っているスキルや研究実績を
              紹介しています。<br></br>
              (最終更新日：2025/03/21)
          </p>
        </div>
      </section>

      <section className="section" id="Skill">
        <div className="inner">
          <h1>
            <img width={60} src="/image/program.png"/>
            <span>SKILL</span>
          </h1>
          <p>
            研究・開発の両面でプログラミングスキルを磨いており、特に機械学習やデータサイエンス領域を得意としています。
            また、研究で培った実験スキルと開発スキルを組み合わせて問題解決に取り組んでいます。
            下のグラフは各スキルの理解度を表しています。
          </p>
          <div className="chart">
            <RadarChart label="SKILL" labels={["Machine Learning", "Neuroscience", "Data Analysis", "App Development", "Software Engineering"]} radarData={[5, 4, 5, 3, 4]}></RadarChart>
          </div>
        </div>

        <Card 
          label="Programming" 
          labels={["Python", "Matlab", "Flutter", "JavaScript", "HTML/CSS"]} 
          star={[5, 5, 3, 2, 2]} 
          detail="Pythonは機械学習モデルの構築やデータ処理、Matlabは脳波解析(SPM12/EEGLAB)に使用。Flutterでモバイルアプリを開発中。"
        ></Card>
        <Card 
          label="Machine Learning" 
          labels={["PyTorch", "Neural Networks", "Deep Learning", "Vision Transformers", "Feature Extraction"]} 
          star={[4, 5, 4, 3, 5]} 
          detail="脳波データからの特徴抽出、Convolutional RNN、Vision Transformerなど先端的な手法を研究に応用しています。"
        ></Card>
        <Card
          label="Neuroscience"
          labels={["EEG Analysis", "fMRI", "ECoG", "Dynamic Causal Modeling", "Semantic Processing"]}
          star={[5, 4, 4, 5, 4]}
          detail="脳波(EEG)、機能的MRI、頭蓋内脳波(ECoG)のデータ収集・分析経験があり、特に言語処理や聴覚情報処理に関する脳機能研究に専門性を持っています。"
        ></Card>
        <Card
          label="Laboratory Skills"
          labels={["CRISPR-Cas9", "Circuit Design", "Confocal Microscopy", "Plasmid Construction"]}
          star={[3, 3, 3, 3]}
          detail="ジョージア工科大学でのCRISPR-Cas9を用いた遺伝子改変実験、京都大学での回路設計など、多様な実験技術を習得しています。"
        ></Card>
        <Card
          label="Research Methods"
          labels={["Experimental Design", "Data Collection", "Statistical Analysis", "Scientific Writing", "Presentation"]}
          star={[4, 4, 4, 4, 4]}
          detail="国際会議・学会での発表経験や論文執筆を通じて、研究の計画から発表までの一連のプロセスに精通しています。"
        ></Card>
      </section>

      <section className="section" id="Research">
        <div className="inner">
          <h1>
            <img width={60} src="/image/research.png"/>
            <span>RESEARCH EXPERIENCE</span>
          </h1>
          <div className="research-item">
            <h3>大阪大学医学部 (Takufumi Yanagisawa Lab)</h3>
            <p className="period">2024年7月 - 現在</p>
            <p>
              • 脳波(EEG)からの言語認知デコーディング<br/>
              • 頭蓋内脳波(ECoG)を用いたデータ量と分類精度の評価<br/>
              • サル頭蓋内脳波から特徴量抽出・分類問題
            </p>
          </div>
          <div className="research-item">
            <h3>株式会社アラヤ (Computational Neuroscience Lab)</h3>
            <p className="period">2023年7月 - 現在</p>
            <p>
              • 映画レビュー評価を予測する新しい協調フィルタリングモデルの構築<br/>
              • 脳波・fMRI同時測定時の脳波前処理の自動化<br/>
              • ニッチな内容を包含可能なRecommendation Modelの開発
            </p>
          </div>
          <div className="research-item">
            <h3>東京工業大学 (Natsue Yoshimura Lab)</h3>
            <p className="period">2022年9月 - 2024年9月</p>
            <p>
              • SPM12内のDynamic Causal Modelingを使用した意味判断課題におけるDefault Mode Networkの役割解明<br/>
              • 脳部位間の結合評価<br/>
              • Matlabによる前処理・処理過程の自動化スクリプト開発
            </p>
          </div>
          <div className="research-item">
            <h3>ドイツ人工知能研究センター (Immersive Quantified Learning Lab)</h3>
            <p className="period">2024年2月 - 2024年5月</p>
            <p>
              • ビジョントランスフォーマーを用いた脳波データからの聴覚情報分類<br/>
              • 畳み込みリカレントニューラルネットワークを用いた脳波からの音声知覚デコーディング<br/>
              • 機械学習の説明可能性を利用した特徴推定
            </p>
          </div>
          <div className="research-item">
            <h3>ジョージア工科大学 (Alberto Stolfi Lab)</h3>
            <p className="period">2023年8月 - 2023年9月</p>
            <p>
              • CRISPR-Cas9技術を用いたホヤ（Ciona）の遺伝子改変<br/>
              • sgRNAとプラスミドの設計・作成<br/>
              • 遺伝子改変結果の自動化プログラム開発
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="Publications">
        <div className="inner">
          <h1>
            <img width={60} src="/image/publication.png"/>
            <span>PUBLICATIONS & PRESENTATIONS</span>
          </h1>
          <ul className="publication-list">
            <li>
              <strong>Shimizu D</strong> et al. "Feature Estimation of Global Language Processing in EEG Using Attention Maps" 
              <em>ACCV2024</em>, full paper
            </li>
            <li>
              <strong>Shimizu D</strong> et al. "Evaluating the effective connectivity in a Japanese semantic judgment task"
              <em>NEURO2024</em>, Hataka, Fukuoka, July 24-27, 2024 [Conference oral presentation]
            </li>
            <li>
              <strong>Shimizu D</strong> et al. "Using machine learning and CRISPR/Cas9 to investigate neural gene functions in Ciona"
              <em>Nakatani RIES final presentation</em>, Georgia Institute of Technology, Atlanta GA, September 20, 2023 [Oral & Poster]
            </li>
            <li>
              <strong>Shimizu D</strong> et al. "Magnetic Levitation Control via Differential Circuitry"
              <em>ELCAS final presentation</em>, Kyoto University, Kyoto Japan, January 13, 2019 [Poster]
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="Awards">
        <div className="inner">
          <h1>
            <img width={60} src="/image/award.png"/>
            <span>AWARDS & SCHOLARSHIPS</span>
          </h1>
          <div className="award-item">
            <h3>中谷財団 ARIP プログラム</h3>
            <p>ドイツ人工知能研究センター(DFKI)でのバイオインフォマティクス研究をサポートする国際研究奨学金。宿泊費、渡航費、その他の費用全額支給。</p>
          </div>
          <div className="award-item">
            <h3>Autumn School for Computational Neuroscience in Japan</h3>
            <p>日本神経回路学会が主催する、神経科学への数理的アプローチに焦点を当てた4日間の秋季学校に全額支援で参加。</p>
          </div>
          <div className="award-item">
            <h3>中谷財団 RIES プログラム</h3>
            <p>ジョージア工科大学のバイオメディカル分野での研究をサポートする国際研究奨学金。宿泊費、渡航費、その他の費用全額支給。</p>
          </div>
          <div className="award-item">
            <h3>東京工業大学 B2D プログラム</h3>
            <p>専攻に関係なく早期に実践的な経験を得るための競争的プログラム。様々な特典と柔軟性を提供。</p>
          </div>
        </div>
      </section>

      <section className="section" id="Projects">
        <div className="inner">
          <h1>
            <img width={60} src="/image/project.png"/>
            <span>CURRENT PROJECTS</span>
          </h1>
          <div className="project-item">
            <h3>散歩経路共有アプリ</h3>
            <p className="period">2024年9月 - 現在</p>
            <p>
              Zelyのような散歩した経路を共有できるスマホアプリを個人開発中。Flutterを使用し、2025年4月頃にAppStoreへの申請を予定しています。
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="contact">
          <p>Email: daistar1202@gmail.com | Tel: +81(80)1985 5306</p>
          <p>Website: <a href="https://daistar12020.wixsite.com/mysite" target="_blank">https://daistar12020.wixsite.com/mysite</a></p>
        </div>
        <div className="copyRight">@DAI SHIMIZU. All Rights Reserved.</div>
      </footer>
    </main>
  )
}