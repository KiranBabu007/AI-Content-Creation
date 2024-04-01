"use client";
import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import { Download, ImageIcon, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import OpenAI from 'openai';
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { Empty } from "@/components/ui/empty";
import { formSchema, amountOptions, resolutionOptions } from "./constants";
import { Card, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"





const ImagePage = () => {

  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512"
    }
  });

  const client = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    baseURL: 'https://api.together.xyz/v1',
    dangerouslyAllowBrowser: true
  });

  const isLoading = form.formState.isSubmitting;



  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {

      const userMessage = values.prompt;
      const response1 = await axios.post('/api/conversation', { messages: userMessage });

      const response = await client.images.generate({
        model: "stabilityai/stable-diffusion-xl-base-1.0",
        prompt: values.prompt,

      });

      const imageUrl = response.data[0].b64_json; // Directly extract the UR

      if (imageUrl) {
        setImages([imageUrl]);
      } else {
        toast.error("Image URL is undefined.");
      }
    } catch (error: any) {
      if (error?.response?.status === 403) {
        // Handle 403 error
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.refresh();
    }
  }

  return (
    <div>
      <Heading
        title="Image Generation"
        description="Create images from prompt"
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-8">
                    <FormControl className="m-0 p-0">
                      <Input
                        className=" border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="A painting of Mona Lisa"
                        {...field}

                      />
                    </FormControl>
                  </FormItem>
                )}
              />


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
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((option) => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-20">
              <Loader />
            </div>
          )}
          {images.length === 0 && !isLoading && (
            <Empty label="No Images Generated." />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {images.map((src) => (
              <Card key={src} className="rounded-lg overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={`data:image/png;base64,${src}`}
                    fill
                    alt="Generated image"
                  />
                </div>
                
              </Card>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ImagePage;