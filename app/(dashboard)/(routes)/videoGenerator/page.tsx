"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Heading from "@/app/components/Heading";
import React, { useState } from "react";
import { LuVideo } from "react-icons/lu";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/app/components/ui/form";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { Input } from "@/app/components/ui/input";
import Empty from "@/app/components/Empty";
import { Loading } from "@/app/components/Loading";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useProModel } from "@/hooks/use-pro-model";

const VideoGeneratorPage = () => {
  const [video, setVideo] = useState<string>();
  const router = useRouter();
  const proModel = useProModel();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);

      const response = await axios.post("api/videoGenerator", values);
      setVideo(response.data[0]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModel.onOpen();
      }
      console.log("error", error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Video Generator"
        subtitle="An advanced video generator AI model"
        icon={<LuVideo />}
        iconColor="text-green-500 text-[25px] font-bold"
        iconBackground="bg-green-200/40 p-2 md:p-4 rounded-lg"
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" lg:flex lg:items-center lg:justify-between  gap-5 p-1 md:p-2 border-gray-500 border-2 w-full my-7 md:my-10 rounded-xl"
        >
          <FormField
            name={"prompt"}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder=" Write your prompt here......"
                    className="   border-0 focus-visible:ring-0 focus-visible:ring-transparent rounded-lg p-2  outline-none  md:w-[50px] lg:w-[1300px]"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <button
            disabled={isLoading}
            className={` text-white hover:bg-green-700 bg-green-500 px-1 py-1 md:px-2 md:py-3 rounded-lg font-medium font-Rubik  md:w-[10%] text-sm md:text-base w-full mt-10 md:mt-0`}
          >
            {isLoading ? (
              <div className=" animate-spin flex justify-center items-center text-xl">
                <AiOutlineLoading3Quarters />
              </div>
            ) : (
              "Generate"
            )}
          </button>
        </form>
      </Form>
      <div className=" space-y-4 mt-4">
        {isLoading && (
          <div className=" bg-white p-8 rounded-lg flex justify-center items-center w-full bg-muted">
            <Loading />
          </div>
        )}

        {!video && !isLoading && (
          <div>
            <Empty lable="No Video Generated." />
          </div>
        )}
        <div>
          {video && (
            <video
              className=" w-full aspect-video mt-8 rounded-lg border bg-black"
              controls
            >
              <source src={video} />
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoGeneratorPage;
