// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最亲爱的西兰花公主殿下",  // 同上...
        "今天是你的生日",
        "也是我们在一起的第一个lopo的生日",
        "今后宝宝的生日",
        "我一个都不要缺席",
        "虽然我们现在相隔948公里",
        "但是我的心早已随风飞往你那里了",
        "那天，化工楼，是我生命中最勇敢的瞬间!",
        "今后我愿将我所有的爱的勇气",
        "一股脑全给你",
        "现在不能伴你身边",
        "但你也要好好吃饭",
        "多少吃点儿",
        "花开一季，有落红为证",
        "逝去的岁月，如何能托于尘烟",
        "你的浅笑，是我永生的眷恋",
        "相思的真情，是否能明白一二",
        "亲爱的你，是我的唯一",
        "爱你",
        "永远~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "我们第一张合照": "./imgs/wonvshen1.jpg",
         "我们第一次踏出校门": "./imgs/wonvshen11.jpg",
         "我们俩的专属情侣微信号": "./imgs/wonvshen22.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
