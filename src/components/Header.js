import React from "react";
import _ from "lodash";
import Image from "next/image";

import { Link, withPrefix } from "../utils";
import Icon from "./Icon";
import HeaderMenu from "./HeaderMenu";

export default class Header extends React.Component {
  render() {
    return (
      <header className="site-header py-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-7">
          <nav
            className="navbar flex items-center"
            aria-label="Main Navigation"
          >
            <Link className="sr-only" href="#content">
              Skip to main content
            </Link>
            <div className="navbar__branding mr-4">
              {_.get(this.props, "data.config.header.logo", null) ? (
                <Link className="navbar__logo m-0" href={withPrefix("/")}>
                  <Image
                    src={withPrefix(
                      _.get(this.props, "data.config.header.logo", null)
                    )}
                    alt={_.get(this.props, "data.config.header.logo_alt", null)}
                    width="152"
                    height="40"
                  />
                </Link>
              ) : (
                <Link className="navbar__title h4 m-0" href={withPrefix("/")}>
                  {_.get(this.props, "data.config.header.title", null)}
                </Link>
              )}
            </div>
            {(_.get(this.props, "data.config.header.has_primary_nav", null) ||
              _.get(
                this.props,
                "data.config.header.has_secondary_nav",
                null
              )) && (
              <React.Fragment>
                <div className="navbar__container md:flex-auto">
                  <div className="navbar__scroller">
                    <div className="navbar__inner">
                      <button
                        aria-label="Close"
                        className="btn btn--icon btn--clear navbar__close-btn js-nav-toggle w-8 h-8 md:hidden"
                      >
                        <Icon {...this.props} icon={"close"} />
                        <span className="sr-only">Close</span>
                      </button>
                      <div className="md:flex">
                        {_.get(
                          this.props,
                          "data.config.header.has_primary_nav",
                          null
                        ) &&
                          _.get(
                            this.props,
                            "data.config.header.primary_nav_links",
                            null
                          ) && (
                            <HeaderMenu
                              {...this.props}
                              header_menu={_.get(
                                this.props,
                                "data.config.header.primary_nav_links",
                                null
                              )}
                              page={this.props.page}
                            />
                          )}
                        {_.get(
                          this.props,
                          "data.config.header.has_secondary_nav",
                          null
                        ) &&
                          _.get(
                            this.props,
                            "data.config.header.secondary_nav_links",
                            null
                          ) && (
                            <HeaderMenu
                              {...this.props}
                              header_menu={_.get(
                                this.props,
                                "data.config.header.secondary_nav_links",
                                null
                              )}
                              page={this.props.page}
                            />
                          )}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  aria-label="Menu"
                  className="btn btn--icon btn--clear navbar__menu-btn js-nav-toggle ml-auto"
                >
                  <Icon {...this.props} icon={"menu"} />
                  <span className="sr-only">Menu</span>
                </button>
              </React.Fragment>
            )}
          </nav>
        </div>
      </header>
    );
  }
}
