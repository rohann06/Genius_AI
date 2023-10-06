import React from "react";
import Image from "next/image";
interface EmptyProps {
  lable: string;
}

const Empty = ({ lable }: EmptyProps) => {
  return (
    <div className=" h-fill p-20 flex flex-col items-center justify-center">
      <div className=" relative h-72 w-72">
        <Image alt="Empty" fill src="/empty.png"/>
      </div>
      <p className=" text-muted-foreground text-sm text-center">
            {lable}
      </p>
    </div>
  );
};

export default Empty;
