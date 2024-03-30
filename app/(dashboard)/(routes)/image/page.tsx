"use client";
import * as z from "zod";
import axios from "axios";
import { ImageIcon, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import OpenAI from 'openai';
import { BotAvatar } from "@/components/bot-avatar";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { formSchema } from "./constants";

const ImagePage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<string[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
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


      const response = await client.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are an expert of everything your name is Gen-x Genie.',
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
        model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
      });

      const assistantMessage = response.choices[0].message.content;


      if (assistantMessage !== null) {
        setMessages((prevMessages) => [...prevMessages, assistantMessage]);
      } else {
        console.log("OpenAI response is null");
      }
    } catch (error) {
      console.error(error);
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
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className=" border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle?"
                        {...field}
                      />
                    </FormControl>
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
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  "bg-white border border-black/10"
                )}
              >
                <BotAvatar />
                <p className="text-sm">
                  {message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImagePage;