import { GetProjects } from "../firebase/Firestore/GetProjects";
import { SaveImages, SaveProjects, } from "../firebase/Firestore/Save";

export function useFirestore(){
    return {SaveProjects,SaveImages,GetProjects};
}