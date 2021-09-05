import { createApp } from 'vue';
import SelfContainedComponent from './self-contained/self-contained-component.vue';
import SimpleComponent from './simple/simple-component';

// Entry point for the application.

// Bind an instance of the simple component to the DOM element with id="simple-component".
new SimpleComponent({
  el: '#simple-component',
});

createApp(SelfContainedComponent)
  .mount('#self-contained');
