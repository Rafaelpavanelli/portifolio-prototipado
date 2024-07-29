import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { app } from '@/controller/firebase/firebase.config';
import { ProjectInfosType } from '@/controller/types/Project.type';

const db = getFirestore(app);

export async function GetProjects(plataform?: string): Promise<ProjectInfosType[]> {
    let infos: ProjectInfosType[] = [];
    const projectsQuery = plataform 
        ? query(collection(db, "Projects"), where("plataform", "==", plataform))
        : query(collection(db, "Projects"));
    
    const querySnapshot = await getDocs(projectsQuery);
    
    querySnapshot.forEach((doc) => {
        infos.push(doc.data() as ProjectInfosType);
    });

    return infos;
}
