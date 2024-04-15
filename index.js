function show_menu_overlay(){
    document.getElementById("show_menu_overlay").style.display="block";
}
function off_menu_overlay(){
    document.getElementById("show_menu_overlay").style.display="none";
}
function scrollToSection(sectionId) {
    // 滾動到相應的位置
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // 關閉overlay
    const overlay = document.getElementById('show_menu_overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}
// 在螢幕大小變化時檢測並自動隱藏overlay
window.addEventListener('resize', function () {
    if (window.innerWidth >= 600) {
        off_menu_overlay();
    }
});


// intro的文字繞圓動畫
const text= document.querySelector('.circle_text p');
text.innerHTML=text.innerText.split("").map(
    (char,i)=>
    `<span style="transform:rotate(${i*12}deg)">${char}</span> `   //讓circle_text上的文字都分別在一個<span>中
).join("")


//about的內容
var aboutInfo =[
    {
        title:'學經歷',
        content:`<ul>
                    <li>
                        畢業於銘傳大學資訊管理學系（2014.9-2018.6）
                    </li>
                    <li>曾任系上教學助理（銘傳大學教學卓越計畫）（2016.9-2017.1）</li>
                    <li>畢業後投身於高普考（2018.7-2023.7）</li>
                    <li>轉往朝前端工程師的道路邁進（2023.10-now）</li>
                </ul>`
    },{
        title:'證照與獲獎紀錄',
        content:`<ul>
                    <li>考取TQC中文輸入證照與英文輸入證照(2014)</li>
                    <li>考取辦公室應用Word 2010、PPT 2010、Excel 2010實用級合格證書（2015）</li>
                    <li>考取鼎新ERP配銷模組與生產製造模組證照（2017、2018）</li>
                    <li>參加E化系統創意競賽榮獲第三名(2018)</li>
                </ul> `
    },{
        title:'特質',
        content:`<ul>
                <li>觀察力敏銳</li>
                <li>不輕易放棄</li>
                <li>做事用心肯學</li>
                <li>具有同理心</li>
                <li>高敏感</li>
                <li>具備自學能力：如自學JavaScript</li>
            </ul>
            <p>「因為你是可以把不擅長的東西做得很好的人」 -by my friend,Jill</p> `
    }
]

for(var i=0 ;i<aboutInfo.length;i++){
    var aboutContnet=`
    <div class='about_item'>
    <div class="about_title">${aboutInfo[i].title}</div>
    <div class="about_item_content">${aboutInfo[i].content}</div>
    </div>
    `

    $('#aboutLayout').append(aboutContnet);
}

//skill的內容
var skillInfo =[
    {
        title:'網頁技術',
        content:`<ul>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul> `,
    },{
        title:'程式語言',
        content:`<ul>
                    <li>JavaScript</li>
                </ul>`
    },{
        title:'其他',
        content:`<ul>
                <li>會套用google font和google font icon</li>
                <li>會套用AOS動畫</li>
            </ul>`
    }
]

for(var i=0;i<skillInfo.length;i++){
    var skillContent=`
    <div class="skills_item">
        <div class="skills_item_title">${skillInfo[i].title}</div> 
        <div class="skill_description">
            ${skillInfo[i].content}                
        </div>
    </div>
    `
    $('#skillLayout').append(skillContent)
}

//practice works的內容
var worksInfo =[
    {
        title:'YouTube切版',
        img:"image/yt切版.png",
        imgLink:'https://hsingjouisme.github.io/yt_exercise/',
        content:`
                <ul>
                    <li>係仿效YouTub網頁版所做之切版練習</li>
                    <li>係以純HTML、CSS以及JavaScript完成之</li>
                    <li>目的：加強練習切版</li>
                    <li>此作品暫時不具有RWD</li>
                </ul>
               `,
        demo:'https://hsingjouisme.github.io/yt_exercise/',
        code:'https://github.com/hsingjouisme/yt_exercise'           
    },{
        title:'糖露坊',
        img:'image/糖露坊.png',
        imgLink:'https://hsingjouisme.github.io/DessertShop/index.html',
        content:`<ul>
                    <li>以HMTL、CSS以及JavaScript、Vue（門市據點搜尋功能）完成之</li>
                    <li>頁面排版係運用bootstrap以及flexbox等完成之響應式網頁</li>
                    <li>目的：練習切版與JavaScript以及vue</li>
                </ul>`, 
        demo:'https://hsingjouisme.github.io/DessertShop/index.html',
        code:'https://github.com/hsingjouisme/DessertShop'   
    },
    {
        title:'Diverson Topia',
        img:'image/diverson topia.png',
        imgLink:'https://hsingjouisme.github.io/DiversionTopia/index.html',
        content:`<ul>
                    <li>內含三個小遊戲：包含剪刀石頭布、記憶力大考驗以及終極密碼</li>
                    <li>係以純HTML、CSS以及JavaScript完成之</li>
                    <li>為一響應式網頁</li>
                    <li>目的：加強練習JavaScript</li>
                </ul>`, 
        demo:'https://hsingjouisme.github.io/DiversionTopia/index.html',
        code:'https://github.com/hsingjouisme/DiversionTopia'   
    },
    {
        title:'前端學習筆記',
        img:'image/截圖 2024-03-06 下午4.59.51.png',
        imgLink:'https://hsingjouisme.github.io/notes/notes.html',
        content:`<ul>
                    <li>記錄我在學習前端網頁程式以及相關觀念之筆記</li>
                    <li>係以純HTML、CSS以及JavaScript完成之</li>
                    <li>為一響應式網頁</li>
                </ul>`, 
        demo:'https://hsingjouisme.github.io/notes/notes.html',
        code:'https://github.com/hsingjouisme/notes'   
    },
    {
        title:'樂遊新竹城',
        img:'image/樂遊新竹城.png',
        imgLink:'https://hsingjouisme.github.io/kidTopia/',
        content:`<ul>
                    <li>係利用新竹市政府open data所做之新竹市公園查詢</li>
                    <li>係以純HTML、CSS以及JavaScript完成之</li>
                    <li>目的：練習將物件顯示到HTML頁面上</li>
                    <li>尚未完成：天氣api之串接，目前可以顯示在控制台了。但是還不能顯示至html頁面。</li>
                </ul>`, 
        demo:'https://hsingjouisme.github.io/kidTopia/',
        code:'https://github.com/hsingjouisme/kidTopia'   
    }
]

for(var i=0;i<worksInfo.length;i++){
    var works=`
    <div class="works_item" data-aos="fade-down">
        <div class="works_img">
            <img src="${worksInfo[i].img}" onclick="location.href='${worksInfo[i].imgLink}'">
        <div>
        <div class="works_description">
            <h4 class="works_title">${worksInfo[i].title}</h4>
            ${worksInfo[i].content}
            <div class="works_btns">
                <a href="${worksInfo[i].demo}" class="demo">demo</a>
                <a href="${worksInfo[i].code}" class="github_code">GitHub Code</a>
            </div>
        </div>
    </div>
    `
    $('#worksLayout').append(works)
}