const grafico = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart (grafico, {
  type: "pie",
  data: {
    labels:[
      "Instagram",
      "WhatsApp",
      "Facebook",
      "WeChat",
      "TikTok",
      "DouYin",
      "Twitter",
      "Telegram",
      "FB Messenger",
      "LINE"
    ],
    datasets: [{
        data:[
            16.5,
            16.1,
            12.8,
            12.8,
            7.4,
            6.6,
            3.2,
            2.4,
            2.3,
            1.7,
        ],
        backgroundColor:[
        "rgb (255,20,147)",
        "rgb (0,100,0)",
        "rgb (0,0,128)",
        "rgb (32,178,170)",
        "rgb (0,0,0)",
        "rgb (255,255,255)",
        "rgb (0,91,255)",
        "rgb (99,184,255)",
        "rgb (67,110,238)",
        "rgb (102,205,0s)",
        ]
    }]
  }
}
)

