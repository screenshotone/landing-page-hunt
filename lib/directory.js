class Directory {
    constructor() {
        const accessKey = process.env.SCREENSHOT_ONE_ACCESS_KEY;

        const screenshotUrl = (url) => {
            return `https://api.screenshotone.com/take?access_key=${accessKey}&url=${url}&cache=true`;
        }

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
            landingPage.slug = landingPage.name.toLowerCase().replace(' ', '');
            landingPage.screenshotUrl = screenshotUrl(landingPage.url);
        }

        this.landingPages = landingPages;
    }

    async likePage(slug) {
        for (const landingPage of this.landingPages) {
            if (landingPage.slug == slug) {
                landingPage.likes++;

                return landingPage.likes;
            }
        }

        return -1;
    }

    async loadLandingPages() {
        return this.landingPages;
    }
}

export default new Directory();