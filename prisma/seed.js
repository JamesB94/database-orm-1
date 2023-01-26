const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice'
        }
    });

    // Add your code here

    const createdContact = await prisma.contact.create({
        data:{
            phone: '085288765',
            email: 'Luna@meow.com',
            customer : {
                create: 
                    {name: 'placeholder'} 
            }
            
        }
    })

    const movie = await prisma.movie.create({
        data: {
            title: "Lord of the rings",
            runtimeMins: 686
        }
    })

    const screen = await prisma.screen.create ({
        data: {
            number: 1,
        }
    })

    const screening = await prisma.screening.create ({
        data: {
            startsAt: new Date(),
            movieId: 1,
            screenId: 1,
        }
    })

    const ticket = await prisma.ticket.create({
        data: {
            customerId:1,
            screeningId: 1,

        }
    })

    


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
