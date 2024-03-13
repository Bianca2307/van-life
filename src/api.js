
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query,where } from "firebase/firestore/lite"


const firebaseConfig = {
    apiKey: "AIzaSyAiTIZAYjVr_rkDrsH8CeDVHMYrt2CKAJA",
    authDomain: "vanlife-855d8.firebaseapp.com",
    projectId: "vanlife-855d8",
    storageBucket: "vanlife-855d8.appspot.com",
    messagingSenderId: "1074062335646",
    appId: "1:1074062335646:web:dd57e08256ff26cfb3258f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "1")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    console.log(vans)
    return vans
}

export async function getVan(id) {
    
    const docRef = doc(db, "1", id)
    const snapshot = await getDoc(docRef)

    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans(){
    const q = query(vansCollectionRef, where("hostId","==","123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    console.log(vans)
    return vans
}

// A function whose only purpose is to delay execution
// for the specified # of milliseconds when used w/ `await`
// e.g. inside an async function:
// await sleep(2000)  => pauses the function for 2 seconds before moving on
function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}