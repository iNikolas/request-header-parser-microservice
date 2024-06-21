import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>API Project: Request Header Parser Microservice</h1>
        <h2>Example Usage:</h2>
        <Link href="/api/whoami">[base url]/api/whoami</Link>

        <h2>Example Output:</h2>
        <p>
          <code>{`{"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",<br>"software":"Mozilla/5.0
        (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101
        Firefox/50.0"}`}</code>
        </p>
      </div>
      <div className="footer">
        <p>
          by{" "}
          <Link href="https://www.linkedin.com/in/nikolaj-lebed-570438207/">
            Mikola Lebid
          </Link>
        </p>
      </div>
    </>
  );
}
