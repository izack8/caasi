import { useState, useEffect, useRef } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Crepe } from "@milkdown/crepe";
import "@milkdown/crepe/theme/common/style.css";
import "@milkdown/crepe/theme/frame.css";

export default function MarkdownRenderer({ 
  children, 
  isEditing = false, 
  onUpdate }) {

    const [copiedCode, setCopiedCode] = useState('');
    const editorRef = useRef(null);
    const crepeRef = useRef(null);

    useEffect(() => {
      if (isEditing && editorRef.current && !crepeRef.current) {
        
        crepeRef.current = new Crepe({
          root: editorRef.current,
          defaultValue: children || "Start editing...",
        });

        crepeRef.current.on((listener) => {
          listener.markdownUpdated(() => {
            const markdown = crepeRef.current.getMarkdown();
            onUpdate(markdown);
          });
        });

        crepeRef.current.create().then(() => {
          console.log('Milkdown editor created');
        }).catch(err => {
          console.error('Failed to create Milkdown editor:', err);
        });
      }

      // Cleanup function
      return () => {
        if (crepeRef.current) {
          crepeRef.current.destroy?.();
          crepeRef.current = null;
        }
      };
    }, [isEditing, children]);

    const copyToClipboard = async (code) => {
      try {
        await navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(''), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };

    // If in editing mode, render Milkdown Crepe editor
    if (isEditing) {
      return (
        <div className="prose prose-neutral prose-lg max-w-none dark:prose-invert">
          <div ref={editorRef} className="min-h-[400px] w-full p-4" />
        </div>
      );
    }

    // Otherwise render as read-only markdown
    return (
    <div className="prose prose-neutral prose-lg dark:prose-invert text-justify ">
            <Markdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h1: ({ children }) => <h1 className="text-3xl font-bold py-4 text-left">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-semibold py-3">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-medium py-2">{children}</h3>,
                    p:  ({ children }) => <p className="leading-relaxed text-justify">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc list-inside space-y-1">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside space-y-1">{children}</ol>,
                    li: ({ children }) => <li className="ml-4">{children}</li>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-black-400">
                        {children}
                      </blockquote>
                    ),
                    code({ node, className, children, ...props }) {
                        const inline = props.inline;
                        const match = /language-(\w+)/.exec(className || '');
                        const codeString = String(children).replace(/\n$/, '');
                        return !inline && match ? (
                          <div className="relative group w-full h-auto">
                              <span className="absolute top-3 left-3 text-xs text-gray-400">{match[1]}
                              </span>
                              <button
                                onClick={() => copyToClipboard(codeString)}
                                className="absolute top-3 right-3 z-10 px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer items-end"
                              >
                                {copiedCode === codeString ? 'Copied!' : 'Copy'}
                              </button>
                            <SyntaxHighlighter
                              style={oneDark}
                              language={match[1].toLowerCase()}
                              showLineNumbers={true}
                              PreTag="div"
                              customStyle={{
                                margin: 0,
                                padding: '2.5em 1em 1em 1em',
                                background: '#282a36',
                                borderRadius: '0.5rem',
                                fontSize: '0.875rem',
                              }}
                              codeTagProps={{
                                style: {
                                    whiteSpace: 'pre-wrap',
                                    overflowWrap: 'anywhere'
                                }
                            }}
                            >
                              {codeString}
                            </SyntaxHighlighter>
                          </div>
                        ) : (
                          <code className="bg-slate-800 
                          text-gray-200 
                          px-1 py-0.5 
                          rounded 
                          text-sm"
                          {...props}>
                            {children}
                          </code>
                      );
                    },
                    a: ({ href, children }) => {
                     
                      const isInternal = href?.startsWith('/') || href?.startsWith('#');
                      
                      if (isInternal) {
                        return (
                          <Link href={href || '#'} className="text-blue-900 underline hover:text-blue-500 transition-colors duration-300">
                            {children}
                          </Link>
                        );
                      }
                      
                      return (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-rose-500 transition-colors duration-300">
                          {children}
                        </a>
                      );
                    },
                  }}
                >
                  {children}
                </Markdown>
            </div>
  );
  }