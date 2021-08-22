import { createBrowserHistory, History } from 'history';

class HistoryManager {
    history: History;

    constructor() {
        this.history = createBrowserHistory();
    }
}

export default new HistoryManager();
