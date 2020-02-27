# README

# 設備管理アプリ

###  作成経緯
前職で製造ラインの設備の図面の管理、部品の管理、修復歴を残せる機能
を持ったアプリケーションがあったら便利だなーと思っていて作りたいと思っていました。
プログラミングをやりたいと思ったきっかけとなったものです。

- テストユーザー
  - アドレス：test@test
  - パスワード：tesutesu
[![Image from Gyazo](https://i.gyazo.com/50c28992e2c90a213d0d5141200f50f0.png)](https://gyazo.com/50c28992e2c90a213d0d5141200f50f0)  

テストユーザーの情報でログインしてください。

[![Image from Gyazo](https://i.gyazo.com/9952dab20c63aa1557f71e1febbe7f25.png)](https://gyazo.com/9952dab20c63aa1557f71e1febbe7f25)

左上のプルダウンメニューより各種機能をお試しいただけます。
## 機能
- 設備登録機能
  - 設備名、図面(画像)の複数枚登録
  - 部品を登録してある状態であれば設備の関連部品として登録可能
  [![Image from Gyazo](https://i.gyazo.com/2448a715650c74484f238d27a7792346.gif)](https://gyazo.com/2448a715650c74484f238d27a7792346)
- 設備詳細ページ
  - slickというgemを用いて登録されている画像をスライドできるようにしてあります。
  - またサムネイルをクリックすると画像を拡大表示することができます。
[![Image from Gyazo](https://i.gyazo.com/d38daf8ae0c159e050d009b06ed4d74e.gif)](https://gyazo.com/d38daf8ae0c159e050d009b06ed4d74e)
  - ヘッダー部分のメニューをクリックすると設備関連のメニューを表示し、各種メニューのページに遷移できます。
[![Image from Gyazo](https://i.gyazo.com/eba2d317d0a83550682c2e2dd8d1906a.jpg)](https://gyazo.com/eba2d317d0a83550682c2e2dd8d1906a)
- 設備編集機能
  - 登録図面の追加・差し替え、設備名、登録部品の変更が可能。
- 部品の登録機能
  - 部品名、在庫数、関連設備を登録可能
[![Image from Gyazo](https://i.gyazo.com/5922d8e4330ab950a729afff24fcc9d8.gif)](https://gyazo.com/5922d8e4330ab950a729afff24fcc9d8)

  - インクリメンタルサーチを用いてユーザーが入力したキーワードにマッチした設備を表示、追加ボタンを押すことで紐付けができる。
 
[![Image from Gyazo](https://i.gyazo.com/801522d630d7a0afdeba61a85b52b34d.gif)](https://gyazo.com/801522d630d7a0afdeba61a85b52b34d)

- 部品一覧
  - 登録されている部品の一覧を表示。
  - ゴミ箱マークをクリックで削除可能。
  - 部品名クリックで補充ページへ遷移
[![Image from Gyazo](https://i.gyazo.com/89cd359226e1077639c3fc3869fb8a18.png)](https://gyazo.com/89cd359226e1077639c3fc3869fb8a18)
  
- 部品の補充
  - トップページのメニューから補充ページに遷移していただき、任意の部品を選択していただくと部品の補充が可能。
  [![Image from Gyazo](https://i.gyazo.com/8dc4628178dc7a10fcdc26d122da6a0d.png)](https://gyazo.com/8dc4628178dc7a10fcdc26d122da6a0d)
- 設備の修復歴登録機能
  - 設備に紐づいた修復箇所、修復内容、使用部品の登録。
 [![Image from Gyazo](https://i.gyazo.com/c303a529bdfe992411e619b8cf5b388b.gif)](https://gyazo.com/c303a529bdfe992411e619b8cf5b388b)
[![Image from Gyazo](https://i.gyazo.com/370d3fa20fba80162c36c104e8224ee8.gif)](https://gyazo.com/370d3fa20fba80162c36c104e8224ee8)
  - 登録後に修復歴一覧から修復歴を閲覧する時はPDF形式で表示
 [![Image from Gyazo](https://i.gyazo.com/0041412008c4ae5d54c6a137c26879d9.gif)](https://gyazo.com/0041412008c4ae5d54c6a137c26879d9)
- 設備の検索
  - ログイン後トップページの検索窓で設備の検索が可能。
 [![Image from Gyazo](https://i.gyazo.com/b5e7b151e5bb8297ccc723bb23acf707.gif)](https://gyazo.com/b5e7b151e5bb8297ccc723bb23acf707)