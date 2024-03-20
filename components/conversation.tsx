// components/Conversation.tsx
import React from 'react';
import { OpenAI } from 'openai';

interface ConversationProps {
  messages: OpenAI.Chat.ChatCompletionMessageParam[];
}

const Conversation: React.FC<ConversationProps> = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.role}`}>
          <div className="message-role">{message.role}</div>
          <div className="message-content">{message.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Conversation;