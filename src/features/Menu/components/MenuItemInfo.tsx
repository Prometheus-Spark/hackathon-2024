import style from "../menu.module.scss";
function MenuItemInfo({ name, price }: { name: string; price: string }) {
  return (
    <div className={style["item-container"]}>
      <h4 className={style["title"]}>{name}</h4>
      <div>
        <span className={style["price"]}>{price}</span>
      </div>
    </div>
  );
}

export default MenuItemInfo;
