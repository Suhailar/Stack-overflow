import React from 'react'
import { /*Link,*/ useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './HomeMainbar.css'
import QuestionsList from './QuestionList'

const HomeMainbar = () => {

    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()

    const questionsList = useSelector(state => state.questionsReducer)
    // console.log(questionsList)

    // var questionsList = [{   // list of questions is array of objects (this is array of objects with & elements)
    //     _id: 1,
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 2,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js", "mongodb"],
    //     userPosted: "arun",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'karthi', //0010
    //         answeredOn: 'jan 2',
    //         userId: 2,
    //     }]
    // },{
    //     _id: 2,
    //     upVotes: 0,
    //     downVotes: 1,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js", "mongodb"],
    //     userPosted: "arun",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'karthi',
    //         answeredOn: 'jan 2',
    //         userId: 1,
    //     }]
    // },{
    //     _id: 3,
    //     upVotes: 1,
    //     downVotes: 4,
    //     noOfAnswers: 0,
    //     questionTitle: "What is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js", "mongodb"],
    //     userPosted: "arun",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'karthi',
    //         answeredOn: 'jan 2',
    //         userId: 3,
    //     }]
    // }]



    const checkAuth = () => {
        if (user === null) {
            alert("login or signup to ask a question")
        navigate('/Auth')
        }else{
            navigate('/AskQuestion')
        }
    }

    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
            </div>
            <div>
                {
                    questionsList.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        <p>{ questionsList.data.length } questions</p>
                        <QuestionsList questionsList={questionsList.data} />
                    </>
                }
            </div>
        </div>
    )
    }

    export default HomeMainbar