import React, { useEffect, useState } from "react";
import directory from "../lib/directory";

export default function Home(props) {
  const [landingPages, setLandingPages] = useState(props.landingPages);

  const likePage = async (slug) => {
    try {
      const response = await fetch(
        `/api/like`,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ slug })
        }
      );
      const data = await response.json();
      setLandingPages(
        landingPages.map(p => p.slug == slug ? { ...p, ...{ likes: data.likes } } : p)
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-8">
      {landingPages.map(landingPage =>
      (<div key={landingPage.url} className="py-2">
        <div className="text-2xl text-center py-3">
          <a href={landingPage.url}>{landingPage.name}</a>
        </div>
        <div className="mt-2 shadow-lg">
          <a href={landingPage.url}><img src={landingPage.screenshotUrl} width="460" /></a>
        </div>
        <div className="text-right text-sm py-5">
          <button onClick={async () => await likePage(landingPage.slug)} className="bg-transparent  hover:text-blue-400 text-blue-900 font-semibold py-2 px-4 border hover:border-blue-400 border-blue-900 rounded">
            {landingPage.likes} 👍
          </button>
        </div>
      </div>))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const landingPages = await directory.loadLandingPages();

  return {
    props: {
      landingPages
    },
  }
}