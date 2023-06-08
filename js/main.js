import Tab from "./tab.js";

const tab = new Tab('.tab-buttons li', '.tab-content');
tab.subTab('.sub-tab-buttons li', '.sub-tab-content');