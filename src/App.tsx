import { Outlet, Link } from 'react-router-dom';
import classes from './App.module.scss';
import goldenStarIconPng from 'Icons/golden-star.png';
import posterImgJpg from 'Icons/poster.jpg';
import Icon from 'Icons/cv-icon.svg';
import csvData from './assets/data/csv-data.csv';
import xmlData from './assets/data/xml-data.xml';

const getError = (): null => {
  // throw new Error();
  return null;
};

export const App: React.FC = (): JSX.Element => {
  console.log('CSV Data: ', csvData);
  console.log('XML Data: ', xmlData);

  const func = (a: number) => (
    <div>
      {a}
      {getError()}
    </div>
  );

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="inside">Inside Page</Link>
          </li>
          <li>
            <Link to="outside">Outside Page</Link>
          </li>
          <li>
            <Link to="lazy">Lazy Component</Link>
          </li>
          <li>
            <Link to="contacts/1">Contact 1</Link>
          </li>
          <li>
            <Link to="contacts/2">Contact 2</Link>
          </li>
        </ul>
      </nav>
      <h1 className={classes.title}>Project Template 111</h1>
      <p className={classes.description}>Project Template</p>
      {func(223)}
      <h2>Icons:</h2>
      <div>
        <div>{goldenStarIconPng}</div>
        <img src={goldenStarIconPng} alt="" />
      </div>
      <div>
        <div>{posterImgJpg}</div>
        <img src={posterImgJpg} height="150" width="100" alt="" />
      </div>
      <div className={classes.icon}>
        <Icon width="50" height="50" />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
