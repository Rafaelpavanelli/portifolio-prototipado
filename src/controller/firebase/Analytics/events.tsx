import { app } from '../firebase.config';
import { getAnalytics, logEvent, isSupported} from "firebase/analytics";

let analytics:any;

isSupported().then(supported => {
    if (supported) {
        analytics = getAnalytics(app);
    } else {
        console.log("Firebase Analytics não é suportado neste ambiente.");
    }
});

function VisualizedSite() {
    if (analytics) {
        logEvent(analytics, 'page_view', {
            page_path: '/',
            page_title: 'main'
        });
    } else {
        console.log("Analytics não está inicializado.");
    }
}

export { VisualizedSite };
