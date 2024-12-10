import { initialData } from "./seed";
import { countries  } from './seed-countries';
import prisma from '../lib/db-prisma';


/*
async function main() {

    // 1-Borrar registros previos
       await prisma.orderAddress.deleteMany(),
       await prisma.orderItem.deleteMany(),
       await prisma.order.deleteMany(),

       await prisma.userAddress.deleteMany(),
       await prisma.country.deleteMany(),
       await prisma.productImage.deleteMany(),
       await prisma.product.deleteMany(),
       await prisma.category.deleteMany(),
       await prisma.user.deleteMany()

    

    const { categories, products, users } = initialData;

    

    await prisma.country.createMany({
        data:countries
    })

    await prisma.user.createMany({
        data:users
    })

    // 2-Insertar categorias
    const categoriesData = categories.map(name => ({name:name}))
    await prisma.category.createMany({
        data: categoriesData
    })

    // 3-Insertar productos
    const categoriesDB = await prisma.category.findMany();

    const categoriesMap = categoriesDB.reduce((map: any, category: any) => {
        map[category.name.toLowerCase()] = category.id;
        return map;
    },{} as Record<string, string>)

    products.forEach(async product => {
        const {images,type,...productoData} = product;

        const productDB = await prisma.product.create({
            data:{
                ...productoData,
                categoryId: categoriesMap[type.toLowerCase()]
            }
        })

        const imagesData = images.map(image => ({
            url: image,
            productId: productDB.id
        }))

        await prisma.productImage.createMany({
            data: imagesData
        })
    })
    





    console.log('Ejecutado correctamente seed-database.ts');
}


(()=>{

    main();

})()*/