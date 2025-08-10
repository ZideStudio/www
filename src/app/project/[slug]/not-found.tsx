import Link from 'next/link';

export default function NotFound() {
  return (
    <div className=" flex flex-col justify-center items-center space-y-10 text-text mt-24">
      <p className="text-3xl">Oops!</p>
      <p className="text-xl">
        Sorry, we couldn't find the project you were looking for.
        <br />
        Please check the URL or try again later.
      </p>
      <Link href="/projects" className="flex flex-row space-x-3 items-center text-text/50 hover:text-text/75">
        <i className="pi pi-arrow-left" />
        <p>Back to projects</p>
      </Link>
    </div>
  );
}
