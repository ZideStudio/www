import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-text mt-24 flex flex-col items-center justify-center space-y-10">
      <p className="text-3xl">Oops!</p>
      <p className="text-xl">
        Sorry, we couldn't find the project you were looking for.
        <br />
        Please check the URL or try again later.
      </p>
      <Link href="/projects" className="text-text/50 hover:text-text/75 flex flex-row items-center space-x-3">
        <i className="pi pi-arrow-left" />
        <p>Back to projects</p>
      </Link>
    </div>
  );
}
