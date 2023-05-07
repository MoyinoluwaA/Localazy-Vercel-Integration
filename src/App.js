import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t } = useTranslation();

  let idioms = t('idioms', { returnObjects: true });

  return (
    <div className="App">
      <h1>{t('heading')}</h1>
      <div>
        {t('translate_to')}
        <select>
          <option>English</option>
          <option>Czech</option>
          <option>Finnish</option>
          <option>Spanish</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>{t('english')}</th>
            <th></th>
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
