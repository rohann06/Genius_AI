"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { LuImage } from "react-icons/lu";
import axios from "axios";
import { AiOutlineLoading3Quarters, AiOutlineCloudDownload } from "react-icons/ai";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/app/components/ui/form";
import { useForm } from "react-hook-form";
import { amountOptions, formSchema, resolutionOptions } from "./constants";
1;
//Component
import { Input } from "@/app/components/ui/input";
import Empty from "@/app/components/Empty";
import { Loading } from "@/app/components/Loading";
import Heading from "@/app/components/Heading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import Image from "next/image";

const ImageGeneratorPage = () => {
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setImages([]);
      const response = await axios.post("api/imageGenerator", values);

      const urls = response.data.map((image: { url: string }) => image.url);

      setImages(urls);

      form.reset();
    } catch (error) {
      //TODO: open pro model
      console.log("error", error);
    }
  };

  return (
    <div>
      <Heading
        title="Image Generator"
        subtitle="An advanced image generator AI model"
        icon={<LuImage />}
        iconColor="text-fuchsia-500 text-[25px] font-bold"
        iconBackground="bg-fuchsia-200/40 p-2 md:p-4 rounded-lg"
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
                    placeholder=" Write your propmt here to generate image......"
                    className="   border-0 focus-visible:ring-0 focus-visible:ring-transparent rounded-lg p-2  outline-none  md:w-[50px] lg:w-[1000px] mb-10 md:mb-0"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Amount */}
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-2">
                <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Amount"
                        defaultValue={field.value}
                      />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {amountOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.lable}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Resolution */}
          <FormField
            control={form.control}
            name="resolution"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-2">
                <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Resolution"
                        defaultValue={field.value}
                      />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    {resolutionOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.lable}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <button
            disabled={isLoading}
            className={` text-white hover:bg-fuchsia-700 bg-fuchsia-500 px-1 py-1 md:px-2 md:py-3 rounded-lg font-medium font-Rubik  md:w-[10%] text-sm md:text-base w-full mt-10 md:mt-0`}
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

      {/* Output Content */}
      <div className=" space-y-4 mt-4">
        {isLoading && (
          <div className=" bg-white p-8 rounded-lg flex justify-center items-center w-full bg-muted">
            <Loading />
          </div>
        )}
        {images.length === 0 && !isLoading && (
          <div>
            <Empty lable="No Image generation Started." />
          </div>
        )}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {images.map((src) => (
            <div key={src} className=" rounded-lg overflow-hidden">
              <div className=" relative aspect-square">
                <Image alt="img" fill src={src} />
                <button onClick={() => window.open(src)} className=" absolute bottom-3 right-4 text-center text-ellipsis bg-gray-300 p-3 rounded-full">
                  <AiOutlineCloudDownload/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGeneratorPage;
