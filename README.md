# Typing Test App

Every since I started developing with front-end frameworks, I wanted to at least know a bit of all the most popular ones just to see how difficult it would be to migrate from one to another. VueJs is one of the most popular frameworks and I heard it's not that different from React. That's why I'm doing this application, I want to learn multiple aspects of VueJs like how components work, how states within a component work, global state management and slots to verify how those functionalities correlate with React.

## The Application
The website consists in a typing test game in which the user can measure how fast and correctly they type. It was heavily inspired in the [10fastfingers](https://10fastfingers.com/typing-test/english) webpage.
<div align="center">
  <img src="https://user-images.githubusercontent.com/68255804/143776073-433f6caa-13e1-4769-b8e4-d1c3de4a3866.png" width="600px" />
</div>

## The Technologies

For this project, I wanted to feel how is it to develop in VueJs but also check if there was a way to apply my personal and "React Like" style of development into this framework.
The main points of interest were:
- [Global State with Vuex](https://vuex.vuejs.org/);
- [Agnostic from technology state management with mobx](https://github.com/mobxjs/mobx-vue);
- Reusable components controlled by agnostic state management;
- Internal component functionalities: watch, mounted, data, methods, computed...;
- Routing;
- [Declarative UI with Chakra-ui Vue](https://vue.chakra-ui.com/);

#### Vuex
Nothing much to say about Vuex, it's nice, easy to understand and manages well the global states. For next time, I want to learn more about its modules functionality.

#### Reusable Components with Agnostic State management
For this, I wanted to test how is it to create a component similar to my [Setp Wizard React Hook](https://github.com/irwinarruda/step-wizard-react-hook) but now using an agnostic state management lib **Mobx**. I was able to achieve that goal and simulate the React Context Api with the `provide` option in a Vue Component. This makes me think that maybe all the library components I create from now on should be using this state management pattern so that I can create one controller for multiple components with different frameworks.

#### Vue Components
I think .vue files are really good, but I wanted more typescript integration. Maybe I'm doing something wrong, but `ctrl+space` does not show my custom component props like React does...

#### Chakra UI Vue
I really like chakra-ui and cannot develop with .css files anymore. I think there is a lot to improve in this VueJs version, but one thing I wanted to highlight is that component attributes does not have tokens autocomplete, and this is a really big deal for a declarative UI framework because having to check UI tokens every time is really time consuming.

## Conclusion
I think VueJs is a really good framework and offers more and easier functionalities out of the box than React. My biggest complaint are the not so good typescript and autocomplete integrations width the componnents... This might by my fault, so next time I'm going to do exstra research about those problems. Keep in mind, this is a Vue 2 project, só I didn't learn about the Composition API and all the new features.
