import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        authUser: {id: 0, name: "",email:"", password: "", answer_id: 0,done: false},
        users: [
            { id: 1, name: "Artem",email:"test@mail.ru", password: "password", answer_id: 1,done: false},
            { id: 2, name: "Tom",email:"test2@mail.ru", password: "password", answer_id: 2,done: true},
        ],
        user_answers: [
            {   answer_id: 1, user_id: 1, answers: [
                    { question_id: 1,answer: ""},
                    { question_id: 2,answer: ""},
                    { question_id: 3,answer: ""},
                ]
            },
            {   answer_id: 2, user_id: 2, answers: [
                    { question_id: 1,answer: "a"},
                    { question_id: 2,answer: "c"},
                    { question_id: 3,answer: "a"},
                ]
            }
        ],
        questions: [
            { id: 1,question: "Где вы видели рекламу этой компании",variants:
                    {
                        a:"Интернет",
                        b:"Телевидение",
                        c:"Другое"
                    }
                    },
            { id: 2,question: "Как вы оцениваете качество продукта ______________________?",variants:
                    {
                        a:"Хорошо",
                        b:"Очень хорошо",
                        c:"Неудовлетворительно"
                    }
                    },
            { id: 3,question: "Знаете ли вы компанию ______________?",variants:
                    {
                        a:"Никогда не слышал",
                        b:"Кажется, слышал",
                        c:"Знаю, но не пользовался товарами или услугами"
                    }
                    }
        ]
    },
    getters: {
        getUsers(state){
            return state.users
        },
        authUser(state){
            return state.authUser
        },
        getUserAnswers(state){
            return state.user_answers
        },
        getQuestions(state){
            return state.questions
        },
        getAnswers(state){
            return state.user_answers
        },
        getAnswersById(state, data){
            if (data.user_id){
                for (let i= 0; i < state.user_answers.length; i ++){
                    if (state.user_answers[i].user_id === data.user_id){
                        return state.user_answers[i]
                    }
                }
            }else if (data.answer_id && data.user_id){
                return state.user_answers[0]
            }else if(data.answer_id){
                for (let i= 0; i < state.user_answers.length; i ++){
                    if (state.user_answers[i].answer_id === data.answer_id){
                        return state.user_answers[i]
                    }
                }
            }else{
                return state.user_answers[0]
            }
        }
    },
    mutations: {
        login(state,data){
            state.authUser.id = data.id
            state.authUser.name = data.name
            state.authUser.email = data.email
            state.authUser.password = data.password
            state.authUser.answer_id = data.answer_id
            state.authUser.done = data.done
        },
        logOut(state){
            state.authUser.id = 0
            state.authUser.name = ''
            state.authUser.email = ''
            state.authUser.password = ''
            state.authUser.answer_id = 0
            state.authUser.done = false
        },
        registration(state, data){
            let user = {
                id: state.users.length + 1,
                name: data.name,
                email: data.email,
                password: data.password,
                answer_id: state.user_answers.length + 1,
                done: false
            }
            state.users.push(user);
            state.authUser.id = state.users.length
            state.authUser.name = data.name
            state.authUser.email = data.email
            state.authUser.password = data.password
            state.authUser.answer_id = state.user_answers.length + 1
            state.authUser.done = false
            let ans = [];
            for (let i = 0; i < 3; i ++){
                ans.push({
                    question_id: i+1,answer: ""
                })
            }
            state.user_answers.push({
                answer_id: state.user_answers.length + 1,
                user_id: state.users.length,
                answers: ans
            })

        },
        setAnswers(state, data){

            state.user_answers.find(ua => ua.user_id === data.user_id).answers = data.answers

            state.users.find(u => u.id === data.user_id).done = true

            state.authUser.done = true

        }
    }
});