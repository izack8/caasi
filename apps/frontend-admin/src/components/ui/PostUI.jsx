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
            <h1 className="text-2xl font-bold">
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
            className="w-full text-2xl font-bold text-gray-300"
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
            <h2 className="text-md mb-5">{new Date(post.date).toLocaleDateString('en-US', 
                    { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</h2>
        );
        } else {
        return (
            <input
            type="date"
            value={post.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className="text-md"
            />
            
        );
        }
    };

    const renderDescription = () => {
        if (mode === 'render') {
        return (
             <h2 className="text-md">{post.description}</h2>
        );
        } else {
        return (
            <input
            type="text"
            value={post.description || ''}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full text-md text-gray-600 border-none outline-none bg-transparent placeholder-gray-400 focus:ring-0"
            placeholder="Enter a brief description..."
            />
        );
        }
    };

    return (
        <div className="flex flex-col gap-y-1">
            {renderTitle()}
            {renderDescription()}
            {renderDate()}
            <MarkdownRenderer 
              isEditing={isEditing}
              onUpdate={setMarkdown}
            >
              {post.content || ''}
            </MarkdownRenderer>
        </div>
    );
    }