import { FC } from "react";
import { AnimalType } from "../../types/animal/AnimalType";

type Props = {
  animals: AnimalType[];
};
export const AnimalList: FC<Props> = (props) => {
  const { animals } = props;
  return (
    <>
      <h1>動物一覧</h1>
      {animals.map((animal) => {
        return <div key={animal.id}>{animal.name}</div>;
      })}
      <ul role="tablist">
        <li role="application" aria-controls="panel01" aria-selected="false">
          <button type="button">タブ1のボタン</button>
          <button type="button">タブ1のボタン</button>
          <button type="button">タブ1のボタン</button>
        </li>
      </ul>
    </>
  );
};
