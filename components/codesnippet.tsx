"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "./ui/button";

type CodeSnippetProps = {
  code: string;
  textColor?: string; // Optional prop for text color
};

const CodeSnippet: React.FC<CodeSnippetProps> = ({
  code,
  textColor = "text-gray-800",
}) => {
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="border  p-4 rounded-lg shadow-md">
        <pre className={`text-sm ${textColor} whitespace-pre-wrap`}>{code}</pre>
      </div>
      <div className="flex justify-end">
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <Button size="sm">{copied ? "Copied!" : "Copy Code"}</Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CodeSnippet;
