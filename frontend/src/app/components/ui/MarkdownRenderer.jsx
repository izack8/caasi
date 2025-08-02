import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css'; // Choose any theme you like

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="notion-style-markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline ? (
              <div className="code-block">
                {match && <div className="language-tag">{match[1]}</div>}
                <code className={className} {...props}>
                  {children}
                </code>
              </div>
            ) : (
              <code className="inline-code" {...props}>
                {children}
              </code>
            );
          },
          blockquote({node, children, ...props}) {
            return <div className="warning-block">{children}</div>;
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;