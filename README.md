# Gen-X: AI Content Generation Platform

## Problem Statement

<p>In today's digital age, content creation has become a crucial aspect for businesses, marketers, and individuals alike. However, generating high-quality and engaging content can be a time-consuming and challenging task. Gen-X aims to solve this problem by providing an AI-powered content generation platform that simplifies the process while ensuring quality output.</p>

## Solutions

<p>Gen-X offers the following solutions:</p>

- **Image Generation**: Users can generate unique and visually appealing images using state-of-the-art AI image generation technology. This feature is particularly useful for creating captivating visuals for social media, marketing campaigns, or personal projects.
 

- **Conversational AI**: Gen-X incorporates a conversational AI system that allows users to generate text content based on prompts. By providing specific prompts, users can create blog posts, articles, scripts, or any other written content tailored to their needs.


- **User Authentication and Quota System**: Gen-X employs Clerk for secure user authentication and sign-up/login functionality. Additionally, it implements a quota system that limits each user to 10 content generation requests by default. This quota system ensures fair usage and prevents abuse of the platform's resources.

## Tech Stack Used

<p>Gen-X is built using the following technologies:</p>

- **Next.js**: A React framework for server-side rendering, static site generation, and building modern web applications.

- **Supabase**: An open-source Firebase alternative that provides a backend-as-a-service solution, including a PostgreSQL database, authentication, and storage.
  - Prisma is used as the ORM for interacting with the Supabase database.

- **Clerk**: A user authentication and onboarding solution that simplifies the process of adding secure authentication to web applications.

- **AI Content Generation APIs**: Gen-X integrates with AI content generation APIs from TogetherAI for image generation and conversational AI capabilities.
  - The image generation API used is TogetherAI's Realistic Vision.
  - The conversational AI model used is TogetherAI's MistralAI.

## Future Plans

<p>Gen-X aims to continuously evolve and expand its offerings. Some of the future plans include:</p>

1. **Additional Content Generation Capabilities**: Introducing new AI-powered content generation features, such as video creation, code generation, and more.

2. **Customizable Quota System**: Implementing a more flexible and customizable quota system to accommodate different user needs and subscription plans.

