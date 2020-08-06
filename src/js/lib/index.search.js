window.onload = function(){
    let search =document.querySelector('#search');

    search.oninput = function(){
        let script = document.createElement('script');
        script.src = "https://sug.so.360.cn/suggest?callback=rdl&encodein=utf-8&encodeout=utf-8&format=json&src=so_home&fields=word&word=" + this.value + "&bq=A5%2CB5%2CC5%2CD5";
        document.body.appendChild(script);
        document.body.removeChild(script);
    } 
}

function rdl(data){
    let n = document.getElementById('result');
    let li ='';
    // console.log(data)
    data.result.forEach(value => {
        li += '<li><a href ="https://www.so.com/s?q='+ value.word +'&src=srp&fr=none&psid=7ba9b8a1b79cb77bb808165faf33df15">'+ value.word +'</a></li>'
    });
    console.log(li)
    n.innerHTML = li;
}