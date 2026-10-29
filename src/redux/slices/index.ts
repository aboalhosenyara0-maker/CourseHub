import courses from "@/data/courses";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type user = {
    id : number
    username : string
    email : string
    password : string
}
type EducationState = {
    education: typeof courses
    currentPage: number
    users: user[]
    isAuthenticated: boolean
    currentUser: user | null
}

const initialState :EducationState = {
    education: courses,       // جميع الكورسات
    currentPage: 1,           // رقم الصفحة الحالية
    users: [] as user[] ,                // مصفوفة المستخدمين المسجلين
    isAuthenticated: false,   // هل المستخدم سجل دخوله؟
    currentUser: null         // بيانات المستخدم الحالي، null بالبداية
}



const educationSlice = createSlice ({
    name : "education",
    initialState,
    reducers : {
        setCurrentPage : (state , action)=>{
            state.currentPage=action.payload
        },
        registerUser : (state , action:PayloadAction<user>)=>{
            state.users.push(action.payload)
        },
        loginUser: (state, action: PayloadAction<{
        identifier: string;
        password: string;
    }>) => {
        const user = state.users.find(
            (user) =>
                (user.email === action.payload.identifier ||
                user.username === action.payload.identifier) &&
                user.password === action.payload.password
        )

        if (user) {
            state.isAuthenticated = true
            state.currentUser = user
        }
    },
    }
})

export default educationSlice.reducer
export const {setCurrentPage , registerUser , loginUser} =educationSlice.actions
