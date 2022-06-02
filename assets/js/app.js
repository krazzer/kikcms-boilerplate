import {AppComponent} from './components/appComponent';

class App {
    init() {
        this.component = (new AppComponent(this)).init();
    }
}

const app = new App;
app.init();