const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const iconv = require('iconv-lite') //인코딩을 변환 해주는 모듈, 필자는 iconv보다 iconv-lite를 선호한다.
const charset = require('charset') //해당 사이트의 charset값을 알 수 있게 해준다.

// 교보문고 url
const URL = "http://www.kyobobook.co.kr/bestSellerNew/bestseller.laf?orderClick=d79";


request({
    url: URL// 원하는 url값을 입력
    , encoding: null //해당 값을 null로 해주어야 제대로 iconv가 제대로 decode 해준다.
}
    , function (error, res, body) {
        if (!error && res.statusCode == 200) {
            const enc = charset(res.headers, body) // 해당 사이트의 charset값을 획득
            const i_result = iconv.decode(body, enc) // 획득한 charset값으로 body를 디코딩
            let $ = cheerio.load(i_result);  //loading of complete HTML body

            let titleArray = []; // 베스트셀러 제목을 배열에 담는다.
    
            $('div[class=title]').each(function (index) {
                let title = $(this).text().trim()
                console.log(title)
                titleArray.push(title)
            })
            fs.writeFile('data.txt', titleArray, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("success");
                }
            });
        }
    }

)
