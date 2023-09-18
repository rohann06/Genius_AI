import Heading from "@/app/components/Heading";
import React from "react";
import { LuCode2} from "react-icons/lu";

const CodeGeneratorPage = () => {
  return (
    <div>
      <Heading
        title="Code Generator"
        subtitle="An advanced Code generator AI model"
        icon={<LuCode2 />}
        iconColor="text-teal-500 text-[25px] font-bold"
        iconBackground="bg-teal-200/40 p-2 md:p-4 rounded-lg"
      />
    </div>
  );
};

export default CodeGeneratorPage;
