
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  for(let aiu = 0;aiu<=1;aiu++) {
  console.log(data.results.shop[aiu].access);
  console.log(data.results.shop[aiu].address);
  console.log(data.results.shop[aiu].budget.average);
  console.log(data.results.shop[aiu].budget.name);
  console.log(data.results.shop[aiu].genre.name);
  console.log(data.results.shop[aiu].catch);
  console.log(data.results.shop[aiu].charter);
  console.log(data.results.shop[aiu].child);
  console.log(data.results.shop[aiu].close);
  console.log(data.results.shop[aiu].logo_image);
  console.log(data.results.shop[aiu].mobile_access);
  console.log(data.results.shop[aiu].open);
  console.log(data.results.shop[aiu].other_memo);
  console.log(data.results.shop[aiu].private_room);
  console.log(data.results.shop[aiu].wedding);
  }
}


// 課題5-1 の関数 printDom() はここに記述すること
let c = 0;
function printDom(data) {
  if(c>0) {
    let l = document.querySelector('div#result');
  l.remove();
  }
  c = 1;
  re = document.createElement('div');
  re.id = 'result';
  let body = document.querySelector('body');
  body.insertAdjacentElement('beforeend',re);
  let h = document.createElement('p');
  h.textContent = data.results.shop.length+'件がヒットしました.';
  re.insertAdjacentElement('beforeend',h);
  
  for(let i = 0;i<data.results.shop.length;i++) {
    let div = document.createElement('div');
  div.id = 'di';
  re.insertAdjacentElement('beforeend',div);
  //bodyの中にdivを入れた

  let text = document.createElement('p');
  text.textContent = i+1 + ' 件目';
  div.insertAdjacentElement('beforebegin',text);

  text = document.createElement('h3');
  text.id = 'name';
  text.textContent = data.results.shop[i].name;
  div.insertAdjacentElement('beforeend',text);
  //店の名前書いた

  text = document.createElement('p');
  text.textContent = 'ジャンル: '+data.results.shop[i].genre.name;
  div.insertAdjacentElement('beforeend',text);

  text = document.createElement('h3');
  text.textContent = '住所';
  div.insertAdjacentElement('beforeend',text);
  text = document.createElement('ul');
  div.insertAdjacentElement('beforeend',text);
  let text1 = document.createElement('li');
  text.insertAdjacentElement('beforeend',text1);
  text1.textContent = data.results.shop[i].address;

  text = document.createElement('h3');
  text.textContent = '最寄り駅';
  div.insertAdjacentElement('beforeend',text);
  text = document.createElement('ul');
  div.insertAdjacentElement('beforeend',text);
  text1 = document.createElement('li');
  text.insertAdjacentElement('beforeend',text1);
  text1.textContent = data.results.shop[i].mobile_access;

  text = document.createElement('h3');
  text.textContent = '営業時間';
  div.insertAdjacentElement('beforeend',text);
  text = document.createElement('ul');
  div.insertAdjacentElement('beforeend',text);
  text1 = document.createElement('li');
  text.insertAdjacentElement('beforeend',text1);
  text1.textContent = data.results.shop[i].open;

  text = document.createElement('p');
  text.textContent = '1人当たり'+data.results.shop[i].budget.name+','+data.results.shop[i].budget.average;
  div.insertAdjacentElement('beforeend',text);

  text = document.createElement('p');
  text.textContent = data.results.shop[i].catch;
  div.insertAdjacentElement('beforeend',text);

  text = document.createElement('p');
  text.textContent = data.results.shop[i].charter;
  div.insertAdjacentElement('beforeend',text);

  text = document.createElement('p');
  text.textContent = data.results.shop[i].child;
  div.insertAdjacentElement('beforeend',text);

  text = document.createElement('p');
  text.textContent = '予約等は↓のリンクから';
  div.insertAdjacentElement('beforeend',text);

  let l = document.createElement('a');
  l.setAttribute('href',data.results.shop[i].coupon_urls[i]);
  l.textContent = 'URL';
  div.insertAdjacentElement('beforeend',l);

  let logo = document.createElement('img');
  logo.setAttribute('src',data.results.shop[i].logo_image);
  div.insertAdjacentElement('beforeend',logo);
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('button#push');
b.addEventListener('click',sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  //let bu = document.querySelector('input[name="in"]');
  let g = document.querySelector('select');
  /**if(bu.value==='居酒屋') {
    g = "G001";
  }else if(bu.value==="ダイニングバー・バル") {
    g = "G002";
  }else if(bu.value==="創作料理") {
    g = "G003";
  }else if(bu.value==="和食") {
    g = "G004";
  }else if(bu.value==="洋食") {
    g = "G005";
  }else if(bu.value==="イタリアン・フレンチ") {
    g = "G006";
  }else if(bu.value==="中華") {
    g = "G007";
  }else if(bu.value==="焼肉・ホルモン") {
    g = "G008";
  }else if(bu.value==="アジア・エスニック料理") {
    g = "G009";
  }else if(bu.value==="各国料理") {
    g = "G010";
  }else if(bu.value==="カラオケ・パーティ") {
    g = "G011";
  }else if(bu.value==="バー・カクテル") {
    g = "G012";
  }else if(bu.value==="ラーメン") {
    g = "G013";
  }else if(bu.value==="カフェ・スイーツ") {
    g = "G014";
  }else if(bu.value==="その他グルメ") {
    g = "G015";
  }else if(bu.value==="お好み焼き・もんじゃ") {
    g = "G016";
  }else if(bu.value==="韓国料理") {
    g = "G017";
  }
    **/
  if(g.value==="null"/**g.value==="G001"||g.value==="002"||g.value==="G003"||g.value==="G004"||g.value==="G005"||g.value==="G006"||g.value==="G007"||g.value==="G008"||g.value==="G009"||g.value==="G010"||g.value==="G011"||g.value==="G012"||g.value==="G013"||g.value==="G014"||g.value==="G015"||g.value==="G016"||g.value==="G017"**/) {
  }else{
    let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+g.value+'.json';

    axios.get(url).then(showResult).catch(showError).then(finish);
  }
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "results": {
    "api_version": "1.26",
    "results_available": 52,
    "results_returned": "10",
    "results_start": 1,
    "shop": [
      {
        "access": "京王八王子駅を背にし右手に見えるローソンの隣のビル、ホテルザ・ビーの2階です。",
        "address": "東京都八王子市明神町４-6-12　ホテル・ザ・ビー八王子（旧八王子プラザホテル）2F",
        "band": "可",
        "barrier_free": "なし",
        "budget": {
          "average": "ディナー3000円",
          "code": "B003",
          "name": "3001～4000円"
        },
        "budget_memo": "",
        "capacity": 100,
        "card": "利用可",
        "catch": "【サプライズ演出有】 結婚パーティー受付中",
        "charter": "貸切可 ：VIPルーム1部屋2～15名様前後（完全個室）/パーティーフロア！50型モニター・スポットライト等充実",
        "child": "お子様連れOK",
        "close": "不定休有り。店休時は店長携帯電話09035324825まで問い合わせください♪",
        "coupon_urls": {
          "pc": "https://www.hotpepper.jp/strJ000989843/map/?vos=nhppalsa000016",
          "sp": "https://www.hotpepper.jp/strJ000989843/scoupon/?vos=nhppalsa000016"
        },
        "course": "あり",
        "english": "なし",
        "free_drink": "あり",
        "free_food": "なし",
        "genre": {
          "catch": "大人の社交場非日常を味わうダイニング",
          "code": "G001",
          "name": "居酒屋"
        },
        "horigotatsu": "なし",
        "id": "J000989843",
        "karaoke": "あり",
        "ktai_coupon": 0,
        "large_area": {
          "code": "Z011",
          "name": "東京"
        },
        "large_service_area": {
          "code": "SS10",
          "name": "関東"
        },
        "lat": 35.6585460152,
        "lng": 139.34327231,
        "logo_image": "https://imgfp.hotp.jp/IMGH/21/04/P038512104/P038512104_69.jpg",
        "lunch": "なし",
        "middle_area": {
          "code": "Y110",
          "name": "八王子・立川"
        },
        "midnight": "営業していない",
        "mobile_access": "京王八王子駅1分/JR八王子駅北口5分",
        "name": "バグダッドカフェ Bagdadcafe/モータウン MOTOWN",
        "name_kana": "ばぐだっどかふぇもーたうんはちおうじ",
        "non_smoking": "禁煙席なし",
        "open": "月～日、祝日、祝前日: 17:00～21:00 （料理L.O. 20:00 ドリンクL.O. 20:00）",
        "other_memo": "ステージ・マイク・カラオケ等",
        "parking": "なし",
        "party_capacity": 250,
        "pet": "不可",
        "photo": {
          "mobile": {
            "l": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_100.jpg"
          },
          "pc": {
            "l": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_238.jpg",
            "m": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/22/35/P038512235/P038512235_58_s.jpg"
          }
        },
        "private_room": "あり ：VIPルーム1部屋2～15名様前後（完全個室）/パーティーフロア",
        "service_area": {
          "code": "SA11",
          "name": "東京"
        },
        "shop_detail_memo": "ご質問、ご要望はお気軽にお問い合わせください♪",
        "show": "あり",
        "small_area": {
          "code": "X220",
          "name": "八王子"
        },
        "station_name": "京王八王子",
        "sub_genre": {
          "code": "G002",
          "name": "ダイニングバー・バル"
        },
        "tatami": "なし",
        "tv": "あり",
        "urls": {
          "pc": "https://www.hotpepper.jp/strJ000989843/?vos=nhppalsa000016"
        },
        "wedding": "大歓迎！ステージ・マイク・音響・映像等、設備充実！！最大200名様まで是非どうぞ★",
        "wifi": "あり"
      },
      {
        "access": "ＪＲ八王子駅北口徒歩1分/京王八王子駅徒歩3分",
        "address": "東京都八王子市東町12-14",
        "band": "不可",
        "barrier_free": "あり ：スタッフがお手伝いさせて頂きます。ご不明な点等お気軽にお声掛け下さい。事前のお問い合わせも◎",
        "budget": {
          "average": "2,000円(通常平均) 3,000円(宴会平均) ",
          "code": "B002",
          "name": "2001～3000円"
        },
        "budget_memo": "",
        "capacity": 100,
        "card": "利用可",
        "catch": "2.5時間飲み放題付2000円~ 【★少人数様ソファー★】",
        "charter": "貸切可 ：八王子で人気の個室バル最大50名様まで対応できます。20名様～フロア貸切応相談　最大100名様までOK",
        "child": "お子様連れ歓迎 ：チャイルドシートもご用意しています。お子様連れのママ会・ご家族でのご利用にもお気軽にどうぞ♪",
        "close": "【年中無休】貸切宴会のご予約も絶賛受付中！最大100名様までご利用可能ですので、会社宴会 同窓会 宴会にオススメ♪",
        "coupon_urls": {
          "pc": "https://www.hotpepper.jp/strJ001275177/map/?vos=nhppalsa000016",
          "sp": "https://www.hotpepper.jp/strJ001275177/scoupon/?vos=nhppalsa000016"
        },
        "course": "あり",
        "english": "なし",
        "free_drink": "あり ：★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
        "free_food": "あり ：★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
        "genre": {
          "catch": "八王子 個室居酒屋 飲み放題 肉バル 女子会",
          "code": "G001",
          "name": "居酒屋"
        },
        "horigotatsu": "なし ：温かな照明と開放的な店内で楽しくご宴会♪八王子での宴会 飲み会 女子会 二次会 合コンに◎",
        "id": "J001275177",
        "karaoke": "なし",
        "ktai_coupon": 0,
        "large_area": {
          "code": "Z011",
          "name": "東京"
        },
        "large_service_area": {
          "code": "SS10",
          "name": "関東"
        },
        "lat": 35.6582259169,
        "lng": 139.3381858122,
        "logo_image": "https://imgfp.hotp.jp/IMGH/61/98/P038366198/P038366198_69.jpg",
        "lunch": "なし",
        "middle_area": {
          "code": "Y110",
          "name": "八王子・立川"
        },
        "midnight": "営業している",
        "mobile_access": "JR八王子駅北口徒歩1分/京王八王子駅徒歩3分",
        "name": "隠れ家バル Funny&Bouquet",
        "name_kana": "かくれやばる　ふぁにーあんどぶーけ",
        "non_smoking": "禁煙席なし",
        "open": "月～日、祝日、祝前日: 17:00～翌5:00 （料理L.O. 翌3:00 ドリンクL.O. 翌4:00）",
        "other_memo": "個室や貸切の詳細等お気軽にお電話にてお問い合わせください。八王子での飲み会に◎",
        "parking": "なし ：お近くのコインパーキングをご利用下さい。",
        "party_capacity": 50,
        "pet": "不可",
        "photo": {
          "mobile": {
            "l": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_100.jpg"
          },
          "pc": {
            "l": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_238.jpg",
            "m": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_168.jpg",
            "s": "https://imgfp.hotp.jp/IMGH/33/59/P038703359/P038703359_58_s.jpg"
          }
        },
        "private_room": "なし ：個室　2名×4室　4名×8室　8名～10名×4室　20名～40名×2室",
        "service_area": {
          "code": "SA11",
          "name": "東京"
        },
        "shop_detail_memo": "★NEW OPEN★当店イチ押しのコース★2.5h飲み放題付き「Funny Classicコース」4980円→2980円",
        "show": "なし",
        "small_area": {
          "code": "X220",
          "name": "八王子"
        },
        "station_name": "八王子",
        "sub_genre": {
          "code": "G002",
          "name": "ダイニングバー・バル"
        },
        "tatami": "なし ：八王子で人気のお座敷個室！最大50名様まで対応できます。",
        "tv": "あり",
        "urls": {
          "pc": "https://www.hotpepper.jp/strJ001275177/?vos=nhppalsa000016"
        },
        "wedding": "八王子での結婚式の二次会や同窓会、打ち上げパーティー等多様なシーンにご利用下さい",
        "wifi": "あり"
      }
    ]
  }
};

/**function search() {
  let hit = document.createElement('p');
  hit.textContent = '2件がヒットしました.';
  let a = document.querySelector('p#kensaku');
  a.insertAdjacentElement('beforeend',hit);
  let i = document.querySelector('input[name="in"]');
  let log = ('検索キー:'+i.value);
  console.log(log);
}
let zz = document.querySelector('button#push')
zz.addEventListener('click',search);
**/
