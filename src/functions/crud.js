import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    setDoc,
    updateDoc,
} from 'firebase/firestore';

import { db } from '../firebase/fire';

import {storage} from '../firebase/fire';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const generateId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let randomID = "";
    for (let i = 0; i < 16; i++) {
        randomID += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomID;
}

export const createData = async (collectionName, data) => {
    const id = generateId();
    try {
        const docRef = doc(db, collectionName, id);
        await setDoc(
            docRef, 
            {...data, id}
        );
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export const readData = async (collectionName, id) => {
    try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return docSnap.data();
        } else {
            console.log("No such document!");
        }
    } catch (error) {
        console.error("Error getting document: ", error.message);
    }
}

export const updateData = async (collectionName, id, data) => {
    try {
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, {
            id, 
            ...data,
        });

        console.log("Document successfully updated!");
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}

export const deleteData = async (collectionName, id) => {
    try {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);

        console.log("Document successfully deleted!");
    } catch (error) {
        console.error("Error deleting document: ", error);
    }
}

export const readAllData = async (collectionName) => {
    try {
        const newDataArr = [];
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            newDataArr.push(doc.data());
        });
        return newDataArr;
    } catch (error) {
        console.error("Error getting documents: ", error);
    }
}

export const listenToCollection = (collectionName, callback) => {
    const collectionRef = collection(db, collectionName);

    return onSnapshot(collectionRef, (snapshot) => {
        const data = [];
        snapshot.forEach((doc) => {
            data.push(doc.data());
        });

        callback(data);
    });
}


export const uploadImage = async (imageFile) => {
    const imageId = generateId();
    const imageRef = ref(storage, `images/${imageId}`);

    try {
        await uploadBytes(imageRef, imageFile);
        const downloadURL = await getDownloadURL(imageRef);
        console.log("Image uploaded and accessible at: ", downloadURL);
        return downloadURL;
    } catch (error) {
        console.error("Error uploading image: ", error);
        throw error;
    }
}
