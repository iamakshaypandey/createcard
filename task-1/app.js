const addBtn = document.querySelector('.add-item')
const removeBtn = document.querySelector('.remove-item')


const titlArray =[]
const data1 = async function(){
    const alldata = await fetch('https://fakestoreapi.com/products')
    const alldata2 = await alldata.json()
    const dataTitle = alldata2.forEach(title => {
        titlArray.push(title.title)
    });
    return titlArray
}

const getData = async function(){
    const allTitle = await data1()
    console.log(allTitle[0]);
    let count = 0
    for(let i=0; i===count; i++){
        addBtn.addEventListener('click',function(){
            const li = document.createElement('li')
            const li1 = li.classList.add('list-group-item')
            li.textContent = `${count+1}   ${allTitle[count]}`
            const ul1 = document.getElementById("myList").appendChild(li)
            console.log(i,allTitle[count],count,ul1);
            count++
            i++
        })
    }
}
getData()


const removeData = function(){
    const list = document.getElementById("myList");
    if (list.hasChildNodes()) {
      list.removeChild(list.children[0]);
    }
  }

removeBtn.addEventListener('click',removeData)



// const removeData = async function(){
//     const allTitle = await data1()
//     console.log(allTitle[0]);
//     let count = 0
//     for(let i=0; i===count; i++){
//         // if(allTitle[count]===undefined) break
//         // console.log(i,allTitle[count])
//         removeBtn.addEventListener('click',function(){
//             const li = document.createElement('li')
//             const li1 = li.classList.remove('list-group-item')
//             // li.textContent = `${count+1}   ${allTitle[count]}`
//             const ul1 = document.getElementById("myList").removeChild(li)
//             // const ul = document.createElement('ul')
//             // const ul1 = ul.appendChild(li)
//             console.log(i,allTitle[count],count,ul1);
//             count++
//             i++
//         })
//     }
// }
// removeData()


// const data = data1().then(res=>console.log(res))
// console.log(data);
// addBtn.addEventListener('click')

// const createAddOpration = function(){
//     // let count = 0
//     // for( i=0; i===0; i++){
//     //     data.then(res=>{
//     //         res.map(i=>console.log(i.title))
//     //         console.log(res);
//     //     }).catch(err=>console.error(err))
//     //     console.log(i,'value',count);
//     //     i++
//     //     count++
//     // }
// }
// // createAddOpration(data)










