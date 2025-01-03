dataSetVersion = "2018-02-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: false,
    sub: [
      { name: "MILGRAM", key: "milgram" },
      { name: "Pokémon", key: "pokemon" },
      { name: "Hololive", key: "holo" },
      { name: "Danganronpa", key: "dg" },
      { name: "Genshin Impact", key: "genshin" },
      { name: "Nikke", key: "nikke" },
      { name: "Senran Kagura", key: "sk" },
      { name: "Idolmaster", key: "idolmaster" },
      { name: "Ace Attorney", key: "aa" },
      { name: "When They Cry", key: "wtc" },
      { name: "One Piece", key: "op" },
      { name: "Monogatari Series", key: "monogatari" },
      { name: "Hunter x Hunter", key: "hxh" },
      { name: "Kemono Friends", key: "kf" },
      { name: "Your Turn to Die", key: "yttd" },
      { name: "Zero Escape", key: "ze" },
      { name: "Persona", key: "persona" },
      { name: "Naruto", key: "naruto" },
      { name: "Infinite Stratos", key: "if" },
      { name: "Go-Tōbun no Hanayome", key: "gotobun" },
      { name: "Shingeki no Kyojin", key: "snk" },
      { name: "Re:zero", key: "rezero" },
      { name: "Touhou", key: "touhou" },
      { name: "Boku no Hero Academia", key: "bnha"},
      { name: "Love Live!", key: "lovelive" }
    ]
  },
 {
  name: "Filter by Type",
  key: "type",
  tooltip: "Check this to restrict certain types.",
  checked: false,
  sub: [
    { name: "Lolis", key: "loli" },
    { name: "Femboys", key: "femboy" },
    { name: "Witch", key: "witch" },
    { name: "Huge", key: "huge" },
    { name: "Goth", key: "goth" },
    { name: "Pants", key: "pants" }
  ]
 },
 {
  name: "Filter by Media",
  key: "media",
  tooltip: "Check this to restrict certain types",
  checked: false,
  sub: [
    { name: "Anime", key: "anime" },
    { name: "Games", key: "game" },
    { name: "Other", key: "other" }   
   ]
 }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Amane Momose",
    img: "NsEaaux.png",
    opts: {
      groups: ["milgram"],
      type: ["loli"],
      media: ["other"]
    }
  },
  {
    name: "Yuno Kashiki",
    img: "2t8EFeq.png",
    opts: {
      groups: ["milgram"],
      media: ["other"]
      
    }
  },
  {
    name: "Muu Kusunoki",
    img: "3mfOhO2.png",
    opts: {
      groups: ["milgram"],
      media: ["other"]
    }
  },
  {
    name: "Mahiru Shiina",
    img: "ymwCIS8.png",
    opts: {
      groups: ["milgram"],
      media: ["other"]
    }
  },
  {
    name: "Kotoko Yuzuriha",
    img: "LZfszZC.png",
    opts: {
      groups: ["milgram"],
      media: ["other"]
    }
  },
  {
    name: "Himiko Yumeno",
    img: "dvOWQFO.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Kirumi Toujou",
    img: "NxFl8Bf.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Tenko Chabashira",
    img: "m7qCPZt.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Miu Iruma",
    img: "tO9GGkr.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Angie Yonaga",
    img: "dmhTNXb.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Sayaka Maizono",
    img: "Gnab3qY.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Kyouko Kirigiri",
    img: "8NZfpMZ.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Mahiru Koizumi",
    img: "QlqtM51.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Chiaki Nanami",
    img: "gIIV5KK.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Maki Harukawa",
    img: "Em7fefG.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Tsumugi Shirogane",
    img: "6LmTIja.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Kaede Akamatsu",
    img: "t4rCpm8.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Celestia Ludenberg",
    img: "INWSljb.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },
  {
    name: "Junko Enoshima",
    img: "YLpgoqZ.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  },    
  {
    name: "Touko Fukawa",
    img: "I4he2yL.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Peko Pekoyama",
    img: "slhvY0y.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Sonia Nevermind",
    img: "yNvNCHZ.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Akane Owari",
    img: "dxD2dZ3.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Mikan Tsumiki",
    img: "VBt1Vct.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Kotoko Utsugi",
    img: "wT8J84w.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Ruruka Andou",
    img: "7Rovzy3.png",
    opts: {
      groups: ["dg"],
      media: ["anime"]
    }
  }, 
  {
    name: "Natsumi Kuzuyuu",
    img: "SvUi20H.png",
    opts: {
      groups: ["dg"],
      media: ["anime"]
    }
  }, 
  {
    name: "Miaya Gekkogahara",
    img: "aX9lOtC.png",
    opts: {
      groups: ["dg"],
      media: ["anime"]
    }
  }, 
  {
    name: "Chisa Yukizome",
    img: "GTSm2Pi.png",
    opts: {
      groups: ["dg"],
      media: ["anime"]
    }
  }, 
  {
    name: "Ibuki Mioda",
    img: "tP6ShzQ.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
  {
    name: "Chihiro Fujisaki",
    img: "bnU1NR9.png",
    opts: {
      groups: ["dg"],
      type: ["femboy"],
      media: ["game"]
    }
  }, 
  {
    name: "Monaka Towa",
    img: "BdXEJ1h.png",
    opts: {
      groups: ["dg"],
      media: ["game"]
    }
  }, 
    {
    name: "Hikari Yagami",
    img: "s6AoUM2.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  }, 
  {
    name: "Ami Futami",
    img: "sAcndPF.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Mami Futami",
    img: "HFOZZQP.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]  
    }
  },
  {
    name: "Iori Minase",
    img: "lvWjZSi.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Momoko Suou",
    img: "hGVnSNv.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Anzu Futaba",
    img: "wqLmAGW.png",
    opts: {
      groups: ["idolmaster"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Kanako Mimura",
    img: "04Dfu7i.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Arisa Mochida",
    img: "WbshsNL.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Fumika Sagisawa",
    img: "UiIdCkb.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Momoka Sakurai",
    img: "v0cMZmX.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Koharu Koga",
    img: "Csw6HaA.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Rin Shibuya",
    img: "SLTezmo.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Uzuki Shimamura",
    img: "hQw0hDD.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Yuka Nakano",
    img: "btkeO2A.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Nanami Asari",
    img: "PAzA3Mw.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Airi Totoki",
    img: "G1KopHP.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Miss Valentine",
    img: "om3fs1O.png",
    opts: {
      groups: ["op"],
      media: ["anime"]
    }
  },
  {
    name: "Biscuit Krueger",
    img: "9hB8xx9.png",
    opts: {
      groups: ["hxh"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Yukari Sendou",
    img: "8poGXKk.png",
    opts: {
      type: ["loli", "witch"],
      media: ["anime"]
    }
  },
  {
    name: "Anna Mochizuki",
    img: "bzli0SH.pngg",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Sachiko Koshimizu",
    img: "mvkRTzr.png",
    opts: {
      groups: ["idolmaster"],
      media: ["anime"]
    }
  },
  {
    name: "Tomoko Kuroko",
    img: "1qDrcHW.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Pan",
    img: "ibQ0n3J.png",
    opts: {
      type: ["loli", "pants"],
      media: ["anime"]
    }
  },
  {
    name: "Nonon Jakuzure",
    img: "P9HIYuJ.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Siesta",
    img: "G7hTJIn.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Maria Ushiromiya",
    img: "uiJloey.png",
    opts: {
      groups: ["wtc"],
      type: ["loli", "witch"],
      media: ["game"]
    }
  },
  {
    name: "Kazemaru Ichirouta",
    img: "5uRDbMQ.png",
    opts: {
      type: ["femboy"],
      media: ["anime"]
    }
  },
  {
    name: "Sakura Haruno",
    img: "KLk0upF.png",
    opts: {
      groups: ["naruto"],
      media: ["anime"]
    }
  },
    {
    name: "Louise Françoise",
    img: "UITvFGo.png",
    opts: {
      media: ["anime"]
    }
  },
    {
    name: "Sakura Kinomoto",
    img: "TbdKJni.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Makoto Kowata",
    img: "6yK8yoe.png",
    opts: {
      type: ["witch"],
      media: ["anime"]
    }
  },
  {
    name: "Ringo Akai",
    img: "sxcycnD.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Nico Robin",
    img: "AdFyA3p.png",
    opts: {
      groups: ["op"],
      media: ["anime"]
    }
  },
  {
    name: "Wendy",
    img: "Q5qT31a.png",
    opts: {
      type: ["huge"],
      media: ["game "]
    }
  },
  {
    name: "Stocking Anarchy",
    img: "ql6XTJW.png",
    opts: {
      type: ["goth"],
      media: ["anime"]
    }
  },
  {
    name: "Lingyin Huang",
    img: "CQ30n95.png",
    opts: {
      groups: ["is"],
      media: ["anime"]
    }
  },
  {
    name: "Tenten",
    img: "X3GDPsQ.png",
    opts: {
      groups: ["naruto"],
      media: ["anime"]
    }
  },
  {
    name: "Cecilia Alcott",
    img: "Ddwcaix.png",
    opts: {
      groups: ["is"],
      media: ["anime"]
    }
  },
  {
    name: "Laura Bodewig",
    img: "zqCWJhz.png",
    opts: {
      groups: ["is"],
      media: ["anime"]
    }
  },
  {
    name: "Charlotte Dunois",
    img: "VxMiiuH.png",
    opts: {
      groups: ["is"],
      media: ["anime"]
    }
  },
  {
    name: "Suzuha Amane",
    img: "ttOOaw4.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Aurora Syalis",
    img: "iap8qCn.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Luka Urushibara",
    img: "YSiedCL.png",
    opts: {
      type: ["femboy"],
      media: ["anime"]
    }
  },
  {
    name: "Perona",
    img: "huOsTqS.png",
    opts: {
      groups: ["op"],
      media: ["anime"]
    }
  },
  {
    name: "Raiha Uesugi",
    img: "uMZvSuG.png",
    opts: {
      groups: ["gotobun"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Tsukihi Araragi",
    img: "CgWYeGM.png",
    opts: {
      groups: ["monogatari"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Clover",
    img: "lG27ZqG.png",
    opts: {
      groups: ["ze"],
      media: ["game"]
    }
  },
  {
    name: "Ponzu",
    img: "UgfunPy.pngg",
    opts: {
      groups: ["hxh"],
      media: ["anime"]
    }
  },
  {
    name: "Chitanda Eru",
    img: "5DsMFr5.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Mito Freecs",
    img: "SX7LMXQ.png",
    opts: {
      groups: ["hxh"],
      media: ["anime"]
    }
  },
  {
    name: "Ema Skye",
    img: "LgEeZfE.png",
    opts: {
      groups: ["aa"],
      media: ["game"]
    }
  },
  {
    name: "Elaina",
    img: "grsXZyM.png",
    opts: {
      type: ["witch"],
      media: ["anime"]
    }
  },
  {
    name: "Suguha Kirigaya",
    img: "uXoo2Nz.png",
    opts: {
      type: ["huge"],
      media: ["anime"]
    }
  },
  {
    name: "Hana Yurikawa",
    img: "QQFogcS.png",
    opts: {
      type: ["huge"],
      media: ["anime"]
    }
  },
  {
    name: "Mayl",
    img: "x8Prspi.png",
    opts: {
      media: ["game"]
    }
  },
  {
    name: "Annie Leonhart",
    img: "VeZ9QjN.png",
    opts: {
      groups: ["snk"],
      media: ["anime"]
    }
  },
  {
    name: "Hina",
    img: "uSMJCvJ.png",
    opts: {
      groups: ["hxh"],
      media: ["anime"]
    }
  },
  {
    name: "Mikasa Ackerman",
    img: "vG3xahL.png",
    opts: {
      groups: ["snk"],
      media: ["anime"]
    }
  },
  {
    name: "Historia Reiss",
    img: "ihZomq4.png",
    opts: {
      groups: ["snk"],
      media: ["anime"]
    }
  },
  {
    name: "Pandora",
    img: "OsgPp0J.png",
    opts: {
      groups: ["rezero"],
      media: ["anime"]
    }
  },
  {
    name: "Komeiji Koishi",
    img: "wVCcens.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Komeiji Satori",
    img: "dup7Nt6.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Kawashiro Nitori",
    img: "4Ufced2.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Patchouli Knowledge",
    img: "A7ZnuHo.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Houraisan Kaguya",
    img: "2YDuTk3.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Yorigami Shion",
    img: "LenxXR4.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Kirisame Marisa",
    img: "tJnkSzK.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Remilia Scarlet",
    img: "8UX7hKE.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Flandre Scarlet",
    img: "OhaDcnc.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Izayoi Sakuya",
    img: "sgZPf11.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Hinanawi Tenshi",
    img: "tZLYivt.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Kazami Yuuka",
    img: "MZXJQq5.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Inaba Tewi",
    img: "yqNfNje.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Rumia",
    img: "0YT7QlS.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Alice Margatroid",
    img: "aDIf0pN.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Saigyouji Yuyuko",
    img: "VT9mTGb.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Hakurei Reimu",
    img: "c5DqpgX.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Konpaku Youmu",
    img: "WMjyRLJ.png",
    opts: {
      groups: ["touhou"],
      media: ["game"]
    }
  },
  {
    name: "Akiyama Yukari",
    img: "Il72tEP.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Nozomi Yumehara",
    img: "2SJ8mTp.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Anzu Kinashi",
    img: "eBi8CY0.png",
    opts: {
      groups: ["yttd"],
      media: ["game"]
    }
  },
  {
    name: "Mayoi Hachikuji",
    img: "v1AENfp.png",
    opts: {
      groups: ["monogatari"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Rikka Takanashi",
    img: "MoU620s.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Kafuu Chino",
    img: "hM1KCqU.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Honoka Kousaka",
    img: "t6hcicH.png",
    opts: {
      groups: ["lovelive"],
      media: ["anime"]
    }
  },
  {
    name: "Maki Nishikino",
    img: "NQk9VNQ.png",
    opts: {
      groups: ["lovelive"],
      media: ["anime"]
    }
  },
  {
    name: "Kalluto Zoldyck",
    img: "o6uqA8e.png",
    opts: {
      groups: ["hxh"],
      type: ["femboy", "loli"],
      media: ["anime"]
    }
  },
  {
    name: "Piyon",
    img: "S1uyPwv.png",
    opts: {
      groups: ["hxh"],
      media: ["anime"]
    }
  },
  {
    name: "Elizabeth Liones",
    img: "BdQZPm0.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Franziska Von Karma",
    img: "nekhxkC.png",
    opts: {
      groups: ["aa"],
      media: ["game"]
    }
  },
  {
    name: "Maya Fey",
    img: "us0QlsJ.png",
    opts: {
      groups: ["aa"],
      media: ["game"]
    }
  },
  {
    name: "Sugar",
    img: "gbiCCfY.png",
    opts: {
      groups: ["hxh"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Hinata Hyuuga",
    img: "CcrpI0B.png",
    opts: {
      groups: ["naruto"],
      media: ["anime"]
    }
  },
  {
    name: "Tsunade",
    img: "bPAdZzF.png",
    opts: {
      groups: ["naruto"],
      media: ["anime"]
    }
  },
  {
    name: "C.C.",
    img: "co1wsFN.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Alluka Zoldyck",
    img: "PnPEFa0.png",
    opts: {
      groups: ["hxh"],
      type: ["femboy"],
      media: ["anime"]
    }
  },
  {
    name: "Megumu Touzokuyama",
    img: "HuhtDkr.png",
    opts: {
      type: ["femboy"],
      media: ["anime"]
    }
  },
  {
    name: "Hoto Kokoa",
    img: "1pCCx2m.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Haruhi Suzumiya",
    img: "DmUuCKb.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Renge Miyauchi",
    img: "T79jVPS.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Hacka Doll 3",
    img: "TI107Ru.pngg",
    opts: {
      type: ["femboy"],
      media: ["anime"]
    }
  },
  {
    name: "Karen Araragi",
    img: "yu3c58g.png",
    opts: {
      groups: ["monogatari"],
      media: ["anime"]
    }
  },
  {
    name: "Izumi Reina",
    img: "BwgWMvb.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Kyouka Jirou",
    img: "ou2AoaD.png",
    opts: {
      groups: ["monogatari"],
      media: ["anime"]
    }
  },
  {
    name: "Rachel Gardner",
    img: "IxRTNWG.png",
    opts: {
      media: ["game"]
    }
  },
  {
    name: "Tatsumaki",
    img: "oyua5wQ.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Akane Kurashiki",
    img: "XLcroJ6.png",
    opts: {
      groups: ["ze"],
      media: ["game"]
    }
  },
  {
    name: "Phi",
    img: "plmRVrI.png",
    opts: {
      groups: ["ze"],
      media: ["game"]
    }
  },
  {
    name: "Alice",
    img: "6DiwpkQ.png",
    opts: {
      groups: ["ze"],
      media: ["game"]
    }
  },
  {
    name: "Lotus",
    img: "EnJX5ru.png",
    opts: {
      groups: ["ze"],
      media: ["game"]
    }
  },
  {
    name: "Luna",
    img: "bGciwnT.png",
    opts: {
      groups: ["ze"],
      media: ["game"]
    }
  },
  {
    name: "April May",
    img: "kKm35JS.png",
    opts: {
      groups: ["aa"],
      media: ["game"]
    }
  },
  {
    name: "Ruby Kurosawa",
    img: "h5U3RzH.png",
    opts: {
      groups: ["lovelive"],
      media: ["anime"]
    }
  },
  {
    name: "Rem",
    img: "rWzVUB3.png",
    opts: {
      groups: ["rezero"],
      media: ["anime"]
    }
  },
  {
    name: "Neferpitou",
    img: "hDylnpH.png",
    opts: {
      groups: ["hxh"],
      media: ["anime"]
    }
  },
  {
    name: "Mt. Lady",
    img: "gwF1lm9.png",
    opts: {
      groups: ["bnha"],
      media: ["anime"]
    }
  },
  {
    name: "Uraraka Ochako",
    img: "RWGy3LG.png",
    opts: {
      groups: ["bnha"],
      media: ["anime"]
    }
  },
  {
    name: "Onodera Kosaki",
    img: "QFSYQAE.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Usami Mizuki",
    img: "v1RaxbC.png",
    opts: {
    }
  },
  {
    name: "Aoba Suzukaze",
    img: "qD0hISM.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Midna",
    img: "Y2fhzGX.png",
    opts: {
      media: ["game"]
    }
  },
  {
    name: "Hifumi Takimoto",
    img: "YcBZGmz.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Nadeko Sengoku",
    img: "PHrqpvb.png",
    opts: {
      groups: ["monogatari"],
      media: ["anime"]
    }
  },
  {
    name: "Morgan Fey",
    img: "R64DpAb.png",
    opts: {
      groups: ["aa"],
      media: ["game"]
    }
  },
  {
    name: "Maho Hiyajou",
    img: "GVB41F3.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Lucina",
    img: "mdXxOEI.png",
    opts: {
      media: ["game"]
    }
  },
  {
    name: "Shinobu Oshino",
    img: "lDNXuHM.png",
    opts: {
      groups: ["monogatari"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Sayaka Miyata",
    img: "lKPhbmJ.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Aoba Kazane",
    img: "pAB6IDm.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Non Toyoguchi",
    img: "LRn6bBv.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Hanabi Kawaii",
    img: "4vwSlaH.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Emilia",
    img: "xsB2X8I.png",
    opts: {
      groups: ["rezero"],
      media: ["anime"]
    }
  },
  {
    name: "Astolfo",
    img: "U46YaMe.png",
    opts: {
      type: ["femboy"],
      media: ["anime"]
    }
  },
  {
    name: "Kanna Kamui",
    img: "NpRcFCF.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Tama",
    img: "utZKd3T.png",
    opts: {
      groups: ["op"],
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Becky Blackbell",
    img: "EQctTZm.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Anya Forger",
    img: "IPxiibB.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Yor Briar",
    img: "OVR0Jnn.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Hinatsuru Ai",
    img: "VFq9gCi.png",
    opts: {
      type: ["loli"],
      media: ["anime"]
    }
  },
  {
    name: "Akane Shinjou",
    img: "Z8WtZc6.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Anaak Jahad",
    img: "htQiLvF.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Anis",
    img: "7SLIY2g.png",
    opts: {
      groups: ["nikke"],
      type: ["huge"],
      media: ["game"]
    }
  },
  {
    name: "Ankha",
    img: "naOiNSl.png",
    opts: {
      media: ["game"]
    }
  },
  {
    name: "Ayaka Sunohara",
    img: "F60Ta3h.png",
    opts: {
      type: ["huge"],
      media: ["anime"]
    }
  },
  {
    name: "Bernadetta",
    img: "ytf2SEH.png",
    opts: {
      media: ["game"]
    }
  },
  {
    name: "Hitori Bocchi",
    img: "WlVnRQM.png",
    opts: {
      media: ["anime"]
    }
  },
  {
    name: "Bonny de Famme",
    img: "yhmlpbL.png",
    opts: {
      groups: ["aa"],
      media: ["game"]
    }
  },
  {
    name: "Bridget",
    img: "8CScXDC.png",
    opts: {
      type: ["femboy"],
      media: ["game"]
    }
  },
  {
    name: "Nanako Doujima",
    img: "7DzksxK.png",
    opts: {
      groups: ["persona"],
      type: ["loli"],
      media: ["game"]
    }
  },
  {
    name: "Chie Satonaka",
    img: "zEUq3sI.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Yukiko Amagi",
    img: "rUqU94V.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Rise Kujikawa",
    img: "Jm0W3d4.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Marie",
    img: "nSVVQoi.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Haru Okumura",
    img: "ouiAeGo.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Ann Takamaki",
    img: "3LQwYgz.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Makoto Niijima",
    img: "aTDHZnJ.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Fuuka Yamagishi",
    img: "cXLyUt3.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Aigis",
    img: "DHRAxpF.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Chidori Yoshino",
    img: "rLsjXyG.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Mitsuru Kirijo",
    img: "Zleo2Lk.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Chihiro Fushimi",
    img: "NNfpHsA.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Yukari Takeba",
    img: "1zNiWxl.png",
    opts: {
      groups: ["persona"],
      media: ["game"]
    }
  },
  {
    name: "Maiko Oohashi",
    img: "XjYNOM9.png",
    opts: {
      groups: ["persona"],
      type: ["loli"],
      media: ["game"]
    }
  },
  {
    name: "Venti",
    img: "Ldm9WeU.png",
    opts: {
      groups: ["genshin"],
      type: ["femboy"],
      media: ["game"]
    }
  },
  {
    name: "La Signora",
    img: "i6LWN5o.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Kachina",
    img: "GGUzHGx.png",
    opts: {
      groups: ["genshin"],
      type: ["loli"],
      media: ["game"]
    }
  },
  {
    name: "Paimon",
    img: "ry8gUHM.png",
    opts: {
      groups: ["genshin"],
      type: ["loli"],
      media: ["game"]
    }
  },
  {
    name: "Lumine",
    img: "bwDzq3U.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Emilie",
    img: "gARJqR6.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Siggewine",
    img: "VWPirxD.png",
    opts: {
      groups: ["genshin"],
      type: ["loli"],
      media: ["game"]
    }
  },
  {
    name: "Arlecchino",
    img: "0TcSCyB.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Chevreuse",
    img: "Jz7Ap1i.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Furina",
    img: "TfHMWmT.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Navia",
    img: "0TPfZeK.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Layla",
    img: "H2Ific7.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Faruzan",
    img: "omaSzxo.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Nilou",
    img: "9RCF5KB.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Collei",
    img: "690kF4s.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Kirara",
    img: "vRswQc9.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Sara Kujou",
    img: "c02jYFN.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Kokomi Sangonomiya",
    img: "qjivf1e.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Sayu",
    img: "IlQB1Fr.png",
    opts: {
      groups: ["genshin"],
      type: ["loli"],
      media: ["game"]
    }
  },
  {
    name: "Raiden Shogun",
    img: "r2fETUU.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Yaoyao",
    img: "asKM95S.png",
    opts: {
      groups: ["genshin"],
      type: ["loli"],
      media: ["game"]
    }
  },
  {
    name: "Shenhe",
    img: "UjK1O5Y.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Yun Jin",
    img: "35OAyhE.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Hu Tao",
    img: "ppGHTbH.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Yanfei",
    img: "39TqLP0.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Ganyu",
    img: "duUYDnz.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Qiqi",
    img: "1x5Q5Wh.png",
    opts: {
      groups: ["genshin"],
      type: ["loli"],
      media: ["game"]
    }
  },
  {
    name: "Xiangling",
    img: "uFLIyFN.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Keqing",
    img: "Vm03iAV.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Rosaria",
    img: "xSqVzp1.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Eula",
    img: "msJ2tZ0.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Mona",
    img: "sTnx87V.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Fischl",
    img: "Sw8lavy.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Sucrose",
    img: "ZWumI5n.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Noelle",
    img: "Zwji0mZ.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Diona",
    img: "oFZFaBf.png",
    opts: {
      groups: ["genshin"],
      type: ["loli"],
      media: ["game"]
    }
  },
  {
    name: "Klee",
    img: "zgCMqXF.png",
    opts: {
      groups: ["genshin"],
      type: ["loli"],
      media: ["game"]
    }
  },
  {
    name: "Lisa",
    img: "6hCFdcF.png",
    opts: {
      groups: ["genshin"],
      type: ["huge", "witch"],
      media: ["game"]
    }
  },
  {
    name: "Jean",
    img: "13SsRrC.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Nahida",
    img: "KrwFxHO.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Chiori",
    img: "2UpUvIl.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Yelan",
    img: "DepSQwP.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Qingxiu",
    img: "8tpnle5.png",
    opts: {
      groups: ["genshin"],
      type: ["femboy"],
      media: ["game"]
    }
  },
  {
    name: "Dahlia",
    img: "J11BqHm.png",
    opts: {
      groups: ["genshin"],
      type: ["femboy"],
      media: ["game"]
    }
  },
  {
    name: "Barbara",
    img: "mjIgtUF.png",
    opts: {
      groups: ["genshin"],
      media: ["game"]
    }
  },
  {
    name: "Toshiko Kayura",
    img: "BrPgn36.png",
    opts: {
      media: ["game"]
    }
  },
  {
    name: "Eloise Taulner",
    img: "FKoRZqa.png",
    opts: {
      media: ["game"]
    }
  },
  {
    name: "Diana Venicia",
    img: "tvSUJAo.png",
    opts: {
      media: ["game"]
    }
  },
  {
    name: "Grace Madison",
    img: "Qxo22hE.png",
    opts: {
      media: ["game"]
    }
  },
  {
    name: "Natsuki",
    img: "KJztGEq.png",
    opts: {
      media: ["game"]
    }
  }
]
