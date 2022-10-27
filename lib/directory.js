import prisma from "./prisma";
import screenshotUrl from "./screenshotone";

class Directory {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async submitPage(name, url) {
        const landingPage = await this.prisma.landingPage.create({
            data: {
                slug: this.slug(name),
                name,
                url,
                likes: 0,
            },
        })

        return {
            ...landingPage,
            screenshotUrl: screenshotUrl(url)
        };
    }

    async likePage(slug) {
        const landingPage = await this.prisma.landingPage.update({
            where: {
                slug: slug
            },
            data: {
                likes: {
                    increment: 1,
                }
            },
        });

        return landingPage.likes;
    }

    async loadLandingPages() {
        const pages = await this.prisma.landingPage.findMany();

        return pages.map(p => {
            return {
                ...p,
                screenshotUrl: screenshotUrl(p.url)
            };
        });
    }

    slug(name) {
        return name.toLowerCase().replace(' ', '').replace('.', '');
    } 
}

let directory = null;
if (process.env.NODE_ENV === 'production') {
    directory = new Directory(prisma);
} else {
    if (!global.directory) {
        global.directory = new Directory(prisma);
    }

    directory = global.directory;
}

export default directory;