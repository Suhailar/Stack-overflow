import React from 'react'

const WidgetTags = () => {

    const tags = ['c', 'css', 'html', 'python', 'javascript', 'php', 'react', 'node', 'express', 'django', 'sql', 'mongodb', 'firebase', 'postgresql']

  return (
    <div className='widget-tags'>
        <h4>Watched tags</h4>
        <div className='widget-tags-div'>
            {
                tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>
    </div>
  )
}

export default WidgetTags