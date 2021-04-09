import React from "react";
import _ from "lodash";
import Image from "next/image";

import { Link, withPrefix } from "../utils";
import Icon from "./Icon";
import HeaderMenu from "./HeaderMenu";

export default class Header extends React.Component {
  render() {
    return (
      <header className="py-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-7">
          <nav
            className="navbar flex items-center"
            aria-label="Main Navigation"
          >
            <Link className="sr-only" href="#content">
              Skip to main content
            </Link>

            {/* Logo */}
            <div className="mr-4">
              {_.get(this.props, "data.config.header.logo", null) ? (
                <Link className="" href={withPrefix("/")}>
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
                <Link className="text-5xl" href={withPrefix("/")}>
                  {_.get(this.props, "data.config.header.title", null)}
                </Link>
              )}
            </div>

            {/* Navigation */}
            {(_.get(this.props, "data.config.header.has_primary_nav", null) ||
              _.get(
                this.props,
                "data.config.header.has_secondary_nav",
                null
              )) && (
              <React.Fragment>
                <div className="bg-white absolute lg:relative inset-0 z-20 p-8 lg:block lg:flex-auto">
                  <div className="navbar__scroller">
                    <div className="navbar__inner">
                      {/* Navigation close button */}
                      <div className="lg:hidden flex justify-end">
                        <button
                          aria-label="Close"
                          className="w-10 h-10 p-2 text-gray-500 fill-current"
                        >
                          <Icon {...this.props} icon={"close"} />
                          <span className="sr-only">Close</span>
                        </button>
                      </div>

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
                              className="ml-auto"
                            />
                          )}
                      </div>
                    </div>
                  </div>
                </div>
                <button aria-label="Menu" className="btn ml-auto lg:hidden">
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
