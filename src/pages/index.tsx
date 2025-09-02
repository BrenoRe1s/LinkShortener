import { Scissors,Copy } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/shorten", { url: originalUrl });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.error(err);
      alert(err);
    }
  }

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      alert("URL copied successfully!");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center ">

      <header className=" flex-1">
        <h1 className="text-primary text-3xl font-bold">Link Shortener</h1>
      </header>

      <main className="flex-4 w-full flex items-center flex-col justify-start gap-5">

        {/* Input e button */}
        <form onSubmit={handleSubmit} className="flex flex-row items-center gap-2" >

          <input type="text" placeholder="Insert Link to be shortened" className="w-3xs border rounded-xs border-border px-3 py-1" onChange={(e) => setOriginalUrl(e.target.value)}/>
          <button aria-label="shortened button" className="p-1 border-3 rounded-xs border-border"><Scissors size={18}/></button>

        </form>

        {/*Resultado*/}
        { shortUrl &&(
          <div className=" flex flex-row gap-2 items-center">
            <p className="">Url : <a href={shortUrl} target="_blank" rel="noreferrer" className="text-secondary">{shortUrl}</a> (Remember it doesn't work)</p>
            <button aria-label="copy button" onClick={handleCopy}><Copy size={12}/></button>
          </div>
          
        )}

      </main>

    </div>
  );
}
