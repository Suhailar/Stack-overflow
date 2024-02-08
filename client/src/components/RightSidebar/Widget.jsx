import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blockLogo from '../../assets/blacklogo.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>Self-healing code is the future of software development</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>The hardest part of building software is not coding, it's requirements</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width='18' />
                <p>Update to our Advertising Guidelines support</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width='18' />
                <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blockLogo} alt="blockLogo" width='18' />
                <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>45</p>
                <p>why was this spam flag declined, yet the question marked as spam?</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>27</p>
                <p>What is the best course of action when a user has high enough rep to...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>11</p>
                <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>

    </div>
  )
}

export default Widget