import React from "react";
import _ from "lodash";

import { classNames } from "../utils";
import Action from "./Action";

export default class HeaderMenu extends React.Component {
  render() {
    let page = _.get(this.props, "page", null);
    let menu = _.get(this.props, "header_menu", null);
    return (
      <ul
        className={classNames(
          "m-0",
          "p-0",
          "md:items-center",
          "md:flex",
          this.props?.className
        )}
      >
        {_.map(menu, (item, item_idx) => {
          let page_url = _.trim(_.get(page, "__metadata.urlPath", null), "/");
          let item_url = _.trim(_.get(item, "url", null), "/");
          let item_style = _.get(item, "style", null) || "link";
          return (
            <li
              key={item_idx}
              className={classNames("menu__item", "md:ml-5", {
                "is-active": page_url === item_url && item_style === "link",
                "menu__item-btn": item_style !== "link",
              })}
            >
              <Action {...this.props} action={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}
