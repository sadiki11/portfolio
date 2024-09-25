import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
        <div>
          <h1 className="tablet:m-10 text-5xl text-bold">Contact:</h1>
          <div className="text-center">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            {/*<Button type="primary">Schedule a call</Button>  */}
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0 text-center">
        Made With ❤ by{" "}
        <Link href="http://www.chetanverma.com" className="underline underline-offset-1">
          Chetan Verma
        </Link>
      </h1> */}
    </>
  );
};

export default Footer;
