import styles from '../styles/Home.module.css'

export default function Home({ landingPages }) {
  return (
    <div className="md:container md:mx-auto px-4">
      <h1 className="text-4xl font-bold text-center pt-5">
        Landing Page Hunt
      </h1>
      <h2 className="pb-5 text-center">
        An inspiration bucket for your next landing page.
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-8">
        {landingPages.map(landingPage =>
        (<div key={landingPage.url} className="p-2">
          <div className="text-2xl text-center py-3">
            <a href={landingPage.url}>{landingPage.name}</a>
          </div>
          <div className="mt-2 shadow-lg">
            <a href={landingPage.url}><img src={landingPage.screenshotUrl} width="400" /></a>
          </div>
          <div className="text-right text-sm py-5">
            {landingPage.likes} 👍
          </div>
        </div>))}
      </div>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
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
    landingPage.screenshotUrl = screenshotUrl(landingPage.url);
  }

  return {
    props: {
      landingPages
    },
  }
}
