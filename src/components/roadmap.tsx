import { ResponseDataProps } from "../models/models";
import MarkdownPreview from "@uiw/react-markdown-preview";

interface RoadMapDataProps {
  content?: ResponseDataProps;
}

export function Roadmap({ content }: RoadMapDataProps) {
  const source = `
## MarkdownPreview

> todo: React component preview markdown text.
`;

  return (
    <div className="mt-8 w-full rounded-md mx-1 flex flex-col items-start justify-start px-8 py-8 border border-gray-300">
      {content?.choices.map((choice) => (
        <MarkdownPreview
          style={{
            color: "black",
            background: "rgb(250 250 250 / var(--tw-bg-opacity))",
          }}
          className="bg-white"
          source={choice.message.content}
          key={choice.index}
        />
      ))}
    </div>
  );
}
