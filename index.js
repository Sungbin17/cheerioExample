const request = require('request'); // url 으로 요청하기 위한 모듈
const cheerio = require('cheerio'); // 크롤링에 필요한 모듈
const fs = require('fs'); // file system 에 파일을 저장하기 위해 사용하는 모듈
const iconv = require('iconv-lite') //인코딩을 변환 해주는 모듈
const charset = require('charset') //해당 사이트의 charset값을 알 수 있게 해준다.

// 교보문고 url
const URL = "http://www.kyobobook.co.kr/bestSellerNew/bestseller.laf?orderClick=d79";


request({
    url: URL// 원하는 url값을 입력
    , encoding: null //해당 값을 null로 해주어야 제대로 iconv가 제대로 decode 해준다.
}
    , function (error, res, body) {
        if (!error && res.statusCode == 200) {
         
        }
    }

)
