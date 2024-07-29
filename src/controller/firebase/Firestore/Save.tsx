import { app } from "../firebase.config";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { ProjectImageTypes, ProjectInfosType } from "@/controller/types/Project.type";

const db = getFirestore(app);
const storage = getStorage(app);

export async function SaveProjects(data: ProjectInfosType) {
    try {
        const docRef = await addDoc(collection(db, "Projects"), data);
        return docRef.id;
    } catch (error) {
        console.log(error);
    }
}

export async function SaveImages(files: ProjectImageTypes) {
    try {
        let urls = [];
        for (let i = 0; i < files.filesList.length; i++) {
            const item = files.filesList[i];
            const storageRef = ref(storage, `${item.name === files.coverImage.name ? `Projects/${files.idProject}/cover` : `Projects/${files.idProject}/image${i}`}`);
            const snapshot = await uploadBytes(storageRef, item);
            const downloadURL = await getDownloadURL(snapshot.ref);
            urls.push(downloadURL);
        }
        
        const coverUrl = urls.find(url => url.includes('cover'));
        const referenceImagesUrl = urls.filter(url => !url.includes('cover'));

        const projectRef = doc(db, "Projects", files.idProject);
        await updateDoc(projectRef, {
            coverUrl,
            referenceImagesUrl
        });

    } catch (error) {
        console.log("Erro no save"+error);
    }
}
