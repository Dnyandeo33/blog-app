import { PrismaClient } from "@prisma/client";
import { posts } from "./posts";

const prisma = new PrismaClient()

async function main() {
    console.log(`Start seeding...`)
    for (let blog of posts) {
        await prisma.post.create({ data: blog })
    };
    console.log(`Seeding finished.`)
}

main().catch((e) => {
    console.log(e)
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})