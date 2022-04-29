
const data = JSON.parse(localStorage.getItem('data'))
if(data){
data.map(insidedata=>{
    const content =      
    `<div class="col-lg-3 col-md-6 mb-4 mb-lg-4">
        <div class="card h-100 rounded shadow-sm border-0">
            <div class="card-body mt-4 mb-4">
                <img src="${insidedata.image}" alt=""
                class="img-fluid d-block set mx-auto mb-2 w-50 set">
                <h5> <a href="#" class="text-dark">Awesome product</a></h5>
                <p class="small text-muted font-italic">category : ${insidedata.category}.</p>
                <ul class="list-group list-group-flush li" id="myList">
                <li class="list-group-item m-0">price : ${insidedata.price}</li>
                <li class="list-group-item m-0">${insidedata.title.slice(0,15)}</li>
                <li class="list-group-item m-0"><h6>description:</h6>  ${insidedata.description.slice(0,15)}</li>
                <li class="list-group-item m-0">Rating:${insidedata.rating.rate}</li>
                </ul>
                <div class="card-body d-flex justify-content-between">
                <a href="#" class="btn btn-danger remove-item">Remove Item</a>
                </div>   
            </div>
        </div>
    </div>`
const creatEL = document.querySelector('.main-div')
creatEL.insertAdjacentHTML('beforeend',content)
})
}else{
    alert('data is not avilable please add cart')
}


const removeBtn = document.querySelectorAll('.remove-item')


const remove = function(){
removeBtn.forEach((btn,i)=>{
    const removeshow = localStorage.getItem('data')
    let convertObj =JSON.parse(removeshow)
    if(convertObj===null) return
    btn.addEventListener('click',function(){

        convertObj.splice(i,i+1)
        localStorage.setItem('data',JSON.stringify(convertObj))
        window.location.reload();
    })
})
}

remove()






















































// <div class="row pb-5 mb-4 main-div">
// <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//   <!-- Card-->
//   <div class="card rounded shadow-sm border-0">
//     <div class="card-body p-4 card-data">
//       <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt=""
//        class="img-fluid d-block mx-auto mb-3">
//       <h5> <a href="#" class="text-dark">Awesome product</a></h5>
//       <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//       <!-- <ul class="list-group list-group-flush li" id="myList">
//         <li class="list-group-item m-0">Cras justo odio</li>
//         <li class="list-group-item m-0">Dapibus ac facilisis in</li>
//         <li class="list-group-item m-0">Vestibulum at eros</li>
//       </ul> -->
//       <ul class="list-group list-group-flush li" id="myList"></ul>
//       <div class="card-body d-flex justify-content-between">
//         <a href="#" class="btn btn-primary add-item">Add Item </a>
//         <a href="#" class="btn btn-danger remove-item">Remove Item</a>
//       </div>   
//     </div>
//   </div>
// </div>

// <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//   <!-- Card-->
//   <div class="card rounded shadow-sm border-0">
//     <div class="card-body p-4">
//       <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt=""
//        class="img-fluid d-block mx-auto mb-3">
//       <h5> <a href="#" class="text-dark">Awesome product</a></h5>
//       <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//       <!-- <ul class="list-group list-group-flush li" id="myList">
//         <li class="list-group-item m-0">Cras justo odio</li>
//         <li class="list-group-item m-0">Dapibus ac facilisis in</li>
//         <li class="list-group-item m-0">Vestibulum at eros</li>
//       </ul> -->
//       <div class="card-body d-flex justify-content-between">
//         <a href="#" class="btn btn-primary add-item">Add Item </a>
//         <a href="#" class="btn btn-danger remove-item">Remove Item</a>
//       </div>   
//     </div>
//   </div>
// </div>

// <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//   <!-- Card-->
//   <div class="card rounded shadow-sm border-0">
//     <div class="card-body p-4">
//       <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt=""
//        class="img-fluid d-block mx-auto mb-3">
//       <h5> <a href="#" class="text-dark">Awesome product</a></h5>
//       <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//       <!-- <ul class="list-group list-group-flush li" id="myList">
//         <li class="list-group-item m-0">Cras justo odio</li>
//         <li class="list-group-item m-0">Dapibus ac facilisis in</li>
//         <li class="list-group-item m-0">Vestibulum at eros</li>
//       </ul> -->
//       <div class="card-body d-flex justify-content-between">
//         <a href="#" class="btn btn-primary add-item">Add Item </a>
//         <a href="#" class="btn btn-danger remove-item">Remove Item</a>
//       </div>   
//     </div>
//   </div>
// </div>

// <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
//   <!-- Card-->
//   <div class="card rounded shadow-sm border-0">
//     <div class="card-body p-4">
//       <img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-1_gthops.jpg" alt=""
//        class="img-fluid d-block mx-auto mb-3">
//       <h5> <a href="#" class="text-dark">Awesome product</a></h5>
//       <p class="small text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    //   <!-- <ul class="list-group list-group-flush li" id="myList">
    //     <li class="list-group-item m-0">Cras justo odio</li>
    //     <li class="list-group-item m-0">Dapibus ac facilisis in</li>
    //     <li class="list-group-item m-0">Vestibulum at eros</li>
    //   </ul> -->
//       <div class="card-body d-flex justify-content-between">
//         <a href="#" class="btn btn-primary add-item">Add Item </a>
//         <a href="#" class="btn btn-danger remove-item">Remove Item</a>
//       </div>   
//     </div>
//   </div>
// </div>
// </div>