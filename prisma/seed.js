const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const landingPages = [
    {
        slug: "ktool",
        name: "KTool",
        url: "https://ktool.io",
        likes: 2,
    },
    {
        slug: "tailwindcss",
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        likes: 5,
    },
    {
        slug: "toolsforcreators",
        name: "Tools for Creators",
        url: "https://toolsforcreators.co/",
        likes: 3,
    },
    {
        slug: "llamalife",
        name: "llama life.",
        url: "https://llamalife.co/",
        likes: 4,
    },
    {
        slug: "logology",
        name: "logology",
        url: "https://www.logology.co/",
        likes: 3
    },
    {
        slug: "producthunt",
        name: "Product Hunt",
        url: "https://www.producthunt.com/",
        likes: 2,
    },
    {
        slug: "screenshotone",
        name: "ScreenshotOne",
        url: "https://screenshotone.com/",
        likes: 1
    },
    {
        slug: "pika",
        name: "Pika",
        url: "https://pika.style/",
        likes: 5,
    },
    {
        slug: "shipsaas",
        name: "Ship SaaS",
        url: "https://shipsaas.com/",
        likes: 3,
    }
];


async function main() {
    console.log(`Start seeding ...`)
    for (const lp of landingPages) {
        const user = await prisma.landingPage.create({
            data: lp,
        })
        console.log(`Created landing page with id: ${user.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });