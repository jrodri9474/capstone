fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
 fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
 fetch('https://fakestoreapi.com/products/6',{
                method:"DELETE"
            })
                .then(res=>res.json())
                .then(json=>console.log(json))
    


