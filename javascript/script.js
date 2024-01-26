function changPage(no){
    //alert('開始(changePage):' + no);
    //クリア(全て非表示)
    //document.getElementById('top').style.display='none';
    document.getElementById('top').style.display='none';
    document.getElementById('news').style.display='none';
    document.getElementById('chara').style.display='none';
    document.getElementById('story').style.display='none';
    document.getElementById('straweberry').style.display='none';
    document.getElementById('menber').style.display='none';
    document.getElementById('contact').style.display='none';
    // 表示
    if(no == 0){
        document.getElementById('top').style.display='inline-block';
        document.getElementById('main_header').style.display='inline-block';
    }
    if(no == 1){
        document.getElementById('news').style.display='inline-block';
        document.getElementById('main_header').style.display='none';
    }
    if(no == 2){
        document.getElementById('chara').style.display='inline-block';
        document.getElementById('main_header').style.display='none';
    }
    if(no == 3){
        document.getElementById('story').style.display='inline-block';
        document.getElementById('main_header').style.display='none';
    }
    if(no == 4){
        document.getElementById('straweberry').style.display='inline-block';
        document.getElementById('main_header').style.display='none';
    }
    if(no == 5){
        document.getElementById('menber').style.display='inline-block';
        document.getElementById('main_header').style.display='none';
    }
    if(no == 6){
        document.getElementById('contact').style.display='inline-block';
        document.getElementById('main_header').style.display='none';
    }
    //alert('終了(changePage)');
}
function goClick(g) {
    
}