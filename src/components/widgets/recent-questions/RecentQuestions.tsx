import { useState } from "react";
import Widget from "../widget/Widget";
import CheckedButton from "@/components/ui/checked-button/CheckedButton";
import Message, { IMessage } from "@/components/ui/message/Message";
import { messages } from "../data/data";

export default function RecentQuestions() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Widget size="md" title="Recent questions" className="px-1">
      <ul className="h-10 w-full rounded-lg bg-background mt-4 flex items-center px-5 gap-2">
        <CheckedButton
          isChecked={activeTab === 0}
          variant="second"
          onClick={() => setActiveTab(0)}
        >
          All
        </CheckedButton>
        <CheckedButton
          isChecked={activeTab === 1}
          variant="second"
          onClick={() => setActiveTab(1)}
        >
          Unread
        </CheckedButton>
        <CheckedButton
          isChecked={activeTab === 2}
          variant="second"
          onClick={() => setActiveTab(2)}
        >
          New
        </CheckedButton>
      </ul>
      <ul className="px-6">
        {messages.map((message) => (
          <Message
            key={message.textMessage}
            textMessage={message.textMessage}
            createdAt={message.createdAt}
          />
        ))}
      </ul>
    </Widget>
  );
}
