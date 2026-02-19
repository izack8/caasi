"use client";

import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface MarkdownRendererProps {
  children: string;
}

export default function MarkdownRenderer({ children }: MarkdownRendererProps) {
  
  const [copiedCode, setCopiedCode] = useState('');
  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(''), 2000); 
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="prose prose-neutral prose-lg dark:prose-invert text-justify">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => <h1 className="text-3xl font-bold py-4 text-left">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold py-3">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-medium py-2">{children}</h3>,
          p:  ({ children }) => <p className="my-2 leading-relaxed text-justify">{children}</p>,
          ul: ({ children }) => <ul className="list-disc list-inside space-y-1">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside space-y-1">{children}</ol>,
          li: ({ children }) => <li className="ml-4">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-black-400 my-4">
              {children}
            </blockquote>
          ),
          code({ node, className, children, ...props }: any) {
            const inline = props.inline;
            const match = /language-(\w+)/.exec(className || '');
            const codeString = String(children).replace(/\n$/, '');
            
            return !inline && match ? (
              <div className="my-4 rounded-lg overflow-hidden relative group max-w-full">
                {/* Copy button */}
                <button
                  onClick={() => copyToClipboard(codeString)}
                  className="absolute top-2 right-2 z-10 px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  {copiedCode === codeString ? 'Copied!' : 'Copy'}
                </button>
                
                <SyntaxHighlighter
                  style={oneDark}
                  PreTag="div"
                  language={match[1]}
                  showLineNumbers={true}
                  wrapLines={true}
                  wrapLongLines={true}
                  customStyle={{
                    margin: 0,
                    padding: '1em',
                    paddingTop: '2.5em',
                    background: '#282a36',
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'normal',
                    overflowWrap: 'break-word',
                  }}
                  codeTagProps={{
                    style: {
                      fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'normal',
                    }
                  }}
                  {...props}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className="bg-gray-800 dark:bg-gray-800 text-white px-1 py-0.5 rounded text-sm break-all" {...props}>
                {children}
              </code>
            );
          },
          a: ({ href, children }) => (
            <a href={href} className="text-blue-600 dark:text-blue-400 underline hover:opacity-80">
              {children}
            </a>
          ),
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}