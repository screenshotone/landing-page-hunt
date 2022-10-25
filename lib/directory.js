class Directory {
    constructor() {
        const landingPages = [
            {
                name: "KTool",
                url: "https://ktool.io",
                likes: 2,
            },
            {
                name: "Tailwind CSS",
                url: "https://tailwindcss.com/",
                likes: 5,
            },
            {
                name: "Tools for Creators",
                url: "https://toolsforcreators.co/",
                likes: 3,
            },
            {
                name: "llama life.",
                url: "https://llamalife.co/",
                likes: 4,
            },
            {
                name: "logology",
                url: "https://www.logology.co/",
                likes: 3
            },
            {
                name: "Product Hunt",
                url: "https://www.producthunt.com/",
                likes: 2,
            },
            {
                name: "ScreenshotOne",
                url: "https://screenshotone.com/",
                likes: 1
            },
            {
                name: "Pika",
                url: "https://pika.style/",
                likes: 5,
            },
            {
                name: "Ship SaaS",
                url: "https://shipsaas.com/",
                likes: 3,
            }
        ];

        for (let landingPage of landingPages) {
            landingPage.slug = this.slug(landingPage.name);
            landingPage.screenshotUrl = this.screenshotUrl(landingPage.url);
        }

        this.landingPages = landingPages;
    }

    async submitPage(name, url) {
        const landingPage = {
            name: name,
            url: url,
            slug: this.slug(name),
            screenshotUrl: this.screenshotUrl(url),
            likes: 0,
        };

        this.landingPages.push(landingPage);

        return landingPage;
    }

    async likePage(slug) {
        for (const landingPage of this.landingPages) {
            if (landingPage.slug == slug) {
                landingPage.likes++;

                return landingPage.likes;
            }
        }

        return 0;
    }

    async loadLandingPages() {
        return this.landingPages;
    }

    slug(name) {
        return name.toLowerCase().replace(' ', '');
    }

    screenshotUrl(url) {
        const accessKey = process.env.SCREENSHOT_ONE_ACCESS_KEY;

        return `https://api.screenshotone.com/take?access_key=${accessKey}&url=${url}&cache=true`;
    }
}

export default new Directory();