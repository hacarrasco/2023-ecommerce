import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut 
     } from "firebase/auth";
import { auth } from "./firebase.config";


export const register = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response)
    } catch (error) {
        console.log("No se pudo completar tu registro, intentalo otra vez")
    }

    
}

export const login = async (email, password) => {
 try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    console.log(response)
 } catch (error) {
    console.log("bad process")
 }
}

export const loginWithGoogle = async() => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle)
}

export const logout = async () => {
     const response = await signOut(auth)
     console.log(response)
}