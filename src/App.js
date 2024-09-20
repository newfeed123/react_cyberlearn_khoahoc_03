// import logo from './logo.svg';
import './App.css';
import BaiTapBurger from './BaiTapBurger/BaiTapBurger';
import ContextProvider from './Hooks/Context/ContextProvider';
// import DemoReduxApp from './Hooks/DemoReduxApp';
// import DemoUseContext from './Hooks/DemoUseContext';
// import DemoUseReducer from './Hooks/DemoUseReducer';
// import DemoUseRef from './Hooks/DemoUseRef';
// import DemoHookUseMemo from './Hooks/DemoHookUseMemo';
// import DemoHookUseCallBack from './Hooks/DemoHookUseCallBack';
// import DemoHookUseState from './Hooks/DemoHookUseState';
// import { DemoUseEffect } from './Hooks/DemoUseEffect';
// import ToDoList from './JSS_StyledComponent/BaiTapStyleComponent/ToDoList/ToDoList';
// import LifeCycleReact from './LifeCycleReact/LifeCycleReact';
// import { DemoTheme } from './JSS_StyledComponent/Themes/DemoTheme';
// import DemoJSS from './JSS_StyledComponent/DemoJSS/DemoJSS';
// import UserProfile from './FormValidation/UserProfile/UserProfile';

function App() {
  return (
    <ContextProvider>
      {/* <UserProfile></UserProfile> */}
      {/* <DemoJSS></DemoJSS> */}
      {/* <DemoTheme></DemoTheme> */}
      {/* <ToDoList></ToDoList> */}
      {/* <LifeCycleReact></LifeCycleReact> */}
      {/* <DemoHookUseCallBack></DemoHookUseCallBack> */}
      {/* <DemoHookUseState></DemoHookUseState> */}
      {/* <DemoUseEffect></DemoUseEffect> */}
      {/* <DemoHookUseMemo></DemoHookUseMemo> */}
      {/* <DemoUseRef></DemoUseRef> */}
      {/* <DemoUseReducer></DemoUseReducer> */}
      {/* <DemoUseContext></DemoUseContext> */}
      {/* <DemoReduxApp></DemoReduxApp> */}
      <BaiTapBurger></BaiTapBurger>
    </ContextProvider>
  );
}

export default App;
