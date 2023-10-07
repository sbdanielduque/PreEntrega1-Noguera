/* const products = [
    {id: 1, name:'MacBook Air 13.6"', description: 'Apple M2 chip - 8GB Memory - 256GB SSD - Midnight', price: 1099.99, stock: 8, image: './../public/img/mcBook-air-13.6.jpg', category:'monitor'},
    {id: 2,name:'MacBook Air 15"', description:'Laptop - M2 chip - 8GB Memory - 256GB SSD (Latest Model) - Starlight', price: 1299.99, stock: 8, image:'./../public/img/mcBook-air-15.jpg', category:'monitor'},
    {id: 3,name:'MacBook Pro 13.3"', description:' Laptop - Apple M2 chip - 8GB Memory - 256GB SSD (Latest Model) - Space Gray', price: 1299.99, stock: 4, image:'./../public/img/mcBook-pro-13.3.jpg', category:'monitor'},
    {id: 4,name:'Alienware - x15 R2 15.6" FHD', description:'Gaming Laptop - 12th Gen Intel Core i7 - 16GB Memory - NVIDIA GeForce RTX 3070 Ti - 1TB SSD - Lunar Light', price: 1899.99, stock: 3, image:'./../public/img/alienware-x15.jpg', category:'monitor'},
    {id: 5,name:'Microsoft - Surface Laptop Studio 14.4”', description:'Touch Screen – Intel Core i5 -16GB Memory – 512GB SSD - Platinum', price: 1399.99, stock: 6, image:'./../public/img/microsoft-surface-laptop-Studio14.4.jpg', category:'monitor'},
    {id: 6, name:'HyperX - Alloy Origins Core TKL',description: 'Wired Mechanical Tactile Aqua Switch Gaming Keyboard with RGB Back Lighting - Black', price: 89.99, stock:10 , image:'./../public/img/Hyperx-Origin-Core.jpg',category:'keyboard'},
    {id: 7, name:'Logitech - G915 LIGHTSPEED TKL',description: 'Wireless Mechanical GL Tactile Switch Gaming Keyboard with RGB Backlighting - Black', price:229.99, stock:12, image:'./../public/img/Logitech-g915.jpg',category:'keyboard'},
    {id: 8, name:'Logitech - G PRO TKL',description: 'Wired Mechanical GX Blue Clicky Switch Gaming Keyboard with RGB Backlighting - Black', price:129.99, stock:8, image:'./../public/img/logitech-GPro.jpg',category:'keyboard'},
    {id: 9, name:'SteelSeries - Apex Pro 2023 TKL',description: 'Wireless Mechanical OmniPoint 2.0 Adjustable Actuation Switch Gaming Keyboard with RGB Backlighting - Black', price:249.99, stock:9, image:'./../public/img/SteelSeries-ApexPro.jpg',category:'keyboard'},
    {id: 10, name:'Razer - BlackWidow V3 Mini',description: 'Hyperspeed Phantom Edition 65% Wireless Mechanical Green Clicky Tactile Switch Gaming Keyboard - Black', price:199.99, stock:4, image:'./../public/img/Razer-BlackWidow.jpg',category:'keyboard'},
    {id: 11, name:'Logitech - G PRO Lightweight', description:'Wireless Optical Ambidextrous Gaming Mouse with RGB Lighting - Black', price:129.99, stock:14, image:'./../public/img/Logitech-gpro-Mouse.jpg', category: 'mouse'},
    {id: 12, name:'Logitech - G203 LIGHTSYNC', description:'Wired Optical Gaming Mouse with 8,000 DPI sensor - White', price:39.99, stock: 16, image:'./../public/img/logitech-g203.jpg', category: 'mouse'},
    {id: 13, name:'Razer - Viper V2 Pro Lightweight', description:'Wireless Optical Gaming Mouse with 80 Hour Battery Life - White', price:149.99, stock:14, image:'./../public/img/razer-viper.jpg', category: 'mouse'},
    {id: 14, name:'Logitech - G502 Lightspeed', description:'Wireless Optical Gaming Mouse with RGB Lighting - Black', price:149.99, stock: 13, image:'./../public/img/logitech-g502.jpg', category: 'mouse'},
    {id: 15, name:'SteelSeries - Aerox 9', description:'Wireless Ultra Lightweight Honeycomb Water Resistant RGB Optical Gaming Mouse With 18 Programmable Buttons - Black', price: 149.99, stock:2, image:'./../public/img/SteelSeriers-aerox9.jpg', category: 'mouse'},
    
] */

export const list = (pid) => new Promise((res, rej) => {
        setTimeout(()=>{
            res(pid ? products.find(product => product.id === pid) : products)
        }, 500)

})