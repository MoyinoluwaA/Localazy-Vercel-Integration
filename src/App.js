import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n])
  
  let idioms = t('idioms', { returnObjects: true, lng: language });

  const getLanguage = (lang) => {
    let fullLanguage;

    switch (lang) {
      case "cs":
        fullLanguage = "Czech";
        break;
      case "fi":
        fullLanguage = "Finnish";
        break;
      case "es":
        fullLanguage = "Spanish";
        break;
      default:
        fullLanguage = "English";
    }

    return fullLanguage;
  }

  return (
    <div className="App">
      <h1>{t('heading', { lang: getLanguage(language)})}</h1>
      <div>
        {t('translate_to')}
        <select onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="en">English</option>
          <option value="cs">Czech</option>
          <option value="fi">Finnish</option>
          <option value="es">Spanish</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>{t('english')}</th>
            <th>{getLanguage(language)}</th>
          </tr>
        </thead>
        <tbody>
          {
            t('idioms', { returnObjects: true, lng: "en" }).map((idiom, index) => 
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{idiom}</td>
                <td>{idioms[index]}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
