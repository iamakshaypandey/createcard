
const data1 = async function(){
    try{
    const alldata = await fetch('https://fakestoreapi.com/products')
    const alldata2 = await alldata.json()
    const dataTitle = alldata2.map(title => {
        const content =      
            `<div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div class="card rounded shadow-sm border-0">
                    <div class="card-body p-4">
                        <img src="${title.image}" alt=""
                        class="img-fluid d-block mx-auto mb-2 ">
                        <h5> <a href="#" class="text-dark">Awesome product</a></h5>
                        <p class="small text-muted font-italic">category : ${title.category}.</p>
                        <ul class="list-group list-group-flush li" id="myList">
                        <li class="list-group-item m-0">price : ${title.price}</li>
                        <li class="list-group-item m-0">${title.title}</li>
                        <li class="list-group-item m-0"><h6>description:</h6>  ${title.description.slice(-200)}</li>
                        <li class="list-group-item m-0">Rating:${title.rating.rate}</li>
                        </ul>
                        <div class="card-body d-flex justify-content-between">
                        <a href="#" class="btn btn-primary add-item">Add Item </a>
                        <a href="#" class="btn btn-danger remove-item">Remove Item</a>
                        </div>   
                    </div>
                </div>
            </div>`
        // console.log(title);
        const creatEL = document.querySelector('.main-div')
        creatEL.insertAdjacentHTML('beforeend',content)
    });
    return alldata2
}catch(err){
    console.error('some thing rong data not avilable',err);
}
}

data1()
// console.log(data1());
const alldata = []
setTimeout(()=>{
    const addBtn = document.querySelectorAll('.add-item')
    const removeBtn = document.querySelectorAll('.remove-item')
    const showBtn = document.querySelector('.show-item-btn')
    console.log(addBtn);
    addBtn.forEach((btn,i)=>{
        btn.addEventListener('click',function(){
            data1().then(res=>{
            console.log(res[i].title,'hyyyy i am akshay',typeof res);
            const data1 =Object.values(res[i]).toString()
            console.log(alldata.includes(res[i]));
            alldata.push(res[i])
            // var jsondata = JSON.stringify(res[i])
            // res.map()
            storeData(alldata)
            // localStorage.setItem('data',jsondata)
        })
    })
})
removeBtn.forEach((btn,i)=>{
    btn.addEventListener('click',function(){   
        removeData()    
    })
})

},2000)


const storeData = function(jsondata){
    const alljsondata = JSON.stringify(jsondata)
    localStorage.setItem('data',alljsondata)
}

const removeData = function(){
    const removeshow = localStorage.getItem('data')
    const convertObj =JSON.parse(removeshow)
    console.log(convertObj.length);
}