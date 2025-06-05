import "./styles/theme.css";
import "./styles/global.css";
import { MyText list } from "./components/MyTextList.jss";



export default function App() {
  return (
    <>
    <h1 classname={styles.title}>Lista de textos<h1/>
    <div classname=
    
    
  ];



{texts.map((text, index) => {
        return (
          <MyText key={index} title={`${text.title} ${index + 1}`}>
            {text.text}
          </MyText>
            );
      })}
    </>
  );
}