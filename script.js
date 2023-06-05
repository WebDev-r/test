var data=[];
fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-05-05&sortBy=publishedAt&apiKey=479bdad0d3eb4b6fa4555200a757181b')
.then((respond)=>{
    return respond.json()
})
.then((respond)=>{
	
    data=respond.articles
	print(data);
}
)
.catch((error)=>{
    console.log(error)
})
function print(data){
document.querySelector('.box').innerHTML=data[1].title
}