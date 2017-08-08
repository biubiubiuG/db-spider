/**
 * Created by dllo on 17/8/8.
 */
/**
 * Created by dllo on 17/8/8.
 */
var cheerio = require('cheerio');
var request = require('request');
var download = require('./download');
// $('#anony-sns .wrapper .main .mod .albums ul li .pic a img').each(function (index, element) {
//


var options = {
    url: 'https://www.douban.com/',
    headers: {
        'Host': 'www.douban.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
    }
}
request.get(options, function (error, response, body) {
    // console.log(request.)
    // console.log(body)
    var $ = cheerio.load(body)
    /**************热门**************/

    var hotArray = [];
    $('#anony-sns .wrapper .main .mod .albums ul li .pic a img').each(function (index, element) {
        // console.log();
        var item = {
            hotImg : $(element).attr('data-origin')
        }
        download($(element).attr('data-origin'), 'HotImg', index + '.jpg')
        hotArray.push(item)


    })

    $('#anony-sns .wrapper .main .mod .albums ul li>a').each(function (index, element) {
        hotArray[index].imgName =  $(element).text();
    })
    console.log(hotArray)


    var hotText = [];
    $('#anony-sns .wrapper .main .notes>ul>li>a').each(function (index, element) {
        var item = {
            hotText : $(element).text()
        }
        hotText.push(item)
    })
    console.log(hotText)

    /**************豆瓣时间**************/
    var doubanTime = [];
    $('#anony-time .wrapper .main .time-list>li>a>img').each(function (index, element) {
        var item = {
            imgSRC : $(element).attr('src')
        }
        doubanTime.push(item)
        download($(element).attr('src'), 'timeImg', index + '.jpg')

    })
    $('#anony-time .wrapper .main .time-list>li .title').each(function (index, element) {
        doubanTime[index].imgText =  $(element).text()
    })
    console.log(doubanTime)


    /**************视频**************/


    // var doubanVideo = [];
    // $('#anony-video .wrapper .main ul li .video-cover>.video-title').each(function (index, element) {
    // doubanVideo[index].videoText =  $(element).text()
    // var item = {
    //     videoText: $(element).text()
    // }
    // doubanVideo.push(item)
    // })
    //
    // $('#anony-video .wrapper .main ul li .video-cover a').each(function (index, element) {
    //     var item = {
    //         videoUrl : $(element).css('background-image :url')
    //     }
    //     doubanVideo.push(item)
    // })
    // console.log(doubanVideo)


    /**************电影**************/

    var doubanfilm = [];
    $('#anony-movie .wrapper .main .movie-list ul li .pic a img').each(function (index, element) {
        var item = {
            data_origin: $(element).attr('data-origin')
        }
        doubanfilm.push(item)
        download($(element).attr('data-origin'), 'filmImg', index + '.jpg')

    })
    $('#anony-movie .wrapper .main .movie-list ul li .title a').each(function (index, element) {
       doubanfilm[index].filmName = $(element).text()
    })
    $('#anony-movie .wrapper .main .movie-list ul li .rating ').each(function (index, element) {
        doubanfilm[index].filmRating = $(element).text()
    })
    console.log(doubanfilm)


    /**************小组**************/
    var doubanGroup = [];
    $('#anony-group .wrapper .main .group-list ul li .pic a img').each(function (index, element) {
        var item = {
            groupImgSrc: $(element).attr('data-origin')
        }
        download($(element).attr('data-origin'), 'groupImg', index + '.jpg')
        doubanGroup.push(item)
    })
    $('#anony-group .wrapper .main .group-list ul li .info .title a').each(function (index, element) {
        doubanGroup[index].groupText = $(element).text()
        // console.log($(element).text())
    })
    console.log(doubanGroup)



    /**************读书**************/
    var doubanStudy = [];
    $('#anony-book .wrapper .main .mod .book-list ul li .pic a img').each(function (index, element) {
        var item = {
            studyImg: $(element).attr('data-origin')
        }
        doubanStudy.push(item)
        download($(element).attr('data-origin'), 'studyImg', index + '.jpg')

    })
    $('#anony-book .wrapper .main .mod .book-list ul li .title a').each(function (index, element) {
        doubanStudy[index].studyText = $(element).text()
        // console.log($(element).text())
    })
    $('#anony-book .wrapper .main .mod .book-list ul li .author').each(function (index, element) {
        doubanStudy[index].studyAuthor = $(element).text()
        // console.log($(element).text())
    })
    console.log(doubanStudy)


    /**************音乐**************/
    var doubanMusic = [];
    $('#anony-music .wrapper .main .album-list ul li .pic a img').each(function (index, element) {
        var item = {
            musicImg: $(element).attr('data-origin')
        }
        doubanMusic.push(item)
        download($(element).attr('data-origin'), 'musicImg', index + '.jpg')

    })
    $('#anony-music .wrapper .main .album-list ul li .title a').each(function (index, element) {
        doubanMusic[index].musicTitle = $(element).text()
    })
    $('#anony-music .wrapper .main .album-list ul li .artist a').each(function (index, element) {
        doubanMusic[index].musicArtist = $(element).text()
    })
    $('#anony-music .wrapper .main .album-list ul li .rating i').each(function (index, element) {
        doubanMusic[index].musicRating = $(element).text()
    })
    console.log(doubanMusic)

})