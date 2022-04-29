
const data1 = async function(){
    try{
    const alldata = await fetch('https://fakestoreapi.com/products')
    const alldata2 = await alldata.json()
    const dataTitle = alldata2.map(title => {
        const content =      
            `<div class="col-lg-3  col-md-6 mb-4 mb-lg-4">
                <div class="card h-100 rounded shadow-sm border-0">
                    <div class="card-body mt-4 mb-4">
                        <img src="${title.image}" alt=""
                        class="img-fluid d-block mx-auto mb-2 w-50 set ">
                        <h5> <a href="#" class="text-dark">Awesome product</a></h5>
                        <p class="small text-muted font-italic">category : ${title.category}.</p>
                        <ul class="list-group list-group-flush li" id="myList">
                        <li class="list-group-item m-0">price : ${title.price}</li>
                        <li class="list-group-item m-0">${title.title.slice(0,15)}</li>
                        <li class="list-group-item m-0"><h6>description:</h6>${title.description.slice(0,15)}</li>
                        <li class="list-group-item m-0">Rating:${title.rating.rate}</li>
                        </ul>
                        <div class="card-body d-flex  justify-content-between">
                        <a href="#" class="btn btn-primary add-item">Add Item </a>
                        </div>   
                    </div>
                </div>
            </div>`
        const creatEL = document.querySelector('.main-div')
        creatEL.insertAdjacentHTML('beforeend',content)
    });
        return alldata2
    }catch(err){
    console.error('some thing rong data not avilable',err);
    }
}

const data = data1()


const localId=[]
let addcountdiv = document.querySelector('.card1 ')
const checkStoreg = function(){
    const localdata = localStorage.getItem('data')
    const parselocaldata = JSON.parse(localdata)
    if(!parselocaldata) return
    let incremet = parselocaldata.length
    addcountdiv.textContent = incremet
    for(let i=0; i< parselocaldata.length; i++){
        if(!localId.includes(parselocaldata[i].id))
        localId.push(parselocaldata[i].id)
    }
}


const alldata = []
setTimeout(()=>{
    const addBtn = document.querySelectorAll('.add-item')
    const showBtn = document.querySelector('.show-item-btn')
    addBtn.forEach((btn,i)=>{
        btn.addEventListener('click',function(){
            data.then(res=>{
                if(localId.includes(res[i].id)) return
                alldata.push(res[i])
                storeData(alldata)
                checkStoreg()
            })
        })
    })
 
},3000)



const storeData = function(jsondata){
    const alljsondata = JSON.stringify(jsondata)
    localStorage.setItem('data',alljsondata)
}


