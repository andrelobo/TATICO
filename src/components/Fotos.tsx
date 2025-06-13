import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Photos() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/fotos.md")
      .then((res) => res.text())
      .then(setContent)
      .catch((err) => {
        console.error("Erro ao carregar fotos.md:", err);
        setContent("# Erro ao carregar o conteúdo 😢");
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
     
      <div className="prose prose-invert dark:prose-invert">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
