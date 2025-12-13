import { useState, useEffect } from 'react';
import MarkdownRenderer from './MarkdownRenderer';



export default function PostUI({ 
  post, 
  mode = 'render', // 'render', 'editing', 'new'
  onUpdate, 
  newMarkdown
}) {

    const isEditing = mode === 'editing' || mode === 'new';
    const [markdown, setMarkdown] = useState(post.md || '');

    useEffect(() => {
        if (newMarkdown) {
            newMarkdown(markdown);
        }
    }, [markdown]);

    const handleInputChange = (field, value) => {
        if (onUpdate) {
        onUpdate({ ...post, [field]: value });
        }
    };

    const renderTitle = () => {
        if (mode === 'render') {
        // 1. Title of Post - display only
        return (
            <h1 className="text-2xl font-bold mb-2">
            {post.title}
            </h1>
        );
        } else if (mode === 'editing') {
        // 2. Editing the Title of Post - editable with current title
        return (
            <input
            type="text"
            value={post.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full text-2xl font-bold border-none outline-none bg-transparent mb-2 focus:ring-0"
            placeholder="Enter post title..."
            />
        );
        } else if (mode === 'new') {
            
        return (
            <input
            type="text"
            value={post.title || ''}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full text-2xl font-bold border-none outline-none bg-transparent mb-2 placeholder-gray-400 focus:ring-0"
            placeholder="Enter post title..."
            />
        );
        }
    };

    const renderDate = () => {
        if (mode === 'render') {
        return (
            <h2 className="text-md font-bold mb-5">
            {post.date}
            </h2>
        );
        } else {
        return (
            <input
            type="date"
            value={post.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className="text-md font-bold mb-2 border-none outline-none bg-transparent focus:ring-0"
            />
        );
        }
    };

    const renderDescription = () => {
        if (mode === 'render') {
        // Don't show description in render mode (it's usually for listings)
        return null;
        } else {
        return (
            <input
            type="text"
            value={post.description || ''}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full text-md text-gray-600 border-none outline-none bg-transparent mb-5 placeholder-gray-400 focus:ring-0"
            placeholder="Enter a brief description..."
            />
        );
        }
    };

    return (
        <div>
            {renderTitle()}
            {renderDate()}
            {renderDescription()}
            <MarkdownRenderer 
              isEditing={isEditing}
              onUpdate={setMarkdown}
            >
              {post.content || ''}
            </MarkdownRenderer>
        </div>
    );
    }