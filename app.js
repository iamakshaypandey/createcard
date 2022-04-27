// const addBtn = document.querySelector('.add-item')
// const removeBtn = document.querySelector('.remove-item')
// const showBtn = document.querySelector('.show-item-btn')





// const titlArray =[]
// const data1 = async function(){
//     const alldata = await fetch('https://fakestoreapi.com/products')
//     const alldata2 = await alldata.json()
//     const dataTitle = alldata2.forEach(title => {
//         titlArray.push(title.title)
//     });
//     return titlArray
// }

// const removeData = function(){
//     const list = document.getElementById("myList");
//     if (list.hasChildNodes()) {
//       list.removeChild(list.children[0]);
//     }
//   }



// let count = 0
// const getData = async function(){
//     const allTitle = await data1()
//     // console.log(allTitle[0]);
//     // for(let i=0; i===count; i++){
//         addBtn.addEventListener('click',function(){
//             const li = document.createElement('li')
//             const li1 = li.classList.add('list-group-item')
//             li.textContent = `${count+1}   ${allTitle[count]}`
//             const ul1 = document.getElementById("myList").appendChild(li)
//             // console.log(allTitle[count],count,ul1);
//             count++
//             // i++
//         })
//         // }
//         removeBtn.addEventListener('click',removeData)
//     }
//     getData()


//     const showDataAdded = function(){
//         const items = document.querySelector('.show-items')
//         const showList = document.querySelector('.li').innerText
//         items.textContent=showList
//         // removeData()
//     }
    
//     showBtn.addEventListener('click',showDataAdded)
    





// // const removeData = async function(){
// //     const allTitle = await data1()
// //     console.log(allTitle[0]);
// //     let count = 0
// //     for(let i=0; i===count; i++){
// //         // if(allTitle[count]===undefined) break
// //         // console.log(i,allTitle[count])
// //         removeBtn.addEventListener('click',function(){
// //             const li = document.createElement('li')
// //             const li1 = li.classList.remove('list-group-item')
// //             // li.textContent = `${count+1}   ${allTitle[count]}`
// //             const ul1 = document.getElementById("myList").removeChild(li)
// //             // const ul = document.createElement('ul')
// //             // const ul1 = ul.appendChild(li)
// //             console.log(i,allTitle[count],count,ul1);
// //             count++
// //             i++
// //         })
// //     }
// // }
// // removeData()


// // const data = data1().then(res=>console.log(res))
// // console.log(data);
// // addBtn.addEventListener('click')

// // const createAddOpration = function(){
// //     // let count = 0
// //     // for( i=0; i===0; i++){
// //     //     data.then(res=>{
// //     //         res.map(i=>console.log(i.title))
// //     //         console.log(res);
// //     //     }).catch(err=>console.error(err))
// //     //     console.log(i,'value',count);
// //     //     i++
// //     //     count++
// //     // }
// // }
// // // createAddOpration(data)














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