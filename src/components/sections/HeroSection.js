import React from "react";
import _ from "lodash";
import Image from "next/image";

import {
  classNames,
  toStyleObj,
  withPrefix,
  htmlToReact,
  markdownify,
} from "../../utils";
import SectionActions from "../SectionActions";

export default class HeroSection extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    let align_x = _.get(section, "align", null) || "center";
    let bg_color = _.get(section, "background_color", null) || "none";
    let bg_has_gradient = _.get(section, "background_gradient", false);
    const bg_img_translucent = _.get(
      section,
      "background_image_translucent",
      false
    );
    let has_text = false;
    let has_media = false;
    let media_width = _.get(section, "media_width", null) || "fifty";
    let media_pos = _.get(section, "media_position", null) || "top";
    let is_horiz = false;
    let is_vert = false;
    if (
      _.get(section, "title", null) ||
      _.get(section, "subtitle", null) ||
      _.get(section, "content", null) ||
      _.get(section, "actions", null)
    ) {
      has_text = true;
    }
    if (_.get(section, "image", null)) {
      has_media = true;
    }
    if (has_media === false || has_text === false) {
      media_pos = "top";
    }
    if (media_pos === "left" || media_pos === "right") {
      is_horiz = true;
    }
    if (media_pos === "top" || media_pos === "bottom") {
      is_vert = true;
    }
    return (
      <React.Fragment>
        <section
          className={classNames("section", "hero", "py-24", {
            relative: _.get(section, "background_image", null),
            "bg-primary-600": bg_color === "primary",
            "text-primary-50": bg_color === "primary",
            "bg-gray-100": bg_color === "secondary",
            "has-gradient": bg_has_gradient,
          })}
        >
          {_.get(section, "background_image", null) && (
            <Image
              src={withPrefix(_.get(section, "background_image", null))}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className={classNames({
                "opacity-10": bg_img_translucent,
              })}
            />
          )}
          <div className="z-10 relative max-w-3xl mx-auto">
            <div className="hero__content grid items-center">
              {has_text && (
                <div
                  className={classNames("my-2", {
                    "text-center": align_x === "center",
                    "text-right": align_x === "right",
                  })}
                >
                  {_.get(section, "title", null) && (
                    <h1 className="text-5xl font-bold mb-7">
                      {_.get(section, "title", null)}
                    </h1>
                  )}
                  {_.get(section, "subtitle", null) && (
                    <p className="mb-5 text-3xl">
                      {_.get(section, "subtitle", null)}
                    </p>
                  )}
                  {_.get(section, "content", null) && (
                    <div className="mb-5 text-xl">
                      {markdownify(_.get(section, "content", null))}
                    </div>
                  )}
                  {_.get(section, "actions", null) && (
                    <div
                      className={classNames(
                        "mt-12 space-x-5 flex flex-wrap items-center",
                        {
                          "justify-center": align_x === "center",
                          "justify-end": align_x === "right",
                        }
                      )}
                    >
                      <SectionActions
                        inverted
                        {...this.props}
                        actions={_.get(section, "actions", null)}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
