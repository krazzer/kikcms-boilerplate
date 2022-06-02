export class AppComponent {
    /**
     * @param {App} app
     */
    constructor(app) {
        this.app = app;
    }

    /**
     * Init component
     */
    init() {
        document.addEventListener("DOMContentLoaded", () => {
            this.initComponent();
        });

        return this;
    }

    /**
     * Init component after DOM has loaded
     */
    initComponent(){

    }
}