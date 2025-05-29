import "./styles/theme.css";
import "./styles/global.css";
import { MyText list } from "./components/MyTextList.jss";



export default function App() {
  return (
    // React Fragment 
    <>
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